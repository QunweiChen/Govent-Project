import React, { useState, useEffect } from 'react'
import { CiGlass } from 'react-icons/ci'

// chunk - 依size分成子陣列，ex. chunk([1, 2, 3, 4, 5], 2) -> [[1,2],[3,4],[5]]
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )


export default function Calendar({ events, sellStartDate = '', sellEndDate = '' , setSelectDate}) {

  const [sTime, setSTime] = useState('')

  useEffect(() => {
    setSTime(sellStartDate)
  },[sellStartDate])

//時區問題(自動+8小時):創建一個新物件 sellStartDateObj，以 `sellStartDate` 作為參數。使用 `setHours` 將 `sellStartDateObj` 的小時數設定為當前小時數減 8。
console.log(sellStartDate)
  // let sellStartDateObj = new Date(sellStartDate);
  console.log(sTime);
  
  
  
  let sellEndDateObj = new Date(sellEndDate);
  sellEndDate= sellEndDateObj.setHours(sellEndDateObj.getHours() - 8);

  
  // 一開始未選中日期
  const [myDate, setMyDate] = useState(0)

  //設定售票起始日
  const now = new Date()
  // console.log(new Date(sellStartDate))
  // console.log(sellStartDate)
  // console.log(sellEndDate)



  // 要得到今天的西元年使用Date物件的getFullYear()，要得到月份使用getMonth()(注意回傳為 0~11)
  const nowY = now.getFullYear()

  // nowM =1-12
  const nowM = now.getMonth() + 1 //注意回傳為 0~11
  const preM = now.getMonth() === 0 ? 12 : now.getMonth() //注意回傳為 0~11

  // nowD
  const nowD = now.getDate() //注意回傳為 0~11

  // 星期
  const weekDayList = ['日', '一', '二', '三', '四', '五', '六']

  // 本月有幾天
  // (上個月的最後一天是幾號)
  const days = new Date(nowY, nowM, 0).getDate()

  // 這個月的第一天是星期幾(0-6) (月份為0-11)
  const firstDay = new Date(nowY, nowM - 1, 1).getDay()

  //------ 以下開始產生資料陣列
  // 最前面塞入空白字串的陣列
  const emptyData = Array(firstDay).fill('')

  // 有值的陣列1 ~ days
  // 如何建立一個陣列包含1...N數字
  const valueData = Array(days)
    .fill('')
    .map((v, i) => i + 1)

  // 合併兩陣列為一長陣列
  const allData = [...emptyData, ...valueData]
  //------ 以下準備呈現在網頁上
  const allDataChunks = chunk(allData, 7)
  console.log('allDataChunks', allDataChunks);
  

// 新增狀態來存取年份和月份
const [year, setYear] = useState(now.getFullYear());
const [month, setMonth] = useState(now.getMonth() + 1);

useEffect(() => {
  const date = new Date(sellStartDate);
  setYear(date.getFullYear());
  setMonth(date.getMonth() + 1);
}, [sellStartDate]);

// 在按鈕的 onClick 事件更新年份和月份
const LeftBtn = () => {
  if (month === 1) {
    setYear(year - 1);
    setMonth(12);
  } else {
    setMonth(month - 1);
  }
};

const RightBtn = () => {
  if (month === 12) {
    setYear(year + 1);
    setMonth(1);
  } else {
    setMonth(month + 1);
  }
};


  return (
    <>
      <div className="calendar">
        <div className="d-flex subtitle justify-content-around align-items-center">
          <h5 id="yearAndMonth" className="col-4">{`${year}`}</h5>
          <h5 id="yearAndMonth" className="col-4">{`${month}月`}</h5>
          <div className="d-flex pb-1">
            <button className="leftBtn" onClick={LeftBtn}>
              <i className="bi bi-caret-left-fill"></i>
            </button>
            <div className="month"></div>
            <button className="rightBtn" onClick={RightBtn}>
              <i className="bi bi-caret-right-fill"></i>
            </button>
          </div>
        </div>

        <table border="1">
          <thead id="title">
            <tr>
              {weekDayList.map(function (v, i) {
                {/* console.log(sTime) */}
                return <th key={i}>{v}</th>
              })}
            </tr>
          </thead>

          <tbody id="data">
            
            {allDataChunks.map((v, i) => {
              {/* console.log("v",v) */}
              {/* console.log(sTime) */}
              return (
                <tr key={i}>
                  {v.map((item, idx) => {
                    //時區問題(去除時間):用setHours(0, 0, 0, 0)將時間設為0
                    {/* console.log(sellStartDate) */}
                    const sellStartDateObj = new Date(sellStartDate);
                    sellStartDateObj.setHours(0, 0, 0, 0);
                    const sellEndDateObj = new Date(sellEndDate);
                    sellEndDateObj.setHours(0, 0, 0, 0);
                    const currentDate = new Date(nowY, nowM -1, item);
                    currentDate.setHours(0, 0, 0, 0);
                    {/* console.log(sTime) */}

                    const isSelectable = currentDate >= sellStartDateObj && currentDate <= sellEndDateObj;
                    {/* console.log("sellStartDate:", sellStartDateObj);
                    console.log("sellEndDate:",sellEndDateObj);
                    console.log("currentDate",currentDate);
                    console.log("isSelectable",isSelectable); */}

                    return (
                      <td
                        key={idx}
                        onClick={() => {
                          setSelectDate(`${currentDate}`)
                          // console.log("currentDate",currentDate);
                        }}
                        className={isSelectable ? 'selectable' : ''}
                        style={isSelectable ? { cursor: 'pointer' } : { cursor: 'default' }}
                        role="presentation"
                      >
                        {item}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
            {/* {allDataChunks.map((v, i) => {
              return (
                <tr key={i}>
                  {v.map((item, idx) => (
                    <td
                      key={idx}
                      onClick={() => {
                        if (item) setMyDate(item)
                      }}
                      className={`${nowD === item ? 'today' : ''} ${
                        myDate === item ? 'chosen-date' : ''
                      }`}
                      style={{ cursor: 'pointer' }}
                      role="presentation"
                    >
                      {item}
                    </td>
                  ))}
                </tr>
              )
            })} */}
          </tbody>
        </table>
      </div>
      <style jsx>
        {`
          .selectable {
            background-color: #ff6600;
          }
          .calendar {
            padding-top: 5px;
            background-color: #323232;
            border-radius: 10px;
          }
          .subtitle {
            padding: 10px;
            border-bottom: 1px solid white;
          }

          table {
            width: 400px;
            height: 250px;
            background-color: #323232;
            border: none;
            border-radius: 10px;
            margin-top: 10px;
          }

          .today {
            background-color: DarkOrange;
          }

          .chosen-date {
            background-color: coral;
          }

          .leftBtn {
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
            color: #fff;
            border: none;
            background: none;
          }

          .rightBtn {
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
            color: #fff;
            border: none;
            background: none;
          }

          @media screen and (max-width: 576px) {
            .calendar {
              border: 1px solid white;
              border-radius: 10px;
            }
            table {
              border-radius: 10px;
              margin-top: 10px;
            }
          }
        `}
      </style>
    </>
  )
}