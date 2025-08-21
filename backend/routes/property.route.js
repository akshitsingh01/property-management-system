import express from 'express' ;
import { registerProperty , uploadPhotos , getAllProperty , getSingleProperty , myProperties } from '../controllers/property.controller.js';
import { auth } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/multer.middleware.js';
const propertyRouter = express.Router() ;
propertyRouter.route('/create').post(registerProperty);
propertyRouter.route('/upload/photos/:id').put( upload.array('images', 10)  , uploadPhotos) ;
propertyRouter.route('/').get(getAllProperty) ;
propertyRouter.route('/:id').get(getSingleProperty); 
propertyRouter.route('/my/properties').get(auth , myProperties) ; 


export {propertyRouter}; 
