import React from 'react'
import Card from 'react-bootstrap/Card'

export default function EventsRecommend() {
  return (
    <>
      <div className="row mt-5 mx-5">
        <div className="col-sm-12 cart-area">
          <h4 className="text-white">
            <i className="bi bi-fire text-primary-light me-2"></i>為你推薦
          </h4>
          <div className="row mt-3 mb-5">
            <div className="col-sm-3 col-12">
              <Card className="custom-card text-white">
                <Card.Img variant="top" src="./images/cart/4-03.jpg" />
                <Card.Body className="bg-bg-gray">
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
              <Card className="custom-card text-white">
                <Card.Img
                  variant="top"
                  src="https://cc.tvbs.com.tw/img/upload/2023/10/20/20231020110545-49d73a88.jpg"
                />
                <Card.Body className="bg-bg-gray">
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
              <Card className="custom-card text-white">
                <Card.Img variant="top" src="./images/cart/4-03.jpg" />
                <Card.Body className="bg-bg-gray">
                  <Card.Title className="h6">
                    Ed Sheeran 紅髮艾德 高雄國家體育場{' '}
                  </Card.Title>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <p className="text-normal-white border border-white rounded-5 py-1 px-2">
                      展覽
                    </p>
                    <p className="text-primary-light">NT $ 800 起</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-3 col-12">
              <Card className="custom-card text-white">
                <Card.Img variant="top" src="./images/cart/4-03.jpg" />
                <Card.Body className="bg-bg-gray">
                  <Card.Title className="h6">
                    Ed Sheeran 紅髮艾德 高雄國家體育場{' '}
                  </Card.Title>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <p className="text-normal-white border border-white rounded-5 py-1 px-2">
                      市集
                    </p>
                    <p className="text-primary-light ">NT $ 800 起</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
