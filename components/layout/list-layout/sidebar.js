import React, { useState } from 'react'

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
  )
}
