import mongoose from "mongoose";

 export const connection = async() => {
    await mongoose.connect('mongodb+srv://g22aniketsodmise:niket1234@cluster0.epzvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&tls=true',{
      dbName: "MERN_AUCTION_PLATFORM"
    }).then(()=>console.log("DB Connected"));
 }
 
