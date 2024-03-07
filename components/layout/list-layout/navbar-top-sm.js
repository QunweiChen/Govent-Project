import React, { useState } from 'react'
// import Dropdown from 'react-bootstrap/Dropdown'

export default function NavbarTopRwdSm() {
  const [activeButton, setActiveButton] = useState(0)
  // const [activeButton2, setSelectedOption] = useState(0)
  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex)
  }
  const handleClickChang = () => {
    setActiveButton(activeButton === 0 ? 1 : 0)
  }

  return (
    <>
      <section className="header d-sm-none d-block  bg-normal-gray-deep">
        <button
          className={`col-3 btn  ${
            activeButton === 0 ? 'text-primary-deep ' : 'text-white'
          }`}
          onClick={() => handleClick(0)}
        >
          <i class="bi bi-map fs-5"></i>
          <div className="sm-p">地圖</div>
        </button>
        <button
          className={`col-3 btn ${
            activeButton === 1 ? 'text-primary-deep' : 'text-white'
          }`}
          onClick={() => handleClick(1)}
        >
          <i class="bi bi-sliders fs-4"></i>
          <div className="sm-p">類別</div>
        </button>
        <button
          className={`col-3 btn ${
            activeButton === 2 ? 'text-primary-deep' : 'text-white'
          }`}
          onClick={() => handleClick(2)}
        >
          <i class="bi bi-funnel fs-5"></i>
          <div className="sm-p">篩選</div>
        </button>
        <button
          className={`col-3 btn ${
            activeButton === 3 ? 'text-primary-deep' : 'text-white'
          }`}
          onClick={() => handleClick(3)}
        >
          <i class="bi bi-sort-down fs-5"></i>
          <div className="sm-p">排序</div>
        </button>
      </section>
    </>
  )
}
