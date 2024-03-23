import React, { useState } from 'react'

export default function NavbarTopRwdSm(props) {
  const [activeButton, setActiveButton] = useState('')
  const [sortOrder, setSortOrder] = useState('')
  const [cityOrder, setCityOrder] = useState('')
  const [dateOrder, setDateOrder] = useState('')
  const [priceOrder, setPriceOrder] = useState('')
  const [recommendOrder, setRecommendOrder] = useState('')

  const cityMap = {
    台北市: 1,
    新北市: 2,
    桃園市: 3,
    基隆市: 4,
    新竹市: 5,
    新竹縣: 6,
    宜蘭縣: 7,
    苗栗縣: 8,
    台中市: 9,
    南投縣: 10,
    彰化縣: 11,
    雲林縣: 12,
    嘉義縣: 13,
    嘉義市: 14,
    台南市: 15,
    高雄市: 16,
    屏東縣: 17,
    花蓮縣: 18,
    台東縣: 19,
  }

  // 升降序排序函数
  const sortEvents = (sortingMethod) => {
    let sortedEvents = [...props.events]
    const processedEvents = props.events.map((event) => ({
      ...event,
      // 假设城市名称存储在属性 str 中
      cityValue: cityMap[event.str] || 0, // 获取城市对应的数字值，如果城市不存在于映射中，则使用默认值 0
    }))
    const datedEvents = props.events.map((event) => ({
      ...event,
      date: new Date(event.start_date).getTime(),
    }))
    const uidEvents = props.events.map((event) => ({
      ...event,
      uid: event.uid !== null ? parseFloat(event.uid) : 0,
    }))
    let sortDirection

    switch (sortingMethod) {
      case 'date':
        ;[...datedEvents].sort((a, b) =>
          dateOrder === 'asc' ? a.date - b.date : b.date - a.date
        )
        setDateOrder(dateOrder === 'asc' ? 'desc' : 'asc')
        sortDirection = dateOrder === 'asc' ? 'desc' : 'asc'
        break
      case 'price':
        sortedEvents.sort((a, b) =>
          priceOrder === 'asc' ? a.price - b.price : b.price - a.price
        )
        setPriceOrder(priceOrder === 'asc' ? 'desc' : 'asc')
        sortDirection = priceOrder === 'asc' ? 'desc' : 'asc'
        break
      case 'city':
        ;[...processedEvents].sort((a, b) =>
          cityOrder === 'asc'
            ? a.cityValue - b.cityValue
            : b.cityValue - a.cityValue
        )
        setCityOrder(cityOrder === 'asc' ? 'desc' : 'asc')
        sortDirection = cityOrder === 'asc' ? 'desc' : 'asc'
        break
      case 'recommend':
        sortedEvents.sort((a, b) =>
          recommendOrder === 'asc'
            ? a.uidEvents - b.uidEvents
            : b.uidEvents - a.uidEvents
        )
        setRecommendOrder(recommendOrder === 'asc' ? 'desc' : 'asc')
        sortDirection = recommendOrder === 'asc' ? 'desc' : 'asc'
        break
      default:
        break
    }

    // 更新状态
    props.setEvents(sortedEvents)
    setSortOrder(sortDirection)
  }

  // 处理按钮点击事件
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
  }

  // SortButton组件
  function SortButton({ sortOrder }) {
    return (
      <button
        onClick={() => {
          setActiveButton('sort')
          setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
          sortEvents('sort')
        }}
        className={`btn no-border rounded-0 text-white ${
          activeButton === 'sort' ? 'active' : ''
        }`}
      >
        排序方式
        <i
          className={`bi ${
            sortOrder === 'asc' ? 'bi-sort-down' : 'bi-sort-up'
          } btn-primary-deep`}
        ></i>
      </button>
    )
  }

  // RecommendButton组件
  function RecommendButton({ recommendOrder }) {
    return (
      <button
        onClick={() => {
          handleButtonClick('recommend')
          sortEvents('recommend')
        }}
        className={`btn ${
          activeButton === 'recommend' ? 'text-primary-deep' : 'text-white'
        } pb-0 rounded-0 no-border ${
          activeButton === 'recommend' ? 'active' : ''
        }`}
      >
        推薦
      </button>
    )
  }

  // CityButton组件
  function CityButton({ cityOrder }) {
    return (
      <button
        onClick={() => {
          handleButtonClick('city')
          sortEvents('city')
        }}
        className={`btn ${
          activeButton === 'city' ? 'text-primary-deep' : 'text-white'
        } pb-0 rounded-0 no-border ${activeButton === 'city' ? 'active' : ''}`}
      >
        地區
      </button>
    )
  }

  // DateButton组件
  function DateButton({ dateOrder }) {
    return (
      <button
        onClick={() => {
          handleButtonClick('date')
          sortEvents('date')
        }}
        className={`btn ${
          activeButton === 'date' ? 'text-primary-deep' : 'text-white'
        } pb-0 rounded-0 no-border ${activeButton === 'date' ? 'active' : ''}`}
      >
        日期
      </button>
    )
  }

  // PriceButton组件
  function PriceButton({ priceOrder }) {
    return (
      <button
        onClick={() => {
          handleButtonClick('price')
          sortEvents('price')
        }}
        className={`btn ${
          activeButton === 'price' ? 'text-primary-deep' : 'text-white'
        } pb-0 rounded-0 no-border ${activeButton === 'price' ? 'active' : ''}`}
      >
        價格
      </button>
    )
  }

  return (
    <selector className="header-m d-none d-sm-block">
      <section className="d-flex justify-content-between">
        <div className="sort_icon">
          <SortButton sortOrder={sortOrder} />
        </div>

        <div className="d-flex">
          <div>
            <RecommendButton recommendOrder={recommendOrder} />
          </div>
          <div>
            <DateButton dateOrder={dateOrder} />
          </div>
          <div>
            <PriceButton priceOrder={priceOrder} />
          </div>
          <div>
            <CityButton cityOrder={cityOrder} />
          </div>
        </div>
      </section>
    </selector>
  )
}
