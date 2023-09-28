# Flask Hello World API route on port
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/hello_world')
def hello_world():
    message = "HELLO"
    response = jsonify({'message': message})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/test')
def test():
    message = "TEST"
    response = jsonify({'message': message})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
