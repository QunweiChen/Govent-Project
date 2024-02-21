import { useEffect } from 'react'
import { CiHeart } from 'react-icons/ci'
import { GoSortDesc } from 'react-icons/go'

export default function List() {
  // Toggle the side navigation
  useEffect(() => {
    // fix next issue
    if (typeof window !== 'undefined') {
      const sidebarToggle = document.body.querySelector('#sidebarToggle')

      if (sidebarToggle) {
        // 在localStorage中儲存目前sidebar情況
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
          document.body.classList.toggle('sb-sidenav-toggled')
        }

        sidebarToggle.addEventListener('click', (event) => {
          event.preventDefault()

          document.body.classList.toggle('sb-sidenav-toggled')

          localStorage.setItem(
            'sb|sidebar-toggle',
            document.body.classList.contains('sb-sidenav-toggled')
          )
        })
      }
    }
  }, [])

  return (
    <>
      {/* hearder */}
      <div className="row mt-2 mb-3 ">
        <h5 className="card-text d-flex justify-content-between align-items-center">
          <div className="bg-bg-gray-secondary text-white rounded-3">
            <p className="justify-content-between mx-4 my-2">
              目前共有 ${} 筆 結果
            </p>
          </div>

          <div className="d-flex p-2 justify-content-end align-items-center text-white">
            <div className="dropdown">
              <button
                className="btn btn-bg-gray dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                排序依據
              </button>
              <GoSortDesc />
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    最新
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    價格：由高至低
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    價格：由低至高
                  </a>
                </li>
              </ul>
            </div>
            <button className="btn px-4 btn-outline-primary-deep no-border text-white">
              推薦
            </button>
            <button className="btn px-4 btn-outline-primary-deep no-border active text-white">
              日期
            </button>
            <button className="btn px-4 btn-outline-primary-deep no-border text-white">
              價格
            </button>
            <button className="btn px-4 btn-outline-primary-deep no-border text-white">
              地區
            </button>
          </div>
        </h5>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="d-flex" id="wrapper">
            {/* sidebar */}
            <div className="text-white me-3" style={{}} id="sidebar-wrapper">
              <div className="">
                {/* sidebar a */}
                <div className=" m-3 d-grid gap-3">
                  <h6>活動種類</h6>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        所有類型
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        演唱會
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        展覽
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        快閃活動
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        市集
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        粉絲見面會
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        課程講座
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        體育賽事
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        景點門票
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                {/* sidebar b */}
                <div
                  className="accordion accordion-flush m-3 d-grid gap-3"
                  id="accordionFlushExample"
                >
                  <h6>地區</h6>
                  <div className="form-group">
                    <div className="accordion-item bg-bg-gray text-white">
                      <div className="accordion-header">
                        <button
                          className="accordion-button bg-bg-gray text-white px-1 gap-2"
                          type="button"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          <input type="checkbox" className="form-check-input" />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            北部地區
                          </label>
                        </button>
                      </div>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body px-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              台北市
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              新北市
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              桃園市
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              基隆市
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              新竹市
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              新竹縣
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              宜蘭縣
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item bg-bg-gray text-white">
                      <div className="accordion-header">
                        <button
                          className="accordion-button bg-bg-gray text-white px-1 gap-2"
                          type="button"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          <input type="checkbox" className="form-check-input" />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            中部地區
                          </label>
                        </button>
                      </div>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body px-1">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              苗栗縣
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              台中市
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              南投縣
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              彰化縣
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              雲林縣
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item bg-bg-gray text-white">
                      <div className="accordion-header">
                        <button
                          className="accordion-button bg-bg-gray text-white px-1 gap-2"
                          type="button"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          <input type="checkbox" className="form-check-input" />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            南部地區
                          </label>
                        </button>
                      </div>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body px-1">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              嘉義市
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              嘉義縣
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              台南市
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              高雄市
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              屏東縣
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item bg-bg-gray text-white">
                      <div className="accordion-header">
                        <button
                          className="accordion-button bg-bg-gray text-white px-1 gap-2"
                          type="button"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          <input type="checkbox" className="form-check-input" />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            東部地區
                          </label>
                        </button>
                      </div>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body px-1">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              花蓮縣
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              台東縣
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* main */}
            <div id="page-content-wrapper">
              <div className="container-fluid d-grid gap-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {/* card */}
                  <div className="col">
                    <div className="card w-350 no-border f-16 rounded-4">
                      <div className="img position-relative">
                        <CiHeart className="position-absolute top-0 start-100" />
                        <img
                          src="/images/product/list/product-ex.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <i className="favorite position-absolute top-0 start-100">
                          <CiHeart />
                        </i>
                      </div>
                      <div className="card-body bg-bg-gray-secondary px-4">
                        <h6 className="infomation text-normal-gray-light">
                          演唱會
                        </h6>
                        <h4 className="title text-normal-white">
                          NOneRepublic 共和世代 高雄巨蛋
                        </h4>
                        <p className="text-primary-deep">$1200起</p>
                        <div className="d-flex justify-content-between">
                          <p className="text-normal-gray-light mb-2">台北</p>
                          <span className="text-normal-gray-light">
                            2023-06-01
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 rounded-4">
                      <div className="img">
                        <img
                          src="/images/product/list/product-ex.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="favorite"></div>
                      </div>
                      <div className="card-body bg-bg-gray-secondary px-4">
                        <h6 className="infomation text-normal-gray-light">
                          演唱會
                        </h6>
                        <h4 className="title text-normal-white">
                          NOneRepublic 共和世代 高雄巨蛋
                        </h4>
                        <p className="text-primary-deep">$1200起</p>
                        <div className="d-flex justify-content-between">
                          <p className="text-normal-gray-light mb-2">台北</p>
                          <span className="text-normal-gray-light">
                            2023-06-01
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 rounded-4">
                      <div className="img">
                        <img
                          src="/images/product/list/product-ex.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="favorite"></div>
                      </div>
                      <div className="card-body bg-bg-gray-secondary px-4">
                        <h6 className="infomation text-normal-gray-light">
                          演唱會
                        </h6>
                        <h4 className="title text-normal-white">
                          NOneRepublic 共和世代 高雄巨蛋
                        </h4>
                        <p className="text-primary-deep">$1200起</p>
                        <div className="d-flex justify-content-between">
                          <p className="text-normal-gray-light mb-2">台北</p>
                          <span className="text-normal-gray-light">
                            2023-06-01
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 rounded-4">
                      <div className="img">
                        <img
                          src="/images/product/list/product-ex.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="favorite"></div>
                      </div>
                      <div className="card-body bg-bg-gray-secondary px-4">
                        <h6 className="infomation text-normal-gray-light">
                          演唱會
                        </h6>
                        <h4 className="title text-normal-white">
                          NOneRepublic 共和世代 高雄巨蛋
                        </h4>
                        <p className="text-primary-deep">$1200起</p>
                        <div className="d-flex justify-content-between">
                          <p className="text-normal-gray-light mb-2">台北</p>
                          <span className="text-normal-gray-light">
                            2023-06-01
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 rounded-4">
                      <div className="img">
                        <img
                          src="/images/product/list/product-ex.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="favorite"></div>
                      </div>
                      <div className="card-body bg-bg-gray-secondary px-4">
                        <h6 className="infomation text-normal-gray-light">
                          演唱會
                        </h6>
                        <h4 className="title text-normal-white">
                          NOneRepublic 共和世代 高雄巨蛋
                        </h4>
                        <p className="text-primary-deep">$1200起</p>
                        <div className="d-flex justify-content-between">
                          <p className="text-normal-gray-light mb-2">台北</p>
                          <span className="text-normal-gray-light">
                            2023-06-01
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 rounded-4">
                      <div className="img">
                        <img
                          src="/images/product/list/product-ex.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="favorite"></div>
                      </div>
                      <div className="card-body bg-bg-gray-secondary px-4">
                        <h6 className="infomation text-normal-gray-light">
                          演唱會
                        </h6>
                        <h4 className="title text-normal-white">
                          NOneRepublic 共和世代 高雄巨蛋
                        </h4>
                        <p className="text-primary-deep">$1200起</p>
                        <div className="d-flex justify-content-between">
                          <p className="text-normal-gray-light mb-2">台北</p>
                          <span className="text-normal-gray-light">
                            2023-06-01
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 rounded-4">
                      <div className="img">
                        <img
                          src="/images/product/list/product-ex.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="favorite"></div>
                      </div>
                      <div className="card-body bg-bg-gray-secondary px-4">
                        <h6 className="infomation text-normal-gray-light">
                          演唱會
                        </h6>
                        <h4 className="title text-normal-white">
                          NOneRepublic 共和世代 高雄巨蛋
                        </h4>
                        <p className="text-primary-deep">$1200起</p>
                        <div className="d-flex justify-content-between">
                          <p className="text-normal-gray-light mb-2">台北</p>
                          <span className="text-normal-gray-light">
                            2023-06-01
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 rounded-4">
                      <div className="img">
                        <img
                          src="/images/product/list/product-ex.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="favorite"></div>
                      </div>
                      <div className="card-body bg-bg-gray-secondary px-4">
                        <h6 className="infomation text-normal-gray-light">
                          演唱會
                        </h6>
                        <h4 className="title text-normal-white">
                          NOneRepublic 共和世代 高雄巨蛋
                        </h4>
                        <p className="text-primary-deep">$1200起</p>
                        <div className="d-flex justify-content-between">
                          <p className="text-normal-gray-light mb-2">台北</p>
                          <span className="text-normal-gray-light">
                            2023-06-01
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 rounded-4">
                      <div className="img">
                        <img
                          src="/images/product/list/product-ex.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="favorite"></div>
                      </div>
                      <div className="card-body bg-bg-gray-secondary px-4">
                        <h6 className="infomation text-normal-gray-light">
                          演唱會
                        </h6>
                        <h4 className="title text-normal-white">
                          NOneRepublic 共和世代 高雄巨蛋
                        </h4>
                        <p className="text-primary-deep">$1200起</p>
                        <div className="d-flex justify-content-between">
                          <p className="text-normal-gray-light mb-2">台北</p>
                          <span className="text-normal-gray-light">
                            2023-06-01
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* page-nav */}
                <nav className="">
                  {/* <ul className="pagination no-border justify-content-center">
                    <li className="page-item">
                      <a
                        href="#"
                        className="page-link btn bg-normal-gray text-white"
                        aria-label="previous"
                      >
                        <span className="aria-hidden">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        href=""
                        className="page-link btn bg-primary-deep text-white"
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        href=""
                        className="page-link bg-bg-gray-secondary text-white"
                      >
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        href=""
                        className="page-link bg-bg-gray-secondary text-white"
                      >
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        href=""
                        className="page-link bg-bg-gray-secondary text-white"
                      >
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        href=""
                        className="page-link bg-bg-gray-secondary text-white"
                      >
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        href=""
                        className="page-link bg-bg-gray-secondary text-white"
                      >
                        6
                      </a>
                    </li>

                    <li className="page-item">
                      <a
                        href="#"
                        className="page-link bg-normal-gray text-white"
                        aria-label="next"
                      >
                        <span className="aria-hidden">&raquo;</span>
                      </a>
                    </li>
                  </ul> */}
                  <div
                    class="btn-toolbar justify-content-center"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div className="btn-group " role="group" aria-label="group">
                      <button
                        type="button"
                        className="btn btn-normal-gray"
                        aria-label="previous"
                      >
                        &laquo;
                      </button>
                      <button type="button" className="btn btn-primary">
                        1
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary text-white"
                      >
                        2
                      </button>
                      <button type="button" className="btn btn-secondary">
                        3
                      </button>
                      <button type="button" className="btn btn-secondary">
                        4
                      </button>
                      <button type="button" className="btn btn-secondary">
                        5
                      </button>
                      <button type="button" className="btn btn-secondary">
                        6
                      </button>
                      <button
                        type="button"
                        className="btn btn-normal-gray"
                        aria-label="next"
                      >
                        &raquo;
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
