"use client"
import React from 'react'
import  { useContext } from 'react'
import { useRouter } from "next/navigation";
import {categories} from "@/Data/categories";
import Categorycard from "@/components/CategoryCard/page";
import { NameuserContext,NameuserProvider } from "@/app/Context/AuthContext";
const CategoriesDash = () =>
 {
  const router = useRouter();
 const{Name}= useContext(NameuserContext );
  return (
    <div  >
        <div className = "flex  justify-between p-[5px] m-[5px]">
            <h3 className="font-bold  text-xl text-[#2c1200] mt-4 " >Welcom  To ~ Coffee Shop ~ {Name} </h3>
            <input className='input p-[4px] m-[5px] font-bold  ' type= "text" placeholder='Search '/>
        </div>
        <div className="   grid grid-cols-2  min-h-[200px]  gap-10 align-center rounded-2xl p-8  ">
      {categories.map((info)=>(
        <Categorycard 
        key={info._id}
        icon={info.icon}
       name={info.name} 
      description={info.description}
      onClick={() => router.push('/products')}/>
      ))}  
        </div>
    </div>
  )
}
export default CategoriesDash;