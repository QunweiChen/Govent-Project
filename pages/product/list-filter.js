import React, { useEffect, useState } from 'react'

// 引入icon
import { CiHeart } from 'react-icons/ci'
import { GoSortDesc } from 'react-icons/go'
import { FaHouse } from 'react-icons/fa6'
import { FaRegStar } from 'react-icons/fa'
import { FaTicket } from 'react-icons/fa6'
import { RxPerson } from 'react-icons/rx'

//引入components
import MyFooter from '@/components/layout/default-layout/my-footer'
import NavbarBottomRwdSm from '@/components/layout/list-layout/navbar-bottom-sm'
// import FavIcon from '@/components/layout/list-layout/fav-icon'
import NavbarTopRwdSm from '@/components/layout/list-layout/navbar-top-sm'
import NavbarTopRwd from '@/components/layout/list-layout/navbar-top'
import Sidebar from '@/components/layout/list-layout/sidebar'
import PageBar from '@/components/layout/list-layout/pagebar'

// 引入活動資料
import EventCard from '@/components/layout/list-layout/event_card'
import useEvents from '@/hooks/use-event'


export default function List() {

    const { data } = useEvents()
    console.log(data);

    //活動資料
    // 1. 從伺服器來的原始資料
    const [events, setEvents] = useState([])
    // 2. 用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
    const [displayevents, setDisplayevents] = useState([])

    //篩選條件
    const [categorie, setCategorie] = useState([])
    const categories = [ '演唱會',
    '展覽',
    '快閃活動',
    '市集',
    '粉絲見面會',
    '課程講座',
    '體育賽事',
    '景點門票',]
  
    // radio 價格篩選
    const [priceRange, setPriceRange] = useState('所有')
    const priceRangeTypes = ['所有', '1萬以下', '1~2萬']

    const [searchWord, setSearchWord] = useState('')
    const [sortBy, setSortBy] = useState('')

    // 載入指示的spinner動畫用的
    const [isLoading, setIsLoading] = useState(false)

    //x秒後自動關掉spinner(設定isLoading為false)
    useEffect(() => {
    if (isLoading) {
        setTimeout(() => {
        setIsLoading(false)
        }, 1000)
    }
    }, [isLoading])

    // 初始化資料-didMount
    useEffect(() => {
        // 先開起載入指示器
        setIsLoading(true)

        // 模擬和伺服器要資料
        // 最後設定到狀態中
        setProducts(data)
        setDisplayProducts(data)
    }, [])

    
  return (
    <>
      <useEvents>
        <nav className="header container navbar-expand mt-5 w-1200">
          <h5 className="d-flex justify-content-between">
            <div className="bg-bg-gray-secondary rounded-3">
              <p className="mx-4 my-2">
                目前共有 {data?.length} 筆 結果
              </p>
            </div>
            <section>
              <NavbarTopRwd />
            </section>
          </h5>
        </nav>
        <nav className="header-m">
          <NavbarTopRwdSm />
        </nav>
        <main className="container w-1200">
          <div className="row">
            <div className="sidebar me-3 col-md-2 col-3">
              <Sidebar />
            </div>
            <div className="col">
              <div className="cardList row g-3">
                <EventCard />
              </div>

              <footer className="d-flex justify-content-center m-3">
                <div
                  className="page_nav btn-toolbar"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <PageBar />
                </div>
              </footer>
            </div>
          </div>
        </main>
        <NavbarBottomRwdSm />
      </useEvents>

      <style global jsx>{`
        body {
          background-color: #151515;
          color: #fff;
          border: border-inline;
        }
        .w-1200 {
          max-width: 1200px;
        }
        figure img {
          width: 268px;
          height: 180px;
          overflow: hidden;
          object-fit: cover;
          width: 100%;
        }
        .cardList i {
          background-color: #404040;
          opacity: 0.5;
        }

        .test {
          padding: 0px;
          height: 0px;
          background-color: #151515;
        }
        .test :hover {
          border-bottom: 3px solid #c55708;
        }

        @media screen and (min-width: 575px) {
          .header-m {
            display: none;
          }
          .footer-m {
            display: none;
          }
        }
        @media screen and (max-width: 576px) {
          .header {
            display: none;
          }
          .sidebar {
            display: none;
          }
          .page_nav {
            display: none;
          }
          .cardList {
            margin-bottom: 80px;
          }
        }
      `}</style>
    </>
  )
}
