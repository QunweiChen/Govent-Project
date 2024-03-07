// import { useEffect } from 'react'
import React, { useState } from 'react'

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
import SidebarDown from '@/components/layout/list-layout/sidebar_down';

import useEvents from '@/hooks/use-event/events'
import event from '@/data/event/event.json'
import catOptions from '@/data/product/Category.json'

export default function List() {
  const { data } = useEvents()
  console.log(data?.data.posts)

  //篩選條件
  const [filterEventType, setFilterEventType] = useState('');
  const filteredPosts = data?.data.posts.filter(post => 
    filterEventType ? post.event_type_id === filterEventType : true
  );

  // 篩選UI元件
  const FilterUI = () => (
    <div>
      <select onChange={(e) => setFilterEventType(e.target.value)} value={filterEventType}>
        <option value="">所有類型</option>
        {/* 假設有三種事件類型 */}
        <option value="1">類型1</option>
        <option value="2">類型2</option>
        <option value="3">類型3</option>
      </select>
    </div>
  );

  const allMainCatIds = catOptions
  .filter((v) => !v.parent_id)
  .map((v) => v.id)

  for (let i = 0; i < allMainCatIds.length; i++) {
    const subIds1 = catOptions.filter((v) => v.parent_id === allMainCatIds[i])

    const subIds2 = catOptions.filter(
      (v) => v.parent_id === allMainCatIds[i] && catIds.includes(v.id)
    )

    if (subIds1.length === subIds2.length) {
      existingMainCatIds.push(allMainCatIds[i])
    }
  }

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
              <Sidebar/>
              <hr />
              <div className="downSidebar no-border">
                <h6>地區</h6>
                <div className=" d-none accordion" id="accordionExample">
                  {/* North */}
                  <div className="accordion-item bg-bg-gray text-white">
                    {/* title */}
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <input type="checkbox" className="form-check-input" />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          北部地區
                        </label>
                      </button>
                    </h2>

                    {/* selection */}
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            台北市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            新北市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            桃園市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            基隆市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            新竹市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            新竹縣
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            宜蘭縣
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* middle */}
                  <div className="accordion-item bg-bg-gray text-white">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <input type="checkbox" className="form-check-input" />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          中部地區
                        </label>
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            苗栗縣
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            台中市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            南投縣
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            彰化縣
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            雲林縣
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* South */}
                  <div className="accordion-item bg-bg-gray text-white">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <input type="checkbox" className="form-check-input" />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          南部地區
                        </label>
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            嘉義縣
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            嘉義市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            台南市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            高雄市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            屏東縣
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* East */}
                  <div className="accordion-item bg-bg-gray text-white">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <input type="checkbox" className="form-check-input" />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          東部地區
                        </label>
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            花蓮縣
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            台東縣
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item bg-bg-gray text-white">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <input type="checkbox" className="form-check-input" />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          離島地區
                        </label>
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                        {catOptions
          .filter((v) => v.parent_id)
          .map((v) => {
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
                          {v.name}({v.id})
                        </label>
                        )
          })}
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
                <AlwaysOpenExample />
              </div>
              <SidebarDown/>
            </div>
            <div className="col">
            <FilterUI />
              <div className="cardList row g-3">
              {filteredPosts.map((v) => (
                  <div key={v.id} className="col-md-4 col-sm-6 ">
                    <div className="card  stretched-link bg-bg-gray-secondary text-white px-0 no-border">
                      <figure>
                        <img
                          src={`/images/product/list/${v.image?.split(',')[0]}`}
                          alt=""
                          className="card-img-top"
                        />
                      </figure>
                      <FavIcon />

                      <div className="card-body ">
                        <p className=" text-normal-gray-light">
                          {v.event_type_id} 演唱會
                        </p>
                        <h5 className="card-title">
                          {/* NOneRepublic 共和世代 高雄巨蛋 */}
                          {v.event_name}
                        </h5>
                        <div className="">
                          <h6 className="text-primary-deep">$1200起</h6>
                          <div className="d-flex justify-content-between">
                            <p className="text-normal-gray-light mb-2">
                              {v.str}
                            </p>
                            <span className="text-normal-gray-light">
                              {/* 2023-06-01 */}
                              {v.start_date.substring(0, 10)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
        .header-m {
           {
            /* display: none; */
          }
        }
        .sidebar {
           {
            /* width: 300px; */
          }
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
        .footer-m {
           {
            /* display: none; */
          }
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
          .footer_m {
             {
              /* display: contents; */
            }
          }
           {
            /* .product_card {
              width: auto;
            } */
          }
        }
         {
          /* selector button {
          background: none;
          color: white;
          border-bottom: 2px;
          font-size: 16px;
          padding: 5px 22px;
        }
        selector button:hover {
          border-bottom: 2px solid #c55708;
        }
        selector button shover::after {
          border-bottom: 2px solid #c55708;
        } */
        }
      `}</style>
    </>
  )
}
