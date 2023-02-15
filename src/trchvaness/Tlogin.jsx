import React from 'react'
import './style.css' 
export default function Tlogin() {
  return (
    <div>
<div class="login-box">
    <h2>Sign In Form</h2>
    <form>
        <div class="user-box">
            <input type="text" name="" required=""></input>
            <label>User ID</label>
        </div>
        <div class="user-box">
            <input type="password" name="" required=""></input>
            <label>Pin</label>
        </div>
        <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span> Submit
        </a>
    </form>
</div>

    </div>
  )
}
