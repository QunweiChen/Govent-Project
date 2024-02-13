import React from 'react'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack';

export default function EventsBar() {
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="width-1200">
          <h4>
            <i className="bi bi-fire text-primary pe-2"></i>熱門活動
          </h4>
          
          <div className='mt-4 d-flex justify-content-between'>
            <Card style={{ width: '280px' }} className='custom-card text-white'>
              <Card.Img variant="top" src="https://cc.tvbs.com.tw/img/upload/2023/10/20/20231020110545-49d73a88.jpg" />
              <Card.Body className='bg-bg-gray'>
                <Card.Title className='h6'>Ed Sheeran 紅髮艾德 高雄國家體育場 </Card.Title>
                <div className='d-flex justify-content-between align-items-center mt-3'>
                  <p className='text-normal-gray-light'>演唱會</p>
                  <p className='text-primary-light'>NT$800 起</p>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: '280px' }} className='custom-card text-white'>
              <Card.Img variant="top" src="https://cc.tvbs.com.tw/img/upload/2023/10/20/20231020110545-49d73a88.jpg" />
              <Card.Body className='bg-bg-gray'>
                <Card.Title className='h6'>Ed Sheeran 紅髮艾德 高雄國家體育場 </Card.Title>
                <div className='d-flex justify-content-between align-items-center mt-3'>
                  <p className='text-normal-gray-light'>演唱會</p>
                  <p className='text-primary-light'>NT$800 起</p>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: '280px' }} className='custom-card text-white'>
              <Card.Img variant="top" src="https://cc.tvbs.com.tw/img/upload/2023/10/20/20231020110545-49d73a88.jpg" />
              <Card.Body className='bg-bg-gray'>
                <Card.Title className='h6'>Ed Sheeran 紅髮艾德 高雄國家體育場 </Card.Title>
                <div className='d-flex justify-content-between align-items-center mt-3'>
                  <p className='text-normal-gray-light'>演唱會</p>
                  <p className='text-primary-light'>NT$800 起</p>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: '280px' }} className='custom-card text-white'>
              <Card.Img variant="top" src="https://cc.tvbs.com.tw/img/upload/2023/10/20/20231020110545-49d73a88.jpg" />
              <Card.Body className='bg-bg-gray'>
                <Card.Title className='h6'>Ed Sheeran 紅髮艾德 高雄國家體育場 </Card.Title>
                <div className='d-flex justify-content-between align-items-center mt-3'>
                  <p className='text-normal-gray-light'>演唱會</p>
                  <p className='text-primary-light'>NT$800 起</p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <style global jsx>
        {`
          .custom-card{
            border: none;
            background-color: #151515;
            border-radius: 5px;
            overflow: hidden;
          }
        `}
      </style>
    </>
  )
}
