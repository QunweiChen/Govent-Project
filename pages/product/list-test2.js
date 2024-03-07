import { useEffect } from 'react'
import React, { useState } from 'react'
import axios from 'axios'

import { CiHeart } from 'react-icons/ci'
import { GoSortDesc } from 'react-icons/go'

import { FaHouse } from 'react-icons/fa6'
import { FaRegStar } from 'react-icons/fa'
import { FaTicket } from 'react-icons/fa6'
import { RxPerson } from 'react-icons/rx'

import MyFooter from '@/components/layout/default-layout/my-footer'
import NavbarBottomRwdSm from '@/components/layout/list-layout/navbar-bottom-sm'
import FavIcon from '@/components/layout/list-layout/fav-icon'
import NavbarTopRwdSm from '@/components/layout/list-layout/navbar-top-sm'
import NavbarTopRwd from '@/components/layout/list-layout/navbar-top'
import AlwaysOpenExample from '@/components/layout/list-layout/accordion'
import Sidebar from '@/components/layout/list-layout/sidebar'

import EventCard from '@/components/layout/list-layout/event_card'
import useEvents from '@/hooks/use-event/events'
// import event from '@/data/event/event.json'
// console.log(event)

// 載入分頁元件
import BS5Pagination from '@/components/common/bs5-pagination'

// 載入選項用的json檔案，對應的是資料庫的資料
import StrList from '@/data/event/str.json'

