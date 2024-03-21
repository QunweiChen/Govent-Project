import React, { useState, useEffect } from 'react'
import { FaHeart } from 'react-icons/fa6'
import { CiHeart } from 'react-icons/ci'
import { useAuth } from '@/hooks/use-auth'

import addFavToDatabase from '@/hooks/use-fav'

export default function FavIcon({ pid, events, setEvents }) {
  //檢查會員身份
  const { auth } = useAuth()
  const uid = auth.user?.id //抓取登入中的id
  // const uid = 10

  //資料庫抓取
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const getFav = async () => {
      try {
        // 發送API請求時包含uid作為參數
        const response = await fetch(`http://localhost:3005/api/Fav?uid=${uid}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setFavorites(data.data ? data.data.posts : [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getFav()
  }, [uid])

  console.log(favorites)
  console.log(uid)

  //渲染出愛心狀態
  const handleToggleFav = async (event) => {
    // 修改點擊事件處理函數
    event.preventDefault() // 阻止默認行為
    event.stopPropagation() // 阻止事件冒泡
    try {
      if (favorites.includes(pid)) {
        // 如果已經是收藏狀態，則取消收藏
        await handleRemoveFav(pid, uid)
        setFavorites(favorites.filter((fav) => fav !== pid))
      } else {
        // 如果未收藏，則添加收藏
        await handleAddFav(pid, uid)
        setFavorites([...favorites, pid])
      }
    } catch (error) {
      console.error('Error toggling favorite:', error)
    }
  }

  const handleAddFav = async (pid, uid) => {
    try {
      console.log('Adding to favorites:', pid, uid)
      const response = await fetch(
        `http://localhost:3005/api/Fav/${pid}/${uid}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ pid }),
        }
      )
      if (response.status === 200) {
        console.log('Successfully added to favorites')
      } else {
        console.error('Failed to add to favorites:', response.statusText)
      }
    } catch (error) {
      console.error('Error adding to favorites:', error)
    }
  }

  const handleRemoveFav = async (pid, uid) => {
    try {
      console.log('Removing from favorites:', pid, uid)
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

  // 檢查是否為該用戶的收藏
  const isFavorite = favorites.includes(pid)

  return (
    <>
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
        onClick={handleToggleFav} // 修改為新的點擊事件處理函數
      >
        {/* {isFavorite.includes(pid) ? <FaHeart /> : <CiHeart />}{' '} */}
        {isFavorite ? <FaHeart /> : <CiHeart />} {/* 修改按鈕內容 */}
      </button>
    </>
  )
}
