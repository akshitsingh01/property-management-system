import express from 'express' ;
import { userLoginHandler , registerUserHandler , uploadProfilePhoto, updatePassword, getUser, modifyProfile  , getUserDetails} from '../controllers/user.controller.js';
import { upload } from '../middleware/multer.middleware.js';
import {auth} from '../middleware/auth.middleware.js'; 
const userRouter = express.Router() ; 



userRouter.route('/register').post(registerUserHandler) ;
userRouter.route('/login').post(userLoginHandler) ;
userRouter.route('/upload/avatar' ).put(auth , upload.single("avatar") , uploadProfilePhoto) ;
userRouter.route('/update/password').put(auth , updatePassword); 
userRouter.route('/get/user').get(auth , getUser) ;
userRouter.route('/modify/profile' ).put(auth  , modifyProfile) ;
userRouter.route('/:id').get(getUserDetails)  ; 





export {userRouter } ; 