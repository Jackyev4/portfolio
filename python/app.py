from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contacts.db'
db = SQLAlchemy(app)


app.config['MAIL_SERVER'] = 'smtp.example.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'jackye.veaud@outlook.fr'
app.config['MAIL_PASSWORD'] = 'your-email-password'
mail = Mail(app)

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    message = db.Column(db.Text, nullable=False)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        contact = Contact(name=name, email=email, message=message)
        db.session.add(contact)
        db.session.commit()

        msg = Message('Nouveau message de contact',
                      sender='jackye.veaud@outlook.fr',
                      recipients=['jackye.veaud@outlook.fr'])

        msg.body = "Nom : {}\nEmail : {}\nMessage : {}".format(name, email, message)
        mail.send(msg)
        return 'Message envoyé !'
        return render_template('contact.html')

if __name__ == '__main__':
    app.run()