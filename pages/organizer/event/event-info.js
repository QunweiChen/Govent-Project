import React, { useState } from 'react'
import OrganizerLayout from '@/components/layout/organizer-layout'
import OrganizerEventSidebar from '@/components/organizer/organizer-event-sidebar'
import OrganizerTopBar from '@/components/organizer/organizer-top-bar'

export default function OrganizerEvent() {
  const [selectedButton, setSelectedButton] = useState(1)

  const handleRadioChange = (value) => {
    setSelectedButton(value)
  }

  return (
    <>
      <div className="d-flex organizer-container">
        <OrganizerEventSidebar />
        <div className="w-100 bg-bg-gray organizer-main d-flex flex-column">
          <OrganizerTopBar title="活動資訊總覽" />
          <div className="event-nav flex-grow-1 d-flex flex-column">
            
          </div>
        </div>
      </div>
      <style global jsx>
        {`
          body {
            background-color: var(--bg-dark-color);
            color: var(--normal-white-color);
          }
          .sm-p {
            color: var(--normal-gray-light-color);
          }
          .organizer-container {
            width: 100%;
            min-height: 100vh;
          }
          .organizer-main {
            border-radius: 30px 0 0 30px;
            padding: 25px;
            height: 100vh;
          }
          .event-nav {
            height: 100%;
            .nav-item {
              background-color: var(--bg-gray-light-color);
              margin-right: 5px;
              border-radius: 5px 5px 0 0;
              .nav-link {
                color: white;
                width: 130px;
                border: 0px;
                border-top: 4px solid var(--none);
              }
              .nav-link:focus,
              .nav-link:hover {
                 {
                  /* border-color: var(--none); */
                }
                border: 0px;
                border-top: 4px solid var(--primary-color);
              }
              .nav-link.active {
                background-color: var(--bg-gray-secondary-color);
                border: 0px;
                border-top: 4px solid var(--primary-color);
                color: var(--primary-color);
              }
            }
          }
          .tab-content {
            flex: 1;
            .tab-pane {
              height: 100%;
              border-radius: 0 10px 10px 10px;
              padding: 10px 15px;
            }
          }
          .on-search {
            width: 180px;
            height: 31px;
          }
          .on-list {
            border: 1px solid var(--normal-gray-color);
            border-radius: 10px;
            height: 140px;
            .on-list-img {
              border-radius: 5px;
              width: 160px;
              height: 120px;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        `}
      </style>
    </>
  )
}

OrganizerEvent.getLayout = function (page) {
  return <OrganizerLayout>{page}</OrganizerLayout>
}
