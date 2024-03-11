import React from 'react'
import PriceRangeRadio from './PriceRangeRadio'
import TagCheckbox from './TagCheckbox'

function FilterBar(props) {
  const {
    priceRangeTypes,
    priceRange,
    setPriceRange,
    categories,
    categorie,
    setCategorie,
  } = props

  const handleChecked = (e) => {
    const value = e.target.value
    if (!categorie.includes(value)) return setCategorie([...categorie, value])

    if (categorie.includes(value)) {
      const newTags = categorie.filter((v) => v !== value)
      setCategorie(newTags)
    }
  }
  return (
    <>
      <h2 className="grid-title">
        <i className="fa fa-filter"></i> 過濾
      </h2>
      <hr />

      <h4>價格</h4>

      {priceRangeTypes.map((value, i) => (
        <PriceRangeRadio
          key={i}
          value={value}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      ))}

      <hr />

      <h4>
        標籤
        <button
          className="btn btn-link btn-sm"
          onClick={() => setCategorie([])}
        >
          重設
        </button>
      </h4>

      <p>有包含勾選標籤均會顯示</p>
      {categories.map((value, i) => (
        <TagCheckbox
          value={value}
          key={i}
          categorie={categorie}
          handleChecked={handleChecked}
        />
      ))}

      <div className="padding"></div>
    </>
  )
}

export default FilterBar
