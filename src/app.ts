import express ,{Request,Response} from "express"
import "./db/index"
import userRoutes from "./routes/user"
const app =express()
app.use(express.json())

const port:number=4000

app.use("/api",userRoutes)
app.get("/",(req:Request,res:Response)=>{
    res.json({message:"welcome to port 4000....."})
})

app.listen(port,()=>{
    console.log('server is up on the port 4000');
})