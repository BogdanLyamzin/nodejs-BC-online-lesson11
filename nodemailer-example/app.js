const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

// указываем параметры транспортера

const transporterConfig = {
    host: "mail.adm.tools",
    port: 25,
    secure: false,
    auth: {
        user: "info@sled-studio.com",
        pass: process.env.PASSWORD
    }
};

const transporter = nodemailer.createTransport(transporterConfig);

// устанавливаем параметры письма

const letterOptions = {
    from: "info@sled-studio.com",
    to: "garadaw542@whyflkj.com",
    subject: "Test email",
    text: "Тестовое письо"
};

transporter.sendMail(letterOptions)
    .then(mailInfo => console.log(mailInfo))
    .catch(error => console.log(error))
/*

SMTP, POP3, IMAP сервер:	mail.adm.tools
Порт SMTP сервера:	25 или 2525 или 465 (SMTP+SSL)

*/