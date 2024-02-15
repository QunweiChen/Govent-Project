import React from 'react'
import InfoData from './info-data'

export default function ProductInfo() {
  return (
    <div className="product-info-data ">
    <h5>
      <i className="bi bi-card-text"></i>商品詳情
    </h5>
    <InfoData/>
    <InfoData/>
  </div>
  )
}
