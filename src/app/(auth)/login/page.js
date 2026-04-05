"use client";
import { loginUser } from "@/services/authService";
import { useState } from "react";
import { useContext } from "react";
import React from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import {User} from "@/Data/UserData"
import {Loginuser} from "@/services/authService";
import { useRouter } from "next/navigation";
import { NameuserContext,NameuserProvider } from "@/app/Context/AuthContext";
// page log in  from static data 
const Login = () => {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { setName } = useContext(NameuserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = User.find((info) => {
     return (info.Email===Email && info.PassWord===PassWord)
    });
  
    if (!users) {
      setError("Not Correct  email or password!");
      return;
    }
    
  setName(users.Name);
    localStorage.setItem("role", users.role);
    localStorage.setItem("userId", users._id);
    localStorage.setItem("userName", users.Name);
    localStorage.setItem("userEmail", users.Email);
    localStorage.setItem("userPhone", users.phone);

    if (users.role === "admin") router.push("/Admin_Dash");
    else if (users.role === "cashier") router.push("/Cashier_Dash");
    else if (users.role === "customer") router.push("/Categories");
  };

return (
    <div className="  cardstyle bg-brown min-h-screen flex flex-col items-center justify-center  mt-[5px]  ">
     <img src="/logo.png" className="w-25"/>
      <p className=" subtitle text-[45px] text-[#C8956C] mb-[4px] pt-[2px]">
        ~ coffee shop ~
      </p>
      <p className=" p-[5px] text-[#a07850] text-[15px] subtitle">
        Welcom Back Start your morning the right way
      </p>

      <form onSubmit={handleSubmit} className=" cardstyle bg-white border border-[3px] border-[#ab8164] rounded-2xl flex flex-col gap-[5px]  mx-auto p-[40px] shadow-lg  text-white">
        <label className="label">Enter Your Email</label>
        <input
          className="input"
          type="email"
          placeholder="Enter YOUR Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label className="label">Enter Your Password</label>
        <input
          className="input  hover:bg[#b86f3b] "
          type="password"
          placeholder="Enter YOUR Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        {error && <p style={{ color: "#ff6b6b", fontSize: "13px" }}>{error}</p>}

        <button type="submit" className="button">
          Login
        </button>

        <Link href="/Register" className="text-start label  mt-2 text-sm underline">
          Create Account
        </Link>
      </form>
    </div>
    )
};

export default Login;

//bcakend
/*export default function LonginPage()
{
    const[Email,setEmail]=useState("");
    const[PassWord,setPassword]=useState("");
    const [error, setError] = useState("");
    const router = useRouter();
const handlesubmit= async(e)=>
  {
    try
    {
      e.preventDefault();
    const res= await Loginuser({Email,PassWord});
    localStorage.setItem("token",res.token);
     localStorage.setItem("role",res.data.role);
     const role= localStorage.getItem("role");
    if(role==="admin")
      router.push("/Admin")
    else if (role==="cashier")
      router.push("/Cashier")
    else if(role==="customer"){
      router.push("/Customer_Dash")
    }
  }catch(err)
  {
    console.log(err.response)
  }
    

  } 
  return(
  
    <div>

      <form onSubmit={handlesubmit} className=" border border-[3px]  border-bg-brown rounded-2xl p-[120px] flex flex-col gap-[5px] w-fit mx-auto mt-20 bg-brown shadow-lg shadow-bg-brown-500 text-white" >
         <label className="label"  form="Email" >Enter Your Email</label>
        <input className="input" type="Email" name= "Email"  placeholder="Enter YOUR Email"
         onChange={(e)=>setEmail(e.target.value)}/>
       <br/>
        <label className="label" form="PassWord">Enter Your Password</label>
        <input className="input" type="PassWord" name= "PassWord" id="PassWord" placeholder="Enter YOUR PassWord"
         onChange={(e)=>setPassword(e.target.value)}/>
               <br/>
          {error && <p>{error}</p>}
   <button type="submit" className="button " >Login</button>
 <Link href="/Register" className="text-start mt-2  text-sm underline hover:mouse" >Create Account</Link>
   </form>
    </div>
  )
   }
*/
