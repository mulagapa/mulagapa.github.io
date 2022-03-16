
from unicodedata import name
import pandas as pd
import joblib
from flask import Flask,render_template,request

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('homepage.html',name=name)


@app.route("/",methods=['POST'])
def my_form_post():
    with open('/Users/manidharmulagapaka/Desktop/flask_project/myproject/regr.pkl','rb') as f:
        clf = joblib.load(f)
    age = request.form.get("age")
    weight = request.form.get("weight")
    x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
    prediction = clf.predict(x)[0]
    return render_template("homepage.html",result=prediction)