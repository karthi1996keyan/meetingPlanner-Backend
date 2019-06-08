const express=require('express');
const appConfig=require('../../config/appConfig');
const userController=require('../controllers/userController');
let setRoute=(app)=>
{
    let apiUrl=`${appConfig.apiVersion}/users`;

    app.post(`${apiUrl}/signup`,userController.signUpFunction);

    app.post(`${apiUrl}/login`,userController.loginFunction);

    app.get(`${apiUrl}/view/details/:userId`,userController.getSingleUserDetails);

    app.post(`${apiUrl}/delete/:userId`,userController.deleteUser);

    app.put(`${apiUrl}/edit/:userId`,userController.editUser);

    app.put(`${apiUrl}/verifyEmail`,userController.verifyEmailFunction);
    
    app.get(`${apiUrl}/view/all`,userController.getAllUserDetails);

    app.post(`${apiUrl}/forgot-password`,userController.forgotPasswordFunction);
}

module.exports=
{
    setRoute:setRoute
}