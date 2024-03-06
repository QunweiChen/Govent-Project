import React, { useState } from 'react'
import NavbarTopRwd from '@/components/layout/list-layout/navbar-top-sm'
import useEvents from '@/hooks/use-event/events'
import FavIcon from '@/components/layout/list-layout/fav-icon'

export default function List() {
  const { data } = useEvents()
  // console.log(data.data?.posts)
  console.log(data?.data.posts)
  return (
    <>
      <useEvents>
        <nav>
          <NavbarTopRwd />
        </nav>
        <div className="container">
          <h1 className="text-white">
            {data?.data.posts.map((post) => (
              <div key={post.id} className="col-md-4 col-sm-6 ">
                <div className="card  stretched-link bg-bg-gray-secondary text-white px-0 no-border">
                  <figure>
                    <img
                      src={`/images/product/list/${post.image?.split(',')[0]}`}
                      // src="{post.image}"
                      alt=""
                      className="card-img-top"
                    />
                  </figure>
                  <FavIcon />

                  <div className="card-body p-">
                    <p className="text-normal-gray-light">
                      {post.event_type_id} 演唱會
                    </p>
                    <h5 className="card-title">{post.event_name}</h5>
                    <h6 className="text-primary-deep">$1200起</h6>
                    <div className="d-flex justify-content-between">
                      <p className="text-normal-gray-light mb-2">{post.str}</p>
                      <span className="text-normal-gray-light">
                        {post.start_date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </h1>
        </div>
      </useEvents>

      <style global jsx>{`
        body {
          background-color: #151515;
          color: #fff;
          border: border-inline;
        }
      `}</style>
    </>
  )
}
