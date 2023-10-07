from flask import Flask, request, jsonify
import sagemaker
from sagemaker.huggingface import get_huggingface_llm_image_uri, HuggingFaceModel
import json
import boto3
import os
from dotenv import load_dotenv

app = Flask(__name__)

# Global variable to store the deployed model reference
llm = None

def load_env_variables():
    load_dotenv()
    return {
        'aws_default_region': os.getenv("AWS_DEFAULT_REGION"),
        'aws_access_key_id': os.getenv('AWS_ACCESS_KEY_ID'),
        'aws_secret_access_key': os.getenv('AWS_SECRET_ACCESS_KEY'),
        'sagemaker_role_arn': os.getenv("SAGEMAKER_ROLE_ARN")
    }

def create_boto_session(env_vars):
    return boto3.Session(
        aws_access_key_id=env_vars['aws_access_key_id'],
        aws_secret_access_key=env_vars['aws_secret_access_key'],
        region_name=env_vars['aws_default_region']
    )

def get_sagemaker_role_arn(env_vars):
    try:
        return env_vars['sagemaker_role_arn']
    except ValueError:
        iam = boto3.client('iam')
        return iam.get_role(RoleName='sagemaker_execution_role')['Role']['Arn']

def get_sagemaker_session(boto_session):
    sess = sagemaker.Session(boto_session=boto_session)
    sagemaker_session_bucket = sess.default_bucket()
    return sagemaker.Session(default_bucket=sagemaker_session_bucket)

def deploy_model(sess, role):
    # Configuration
    llm_image = get_huggingface_llm_image_uri("huggingface", version="0.9.3")
    s3_model_uri = 's3://sagemaker-us-west-2-960115796077/huggingface-qlora-2023-09-02-23-54-15-2023-09-02-13-54-15-386/output/model.tar.gz'
    instance_type = "ml.g5.12xlarge"
    number_of_gpu = 4
    health_check_timeout = 300
    config = {
        'HF_MODEL_ID': "/opt/ml/model",
        'SM_NUM_GPUS': json.dumps(number_of_gpu),
        'MAX_INPUT_LENGTH': json.dumps(1024),
        'MAX_TOTAL_TOKENS': json.dumps(2048),
    }
    llm_model = HuggingFaceModel(
        role=role,
        image_uri=llm_image,
        model_data=s3_model_uri,
        env=config
    )
    return llm_model.deploy(
        initial_instance_count=1,
        instance_type=instance_type,
        container_startup_health_check_timeout=health_check_timeout,
    )


def construct_simplification_instruction(text):
    """
    Constructs a simplification instruction based on the provided text.
    """
    return f"Please syntactically simplify this sentence: {text}"

def get_simplified_text(text, model):
    """
    Sends a simplification request to the model and returns the simplified text.
    """
    instruction = construct_simplification_instruction(text)
    payload = {
        "inputs": instruction,
        "parameters": {
            "do_sample": True,
            "top_p": 0.9,
            "temperature": 0.8,
            "max_new_tokens": 1024,
            "repetition_penalty": 1.03,
            "stop": []
        }
    }

    # send request to endpoint
    response = model.predict(payload)
    output = str(response[0])
    return output

# # example function that does not inference
# def get_simplified_text(text, model):
#     return text


@app.route("/start")
def start():
    global llm
    try:
        message = "START"
        env_vars = load_env_variables()
        boto_session = create_boto_session(env_vars)
        role = get_sagemaker_role_arn(env_vars)
        sess = get_sagemaker_session(boto_session)
        llm = deploy_model(sess, role)
        response = jsonify({"message": message})
    except Exception as e:
        response = jsonify({"message": f"Error: {str(e)}"})
        response.status_code = 500  # Indicates a server error

    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route("/stop")
def stop():
    global llm
    message = "STOP"
    if llm:
        llm.delete_model()
        llm.delete_endpoint()
        print("Model and endpoint deleted successfully")
    response = jsonify({"message": message})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route("/simplify_text", methods=["POST"])
def simplify():
    text1 = request.form["text1"]

    # Get the simplified text from the model
    simplified_text = get_simplified_text(text1, llm)

    response = jsonify({"message": simplified_text})
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Methods", "GET, POST")
    return response

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
