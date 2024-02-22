// pages/index.js
import Link from 'next/link'
import Image from 'next/image'
import PlaceholderText from '@/components/common/placeholder-text'
import styles from './index.module.scss'
import Carousel from 'react-bootstrap/Carousel';
import EventsBar from '@/components/events-bar';
import EventsTypeBar from '@/components/events-type-bar';
import NoBCLayout from '@/components/layout/nocb-default-layout';

export default function Home() {
  return (
    <>
      <Carousel>
      <Carousel.Item>
      <div className={`${styles['image-container']}`}>
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
      <div className={`${styles['image-container']}`}>
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
    </Carousel>
      <EventsBar/>
      <EventsTypeBar/>
      {/* <div className="px-4 pt-5 my-5 text-center border-bottom">
        <div className='mb-4'>
        <h1 className="display-4 fw-bold text-body-emphasis">
          UI 顏色與相對應命名
        </h1>
        <h4>可直接配合bootstrap使用</h4>
        <h6>ex: className="btn btn-primary-deep-50"</h6>
        </div>
        <div className="col-lg-6 mx-auto">
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-4">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-primary-50 btn-lg px-4 me-sm-3"
            >
              Primary-50
            </button>
            <button
              type="button"
              className="btn btn-primary-light btn-lg px-4 me-sm-3"
            >
              Primary-light
            </button>
            <button
              type="button"
              className="btn btn-primary-deep btn-lg px-4 me-sm-3"
            >
              Primary-deep
            </button>
            <button
              type="button"
              className="btn btn-primary-deep-50 btn-lg px-4 me-sm-3"
            >
              Primary-deep-50
            </button>
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-4">
            <button
              type="button"
              className="btn btn-normal-black btn-lg px-4 me-sm-3"
            >
              normal-black
            </button>
            <button
              type="button"
              className="btn btn-normal-gray btn-lg px-4 me-sm-3"
            >
              normal-gray
            </button>
            <button
              type="button"
              className="btn btn-normal-gray-deep btn-lg px-4 me-sm-3"
            >
              normal-gray-deep
            </button>
            <button
              type="button"
              className="btn btn-normal-gray-light btn-lg px-4 me-sm-3"
            >
              normal-gray-light
            </button>
            <button
              type="button"
              className="btn btn-normal-white btn-lg px-4 me-sm-3"
            >
              normal-white
            </button>
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-4">
            <button
              type="button"
              className="btn btn-secondary-01 btn-lg px-4 me-sm-3"
            >
              secondary-01
            </button>
            <button
              type="button"
              className="btn btn-secondary-02 btn-lg px-4 me-sm-3"
            >
              secondary-02
            </button>
            <button
              type="button"
              className="btn btn-secondary-03 btn-lg px-4 me-sm-3"
            >
              secondary-03
            </button>
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              className="btn btn-bg-gray btn-lg px-4 me-sm-3"
            >
              bg-gray
            </button>
            <button
              type="button"
              className="btn btn-bg-gray-light btn-lg px-4 me-sm-3"
            >
              bg-gray-light
            </button>
            <button
              type="button"
              className="btn btn-bg-gray-secondary btn-lg px-4 me-sm-3"
            >
              bg-gray-secondary
            </button>
            <button
              type="button"
              className="btn btn-bg-dark btn-lg px-4 me-sm-3"
            >
              bg-dark
            </button>
            <button
              type="button"
              className="btn btn-bg-backend btn-lg px-4 me-sm-3"
            >
              bg-backend
            </button>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
          <div className="container px-5">
            <Image
              src="/images/heroes/bootstrap-docs.png"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="container col-xxl-10 px-1 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="/images/heroes/bootstrap-themes.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Custom cards</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: "url('/images/features/unsplash-photo-1.jpg')",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Short title, long jacket
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3 ">
                    <i className="bi bi-geo-fill me-2"></i>
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-calendar3 me-2"></i>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: "url('/images/features/unsplash-photo-2.jpg')",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Much longer title that wraps to multiple lines
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <i className="bi bi-geo-fill me-2"></i>
                    <small>Pakistan</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-calendar3 me-2"></i>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: "url('/images/features/unsplash-photo-3.jpg')",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Another longer title belongs here
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <i className="bi bi-geo-fill me-2"></i>
                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-calendar3 me-2"></i>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
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
  return <NoBCLayout>{page}</NoBCLayout>
}
