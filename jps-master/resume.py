from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("OnePage/index.html")

@app.route("/j", methods = ["POST"])
def index1():
    return render_template("resume.html")

@app.route("/ml", methods = ["POST"])
def ml():
    message = ""
    msg0 = request.form.get("name0")
    msg1 = request.form.get("name1")
    msg2 = request.form.get("name2")
    msg3 = request.form.get("name3")
    msg4 = request.form.get("name4")
    msg5 = request.form.get("name5")
    msg6 = request.form.get("name6")
    msg7 = request.form.get("name7")
    msg8 = request.form.get("name8")
    msg9 = request.form.get("name9")
    msg10 = request.form.get("name10")
    msg11 = request.form.get("name11")
    msg12 = request.form.get("name12")
    msg13 = request.form.get("name13")
    msg14 = request.form.get("name14")
    msg15 = request.form.get("name15")
    msg16 = request.form.get("name16")
    msg17 = request.form.get("name17")
    msg18 = request.form.get("name18")
    msg19 = request.form.get("name19")
    return render_template("startbootstrap-resume-gh-pages/index.html", msg0 = msg0, msg1 = msg1, msg2 = msg2, msg3 = msg3, msg4 = msg4, msg5 = msg5, msg6 = msg6, msg7 = msg7, msg8 = msg8, msg9 = msg9, msg10 = msg10, msg11 = msg11, msg12 = msg12, msg13 = msg13, msg14 = msg14, msg15 = msg15, msg16 = msg16, msg17 = msg17, msg18 = msg18, msg19 = msg19)



if __name__ == "__main__":
    app.run(port=5000, debug=True)