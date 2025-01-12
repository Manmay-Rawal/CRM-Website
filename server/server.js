import express  from "express";
import morgan from "morgan";
import cros from "cors";
import dbConnect from "./db/dbConfig.js";
import userRouter from "./routes/userRouter.js";
import { userLogin, userSignup } from "./controllers/userController.js";


const app=express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev")) //morgen(http logger)
app.use(cros({origin:"http://localhost:5173"}))//cross server access

//demoAPI
app.get("/",(req,res)=>res.send({message:"Server is start"}))


// routes
app.use("/user",userRouter)


// Signup API
userRouter.post("/signup",userSignup)


// Login API
userRouter.post("/login",userLogin)


//listen
const PORT=process.env.PORT
const hostname=process.env.HOST_ADD


app.listen(PORT,hostname,()=>{
    console.log(`server is running in http://${hostname}:${PORT}`);
    dbConnect()
})