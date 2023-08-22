import mongoose from "mongoose";

const connect = async () => {
    await mongoose.connect('mongodb://127.0.0.1/blog_DB');
    console.log("Connection Successfull....");
} 

export default connect;