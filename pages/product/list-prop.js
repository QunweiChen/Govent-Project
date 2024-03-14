import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// 引入icon
import { CiHeart } from 'react-icons/ci'
import { GoSortDesc } from 'react-icons/go'
import { FaHouse } from 'react-icons/fa6'
import { FaRegStar } from 'react-icons/fa'
import { FaTicket } from 'react-icons/fa6'
import { RxPerson } from 'react-icons/rx'

//引入components
import MyFooter from '@/components/layout/default-layout/my-footer'
import NavbarBottomRwdSm from '@/components/layout/list-layout/navbar-bottom-sm'
// import FavIcon from '@/components/layout/list-layout/fav-icon'
import NavbarTopRwdSm from '@/components/layout/list-layout/navbar-top-sm'
import NavbarTopRwd from '@/components/layout/list-layout/navbar-top'
import Sidebar from '@/components/layout/list-layout/sidebar'
import PageBar from '@/components/layout/list-layout/pagebar'

//篩選用components
import FilterBar from '@/components/layout/list-layout/FilterBar'

// 引入活動資料
import EventCard from '@/components/layout/list-layout/event_card'
import useEvents from '@/hooks/use-event'

// 假活動資料
// import event from '@/data/event/event.json'
// console.log(event)

export default function List() {
  const { data } = useEvents()

  console.log(data)

  //活動資料
  // 1. 從伺服器來的原始資料
  const [events, setEvents] = useState([])
  // 分頁
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(15)

  useEffect(() => {
    if (data) {
      setEvents(data)
    }
  }, [data])
  console.log(events)

  //回調函式
  // 筛选结果状态
  const [filteredEvents, setFilteredEvents] = useState([])

  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedRegions, setSelectedRegions] = useState([])

  // 处理升降密排序的回调函数
  const handleSortEvents = (sortedEvents) => {
    setFilteredEvents(sortedEvents)
  }
  // 处理地区排序的回调函数
  const handleCityEvents = (citySortedEvents) => {
    setFilteredEvents(citySortedEvents)
  }
  // 处理日期排序的回调函数
  const handleDateEvents = (dateSortedEvents) => {
    setFilteredEvents(dateSortedEvents)
  }
  // 处理价格排序的回调函数
  const handlePriceEvents = (priceSortedEvents) => {
    setFilteredEvents(priceSortedEvents)
  }
  // sidebar回調
  const handleFilterChange = (selectedCategories, selectedRegions) => {
    console.log('Selected categories:', selectedCategories)
    console.log('Selected regions:', selectedRegions)
    setSelectedCategories(selectedCategories)
    setSelectedRegions(selectedRegions)
  }

  // 根据筛选条件过滤事件
  const getFilteredEvents = () => {
    return events.filter((event) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(event.category_name)
      const regionMatch =
        selectedRegions.length === 0 || selectedRegions.includes(event.str)
      return categoryMatch && regionMatch
    })
  }

  const newFilteredEvents = getFilteredEvents()

  // Get current events for pagination
  const indexOfLastEvent = currentPage * postsPerPage
  const indexOfFirstEvent = indexOfLastEvent - postsPerPage
  const currentEvents = newFilteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  )

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      {/* <useEvents> */}
      <nav className="header container navbar-expand mt-5 w-1200">
        <h5 className="d-flex justify-content-between">
          <div className="bg-bg-gray-secondary rounded-3">
            <p className="mx-4 my-2">目前共有 {data?.length} 筆 結果</p>
          </div>
          <section>
            <NavbarTopRwd
              events={events} //傳原始資料至props
              setEvents={setEvents} // 将更新事件列表的函数传递给子组件
              //回調元素
              onSort={handleSortEvents}
              onCity={handleCityEvents}
              onDate={handleDateEvents}
              onPrice={handlePriceEvents}
            />
          </section>
        </h5>
      </nav>
      <nav className="header-m">
        <NavbarTopRwdSm />
      </nav>
      <main className="container w-1200">
        <div className="row">
          <div className="sidebar me-3 col-md-2 col-3">
            <Sidebar
              events={events} //傳原始資料至props
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="col">
            <div className="cardList row g-3">
              {currentEvents.map((v) => (
                <div key={v.id} className="col-md-4 col-sm-6 ">
                  <Link
                    href={`/product/product-info?id=${v.id}`}
                    className="col-md-4 col-sm-6"
                    key={v.id}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="card  stretched-link bg-bg-gray-secondary text-white px-0 no-border">
                      <figure>
                        <img
                          src={`/images/product/list/${v.image?.split(',')[0]}`}
                          alt=""
                          className="card-img-top"
                        />
                      </figure>
                      {/* <FavIcon id={v.id} /> */}
                      {/* <FavFcon/> */}

                      <div className="card-body">
                        <p className=" text-normal-gray-light">
                          {v.category_name}
                        </p>
                        <h5 className="card-title">{v.event_name}</h5>
                        <div className="">
                          <h6 className="text-primary-deep">
                            ${v.price || 0}起
                          </h6>
                          <div className="d-flex justify-content-between">
                            <p className="text-normal-gray-light mb-2">
                              {v.str}
                            </p>
                            <span className="text-normal-gray-light">
                              {v.start_date.substring(0, 10)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <footer className="d-flex justify-content-center m-3">
              <div
                className="page_nav btn-toolbar"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div className="btn-group" role="group" aria-label="group">
                  <button
                    type="button"
                    className="btn btn-normal-gray"
                    aria-label="previous"
                    onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                  >
                    &laquo;
                  </button>

                  {Array.from(
                    //要用篩選後的數輛計算依據events(全)=>newFilteredEvents(篩選結果)
                    {
                      length: Math.ceil(
                        newFilteredEvents?.length / postsPerPage
                      ),
                    },
                    (_, number) => (
                      <button
                        key={number}
                        onClick={() => paginate(number + 1)}
                        className={`btn ${
                          number + 1 === currentPage
                            ? 'btn-primary'
                            : 'btn-secondary text-white'
                        }`}
                      >
                        {number + 1}
                      </button>
                    )
                  )}
                  <button
                    type="button"
                    className="btn btn-normal-gray"
                    aria-label="next"
                    onClick={() =>
                      currentPage <
                        Math.ceil(newFilteredEvents?.length / postsPerPage) &&
                      paginate(currentPage + 1)
                    }
                  >
                    &raquo;
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>
      <NavbarBottomRwdSm />
      {/* </useEvents> */}

      <style global jsx>{`
        body {
          background-color: #151515;
          color: #fff;
          border: border-inline;
        }
        .w-1200 {
          max-width: 1200px;
        }
        figure img {
          width: 268px;
          height: 180px;
          overflow: hidden;
          object-fit: cover;
          width: 100%;
        }
        .cardList i {
          background-color: #404040;
          opacity: 0.5;
        }

        .test {
          padding: 0px;
          height: 0px;
          background-color: #151515;
        }
        .test :hover {
          border-bottom: 3px solid #c55708;
        }

        @media screen and (min-width: 575px) {
          .header-m {
            display: none;
          }
          .footer-m {
            display: none;
          }
        }
        @media screen and (max-width: 576px) {
          .header {
            display: none;
          }
          .sidebar {
            display: none;
          }
          .page_nav {
            display: none;
          }
          .cardList {
            margin-bottom: 80px;
          }
        }
      `}</style>
    </>
  )
}