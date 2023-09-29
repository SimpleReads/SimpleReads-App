# Flask Hello World API route on port
from flask import Flask, request, jsonify

app = Flask(__name__)

#test route to send text modify and return to websoet
@app.route('/simplifyText', methods = ['POST'])
def simplify():

    #these input variables are specific and need to be matched with the uses of this function to make sure it doesnt
    #error - I will add a catch error for this when finishing it off once ur done with model shit 
    text1 = request.form['text1']
    textEtc = request.form['textEtc']
    
    #Do model shit (for example) --------
    msg = f"Text 1 was \"{text1}\" and the other box was \"{textEtc}\'"
    #------------------------------
    
    response = jsonify({'message': msg})
    
    #Headers to give CORS clearance 
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST')
    return response

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
