const nodemailer = require('nodemailer');
const juice = require('juice');
const htmlToText = require('html-to-text');

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

const makeANiceEmail = imageSrc => `
  <div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
  ">
    <h2>Hello There!</h2>
     <img src=${imageSrc} width="250" height="250" alt="Image sent by the user" />

  </div>
`;

exports.send = async req => {
    const imageSrc = req.body.file;
    const html = makeANiceEmail(imageSrc);
    const text = htmlToText.fromString(html);
    const mailOptions = {
        from: 'David <noreply@david.com>',
        to: 'david.ramis89@gmail.com',
        subject: 'daniela.ramis89@gmail.com',
        html,
        text,
    };
    transport
        .sendMail(mailOptions)
        .then(data => console.log('data', { data }))
        .catch(error => console.error('error', { error }));
};
