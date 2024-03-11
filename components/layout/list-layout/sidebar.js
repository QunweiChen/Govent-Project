import React, { useState } from 'react'
import AlwaysOpenExample from '@/components/layout/list-layout/accordion'

export default function Sidebar() {
  const categories = [
    '演唱會',
    '展覽',
    '快閃活動',
    '市集',
    '粉絲見面會',
    '課程講座',
    '體育賽事',
    '景點門票',
  ]
  const [selectedCategories, setSelectedCategories] = useState({})

  const handleOnChange = (category) => {
    const newSelectedCategories = {
      ...selectedCategories,
      [category]: !selectedCategories[category],
    }

    // 更新選中的類別
    setSelectedCategories(newSelectedCategories)

    // 檢查是否所有單獨的類別都被選中了
    const allSelected = categories.every((cat) => newSelectedCategories[cat])
    // 如果是，也選中"所有類型"
    if (allSelected) {
      newSelectedCategories['所有類型'] = true
      setSelectedCategories(newSelectedCategories)
    } else if (selectedCategories['所有類型'] && !allSelected) {
      // 如果"所有類型"是選中的但不是所有類別都選中，取消選中"所有類型"
      newSelectedCategories['所有類型'] = false
      setSelectedCategories(newSelectedCategories)
    }
  }

  // 當選擇"所有類型"時的處理
  const handleSelectAll = () => {
    const newSelection = {}
    if (!selectedCategories['所有類型']) {
      categories.forEach((cat) => (newSelection[cat] = true))
      newSelection['所有類型'] = true
    } else {
      categories.forEach((cat) => (newSelection[cat] = false))
      newSelection['所有類型'] = false
    }
    setSelectedCategories(newSelection)
  }

  return (
    <>
    <div className="upSidebar">
      <h6>活動種類</h6>
      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={!!selectedCategories['所有類型']}
            onChange={handleSelectAll}
            id="flexCheckAll"
          />
          <label className="form-check-label" htmlFor="flexCheckAll">
            所有類型
          </label>
        </div>
        {categories.map((category, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              checked={!!selectedCategories[category]}
              onChange={() => handleOnChange(category)}
              id={`flexCheck${index}`}
            />
            <label className="form-check-label" htmlFor={`flexCheck${index}`}>
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
    <hr />
              <div className="downSidebar no-border">
                <h6>地區</h6>
                <div className=" d-none accordion" id="accordionExample">
                  {/* North */}
                  <div className="accordion-item bg-bg-gray text-white">
                    {/* title */}
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <input type="checkbox" className="form-check-input" />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          北部地區
                        </label>
                      </button>
                    </h2>

                    {/* selection */}
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
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
                  {/* middle */}
                  <div className="accordion-item bg-bg-gray text-white">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <input type="checkbox" className="form-check-input" />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          中部地區
                        </label>
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
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
                  {/* South */}
                  <div className="accordion-item bg-bg-gray text-white">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <input type="checkbox" className="form-check-input" />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          南部地區
                        </label>
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
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
                  {/* East */}
                  <div className="accordion-item bg-bg-gray text-white">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <input type="checkbox" className="form-check-input" />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          東部地區
                        </label>
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
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
                <AlwaysOpenExample />
              </div>
              </>
  )
}
