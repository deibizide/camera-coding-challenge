const nodemailer = require('nodemailer');
const juice = require('juice');
const htmlToText = require('html-to-text');
var postmark = require('postmark');

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

const makeANiceEmail = imageSrc => `
<div
    style="height: max-content;
    background-color: #45b5b9;
    font-family: Verdana, Geneva, Tahoma, sans-serif;"
>
    <img
        src="https://mieterengel.de/wp-content/themes/mieterengel-theme/nav-bar/images/me-club-logo.png"
        alt="MieterEngel logo"
        style="margin: 20px;"
        width="170"
    />
    <div style="display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                background-color: #ffffff;"
    >
        <div style="margin:10px 0px; text-align: center;">
            <h4>Image Recieved!</h4>
            <p>You have recieved an image from a user</p>
        </div>
        <img style="max-width=100%; margin:20px;"
            src=${imageSrc}
            alt="Image sent by the user"
        />
    </div>
</div>
`;

exports.send = async (req, res) => {
    const imageSrc = req.body.file;
    const html = makeANiceEmail(imageSrc);
    const text = htmlToText.fromString(html);
    const mailOptions = {
        from: 'David <noreply@david.com>',
        to: 'david.ramis89@gmail.com',
        subject: 'YOUGOT AN EMAILL',
        html,
        text,
    };

    transport
        .sendMail(mailOptions)
        .then(() => res.status(200).end())
        .catch(() => res.status(404).end());
};

// exports.send = async req => {
//     const imageSrc = req.body.file;
//     const html = makeANiceEmail(imageSrc);
//     const text = htmlToText.fromString(html);
//     const mailOptions = {
//         from: 'David <noreply@david.com>',
//         to: 'david.ramis89@gmail.com',
//         subject: 'YOUGOT AN EMAILL',
//         html,
//         text,
//     };

//     transport
//         .sendMail(mailOptions)
//         .then(() => res.status(200).end())
//         .catch(() => res.status(404).end());
// };
