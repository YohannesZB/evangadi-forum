const express = require('express');
const router = express.Router() 


// authonthication middleware
     const authMiddleware = require('../middleware/authMiddleware')

     //  user controller

     const {register,login,checkUser} = require('../controller/userController')


        // register route

    router.post('/register',register)
  
    // login  route

    router.post('/login',login);
          
         // check route
    router.get('/check',authMiddleware, checkUser); 


    module.exports = router;

    

    






