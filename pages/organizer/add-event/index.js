import React from 'react'
import OrganizerLayout from '@/components/layout/organizer-layout'
import OrganizerSidebar from '@/components/organizer/organizer-sidebar'
import OrganizerTerms from '@/components/organizer/organizer-terms'
import Form from 'react-bootstrap/Form'
import Link from 'next/link'
import OrganizerTopBar from '@/components/organizer/organizer-top-bar'

export default function OrganizerAddEvent() {
  return (
    <>
      <div className="d-flex organizer-container">
        <OrganizerSidebar />
        <div className="w-100 bg-bg-gray organizer-main d-flex flex-column">
        <OrganizerTopBar title="新增活動"/>
          <div className="d-flex flex-column align-items-center on-main justify-content-center">
            <h5 className="mb-4">活動上架規範同意書</h5>
            <div className="p-4 border border-normal-gray rounded-4 terms-container mb-3">
              <OrganizerTerms />
            </div>
            <Form.Check // prettier-ignore
            className='mb-3'
              type="checkbox"
              id="1"
              label={`本人已詳細閱讀，並同意以上條款`}
            />
            <div>
                <Link href="add-event/form"><button className='btn btn-primary'>繼續</button></Link>
            </div>
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
          .on-main {
            background-color: var(--bg-gray-secondary-color);
            border-radius: 10px;
            flex: 1;
          }
          .terms-container {
            width: 900px;
            height: 500px;
            overflow: scroll;
          }
        `}
      </style>
    </>
  )
}

OrganizerAddEvent.getLayout = function (page) {
  return <OrganizerLayout>{page}</OrganizerLayout>
}
