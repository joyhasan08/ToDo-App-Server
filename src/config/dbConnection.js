const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        // console.log(process.env.DB_URI);
        console.log('DB connected');
        await mongoose.connect(process.env.DB_URI, {
            maxPoolSize: 10
        });
    } catch (error) {
        console.log("Error connecting to Database");
    }
};
module.exports = connectDB;