import mongoose from "mongoose";

const connectDB = async() => {

    mongoose.connection.on('Connected',() => {
        console.log("connection established");
    })

    await mongoose.connect(`${process.env.MONGODB_URL}/spotify`);

}

export default connectDB; 