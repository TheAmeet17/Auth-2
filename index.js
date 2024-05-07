const express=require ('express')
const mongoose=require('mongoose')
const userRouter=require ("./routes/userRouter")
const app=express();

app.use(express.json());
const port=3000;

mongoose.connect('mongodb://localhost:27017/nishant').then(()=>{
    console.log("DAtaBAse is Connected")

})
app.use("/users",userRouter);

//euta Schema hunxa aani euta moodel jsle collection garera insert garxa schema ma
//Schema normally tala garejstai banainxa rw model 2 ota params lerw banxa

const start=async ()=>{
    try {
        app.listen(3000,()=>{
            console.log(`Server is Running on Port:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start();

// const express = require('express');
// const mongoose = require('mongoose');
// const userRouter = require("./routes/userRouter");
// const app = express();

// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());

// // Database connection
// mongoose.connect('mongodb://localhost:27017/nishant', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// })
// .then(() => {
//     console.log("Database connected successfully");
// })
// .catch((error) => {
//     console.error("Database connection error:", error);
// });

// // Define user schema
// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
// });

// // Define user model
// const UserModel = mongoose.model("User", userSchema); 

// // Route to get all users
// app.get("/users", async (req, res) => {
//     try {
//         const users = await UserModel.find();
//         res.json(users);
//     } catch (error) {
//         console.error("Error while fetching users:", error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // Use userRouter
// app.use("/users", userRouter);

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


