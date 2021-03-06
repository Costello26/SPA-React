const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password} = require('./config');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
});

transporter.use('compile', htmlToText());

const sendOrderEmail = data => {
    console.log(data);
    const options = {
        from: `Station21 <${email}>`,
        to: data.email,
        subject: `Заказ с сайта`,
        html: `
            <div>
                <h2>Спасибо за заказ, ${data.clientName}</h2>
                <h3>Ваш заказ:</h3>
                <ul>
                    ${data.order.map(({ name, count, price }) => (
                        `<li>
                             ${name} - ${count}.шт <br/>
                            Цена: ${price * count} руб.                        
                        </li>`)
                    )}
                </ul>
                <p> Итого: ${data.order.reduce((sum, item) => sum + (item.price * item.count), 0)} руб.</p>
                <p>Спасибо за заказ, Ваш курьер уже в пути!</p>
            </div>
        `,
    };
    transporter.sendMail(options);
}

exports.sendUserEmail = functions.database.ref('orders/{pushId}')
    .onCreate(order => sendOrderEmail(order.val()));

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
