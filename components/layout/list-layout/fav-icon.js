import React, { useState } from 'react'

export default function FavIcon() {
  const [activeButton, setActiveButton] = useState(0)
  const handleClick = () => {
    setActiveButton(activeButton === 0 ? 1 : 0)
  }

  return (
    <>
      <button
        className={`btn position-absolute top-0 end-0 ${
          activeButton === 0 ? 'text-white' : 'text-primary-deep'
        }`}
        onClick={handleClick}
      >
        <i
          style={{ opacity: 0.8 }}
          className="px-2 py-1 rounded-3 bi bi-heart-fill fs-5"
        ></i>
      </button>
    </>
  )
}
