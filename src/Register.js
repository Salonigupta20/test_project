import React, { useState,useEffect } from "react";
import { Box, TextField , Button,Typography,Link,CssBaseline, Input,Container} from "@mui/material";
import "../../pages/dashboard/register.css"
import Header from "../../components/header/header";
import { RegisterAPI } from "../../service/register.service";
import { Navigate,useNavigate } from "react-router-dom";
import MyAdvisorCloudLogo from "../../assets/images/MyAdvisorCloudLogo.png";
import PremiumAllianceLogo from '../../assets/images/PremiumAllianceLogo.png';

const Register = () => {
    const [infoMSg,setInfoMsg] = useState("");
    const [userDetail,setUserDetail] =useState({
        first_name :"",
        last_name : "",
        email : "",
        phone : "",
        password : "" 
    })
const navigate = useNavigate();
    const RegisterUser =()=>{

        const { first_name,last_name,email,phone, password } = userDetail;
        if(first_name == "" ||last_name == "" ||email == "" ||password == "" ||phone == "" ){
            alert("Please fill required fields");
          
        }
        else{
            RegisterAPI({ first_name,last_name,email,phone, password },(res) =>{
                if(res?.data?.status===true){
                    setInfoMsg("User registered successfully");
                    navigate("/verify-emailaddress",{state: {email}})
                }
                else{
                    setInfoMsg("User already exist.")
                }
                console.log("printing responce of get register api" ,res) 
        },(err) => {
            alert("Got Error of register api",err)
        })
        }


    //     verifyEmailAPI({ email },(res) =>{
    //         if(res?.data?.status===false){
    //            alert("plz enter your valid email id")
    //         }
    //         else{
    //             navigate("/verify-email")
    //         }
    //         console.log("printing responce of  verifyemail  api" ,res) 
    // },(err) => {
    //     alert("Got Error of verifyemail api",err)
    // })
    }
    useEffect(()=>{
        console.log("infoMSg",infoMSg)
    },[])

    // useEffect(()=>{
    //     RegisterAPI({ 
    //     },(res) =>{
    //         console.log("printing response of get register api" ,res) 
    // },(err) => {
    //     console.log("Got Error of register api",err)
    // }
    // )},[userDetail])


    // useEffect(()=>{
    //     verifyEmailAPI({
    //     },(res)=>{
    //       console.log("printing response of verify email  api" ,res) 
    // },(err) => {
    //     debugger
    //   alert("Got Error of verify email api",err)
    // })
    //   },[userDetail])
    
 
    return(
       <>
             <Box className='header'>
                <div className='global_header'>
                    <div className='left_section'>
                        <img src={MyAdvisorCloudLogo} alt="my advisor cloud logo" className='first_image_logo' />
                        &nbsp;&nbsp;&nbsp;
                        <img src={PremiumAllianceLogo} alt="premium alliance logo" className='second_image_logo' />
                    </div>
                    <div className='right_section'>
                     <span>Login</span>  
                    </div>
                </div>
            </Box>
           
           

            <div className="register_main">
             <Box className="register_form">
                    <Box className="form_card">
                    <div className="register_header">Register</div>
                    <div style={{display:"flex",justifyContent:"center",color :"red",alignItems:"center",padding:"10px"}}>
                        
                    {infoMSg == " " ?<h4> </h4> :<h4>{infoMSg}</h4>}
                    </div>
                        <Box className='first_name_root' style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start"}}>
                            <Box className="field_name">
                                <Typography component="div">
                                    First Name <span className='required_field'>*</span>
                                </Typography>
                            </Box>
                            <Box className="input_box">
                                <input 
                                className="input_tag" 
                                placeholder="Enter your First Name" 
                                onChange={(e)=>{
                                    console.log("firstname",e.target.value)
                                    setUserDetail({ ...userDetail, first_name: e.target.value});
                                }}
                                required/>
                            </Box>
                        </Box>
                        <Box className="last_name_root">
                            <Box className='first_item' style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start"}}>
                                <Box className='field_name'>
                                    <Typography component="div">
                                        Last Name <span className='required_field'>*</span>
                                    </Typography>
                                </Box>
                            <Box className="input_box">
                                <input 
                                type="text"
                                className="input_tag" 
                                placeholder="Enter your Last Name"
                                onChange={(e)=>{
                                    console.log("lastname",e.target.value)
                                setUserDetail({ ...userDetail, last_name: e.target.value});
                            }}
                                />
                            </Box>
                            </Box>
                        </Box>
                        <Box className="email_root">
                            <Box className='first_item' style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start"}}>
                                <Box className='field_name'>
                                    <Typography component="div">
                                        Email <span className='required_field'>*</span>
                                    </Typography>
                                </Box>
                            <Box className="input_box">
                                <input 
                                type="email"
                                className="input_tag"
                                 placeholder="Enter your Email"
                                 onChange={(e)=>{
                                     console.log("email",e.target.value)
                                     setUserDetail({ ...userDetail, email: e.target.value});
                                    }}
                                 autoComplete="off"
                                 />
                            </Box>
                            </Box>
                        </Box>
                        <Box className="password_root">
                            <Box className='first_item' style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start"}}>
                                <Box className='field_name'>
                                    <Typography component="div">
                                        Password <span className='required_field'>*</span>
                                    </Typography>
                                </Box>
                            <Box className="input_box">
                                <input 
                                type="password"
                                className="input_tag" 
                                placeholder="Enter your Password"
                                onChange={(e)=>{
                                    console.log("password",e.target.value)
                                    setUserDetail({ ...userDetail, password: e.target.value});
                                }}
                                autoComplete="off"
                                />
                            </Box>
                            </Box>
                        </Box>
                        <Box className='confirm_password_root'>
                            <Box className='first_item' style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start"}}>
                                <Box className='field_name'>
                                    <Typography component="div">
                                        Phone number <span className='required_field'>*</span>
                                    </Typography>
                                </Box>
                            <Box className="input_box">
                                <input 
                              type="number"
                                className="input_tag" 
                                placeholder="Enter your Phone "
                                onChange={(e)=>{
                                    console.log("phoneno",e.target.value)
                                    setUserDetail({ ...userDetail, phone: e.target.value});
                                }}
                               
                                />
                            </Box>
                            </Box>
                        </Box>
                      
                        <Box className='create_account_button'>
                            <Button onClick={RegisterUser}  disableElevation variant="contained">Create Account</Button>
                        </Box>
                        <Box className='login_button'>
                            <Typography component="div">
                                Already have an account? <a href="/login"><Link style={{color: "#c8bba1" , textDecoration:"none" , textTransform:"none"}} >Log In</Link></a>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                </div>
               
       </>  
        )
};

export default Register;


