import React from 'react'

export default function InfoData() {
  return (
    <div className="product-info d-flex mb-3 bg-bg-gray-secondary rounded-4 px-4 py-3 justify-content-around">
      <div className="product-image col-md-3 ">
        <img
          src="/images/product/detail/info-1.webp"
          alt=""
          style={{ width: '100%' }}
          className='rounded-3'
        />
      </div>
      <div className="product-content col-md-8" >
        <div className="product-title mb-1">
          YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024 Solo
          Concert in Taipei
        </div>
        <div className="product-type mb-1">1F 站位</div>
        <div className="product-date d-flex mb-1">
          <div className="date-range d-flex">
            <i className="bi bi-calendar-week text-primary"></i>
            <p>2024-01-21</p>
          </div>
          <div className="date-time d-flex">
            <i className="bi bi-clock text-primary"></i>
            <p>18:00</p>
          </div>
          <div className="product-people d-flex">
            <i className="bi bi-person-fill text-primary"></i>
            <p>人數X2</p>
          </div>
        </div>
      </div>
    </div>
  )
}
