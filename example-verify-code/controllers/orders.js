const mail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

const {SENDGRID_API_KEY} = process.env;

const mail.setApiKey(SENDGRID_API_KEY);

const {getAll, addOne, verifyOrderCode} = require("../services");

const getAllOrders = async (req, res, next) => {
    const {query} = req;
    try {
        const orders = await getAll(query);
        res.json({
            status: "success",
            code: 200,
            data: {
                result: orders
            }
        })
    }
    catch(error){
        next(error)
    }

}

const addOrder = async (req, res, next) => {
    const {body} = req;
    try {
        const result = await addOne(body);

        const verifyLetter = {
            to: body.email,
            from: "bogdan.lyamzin.d@gmail.com",
            subject: "New order from site",
            text: `У вас новый заказ с сайта. Для подтверждения введите код: ${result.code}`,
            html: `У вас новый заказ с сайта. Для подтверждения введите код: ${result.code}`
        };

        const info = mail.send(verifyLetter);

        res.json({
            status: "success",
            code: 200,
            message: info
        })
    }
    catch (error) {
        next(error)
    }

}

const verifyCode = async (req, res, next) => {
    const {code} = req.params;
    try {
        const result = await verifyOrderCode(code);
        if(!result) {
            return res.status(400).json({
                status: "error",
                code: 400,
                message: "Not such code"
            })
        }
    }
    catch (error){

    }
}

module.exports = {
    getAllOrders,
    addOrder
}