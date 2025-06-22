import React, { useState } from 'react';
import './css/LoginSignup.css';

const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () =>{
       console.log("Login Function Executed",formData);
        let responseData;
       await fetch('http://localhost:4000/login',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
       },
       body: JSON.stringify(formData),

       }).then((response)=> response.json()).then((data)=>responseData=data);
       
       if(responseData.success){
          localStorage.setItem('auth-token',responseData.token);
          window.location.replace("/");
       }
       else{
          alert(responseData.errors)
       }
  }

  const signup = async () =>{
       console.log("Signup Function Executed",formData);
       let responseData;
       await fetch('http://localhost:4000/signup',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
       },
       body: JSON.stringify(formData),

       }).then((response)=> response.json()).then((data)=>responseData=data);
       
       if(responseData.success){
          localStorage.setItem('auth-token',responseData.token);
          window.location.replace("/");
       }
       else{
          alert(responseData.errors)
       }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>

        {/* 🔹 Social Login Buttons Added */}
      <div className="loginsignup-social">
  <div className="social-btn facebook">
    <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" />
    <span>Facebook</span>
  </div>
  <div className="social-btn google">
    <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
    <span>Google</span>
  </div>
</div>

        <div className="or-divider">OR</div>

        <div className="loginsignup-fields">
         {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>} 
          <input name='email' value={formData.email}  onChange={changeHandler}  type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>

        <button
           onClick={() => {
           if (state === "Login") {
           login();
           } else {
           signup();
           }
        }}
      >
  Continue
</button>

        {state==="Sign Up"? <p className="loginsignup-login">
          Already have an account? <span onClick={()=>{setState('Login')}}>Login here</span>
        </p>: <p className="loginsignup-login">
          Create an account? <span onClick={()=>{setState('Sign Up')}}>Click here</span>
        </p>}


        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;



  


