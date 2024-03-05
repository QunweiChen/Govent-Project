import React, { useState, useEffect } from 'react'

export default function useEvents(){
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] =  useState(true)

    useEffect(()=>{
        const uri = 'http://localhost:3005/api/events'
        if(!uri)return;
        fetch(uri)
            .then(data => data.json()) 
            .then(setData)
            .then(()=>setLoading(false))
            .catch(setError);
    },[]);
    return{
        loading,
        data,
        error
    };
}
