const mail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

const {SENDGRID_API_KEY} = process.env;

mail.setApiKey(SENDGRID_API_KEY);

const letter = {
    to: "garadaw542@whyflkj.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Звездный флот нуждается в вас!",
    text: "Мы предлагаем вам возглавть экспедицию в сердце Клингтонской империи",
    html: `<strong>Уважаемый капитан!</strong>
            <p>Предложение об экспедиции</p>`
};

mail
    .send(letter)
    .then(()=> console.log("Email sent"))
    .catch(error => console.log(error))



