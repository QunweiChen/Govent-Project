// pages/index.js
import Link from 'next/link'
import Image from 'next/image'
import PlaceholderText from '@/components/common/placeholder-text'
import styles from './index.module.scss'
import Carousel from 'react-bootstrap/Carousel';
import EventsBar from '@/components/events-bar';
import EventsTypeBar from '@/components/events-type-bar';
import IndexLayout from '@/components/layout/nocb-default-layout';

export default function Home() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <div className={`${styles['image-container']} w-100`}>
            <img
              className="d-block w-100"
              src="https://media.vogue.com.tw/photos/658e6392dfffa70c3419002c/master/w_2560%2Cc_limit/YOASOBI_A%25E5%2586%2599_2021_12.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption className={`pb-5 ${styles['carousel-caption']}`}>
            <h5 className={`ps-3 ${styles['secondary-title-start']}`}>YOASOBI</h5>
            <h1>YOASOBI 演唱會2024台北站</h1>
            <div className='mt-3'>
              <button className='btn btn-primary-deep-50 text-white'>熱門排行</button>
              <button className='btn btn-primary-deep-50 text-white ms-2'>演唱會</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={`${styles['image-container']} w-100`}>
            <img
              className="d-block w-100"
              src="https://dynamicmedia.livenationinternational.com/p/r/s/747aadc5-1aa5-472c-b150-25a3ff96abe1.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption className={`pb-5 ${styles['carousel-caption']}`}>
            <h5 className={`ps-3 ${styles['secondary-title-start']}`}>YOASOBI</h5>
            <h1>YOASOBI 演唱會2024台北站</h1>
            <div className='mt-3'>
              <button className='btn btn-primary-deep-50 text-white'>熱門排行</button>
              <button className='btn btn-primary-deep-50 text-white ms-2'>演唱會</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <EventsBar />
      <EventsTypeBar />
      <style global jsx>
        {`
          body {
            background-color: #151515;
            color: #fff;
          }
          .card-cover {
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
          .carousel-item{
            height: 1000px;
          }
          .text-shadow-1 {
            text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
          }
          .text-shadow-2 {
            text-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
          }
          .text-shadow-3 {
            text-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
    </>
  )
}

Home.getLayout = function (page) {
  return <IndexLayout>{page}</IndexLayout>
}
