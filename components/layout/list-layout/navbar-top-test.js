import React, { useState, useEffect } from 'react'
// 引入活動資料
import EventCard from '@/components/layout/list-layout/event_card'
// import useEvents from '@/hooks/use-event'
// import Dropdown from 'react-bootstrap/Dropdown'
export default function NavbarTopRwdSm(props) {
  const [sortOrder, setSortOrder] = useState('asc');
  const [cityOrder, setCityOrder] = useState('asc');
  const [dateOrder, setDateOrder] = useState('asc');
  const [priceOrder, setPriceOrder] = useState('asc');

  // 升降序排序函数
  const sortEvents = (sortingMethod) => {
    const sortingMap = {
      date: { orderState: dateOrder, setOrderState: setDateOrder },
      price: { orderState: priceOrder, setOrderState: setPriceOrder },
      city: { orderState: cityOrder, setOrderState: setCityOrder },
    };

    const { orderState, setOrderState } = sortingMap[sortingMethod];

    const sortDirection = orderState === 'asc' ? 'desc' : 'asc';

    // 执行排序逻辑
    const sortedEvents = [...props.events].sort((a, b) => {
      if (sortingMethod === 'date') {
        return orderState === 'asc' ? a.date - b.date : b.date - a.date;
      } else if (sortingMethod === 'price') {
        return orderState === 'asc' ? a.price - b.price : b.price - a.price;
      } else if (sortingMethod === 'city') {
        return orderState === 'asc' ? a.cityValue - b.cityValue : b.cityValue - a.cityValue;
      }
    });

    // 更新状态
    props.setEvents(sortedEvents);
    setOrderState(sortDirection);
  };

  // SortButton组件
  function SortButton({ onSort, sortOrder }) {
    return (
      <button
        onClick={() => {
          onSort();
          // 重置其他按钮的排序状态
          setCityOrder('asc');
          setDateOrder('asc');
          setPriceOrder('asc');
        }}
        className={`btn no-border rounded-0 text-white ${
          sortOrder === 'asc' ? 'active' : ''
        }`}
      >
        排序方式
        <i className={`bi ${sortOrder === 'asc' ? 'bi-sort-down' : 'bi-sort-up '} btn-primary-deep`}></i>
      </button>
    );
  }

  // CityButton组件
  function CityButton({ onCity }) {
    return (
      <button
        onClick={() => onCity()}
        className={`btn ${cityOrder === 'asc' ? 'text-primary-deep' : 'text-white'} pb-0 rounded-0 no-border ${
          cityOrder === 'asc' ? 'active' : ''
        }`}
      >
        地區
      </button>
    );
  }

  // DateButton组件
  function DateButton({ onDate }) {
    return (
      <button
        onClick={() => onDate()}
        className={`btn ${dateOrder === 'asc' ? 'text-primary-deep' : 'text-white'} pb-0 rounded-0 no-border ${
          dateOrder === 'asc' ? 'active' : ''
        }`}
      >
        日期
      </button>
    );
  }

  // PriceButton组件
  function PriceButton({ onPrice }) {
    return (
      <button
        onClick={() => onPrice()}
        className={`btn ${priceOrder === 'asc' ? 'text-primary-deep' : 'text-white'} pb-0 rounded-0 no-border ${
          priceOrder === 'asc' ? 'active' : ''
        }`}
      >
        價格
      </button>
    );
  }

  return (
    <>
      <selector className="header-m d-none d-sm-block">
        <section className="d-flex justify-content-between">
          <div className="sort_icon">
            <SortButton onSort={() => sortEvents('sort')} sortOrder={sortOrder} />
          </div>

          <div className="d-flex">
            <div>
              <button className="btn text-primary-deep pb-0 rounded-0 no-border">推薦</button>
            </div>
            <div>
              <DateButton onDate={() => sortEvents('date')} />
            </div>
            <div>
              <PriceButton onPrice={() => sortEvents('price')} />
            </div>
            <div>
              <CityButton onCity={() => sortEvents('city')} />
            </div>
          </div>
        </section>
      </selector>
    </>
  );
}
