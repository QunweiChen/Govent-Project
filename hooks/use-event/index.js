import React, { useState, useEffect } from 'react'
import { CiGlass } from 'react-icons/ci'

export default function useEvents() {
  // const [data, setData] = useState()
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:3005/api/events')
  //     const result = await response.json()
  //     setData(result)
  //   }

  //   fetchData()
  // }, [])

  //可以連接上但無法解析
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const fetchData = async () => {
  //         const response = await fetch('http://localhost:3005/api/events')
  //         const result = await response.json()
  //         // console.log(result);
  //         setData(result)
  //       }

  //       fetchData()
  //       console.log(data);
  //   // const uri = 'http://localhost:3005/api/events'
  //   // if (!uri) return
  //   // fetch(uri)
  //   //   .then((data) => data.json())
  //   //   .then(setData)
  //   //   .then(() => setLoading(false))
  //   //   .catch(setError)
  // }, [data])
  // console.log(listItem);
  useEffect(() => {
    const fetchData = async () => {
      fetch('http://localhost:3005/api/events')
        .then((res) => res.json())
        .then((text) => {
          // setData(text)
          setData(text.data ? text.data.posts : [])
        })
    }

    fetchData()
  }, [])
  // console.log(data);
  return {
    loading,
    data,
    error,
  }
  // const [data, setData] = useState()
  // useEffect(() => {
  // const getDatas = async () => {
  //   try{
  //     let res = await fetch(`http://localhost:3005/api/events`)
  //     let {results} = await res.json()
  //     console.log(results);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }
  // getDatas();
  // })
}
