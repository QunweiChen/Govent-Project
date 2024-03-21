import React from 'react'
import { FaHeart } from 'react-icons/fa6'
import { CiHeart } from 'react-icons/ci'
import { useAuth } from '@/hooks/use-auth'

/* 寫入資料庫更新為true之後，需要刷新時顯示更新後的狀態，需要包含fav狀態*/

export default function FavIcon({ pid, events, setEvents }) {
  //檢查會員身份
  const { auth } = useAuth()
  const uid = auth.user.id || 1 //抓取登入中的id
  // const uid = 1
  // console.log(uid);//確認uid正確
  // const handleToggleFav = () => {
  //   event.stopPropagation(); // 这里阻止事件冒泡
  //   const newEvents = events.map((event) => {
  //     if (event.pid === pid) {
  //       return { ...event, fav: !event.fav }
  //     }
  //     return event
  //   })
  //   setEvents(newEvents)
  //   if (!event.fav) {
  //     handleAddFav(pid, uid) // 傳遞 pid 和 uid
  //   }
  // }
  const handleToggleFav = (event) => {
    event.stopPropagation() // 这里阻止事件冒泡

    const newEvents = events.map((event) => {
      if (event.pid === pid) {
        const updatedEvent = { ...event, fav: !event.fav }
        if (!event.fav) {
          handleAddFav(pid, uid) // 如果是添加收藏，执行添加逻辑
        } else {
          handleRemoveFav(pid, uid) // 如果是取消收藏，执行删除逻辑
        }
        return updatedEvent
      }
      return event
    })
    setEvents(newEvents)
  }

  //  新增
  const handleAddFav = async (pid, uid) => {
    // event.stopPropagation() //阻止事件冒泡
    try {
      console.log('Adding to favorites:', pid, uid) // 確認請求

      // const response = await addFavToDatabase(pid, uid)
      //改為不引入鉤子，直接在下方寫入
      const response = await fetch(
        `http://localhost:3005/api/Fav/${pid}/${uid}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ pid }), //
        }
      )
      if (response.status === 'success') {
        // 可以在添加成功后执行其他操作
      }
    } catch (error) {
      console.error('Error adding to database:', error)
    }
  }

  //刪除
  const handleRemoveFav = async (pid, uid) => {
    // event.stopPropagation() // 阻止事件冒泡
    try {
      console.log('Removing from favorites:', pid, uid) // 確認請求
      const response = await fetch(
        `http://localhost:3005/api/Fav/${pid}/${uid}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ pid }),
        }
      )
      if (response.status === 200) {
        console.log('Successfully removed from favorites')
      } else {
        console.error('Failed to remove from favorites:', response.statusText)
      }
    } catch (error) {
      console.error('Error removing from favorites:', error)
    }
  }

  // 查找具有给定pid的事件对象
  const event = events.find((event) => event.pid === pid)

  return (
    <button
      className={`btn bg-bg-gray text-white`}
      style={{
        position: 'absolute',
        right: 5,
        top: 5,
        height: 25,
        width: 25,
        padding: 0,
        border: 'none',
        background: 'none',
      }}
      onClick={handleToggleFav}
    >
      {event.fav ? <FaHeart /> : <CiHeart />}
    </button>
  )
}
