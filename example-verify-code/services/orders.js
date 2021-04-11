const Order = require("../models");
const {v4} = require("uuid");

const getAll = (query)=>{
    return Order.find(query)
}

const addOne = (body) => {
    const newOrder = {
        ...body,
        code: v4()
    }
    return Order.create(newOrder)
}

const verifyOrderCode = async (code)=> {
    try {
        const result = await Order.findOne({code});
        if(!result) {
            return result;
        }
        return Order.findByIdAndUpdate(result._id, {...result, verify: true, code: null});
    }
    catch (error){
        return error;
    }
    
}

module.exports = {
    getAll,
    addOne,
    verifyOrderCode
}