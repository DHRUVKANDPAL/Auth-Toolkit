import {v2 as cloudinary} from 'cloudinary';
import { response } from 'express';
import fs from "fs"
cloudinary.config({ 
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME , 
   api_key: process.env.CLOUDINARY_API_KEY , 
   api_secret: process.env.CLOUDINARY_API_SECRET  
});
const uploadOnCloudinary=async (localpath)=>{
   try {
      if(!localpath) return null;
      const resource=await cloudinary.uploader.upload(localpath,{
         resource_type:'auto'
      })
      console.log(`File uploaded successfully `,resource.url)
      return response
   } catch (error) {
      fs.unlinkSync(localpath)
   }
}
export {uploadOnCloudinary}