import React, { use, useEffect, useState } from 'react'
import {
  Row,
  Col,
  Tab,
  Tabs,
  Badge,
} from 'react-bootstrap'
import Link from 'next/link'
import { motion } from 'framer-motion'

import OrganizerLayout from '@/components/layout/organizer-layout'
import OrganizerSidebar from '@/components/organizer/organizer-sidebar'
import OrganizerTopBar from '@/components/organizer/organizer-top-bar'

export default function OrganizerEvent() {
    const [formData, setFormData] = useState({
        organizer_type: '',
        name: '',
        bank_code: '',
        bank_branch: '',
        bank_name: '',
        amount_number: '',
        owner_name: '',
        business_invoice: '',
      })



  return (
    <>
      <div className="d-flex organizer-container">
        <OrganizerSidebar />
        <div className="w-100 bg-bg-gray organizer-main d-flex flex-column">
          <OrganizerTopBar title="前台資訊編輯" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="event-nav flex-grow-1 d-flex flex-column"
          >
            <Row>

            </Row>
          </motion.div>
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
            width: 250px;
            height: 30px;
          }
          .on-list {
            border: 1px solid var(--normal-gray-color);
            border-radius: 5px;
            height: 130px;
            .on-list-img {
              border-radius: 5px;
              width: 160px;
              height: 100px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
              }
            }
          }
          .banner {
            position: relative;
            .badge {
              position: absolute;
              top: 12px;
              left: -8px;
            }
          }
        `}
      </style>
    </>
  )
}

OrganizerEvent.getLayout = function (page) {
  return <OrganizerLayout title='前台資訊編輯'>{page}</OrganizerLayout>
}
