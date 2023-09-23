# Flask Hello World API route on port

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

@app.route('/hello_world')
def hello_world():
    return 'Hello, World!'

@app.route('/test', methods = ['GET', 'POST'])
def test():
    if request.method == 'GET':
        message = {"Boobs and boobs and boobs"}
        return jsonify(message)
    
    if request.method == 'POST':
        print(request.get_json())
        return 'Success', 200

    else:
        return "poop"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
