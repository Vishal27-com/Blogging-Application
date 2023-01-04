require("dotenv").config();
const mongoose=require("mongoose");
const connection=async ()=>{
try {
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
    await mongoose.connect("mongodb+srv://Vishal:0@cluster0.y08avne.mongodb.net/spreadknowledge",connectionParams)
    console.log("Connected to Database")
} catch (error) {
    console.log(error.message);
    console.log("Database not connected");
}
}
module.exports=connection;