import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function EventsBar() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="width-1200">
          <h4 className="mb-5 text-center">熱門活動</h4>
          <div className="d-flex events-bar">
            <div className="show-control d-flex flex-column" onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
              <div
                className={`show-event d-flex flex-column justify-content-between ${isHovered ? 'active' : ''}`}
              >
                <div>
                  <div className="secondary-title h6">Ed Sheeran</div>
                </div>
                <div className="event-content">
                  <h3>Ed Sheeran 紅髮艾德 2024TOUR世界巡迴演唱會</h3>
                  <p>
                    紅髮艾德 Ed Sheeran
                    擁有眾多膾炙人口金曲，各項登峰造極的紀錄，今年更是解鎖英國百億串流數，成為史上第一位榮獲「Gold
                    BRIT Billion Award（全英百億級大賞）」殊榮肯定的歌手！
                  </p>
                </div>
              </div>
              <div className={`event-link d-flex justify-content-between ${isHovered ? '' : 'hide'}`}>
                <h6 className="m-0">前往詳情</h6>
                <i className={`bi bi-arrow-right text-white icon h5 m-0`}></i>
              </div>
            </div>
            <div className="other-events d-flex flex-column ms-3">
              <div className="event-btn mb-3"></div>
              <div className="event-btn mb-3"></div>
              <div className="event-btn"></div>
            </div>
          </div>
        </div>
      </div>
      <style global jsx>
        {`
          .events-bar {
            height: 400px;
            overflow: hidden;
            .show-control {
              flex: 1;
              .event-link {
                border-radius: 0 0 10px 10px;
                background-color: var(--primary-color);
                padding: 10px 30px;
                opacity: 1;
                transition: 300ms;
                height: 45px;
              }
              .event-link.hide {
                height: 0;
                padding: 0px 30px;
                
              }
            }
            .show-event {
              flex: 1;
              padding: 30px;
              border-radius: 10px;
              background: url('/images/index-silder/ed-sheeran.jpg');
              background-size: cover;
              background-position: center;
              .secondary-title {
                display: inline-block;
                padding: 10px 20px;
                border: 1px solid var(--normal-gray-light-color);
                border-radius: 5px;
              }
              .event-content {
              }
            }
            .show-event.active{
              border-radius: 10px 10px 0 0;
            }
            .other-events {
              width: 125px;
              .event-btn {
                flex: 1;
                background-color: blue;
                border-radius: 10px;
              }
            }
          }
        `}
      </style>
    </>
  )
}