export default function List() {
  const { data } = useEvents()
  console.log(data?.data.posts)

  // 各選項的state
  const [nameLike, setNameLike] = useState('') //關鍵字
  const [catIds, setCatIds] = useState([]) //活動類別(BrandID)
  const [strIds, setStrIds] = useState([]) //城市分類(大小cat)
  const [priceGte, setPriceGte] = useState(1500) //數字
  const [priceLte, setPriceLte] = useState(15000) //數字

  // 主分類(只是方便呈現用，不會送至伺服器)
  const [mainStrIds, setMainStrIds] = useState([]) // 數字陣列

  // 排序(前面為排序欄位，後面參數asc為從小到大，desc為從大到小排序)
  const [orderby, setOrderby] = useState({ sort: 'id', order: 'asc' })

  // 分頁用
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(10)

  // 最後得到的項目
  const [itemTotal, setItemTotal] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [items, setItems] = useState([])

  // 從伺服器載入資料
  const getEvents = async (toFirstPage = false) => {
    // 跳至第一頁
    // 當重新過濾或重置選項，因重新載入資料需要跳至第一頁
    if (toFirstPage) {
      setPage(1)
    }

    // 要送至伺服器的query string參數
    const params = {
      page: toFirstPage ? 1 : page, // 跳至第一頁
      name_like: nameLike,
      cat_ids: catIds.join(','), // 空陣列會變成空字串
      str_ids: strIds.join(','),
      sort: orderby.sort,
      order: orderby.order,
      perpage,
      price_gte: priceGte, //最好給預設值
      price_lte: priceLte, //最好給預設值
    }

    // 用URLSearchParams產生查詢字串
    const searchParams = new URLSearchParams(params)

    const res = await axios.get(
      `http://localhost:3005/api/events?${searchParams.toString()}`
    )

    if (res.data.status === 'success') {
      // 設定獲取頁數總合
      setItemTotal(res.data.data.total)
      // 設定獲取項目
      setItems(res.data.data.events)
      setPageCount(res.data.data.pageCount)
    }
  }
  useEffect(() => {
    // 載入資料
    getEvents()
    // 下面省略eslint多餘檢查
    // eslint-disable-next-line
  }, [page])

  useEffect(() => {
    // 如果沒有子分類，就不用設定
    if (strIds.length === 0) return

    // 先找出所有的主分類id
    const allMainStrIds = StrList.filter((v) => !v.parent_id).map((v) => v.id)

    // iterate all main cat ids
    const existingMainStrIds = []

    // 逐一比對是否有全部子分類
    for (let i = 0; i < allMainStrIds.length; i++) {
      const subIds1 = StrList.filter((v) => v.parent_id === allMainStrIds[i])

      const subIds2 = StrList.filter(
        (v) => v.parent_id === allMainStrIds[i] && strIds.includes(v.id)
      )

      if (subIds1.length === subIds2.length) {
        existingMainStrIds.push(allMainStrIds[i])
      }
    }
    // 設定主分類
    setMainStrIds(existingMainStrIds)
  }, [strIds])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setPage(event.selected + 1)
  }

  const handleLoadData = () => {
    getEvents(true)
  }

  // 呈現資料
  const displayList = (
    <>
      <ul>
        {data?.data.posts.map((v) => {
          return (
            <li key={v.id}>
              {v.name}(str_id:{v.str_id})(price: {v.price})
            </li>
          )
        })}
      </ul>
    </>
  )

  // 呈現分頁
  const pagination = (
    <BS5Pagination
      forcePage={page - 1}
      onPageChange={handlePageClick}
      pageCount={pageCount}
    />
  )
  // 過濾區域
  const filterBlock = (
    <>
      <div>
        <label>
          關鍵字:
          <input
            type="text"
            name="keyword"
            value={nameLike}
            onChange={(e) => {
              setNameLike(e.target.value)
            }}
          />
        </label>{' '}
        <label>
          每頁多少項目:
          <select
            value={perpage}
            onChange={(e) => {
              setPerpage(Number(e.target.value))
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="20">20</option>
          </select>
        </label>{' '}
        <label>
          排序:
          <select
            value={`${orderby.sort},${orderby.order}`}
            onChange={(e) => {
              const selected = e.target.value
              setOrderby({
                sort: selected.split(',')[0],
                order: selected.split(',')[1],
              })
            }}
          >
            <option value="id,asc">預設排序(id由小至大)</option>
            <option value="id,desc">ID排序(id由大至小)</option>
            <option value="price,asc">價格排序(price由低至高)</option>
            <option value="price,desc">價格排序(price由高至低)</option>
          </select>
        </label>
      </div>
      <div>
        分類:
        {data?.data.posts.map((v) => {
          return (
            <label key={v.id} className="mx-1">
              <input
                type="checkbox"
                value={v.id}
                checked={catIds.includes(v.id)}
                onChange={(e) => {
                  // 注意，要轉數字，為了保持數字陣列
                  const targetValue = Number(e.target.value)
                  if (catIds.includes(targetValue)) {
                    setCatIds(catIds.filter((v2) => v2 !== targetValue))
                  } else {
                    setCatIds([...catIds, targetValue])
                  }
                }}
              />
              {v.activity_name}({v.id})
            </label>
          )
        })}
      </div>
      <div>
        城市(主分類):
        {StrList.filter((v) => !v.parent_id).map((v) => {
          return (
            <label key={v.id} className="mx-1">
              <input
                type="checkbox"
                value={v.id}
                checked={mainStrIds.includes(v.id)}
                onChange={(e) => {
                  const targetId = Number(e.target.value)
                  // 尋找第二層的id
                  const subStrIds = StrList.filter(
                    (v2) => v2.parent_id === targetId
                  ).map((v3) => v3.id)
                  // 注意，要轉數字，為了保持數字陣列

                  if (mainStrIds.includes(targetId)) {
                    setMainStrIds(mainStrIds.filter((v2) => v2 !== targetId))
                    // 從子陣列中移除
                    const newStrIds = strIds.filter(
                      (el) => !subStrIds.includes(el)
                    )
                    setStrIds(newStrIds)
                  } else {
                    setMainStrIds([...mainStrIds, targetId])
                    // 從子陣列中加入
                    setStrIds([...strIds, ...subStrIds])
                  }
                }}
              />
              {v.name}({v.id})
            </label>
          )
        })}
        <br />
        分類(子分類):
        {StrList.filter((v) => v.parent_id).map((v) => {
          return (
            <label key={v.id} className="mx-1">
              <input
                type="checkbox"
                value={v.id}
                checked={strIds.includes(v.id)}
                onChange={(e) => {
                  // 注意，要轉數字，為了保持數字陣列
                  const targetValue = Number(e.target.value)
                  if (strIds.includes(targetValue)) {
                    setStrIds(strIds.filter((v2) => v2 !== targetValue))
                  } else {
                    setStrIds([...strIds, targetValue])
                  }
                }}
              />
              {v.name}({v.id})
            </label>
          )
        })}
      </div>
      <div>
        價格(1500~10000)
        <label>
          從:{' '}
          <input
            type="number"
            placeholder="1500"
            value={priceGte}
            onChange={(e) => {
              setPriceGte(Number(e.target.value))
            }}
          />
        </label>
        <label>
          到:{' '}
          <input
            type="number"
            placeholder="15000"
            value={priceLte}
            onChange={(e) => {
              setPriceLte(Number(e.target.value))
            }}
          />
        </label>
      </div>
      <div>
        <button onClick={handleLoadData}>從伺服器載入資料</button>
      </div>
    </>
  )

  return (
    <>
      <useEvents>
        <nav className="header container navbar-expand mt-5 w-1200">
          <h5 className="d-flex justify-content-between">
            <div className="bg-bg-gray-secondary rounded-3">
              <p className="mx-4 my-2">
                目前共有 {data?.data.posts.length} 筆 結果
              </p>
            </div>
            <section>
              <NavbarTopRwd />
            </section>
          </h5>
        </nav>
        <nav className="header-m">
          <NavbarTopRwdSm />
        </nav>
        <main className="container w-1200">
          <div className="row">
            <div className="sidebar me-3 col-md-2 col-3">
              <Sidebar />
              <hr />
              <div className="downSidebar no-border">
                <div className="downSidebar no-border">
                  <h6>地區</h6>
                  {StrList.filter((v) => v.parent_id).map((v) => (
                    <div
                      className="accordion d-none"
                      id={`accordionExample_${v.id}`}
                      key={v.id}
                    >
                      <div className="accordion-item bg-bg-gray text-white">
                        <h2 className="accordion-header" id={`heading_${v.id}`}>
                          <button
                            className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse_${v.id}`}
                            aria-expanded="true"
                            aria-controls={`collapse_${v.id}`}
                          >
                            <input
                              type="checkbox"
                              className="form-check-input"
                              value={v.id}
                              checked={mainStrIds.includes(v.id)}
                              onChange={(e) => {
                                const targetId = Number(e.target.value)
                                const subStrIds = StrList.filter(
                                  (v2) => v2.parent_id === targetId
                                ).map((v3) => v3.id)

                                if (mainStrIds.includes(targetId)) {
                                  setMainStrIds(
                                    mainStrIds.filter((v2) => v2 !== targetId)
                                  )
                                  const newStrIds = strIds.filter(
                                    (el) => !subStrIds.includes(el)
                                  )
                                  setStrIds(newStrIds)
                                } else {
                                  setMainStrIds([...mainStrIds, targetId])
                                  // 将子分类加入strIds中
                                  setStrIds([...strIds, ...subStrIds])
                                }
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`flexCheck_${v.id}`}
                            >
                              {v.name} ({v.id})
                            </label>
                          </button>
                        </h2>
                        <div
                          id={`collapse_${v.id}`}
                          className="accordion-collapse collapse show"
                          aria-labelledby={`heading_${v.id}`}
                          data-bs-parent={`#accordionExample_${v.id}`}
                        >
                          <div className="accordion-body">
                            {StrList.filter((v2) => v2.parent_id === v.id).map(
                              (subCategory) => (
                                <div
                                  key={subCategory.id}
                                  className="form-check"
                                >
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`flexCheck_${subCategory.id}`}
                                    value={subCategory.id}
                                    checked={strIds.includes(subCategory.id)}
                                    onChange={(e) => {
                                      const targetValue = Number(e.target.value)
                                      if (strIds.includes(targetValue)) {
                                        setStrIds(
                                          strIds.filter(
                                            (v2) => v2 !== targetValue
                                          )
                                        )
                                      } else {
                                        setStrIds([...strIds, targetValue])
                                      }
                                    }}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`flexCheck_${subCategory.id}`}
                                  >
                                    {subCategory.name} ({subCategory.id})
                                  </label>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <AlwaysOpenExample />
              </div>
            </div>
            <div className="col">
              <div className="cardList row g-3">
                {/* <EventCard /> */}
                {displayList}
              </div>

              <footer className="d-flex justify-content-center m-3">
                <div
                  className="page_nav btn-toolbar"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <div className="btn-group " role="group" aria-label="group">
                    <button
                      type="button"
                      className="btn btn-normal-gray"
                      aria-label="previous"
                    >
                      &laquo;
                    </button>
                    <button type="button" className="btn btn-primary">
                      1
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary text-white"
                    >
                      2
                    </button>
                    <button type="button" className="btn btn-secondary">
                      3
                    </button>
                    <button type="button" className="btn btn-secondary">
                      4
                    </button>
                    <button type="button" className="btn btn-secondary">
                      5
                    </button>
                    <button type="button" className="btn btn-secondary">
                      6
                    </button>
                    <button
                      type="button"
                      className="btn btn-normal-gray"
                      aria-label="next"
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
      </useEvents>

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
