// import { useEffect } from 'react'
import React, { useState } from 'react'

import useEvents from '@/hooks/use-event/events'
import event from '@/data/event/event.json'

export default function List() {
  const { data } = useEvents()
  console.log(data?.data.posts)

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
            <div className="col">
              <div className="cardList row g-3">
                {data?.data.posts.map((v) => (
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
                          {v.event_name}
                        </h5>
                        <div className="">
                          <h6 className="text-primary-deep">$1200起</h6>
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
                  </div>
                ))}
              </div>

            </div>
          </div>
        </main>
        <NavbarBottomRwdSm />
        {pagination}
      </useEvents></>)}
