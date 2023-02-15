import "./signup.css"
import { useFormik } from "formik";
import { useState } from "react";
import { signUpSchema } from "./schemas";
import Grid from '@mui/material/Grid';

import { Link } from "react-router-dom";
import Signin from "./Signin";
const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
export default function Signup() {
    const [val, setval] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
       
        alert("Hello world! ${values}",values);
        console.log(
       values
        );
        setval(values) ;
        console.log(val);
        action.resetForm();
        alert("Hello world! ${values}",val);
      },
    });
  return (
    <>
    

    
    <div className="login">
    
      <div className="loginWrapper">
      <Grid   container>
        <Grid item xs={12} md={6} lg={6}>
        <div className="loginLeft">
          <h3 className="loginLogo">Hi Nizaqat </h3>
          <span className="loginDesc">
            Connect with friend .
          </span>
        </div>
        </Grid>
        <Grid item  xs={12} md={6} lg={6}>
        <div className="loginRight">
        <form onSubmit={handleSubmit}>
          <div className="loginBox">
            <input  className="loginInput"
            name="name" 
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}    
            />
             {errors.name && touched.name ? (
        <p className="form-error">{errors.name}</p>
      ) : null}
            <input  className="loginInput"   
            name="email"
            id="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            />
             {errors.email && touched.email ? (
        <p className="form-error">{errors.email}</p>
      ) : null}
            <input  className="loginInput" 
            name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
            
            />
             {errors.password && touched.password? (
        <p className="form-error">{errors.password}</p>
      ) : null}
            <input  className="loginInput" 
            
            placeholder="Confirm Password"
            name="confirm_password"
            value={values.confirm_password}

            onChange={handleChange}
            onBlur={handleBlur}
    />
     {errors.confirm_password && touched.confirm_password ? (
        <p className="form-error">{errors.confirm_password}</p>
      ) : null}
            <button  type="submit"className="loginButton">Sign Up</button>
            <button className="loginRegisterButton" >
            <Link  className="link" to="/signin">   Log into Account</Link>
           
              
            </button>
           
          </div>
          </form>
        </div>
        </Grid>
        </Grid>
      </div>
      
    </div>
    
    </>
  );
}
