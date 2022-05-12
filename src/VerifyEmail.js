import { Box, Divider, Link } from "@mui/material";
import React, { useState,useEffect, useContext} from "react";
import { Navigate,useNavigate, useLocation ,useSearchParams } from "react-router-dom";
import Header from "../components/header/header";
import LeftSection from "./dashboard/leftsection";
import RightSection from "./dashboard/rightsection";
import "../pages/verifyemail.css"
// import { verifyEmailAPI } from "../service/verifyemail.service";
import { Context as AuthContext } from '../context/auth_context'; 
import VerifyLink from "./verifylink";




// const verifyEmailAPI = (emailAddress,(res) =>{
//   if(res?.data?.status===false){
//      alert("Incorrect Email address")
//   }
//   console.log("printing responce of  verifyemail  api" ,res) 
// },(err) => {
// alert("Got Error of verifyemail api",err)
// })

const VerifyEmail = () => {
  const { state, verifyemail } = useContext(AuthContext);
  const navigate = useNavigate();
  const {user_detail} = state;
  const location = useLocation();
  const queryParams = location;
  const [ searchParams ] = useSearchParams();
  console.log("Search Params ", searchParams)
  const token = searchParams?.get('token');
  console.log("Verify Email Address called", token);



  let emailAddress = user_detail.user_email;
  
  console.log("Location: ", location)
  
  if (emailAddress === "")
    emailAddress = location?.state?.email

  console.log("Email address in Verify Email: ", emailAddress)
 

    return(
       <>
       <Header/>
       <div className='email_box_main'>
       <div className='email_box '>
          <div className="verify_mail">Verify Email</div>
          <Divider/>
          <div className="content">Before proceeding, please verify your email address. We have sent an email.
            If you did not receive the email,
            <Link onClick= { () => {verifyemail({emailAddress})}} >click here</Link> to request a new verification email.
           </div>
        </div>      
      
        </div>
       </>  
        )
};

export default VerifyEmail;


