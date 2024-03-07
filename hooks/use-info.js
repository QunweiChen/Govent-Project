import React,{useState,useEffect} from "react";


export default function EventsData(){
    const getDatas = async(params)=>{
    const searchParams = new URLSearchParams(params)
    try{
      const res = await fetch(`http://localhost:3005/api/info?${searchParams}`);
      return await res.json();
    }catch(error){
      console.log(error)
    }
  }
}
