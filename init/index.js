const mongoose = require('mongoose');

const URL=process.env.MONGODB_URL;

module.exports.initDB = async function () {
    await mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};