const express=require ('express')
const userRouter=express.Router();


userRouter.post("/Signup",(req,res)=>{
res.send("SignUpBahyo");
});
userRouter.post("LogIn",(req,res)=>{
res.send("LoginInBhayo");
});

module.export=userRouter;