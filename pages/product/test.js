import React from 'react'
import { useState, useEffect } from 'react'
import useEvents from '@/hooks/use-event'
import TestPorps from '@/components/layout/list-layout/test'
import FavIcon from '@/components/layout/list-layout/fav-icon'

export default function Test() {
  
  //裝取資料設定狀態
  const { data } = useEvents()
  const [events, setEvents] = useState([])
  useEffect(() => {
    if (data) {
      setEvents(data)
    }
  }, [data])
  console.log(events)

  // 定义一个回调函数来接收子组件传递回来的数据
  const handleDataFromChild = (childData) => {
    console.log('Data from child:', childData)
    // 在这里您可以对从子组件传递回来的数据进行处理
    // 例如，将数据存储在状态中以重新渲染父组件
  }

  return (
    <>
      <h1>Hello Govent.</h1>
      <TestPorps datas={events} onDataFromChild={handleDataFromChild} />
      <FavIcon />
    </>
  )
}
