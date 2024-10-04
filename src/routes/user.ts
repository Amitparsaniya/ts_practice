import {Router,Request,Response} from "express"
import userController from "../contoller/user"


const router:Router = Router()

router.post("/user",userController.createUser)

router.get("/userDetail",userController.getUser)

router.patch("/update/:userId",userController.updateUser)

router.get("/getAllUser",userController.getAllUser)

 export default router