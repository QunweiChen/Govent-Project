import React, { useState } from 'react'
// import Dropdown from 'react-bootstrap/Dropdown'

export default function NavbarTopRwdSm() {
  const [activeButton, setActiveButton] = useState(0)
  const [activeButtonChang, setActiveButtonChang] = useState(0)
  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex)
  }
  const handleClickChang = () => {
    setActiveButtonChang((prevState) => (prevState === 0 ? 1 : 0))
  }

  return (
    <>
      <selector className="header-m d-none d-sm-block">
        <section className="d-flex justify-content- between">
          <div className="sort_icon">
            <button className="btn no-border rounded-0 text-white">
              排序方式
              <i
                className={`bi ${
                  activeButtonChang === 0 ? 'bi-sort-down' : 'bi-sort-up '
                } btn-primary-deep`}
                onClick={() => handleClickChang(0)}
              ></i>
            </button>
          </div>

          <div className="d-flex">
            <div
              style={{
                // backgroundColor: activeButton2 === 0 ? '#151515' : '#c55708',
                borderBottom:
                  activeButton === 0
                    ? '3px solid #c55708'
                    : '3px solid #151515',
              }}
            >
              <button
                className={`btn ${
                  activeButton === 0 ? 'text-primary-deep' : 'text-white'
                } pb-0 rounded-0 no-border`}
                onClick={() => handleClick(0)}
              >
                推薦
              </button>
            </div>
            <div
              style={{
                borderBottom:
                  activeButton === 1
                    ? '3px solid #c55708'
                    : '3px solid #151515',
              }}
            >
              <button
                className={`btn ${
                  activeButton === 1 ? 'text-primary-deep' : 'text-white'
                } pb-0 rounded-0 no-border`}
                onClick={() => handleClick(1)}
              >
                日期
              </button>
            </div>
            <div
              style={{
                borderBottom:
                  activeButton === 2
                    ? '3px solid #c55708'
                    : '3px solid #151515',
              }}
            >
              <button
                className={`btn ${
                  activeButton === 2 ? 'text-primary-deep' : 'text-white'
                } pb-0 rounded-0 no-border`}
                onClick={() => handleClick(2)}
              >
                價格
              </button>
            </div>
            <div
              style={{
                borderBottom:
                  activeButton === 3
                    ? '3px solid #c55708'
                    : '3px solid #151515',
              }}
            >
              <button
                className={`btn ${
                  activeButton === 3 ? 'text-primary-deep' : 'text-white'
                } pb-0 rounded-0 no-border`}
                onClick={() => handleClick(3)}
              >
                地區
              </button>
            </div>
          </div>
        </section>
      </selector>
    </>
  )
}
