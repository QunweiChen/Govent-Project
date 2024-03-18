import React, { useState } from 'react'

export default function FavIcon({ handleClick }) {
  const [heartColor, setHeartColor] = useState('white')

  const handleButtonClick = () => {
    // 将心形图标的颜色设置为红色
    setHeartColor('red')
    // 如果传入了 handleClick 函数，则调用它
    if (handleClick) {
      handleClick()
    }
  }

  // 愛心設定(測試用)
  const Heart = ({ size = 20, color = 'red' }) => (
    <svg
      className="heart"
      viewBox="0 0 32 29.6"
      style={{ opacity: 0.8, width: size, fill: color, position: 'relative' }}
    >
      <path d="M23.6 0c-3.4 0-6.3 2.7-7.6 5.6C14.7 2.7 11.8 0 8.4 0 3.8 0 0 3.8 0 8.4c0 9.4 9.5 11.9 16 21.2 6.1-9.3 16-12.1 16-21.2C32 3.8 28.2 0 23.6 0z" />
    </svg>
  )

  return (
    <>
      {/* 收藏用愛心（測試用） */}
      <button
        className={`btn bg-bg-gray`}
        style={{
          position: 'absolute',
          right: 5,
          top: 5,
          height: 20,
          width: 20,
          padding: 0,
          border: 'none',
          background: 'none',
        }}
        onClick={handleButtonClick} // 设置按钮的点击事件处理函数为 handleButtonClick
      >
        <Heart color={heartColor} />
      </button>
      {/* <Heart color={heartColor} onClick={handleIconClick} /> */}
    </>
  )
}
