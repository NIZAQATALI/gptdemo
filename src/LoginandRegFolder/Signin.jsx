import { useFormik } from "formik";
import "./signin.css"
import { signUpSchema } from "./schema1";
import { Link } from "react-router-dom";
const initialValues = {
    email: "",
    password: ""
  };

export default function Signin() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        alert("Hello login Successfully",values);
        console.log(
          values
        );
        action.resetForm();
      },
    });

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo"> Signin Page</h3>
          <span className="loginDesc">
            Login  social App.
          </span>
        </div>
        <div className="loginRight">
        <form  onSubmit={handleSubmit}>
          <div className="loginBox">
          
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
           <button  type="submit"className="loginButton">Sign In</button>
            <span className="loginForgot">Forgot Password?</span>
             <button className="loginRegisterButton"  ><Link className="link" to="/signup">
               Create a New Account
               </Link>
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
