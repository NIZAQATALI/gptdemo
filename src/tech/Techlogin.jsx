import React from 'react'
import './style.css'
export default function Techlogin() {
  return (
    <div> <div class="container">
    <div class="form">
        <h2>Sign In</h2>
        <div class="inputcontainer">
            <input type="text" required="required"></input>
            <span>User ID</span>
            <i>uogis</i>
        </div>
        <div class="inputcontainer">
            <input type="password" required="required"></input>
            <span>OTP</span>
            <i></i>
        </div>
        <div class="links">
            <a href="#">Forgot OTP?</a>
            <a href="#">Register</a>
        </div>
        <input type="submit" value="Connect"></input>
    </div>
</div></div>
  )
}
