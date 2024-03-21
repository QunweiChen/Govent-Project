import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
// 載入選項用的json檔案，對應的是資料庫的資料
import { CategoriesProvider, useCategories } from '@/hooks/use-categories'

export default function ProductQueryList() {
  const router = useRouter()
  const { setSelectedCategories, selectedCategories } = useCategories()


  // !!~~~
  useEffect(() => {
    if (router.isReady) {
      // 從router.query得到所有查詢字串參數
      const { selectedCategories } = router.query
      
    }
  }, [router.isReady, router.query, setSelectedCategories])

      // 主分類要全子分類都點按才會設定
      const newCatIds = cat_ids ? cat_ids.split(',').map((v) => Number(v)) : []

      const allMainCatIds = catOptions
        .filter((v) => !v.parent_id)
        .map((v) => v.id)

      // iterate all main cat ids
      const existingMainCatIds = []
      for (let i = 0; i < allMainCatIds.length; i++) {
        const subIds1 = catOptions.filter(
          (v) => v.parent_id === allMainCatIds[i]
        )

        const subIds2 = catOptions.filter(
          (v) => v.parent_id === allMainCatIds[i] && newCatIds.includes(v.id)
        )

        if (subIds1.length === subIds2.length) {
          existingMainCatIds.push(allMainCatIds[i])
        }
      }
      setMainCatIds(existingMainCatIds)
      // 載入資料
      getProducts(router.query)
    }

    // eslint-disable-next-line
  }, [router.query, router.isReady])

  // 點按分頁時，要送至伺服器的query string參數
  const handlePageClick = (event) => {
    router.push({
      pathname: router.pathname,

      query: {
        ...router.query,
        page: event.selected + 1,
      },
    })
  }

  const handleLoadData = () => {
    // 要送至伺服器的query string參數
    // 註: 重新載入資料需要跳至第一頁
    const params = {
      page: 1, // 跳至第一頁
      name_like: nameLike,
      brand_ids: brandIds.join(','),
      cat_ids: catIds.join(','),
      color_ids: colorIds.join(','),
      size_ids: sizeIds.join(','),
      tag_ids: tagIds.join(','),
      sort: orderby.sort,
      order: orderby.order,
      perpage,
      price_gte: priceGte, // 會有'0'字串的情況，注意要跳過此條件
      price_lte: priceLte, // 會有'0'字串的情況，注意要跳過此條件
    }

    // console.log(params)

    router.push({
      pathname: router.pathname,
      query: params,
    })
  }

  // 轉換id為名稱
  const convertNames = (options, idsString) => {
    const ids = idsString.split(',').map((v) => Number(v))

    return ids
      .map((id) => options.find((item) => item.id === id))
      .map((foundItem) => foundItem.name)
      .join(',')
  }

  // 呈現資料
  const displayList = (
    <>
      <ul>
        {items.map((v) => {
          return (
            <li key={v.id}>
              {v.name}(cat_id:{v.cat_id})(price: {v.price})(tag:{' '}
              {convertNames(tagOptions, v.tag)}
              )(color: {convertNames(colorOptions, v.color)})(size:{' '}
              {convertNames(sizeOptions, v.size)})
            </li>
          )
        })}
      </ul>
    </>
  )

  // 分頁操作區域(使用bootstrap的分頁元件)
  const pagination = (
    <BS5Pagination
      forcePage={page - 1}
      onPageChange={handlePageClick}
      pageCount={pageCount}
    />
  )

  const filterBlock = (
    <>
      <div>
        <label>
          關鍵字:
          <input
            type="text"
            name="keyword"
            value={nameLike}
            onChange={(e) => {
              setNameLike(e.target.value)
            }}
          />
        </label>{' '}
        <label>
          每頁多少項目:
          <select
            value={perpage}
            onChange={(e) => {
              setPerpage(Number(e.target.value))
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="20">20</option>
          </select>
        </label>{' '}
        <label>
          排序:
          <select
            value={`${orderby.sort},${orderby.order}`}
            onChange={(e) => {
              const selected = e.target.value
              setOrderby({
                sort: selected.split(',')[0],
                order: selected.split(',')[1],
              })
            }}
          >
            <option value="id,asc">預設排序(id由小至大)</option>
            <option value="id,desc">ID排序(id由大至小)</option>
            <option value="price,asc">價格排序(price由低至高)</option>
            <option value="price,desc">價格排序(price由高至低)</option>
          </select>
        </label>
      </div>
      <div>
        品牌:
        {brandOptions.map((v) => {
          return (
            <label key={v.id} className="mx-1">
              <input
                type="checkbox"
                value={v.id}
                checked={brandIds.includes(v.id)}
                onChange={(e) => {
                  // 注意，要轉數字，為了保持數字陣列
                  const targetValue = Number(e.target.value)
                  if (brandIds.includes(targetValue)) {
                    setBrandIds(brandIds.filter((v2) => v2 !== targetValue))
                  } else {
                    setBrandIds([...brandIds, targetValue])
                  }
                }}
              />
              {v.name}({v.id})
            </label>
          )
        })}
      </div>
      <div>
        分類(主分類):
        {catOptions
          .filter((v) => !v.parent_id)
          .map((v) => {
            return (
              <label key={v.id} className="mx-1">
                <input
                  type="checkbox"
                  value={v.id}
                  checked={mainCatIds.includes(v.id)}
                  onChange={(e) => {
                    const targetId = Number(e.target.value)
                    // 尋找第二層的id
                    const subCatIds = catOptions
                      .filter((v2) => v2.parent_id === targetId)
                      .map((v3) => v3.id)
                    // 注意，要轉數字，為了保持數字陣列

                    if (mainCatIds.includes(targetId)) {
                      setMainCatIds(mainCatIds.filter((v2) => v2 !== targetId))
                      // 從子陣列中移除
                      const newCatIds = catIds.filter(
                        (el) => !subCatIds.includes(el)
                      )
                      setCatIds(newCatIds)
                    } else {
                      setMainCatIds([...mainCatIds, targetId])
                      // 從子陣列中加入
                      setCatIds([...catIds, ...subCatIds])
                    }
                  }}
                />
                {v.name}({v.id})
              </label>
            )
          })}
        <br />
        分類(子分類):
        {catOptions
          .filter((v) => v.parent_id)
          .map((v) => {
            return (
              <label key={v.id} className="mx-1">
                <input
                  type="checkbox"
                  value={v.id}
                  checked={catIds.includes(v.id)}
                  onChange={(e) => {
                    // 注意，要轉數字，為了保持數字陣列
                    const targetValue = Number(e.target.value)
                    if (catIds.includes(targetValue)) {
                      setCatIds(catIds.filter((v2) => v2 !== targetValue))
                    } else {
                      setCatIds([...catIds, targetValue])
                    }
                  }}
                />
                {v.name}({v.id})
              </label>
            )
          })}
      </div>
      <div>
        標籤(1至多個):
        {tagOptions.map((v) => {
          return (
            <label key={v.id} className="mx-1">
              <input
                type="checkbox"
                value={v.id}
                checked={tagIds.includes(v.id)}
                onChange={(e) => {
                  // 注意，要轉數字，為了保持數字陣列
                  const targetValue = Number(e.target.value)
                  if (tagIds.includes(targetValue)) {
                    setTagIds(tagIds.filter((v2) => v2 !== targetValue))
                  } else {
                    setTagIds([...tagIds, targetValue])
                  }
                }}
              />
              {v.name}({v.id})
            </label>
          )
        })}
      </div>
      <div>
        顏色(1至多個):
        {colorOptions.map((v) => {
          return (
            <label key={v.id} className="mx-1">
              <input
                type="checkbox"
                value={v.id}
                checked={colorIds.includes(v.id)}
                onChange={(e) => {
                  // 注意，要轉數字，為了保持數字陣列
                  const targetValue = Number(e.target.value)
                  if (colorIds.includes(targetValue)) {
                    setColorIds(colorIds.filter((v2) => v2 !== targetValue))
                  } else {
                    setColorIds([...colorIds, targetValue])
                  }
                }}
              />
              {v.name}({v.id})
            </label>
          )
        })}
      </div>
      <div>
        尺寸(1至多個):
        {sizeOptions.map((v) => {
          return (
            <label key={v.id} className="mx-1">
              <input
                type="checkbox"
                value={v.id}
                checked={sizeIds.includes(v.id)}
                onChange={(e) => {
                  // 注意，要轉數字，為了保持數字陣列
                  const targetValue = Number(e.target.value)

                  if (sizeIds.includes(targetValue)) {
                    setSizeIds(sizeIds.filter((v2) => v2 !== targetValue))
                  } else {
                    setSizeIds([...sizeIds, targetValue])
                  }
                }}
              />
              {v.name}({v.id})
            </label>
          )
        })}
      </div>
      <div>
        價格(1500~10000)
        <label>
          從:{' '}
          <input
            type="number"
            placeholder="1500"
            value={priceGte}
            onChange={(e) => {
              setPriceGte(Number(e.target.value))
            }}
          />
        </label>
        <label>
          到:{' '}
          <input
            type="number"
            placeholder="15000"
            value={priceLte}
            onChange={(e) => {
              setPriceLte(Number(e.target.value))
            }}
          />
        </label>
      </div>
      <div>
        <button onClick={handleLoadData}>從伺服器載入資料</button>
      </div>
    </>
  )

  return (
    <>
      <h1>商品測試頁(query)</h1>
      <hr />
      {filterBlock}
      <hr />
      <p>
        項目數量(itemTotal): {itemTotal} / 目前頁碼(page): {page} /
        每頁多少項目(perpage):
        {perpage} / 總頁數(pageCount): {pageCount}
      </p>
      <hr />
      {displayList}
      {pagination}
    </>
  )
}
