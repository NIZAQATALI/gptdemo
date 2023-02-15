import { useState } from "react";
const Form=()=>{
    const[fullName,setfullName]=useState({
      fname: "",
      lname:"",
      rname:"",
    email:""
    });
    const[fullName1,setfullName1]=useState({
        fname: "",
        lname:"",
        rname:"",
      email:""
      });
    const InputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
        //const value =event.target.value;
        //const name =event.target.name;
        const {value,name}= event.target;
        setfullName((preValue)=>{
            return {
                ...preValue,
                [name]:value
            }
/*
if(name==='fname')

return{
fname:value,
lname:preValue.lname,
rname:preValue.rname,
email:preValue.email


}; else  if(name==="lname")
return{
    fname:preValue.fname,
    lname:value,
    rname:preValue.rname,
    email:preValue.email
    
    } ;
    
    else  if(name==="rname")
return{
    fname:preValue.fname,
    lname:preValue.lname,
    rname:value,
    email:preValue.email
    
    } ;
    else  if(name==="email")
    return{
        fname:preValue.fname,
        lname:preValue.lname,
        rname:preValue.rname,
        email:value
        } ;*/
        
        });
     
    }
    
 
const bejoValue=(event)=>{
   event.preventDefault();
   alert('form submitted');
   setfullName1(fullName);
}

 
return(<>

<div className="frm-div">
<form  onSubmit={bejoValue}>
<h1>{`WELCOME👨${fullName1.fname}  ${fullName1.lname}  ${fullName1.rname} ${fullName1.email} `}</h1>
<input type="text" placeholder="Enter your  first_Name "  onChange={InputEvent}
name="fname"
value={fullName.fname}

></input>
<br></br>
<input type="text" placeholder="Enter your Last_Name " onChange={InputEvent}
name="lname"
value={fullName.lname}
>

</input>
<br/>
<input type="text" placeholder="Enter your Last_roll " onChange={InputEvent}
name="rname"
value={fullName.rname}
>
    </input>
<br/>
<input type="text" placeholder="Enter your Email " onChange={InputEvent}
name="email"
value={fullName.email}
>


</input>
<button type="submit">SUBMIT</button>
</form>

</div>
</>
);
}
export default Form;