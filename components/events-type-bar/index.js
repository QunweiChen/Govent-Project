import React, { useState } from 'react'
import CustomEventCard from './event-card'
import { motion } from 'framer-motion'

import Link from 'next/link'
// import { useHistory } from 'react-router-dom'

export default function EventsTypeBar() {
  // const history = useHistory()
  // const handleCategoryClick = () => {
  //   // 更新 selectedCategories 状态
  //   setSelectedCategories({ concert: true })
  //   // history.push('/product/list')
  // }
  return (
    <>
      <div className="d-flex justify-content-center py-5 mb-5">
        <div className="width-1200">
          <h4 className="mb-5 text-center">活動分類</h4>

          <div className="d-flex justify-content-between">
            <CustomEventCard
              backgroundImage="/images/events-type/concert.jpg"
              title="演唱會"
              secondTitle="Concert"
              delay="0.1"
            />
            <CustomEventCard
              backgroundImage="/images/events-type/exhibition.jpg"
              title="展覽"
              secondTitle="Exhibition"
              delay="0.2"
            />
            <CustomEventCard
              backgroundImage="/images/events-type/popup.jpg"
              title="快閃活動"
              secondTitle="Pop up"
              delay="0.3"
            />
            <CustomEventCard
              backgroundImage="/images/events-type/marketplace.jpg"
              title="市集"
              secondTitle="Marketplace"
              delay="0.4"
            />
          </div>
          <div className="mt-2 pt-1 d-flex justify-content-between">
            <CustomEventCard
              backgroundImage="/images/events-type/fans.jpg"
              title="粉絲會"
              secondTitle="Fans"
              delay="0.5"
            />
            <CustomEventCard
              backgroundImage="/images/events-type/lecture.jpg"
              title="課程講座"
              secondTitle="Lecture"
              delay="0.6"
            />
            <CustomEventCard
              backgroundImage="/images/events-type/sports.jpg"
              title="體育賽事"
              secondTitle="Sports"
              delay="0.7"
            />
            <CustomEventCard
              backgroundImage="/images/events-type/sightview.jpg"
              title="景點門票"
              secondTitle="Sight view"
              delay="0.8"
            />
          </div>
        </div>
      </div>
    </>
  )
}
