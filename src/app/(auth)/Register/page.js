"use client";
import React, { useEffect } from 'react'
import Link from "next/link";
import {User} from "@/Data/UserData";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NameuserContext } from "@/app/Context/AuthContext";
import { useContext } from "react";
import{registeruser} from "@/services/authService"

const Register = () => 
{
   const[Email,setEmail]=useState("");
  const[PassWord,setPassword]=useState("");
   const[Name,setName]=useState("");
    const[phone,setPhone]=useState("");
     const [error, setError] = useState("");
    const router = useRouter();
   const handlesubmit= async(e)=>
     {
       try
       {
         e.preventDefault();
          const exuser= User.find((info)=> info.Email===Email)
         
          if(exuser)
         { 
          setError("The Email Is Have ALready Account")
          return ;
        }
      localStorage.setItem("role", "customer");
      localStorage.setItem("userName", Name);
      localStorage.setItem("userEmail", Email);
       localStorage.setItem("userPhone", phone); 
         router.push("/Categories")
           // alert("done");
     }catch(err)
     {
       console.log(err.response)
     }
     } 
     return(
     
     <div className="cardstyle bg-brown  flex flex-col items-center justify-center  ">
       <img src="/logo.png" className="w-25"/>
      <h2 className="subtitle text-[45px] text-[#C8956C] mb-[4px] pt-[2px]">
        ~ coffee shop ~
      </h2>
      <p className=" p-[5px] text-[#a07850] text-[15px] subtitle" >
        coffee shop place  to Enjoy to Start The big day
      </p>

   <form onSubmit={handlesubmit} className=" cardstyle bg-white border mb-15 border-[3px] border-[#ab8164] rounded-2xl flex flex-col gap-[5px]  p-[50px] shadow-lg  text-white">
  <label className="label">Enter Your Name</label>
  <input
    className="input"
    type="text"
    placeholder="Enter Your Name"
    onChange={(e) => setName(e.target.value)}
  />
  <br />

  <label className="label">Enter Your Email</label>
  <input
    className="input"
    type="email"
    placeholder="Enter Your Email"
    onChange={(e) => setEmail(e.target.value)}
  />
  <br />

  <label className="label">Enter Your Password</label>
  <input
    className="input"
    type="password"
    placeholder="Enter Your Password"
    onChange={(e) => setPassword(e.target.value)}
  />
  <br />

  <label className="label">Enter Your Phone</label>
  <input
    className="input"
    type="text"
    placeholder="Enter Your Phone"
    onChange={(e) => setPhone(e.target.value)}
  />
  <br />

  <button
    type="submit"
    className="button w-full"
  >
    Register
  </button>

  <Link
    href="/login"
    className="text-start label  mt-5 text-sm underline "
  >
    Already have an account? Login
  </Link>
</form>
</div>
     )
}

export default Register;


/*
//backend 
const page = () => 
{
   const[Email,setEmail]=useState("");
  const[PassWord,setPassword]=useState("");
   const[Name,setName]=useState("");
    const[phone,setPhone]=useState("");

   const handlesubmit= async(e)=>
     {
       try
       {
         e.preventDefault();
       const res= await registeruser({Name, Email, PassWord, phone});
         
       console.log({
        Name,
       Email,
      PassWord,
      phone
});
       localStorage.setItem("token",res.token);
    console.log("noor")
         router.push("/Customer_Dash")
            alert("done");
     }catch(err)
     {
       console.log(err.response)
     }
       
   
     } 
     return(
     
       <div>
  <form
    onSubmit={handlesubmit}
    className=" border border-[3px] border-bg-brown rounded-2xl p-[120px] flex flex-col gap-[5px] w-fit mx-auto mt-20 bg-brown shadow-lg shadow-bg-brown-500 text-white"
  >
    
   
    <label className="label">Enter Your Name</label>
    <input
      className="input"
      type="text"
      placeholder="Enter Your Name"
      onChange={(e) => setName(e.target.value)}
    />
    <br />

    
    <label className="label">Enter Your Email</label>
    <input
      className="input"
      type="email"
      placeholder="Enter Your Email"
      onChange={(e) => setEmail(e.target.value)}
    />
    <br />

   
    <label className="label">Enter Your Password</label>
    <input
      className="input"
      type="passWord"
      placeholder="Enter Your Password"
      onChange={(e) => setPassword(e.target.value)}
    />
    <br />

   
    <label className="label">Enter Your Phone</label>
    <input
      className="input"
      type="text"
      placeholder="Enter Your Phone"
      onChange={(e) => setPhone(e.target.value)}
    />
    <br />

    <button type="submit" className="button">Register</button>

    <Link
      href="/login"
      className="text-start mt-2 text-sm underline hover:opacity-80"
    >
      Already have an account? Login
    </Link>

  </form>
</div>
     )
}
export default page*/

