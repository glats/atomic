from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello Im python and im Running on port 9005"


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=9005)