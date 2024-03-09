import React, { useState, useEffect } from 'react'

export default function EventsProvider() {
  // const [data, setData] = useState()
  // console.log(data)
  // useEffect(() => {
  //   const getDatas = async () => {
  //     fetch('http://localhost:3005/api/events')
  //       .then((res) => res.json())
  //       .then((text) => {
  //         setData(text)
  //       })
  //   };

  //   getDatas()
  // }, [])
  

  //可以連接上但無法解析
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const uri = 'http://localhost:3005/api/events'
    if (!uri) return
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, [])
  return {
    loading,
    data,
    error,
  }

  const getDatas = async () => {
    const res = await fetch(`http://localhost:3005/api/events`)
    return await res.json()
  }
  return {
    data: getDatas(),
  }
}
