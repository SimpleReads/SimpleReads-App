# Flask Hello World API route on port
from flask import Flask, request, jsonify
from pdfminer.high_level import extract_text, extract_text_to_fp
from pdfminer.layout import LAParams
from io import BytesIO, StringIO

app = Flask(__name__)


@app.route("/hello_world")
def hello_world():
    message = "HELLO"
    response = jsonify({"message": message})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route("/test")
def test():
    message = "TEST"
    response = jsonify({"message": message})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


# test route to send text modify and return to websoet
@app.route("/simplifyText", methods=["POST"])
def simplify():
    # these input variables are specific and need to be matched with the uses of this function to make sure it doesnt
    # error - I will add a catch error for this when finishing it off once ur done with model shit
    text1 = request.form["text1"]
    textEtc = request.form["textEtc"]

    # Do model shit (for example) --------
    msg = f'Text 1 was "{text1}" and the other box was "{textEtc}\''
    # ------------------------------

    response = jsonify({"message": msg})

    # Headers to give CORS clearance
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Methods", "GET, POST")
    return response

@app.route("/parsePDF", methods=["POST"])
def parsePDF():

    file = request.files["File"].stream.read()
    b = BytesIO(file)
    output_string = StringIO("A")
    extract_text_to_fp(b, output_string, laparams=LAParams(), output_type='text', codec=None)
    output_string.seek(0)
    response = jsonify({"message": output_string.read()})

    # Headers to give CORS clearance
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Methods", "GET, POST")
    return response


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
