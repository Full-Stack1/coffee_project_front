"use client"
import React from 'react'
import {User} from "@/Data/UserData";
import { useRouter } from "next/navigation";
import { orders} from "@/Data/Orders";
import { useState, useEffect, useContext } from "react";
import { UserCircle } from "lucide-react";
import { NameuserContext } from '@/app/Context/AuthContext';
const Profile = () => {
 const router = useRouter();
//const users=User();
const UserOrder= orders.filter((isfound)=>isfound.users=== users._id);
const [user, setUser] = useState({});

useEffect(() => {
  setUser({
    name: localStorage.getItem("userName"),
    email: localStorage.getItem("userEmail"),
    phone: localStorage.getItem("userPhone"),
    role: localStorage.getItem("role"),
    id: localStorage.getItem("userId"),
  });
}, []);
//log out 
const logout=()=>
{   
  localStorage.clear();
  router.push("/login");
}
 
  return (
   <div className="bg-brown min-h-screen p-6">
      
      {/* أيقونة المستخدم */}
      <div className="flex flex-col items-center mb-6">
        <UserCircle size={80} color="#C8956C" />
        <h2 className="text-[#C8956C] text-2xl font-bold mt-2">{user.name}</h2>
        <p className="text-[#a07850] text-sm">{user.role}</p>
      </div>

      {/* بيانات المستخدم */}
      <div className="bg-[#5f3415] border border-[#ab8164] rounded-2xl p-6 mb-6">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-[#a07850] text-sm">Name</p>
            <p className="text-[#C8956C] font-bold">{user.name}</p>
          </div>
          <div>
            <p className="text-[#a07850] text-sm">Email</p>
            <p className="text-[#C8956C] font-bold">{user.email}</p>
          </div>
          <div>
            <p className="text-[#a07850] text-sm">Phone</p>
            <p className="text-[#C8956C] font-bold">{user.phone}</p>
          </div>
        </div>
      </div>

      {/* الطلبات */}
      <div className="bg-[#5f3415] border border-[#ab8164] rounded-2xl p-6 mb-6">
        <h3 className="text-[#C8956C] font-bold text-lg mb-4">My Orders</h3>
        {userOrders.length === 0 ? (
          <p className="text-[#a07850] text-sm">No orders yet</p>
        ) : (
          userOrders.map((order) => (
            <div key={order._id} className="border-b border-[#ab8164] py-3">
              <p className="text-[#C8956C]">Order #{order.numberOrder}</p>
              <p className="text-[#a07850] text-sm">Table: {order.tableNumber}</p>
              <p className="text-[#a07850] text-sm">Status: {order.status}</p>
              <p className="text-[#a07850] text-sm">Total: {order.totalAmount} JD</p>
            </div>
          ))
        )}
      </div>

      {/* زر الخروج */}
      <button
        onClick={handleLogout}
        className="w-full button"
      >
        Logout
      </button>

    </div>
  )
}

export default Profile;
