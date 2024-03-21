import { clearConfigCache } from 'prettier'
import React from 'react'
import { Image } from 'react-bootstrap'
export default function ProductInfo({ productData = {} }) {
  return (
    <div className="product-info-data ">
      <h5>
        <i className="bi bi-card-text"></i>商品詳情
      </h5>
      {productData.map((v, i) => {
        return (
          <div
            key={i}
            className="product-info d-flex mb-3 bg-bg-gray-secondary rounded-4 px-4 py-3 justify-content-around"
          >
            <div className="product-image col-md-3 ">
              <Image
                src={`http://localhost:3005/images/banner/${v.images}`}
                alt=""
                className="rounded-3 overflow-hidden "
                style={{ height: '150px', width: '100%' }}
              />
            </div>
            <div className="product-content col-md-8 d-flex flex-column justify-content-between">
              <div className="product-title mb-1 h6">{v.eventName}</div>
              <div className="product-type mb-1 p">{v.ticketName}</div>
              <div className="product-date d-flex ">
                <div className="date-range d-flex me-2">
                  <i className="bi bi-calendar-week text-primary me-1"></i>
                  <p className="d-flex align-items-center p">
                    {v.holdingTime.split(' ')[0]}
                  </p>
                </div>
                <div className="date-time d-flex me-2">
                  <i className="bi bi-clock text-primary me-1"></i>
                  <p className="d-flex align-items-center p">
                    {v.holdingTime.split(' ')[1]}
                  </p>
                </div>
                <div className="product-people d-flex me-1 me-2">
                  <i className="bi bi-person-fill text-primary"></i>
                  <p className="d-flex align-items-center p">{v.qty}張</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
