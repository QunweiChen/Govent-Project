import React, { useState } from 'react'

export default function CartList({ items = [] }) {
  //   console.log(items)
  const eventOptions = ['111', '222', '333']
  const newEventOptions = eventOptions.map((v, i) => {
    return { id: i + 1, name: v, checked: false }
  })
  // console.log(newEventOptions)

  //存放checkbox內容
  const [events, setEvents] = useState(newEventOptions)
  // console.log(events)
  //全選
  const [selectAll, setSelectAll] = useState(false)

  //判斷checked狀況
  const toggleCheckbox = (events, id) => {
    return events.map((v, i) => {
      if (v.id === id) return { ...v, checked: !v.checked }
      else return v
    })
  }

  //全選功能的處理函式
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked
    console.log('isChecked:', isChecked) // 調試
    setSelectAll(isChecked)
    if (isChecked) {
      setEvents(events.map((event) => ({ ...event, checked: true })))
    } else {
      setEvents(events.map((event) => ({ ...event, checked: false })))
    }
  }
  return (
    <>
      <div className="border-0 cart-card border-bottom border-normal-gray">
        <div className="row g-0 my-4">
          <div className="col-6 text-white d-flex align-items-center">
            <h4 className="ms-4">購物車</h4>
          </div>
          <div className="col-6 text-white d-flex align-items-center justify-content-end">
            <label className="me-4 d-flex align-items-center justify-content-end form-check-label">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="checkbox-large form-check-input"
              />
              <p className="ms-2">全選</p>
            </label>
          </div>
        </div>
      </div>
      <div className="rwd-text">
        {/* 到時候return資料用這一層 */} {/* 第一 */}
        {/* {items.map} */}
        <div className="border-0 cart-card border-bottom border-top border-normal-gray">
          <div className="d-flex align-items-center justify-content-between my-3 text-center">
            <div className="ms-4 text-primary-light">主辦單位 - 遠雄創藝</div>
            <div className="me-4">
              <i className="bi bi-chevron-right text-white"></i>
            </div>
          </div>
        </div>
        <div className="border-0 cart-card row g-0 border-bottom border-normal-gray event">
          <div className="col-sm-2 col-4 d-flex align-items-center ms-4">
            <input
              type="checkbox"
              checked={events[0].checked}
              onChange={() => {
                setEvents(toggleCheckbox(events, newEventOptions[0].id))
              }}
              className="me-4 checkbox-large form-check-input"
            />
            <div className="bg-normal-white rounded-4 product-img">
              <img
                src="./images/cart/4-03.jpg"
                className=" rounded-start object-fit-cover"
                alt="..."
              />
            </div>
          </div>

          <div className="col-sm-9 col-7 row">
            <div className="card-body col-sm-8 col">
              <h6 className="card-title card-text d-flex justify-content-between align-items-center text-white truncatetext">
                YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024 Solo
                Concert in Taipei
              </h6>
              <p className="card-text text-primary-light mt-2">1F 站位</p>
              <div className="iconbar text-white d-flex align-items-center mt-2 row">
                <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                  <i className="bi bi-calendar-week text-primary-light"></i>
                  <p className="text-white ms-2">2024-01-21</p>
                </div>
                <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                  <i className="bi bi-clock text-primary-light"></i>
                  <p className="text-white ms-2"> 10:00</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col row d-flex justify-content-center align-items-center pb-3 pb-sm-0">
              <div className="col-sm-6 d-flex justify-content-start align-items-center">
                <i className="bi bi-person-fill text-primary-light"></i>
                <p className="text-white ms-2">人數 X 2</p>
              </div>
              <div className="col-sm-6">
                <p className="text-white">NT $6,400</p>
              </div>
            </div>
          </div>
          <div className="col-1 d-flex justify-content-center align-items-center">
            <div className="btn d-flex justify-content-center align-items-center me-5 me-sm-0">
              <i className="bi bi-trash-fill text-primary-light"></i>
              <p className="text-white ms-2 hide">刪除</p>
            </div>
          </div>
        </div>
        {/* <div className="border-0 cart-card row g-0 border-bottom border-normal-gray event">
      <div className="col-sm-2 col-4 d-flex align-items-center ms-4">
        <input
          type="checkbox"
          checked={events[1].checked}
          onChange={() => {
            setEvents(
              toggleCheckbox(events, newEventOptions[1].id)
            )
          }}
          className="me-4 checkbox-large form-check-input"
        />
        <div className="bg-normal-white rounded-4 product-img">
          <img
            src="./images/cart/4-03.jpg"
            className=" rounded-start object-fit-cover"
            alt="..."
          />
        </div>
      </div>

      <div className="col-sm-9 col-7 row">
        <div className="card-body col-sm-8 col">
          <h6 className="card-title card-text d-flex justify-content-between align-items-center text-white truncatetext">
            YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024
            Solo Concert in Taipei
          </h6>
          <p className="card-text text-primary-light mt-2">
            1F 站位
          </p>
          <div className="iconbar text-white d-flex align-items-center mt-2 row">
            <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
              <i className="bi bi-calendar-week text-primary-light"></i>
              <p className="text-white ms-2">2024-01-21</p>
            </div>
            <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
              <i className="bi bi-clock text-primary-light"></i>
              <p className="text-white ms-2"> 10:00</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col row d-flex justify-content-center align-items-center pb-3 pb-sm-0">
          <div className="col-sm-6 d-flex justify-content-start align-items-center">
            <i className="bi bi-person-fill text-primary-light"></i>
            <p className="text-white ms-2">人數 X 2</p>
          </div>
          <div className="col-sm-6">
            <p className="text-white">NT $6,400</p>
          </div>
        </div>
      </div>
      <div className="col-1 d-flex justify-content-center align-items-center">
        <div className="btn d-flex justify-content-center align-items-center me-5 me-sm-0">
          <i className="bi bi-trash-fill text-primary-light"></i>
          <p className="text-white ms-2 hide">刪除</p>
        </div>
      </div>
    </div> */}
      </div>
    </>
  )
}
