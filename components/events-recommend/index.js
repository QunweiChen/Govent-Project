import React from 'react'
import Card from 'react-bootstrap/Card'

export default function EventsRecommend() {
  return (
    <>
      <div className="container width-1200">
        <div className="row justify-content-center mt-5 width-1200">
          <div className="col-sm-12 cart-area">
            <h4 className="text-white">
              <i className="bi bi-fire text-primary-light me-2"></i>為你推薦
            </h4>
            <div className="row mt-3 mb-5 gy-3">
              <div className="col-sm-3 col-12">
                <Card className="custom-card text-white bg-bg-gray">
                  <Card.Img
                    variant="top"
                    src="./images/cart/4-03.jpg"
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '178px',
                    }}
                  />
                  <Card.Body>
                    <Card.Title className="h6">
                      Ed Sheeran 紅髮艾德 高雄國家體育場{' '}
                    </Card.Title>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <p className="text-normal-white border border-white rounded-5 py-1 px-2">
                        市集
                      </p>
                      <p className="text-primary-light">NT $ 800 起</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3 col-12">
                <Card className="custom-card text-white bg-bg-gray">
                  <Card.Img
                    variant="top"
                    src="https://cc.tvbs.com.tw/img/upload/2023/10/20/20231020110545-49d73a88.jpg"
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '178px',
                    }}
                  />
                  <Card.Body>
                    <Card.Title className="h6">
                      Ed Sheeran 紅髮艾德 高雄國家體育場{' '}
                    </Card.Title>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <p className="text-normal-white border border-white rounded-5 py-1 px-2">
                        演唱會
                      </p>
                      <p className="text-primary-light">NT $ 800 起</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3 col-12">
                <Card className="custom-card text-white bg-bg-gray">
                  <Card.Img
                    variant="top"
                    src="./images/cart/4-03.jpg"
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '178px',
                    }}
                  />
                  <Card.Body>
                    <Card.Title className="h6">
                      Ed Sheeran 紅髮艾德 高雄國家體育場{' '}
                    </Card.Title>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <p className="text-normal-white border border-white rounded-5 py-1 px-2">
                        市集
                      </p>
                      <p className="text-primary-light">NT $ 800 起</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3 col-12">
                <Card className="custom-card text-white bg-bg-gray">
                  <Card.Img
                    variant="top"
                    src="https://cc.tvbs.com.tw/img/upload/2023/10/20/20231020110545-49d73a88.jpg"
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '178px',
                    }}
                  />
                  <Card.Body>
                    <Card.Title className="h6">
                      Ed Sheeran 紅髮艾德 高雄國家體育場{' '}
                    </Card.Title>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <p className="text-normal-white border border-white rounded-5 py-1 px-2">
                        演唱會
                      </p>
                      <p className="text-primary-light">NT $ 800 起</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style global jsx>
        {`
          .width-1200 {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0;
          }
          @media screen and (max-width: 576px) {
            .width-1200 {
              width: 380px;
            }
          }
        `}
      </style>
    </>
  )
}
