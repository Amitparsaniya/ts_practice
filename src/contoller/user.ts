import express,{Request,Response} from "express"
import { user } from "../interface/user";
import User from "../model/user";

const createUser = async (req:Request,res:Response)=>{
    try {        
        const userData:user|any =req.body
        const userDetail  = await User.create(userData)
        console.log(userData,userDetail);
        
        res.status(201).json({
                message:"user created successfully",
                data:userDetail
            })
    } catch (error) {
        console.log(error);
    }
}

const  getUser =async (req:Request,res:Response)=>{
    try {
        const userId = req.body.user_id

        const userDetail:any =await User.findOne({_id:userId})

        const userData:user ={
            name: userDetail.name,
            email: userDetail.email,
            phone_number :userDetail.phone_number
        }
        res.status(200).json({message:"user fetch successfully",data:userData})
    } catch (error) {
        console.log(error);
    }
}

const updateUser  =async (req:Request,res:Response)=>{
    try {
        const userId = req.params.userId
        const data =  req.body
        
        const userDetail = await User.findById(userId)
         
       await userDetail?.updateOne({
            name: data?.name ,
            email:data?.email,
            phone_number:data.phone_number
        })

        res.status(200).json({message:"user updated successfully"})

    } catch (error) {
        console.log(error);
    }
}

const getAllUser = async (req:Request,res:Response)=>{
    try {
        const userData: any[] = await User.find()
        const userCount:number =await User.countDocuments({})
        const userArr:any[]=[]
        userData.forEach((val)=>{
            userArr.push({
                name:val?.name||'',
                email:val?.email||'',
                phone_number:val?.phone_number||''
            })
        })
        res.status(200).json({message:"user fetched successfully",count:userCount,data:userArr})
    } catch (error) {
        console.log(error);
    }
}

const userController ={
    createUser,
    getUser,
     updateUser,
    getAllUser
}


export default userController

