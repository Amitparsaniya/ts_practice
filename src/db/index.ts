import mongoose  from "mongoose";


console.time("start")
mongoose.connect('mongodb+srv://root:amitp1234@cluster0.rjtyl8j.mongodb.net/ts_practice').then(()=>{
    console.log('db is connected successfully');
}).catch((error)=>{
    console.log(error);
})
console.timeEnd("start")