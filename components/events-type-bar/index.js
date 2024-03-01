import React, { useState } from 'react'
import CustomEventCard from './event-card'


export default function EventsTypeBar() {
  return (
    <>
        <div className="d-flex justify-content-center py-5 mb-5">
          <div className="width-1200">
            <h4 className='mb-5 text-center'>
              活動分類
            </h4>

            <div className="d-flex justify-content-between">
              <CustomEventCard
                backgroundImage="/images/events-type/concert.jpg"
                title="演唱會"
                secondTitle="Concert"
              />
              <CustomEventCard
                backgroundImage="/images/events-type/exhibition.jpg"
                title="展覽"
                secondTitle="Exhibition"
              />
              <CustomEventCard
                backgroundImage="/images/events-type/popup.jpg"
                title="快閃活動"
                secondTitle="Pop up"
              />
              <CustomEventCard
                backgroundImage="/images/events-type/marketplace.jpg"
                title="市集"
                secondTitle="Marketplace"
              />
            </div>
            <div className="mt-3 d-flex justify-content-between">
              
              <CustomEventCard
                backgroundImage="/images/events-type/fans.jpg"
                title="粉絲會"
                secondTitle="Fans"
              />
              <CustomEventCard
                backgroundImage="/images/events-type/lecture.jpg"
                title="課程講座"
                secondTitle="Lecture"
              />
              <CustomEventCard
                backgroundImage="/images/events-type/sports.jpg"
                title="體育賽事"
                secondTitle="Sports"
              />
              <CustomEventCard
                backgroundImage="/images/events-type/sightview.jpg"
                title="景點門票"
                secondTitle="Sight view"
              />
            </div>
          </div>
        </div>
      
    </>
  )
}
