"use client"
import { navigate } from "next/dist/client/components/segment-cache/navigation"
const  ProtectedRoute = ()=>
{
     const  token = localStorage.getItem("token")
     // هون راح يرجعوا لصفحة تسجيل اذا راح على اي صفحة من دون ما يعمل دخول 
     if(!token) return < Navigate to ={'/login'}/>

}
export {ProtectedRoute,}