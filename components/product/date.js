import { useState, useEffect } from 'react';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendar, setCalendar] = useState([]);

  const renderCalendar = () => {
    // 这里是你的 renderCalendar 函数逻辑
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    const startingDay = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();
    
    const days = [];
  
    // 渲染上一个月的日期
    for (let i = 0; i < startingDay; i++) {
      const prevMonthDay = new Date(year, month, -startingDay + i + 1);
      days.push(<div key={`prev${i}`} className="date otherMonth">{prevMonthDay.getDate()}</div>);
    }
  
    // 渲染这个月的日期
    for (let i = 1; i <= totalDays; i++) {
      const currentDateObj = new Date(year, month, i);
      const isCurrentDate = i === currentDate.getDate() && month === currentDate.getMonth();
      days.push(
        <div key={`current${i}`} className={`date ${isCurrentDate ? 'currentDate' : ''}`}>
          {i}
        </div>
      );
    }

    console.log(days);
  
    // 渲染下一个月的日期
    const remainingDays = (7 - (days.length % 7)) % 7;
    for (let i = 1; i <= remainingDays; i++) {
      const nextMonthDay = new Date(year, month + 1, i);
      days.push(<div key={`next${i}`} className="date otherMonth">{nextMonthDay.getDate()}</div>);
    }

      // 渲染星期
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];

  const weekdaysJSX = weekdays.map((weekday, index) => (
    <div key={index} className="weekdays">{weekday}</div>
  ));
  
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(
        <div key={i} className="week">
          {days.slice(i, i + 7)}
        </div>
      );
    }
  
    setCalendar(weeks);
  };

  const prevMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const nextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  useEffect(() => {
    renderCalendar();
  }, []);

  return (
    <div className="calendarContainer">
      <div className="calendar">
        <div className="nav">
          <button className="leftBtn" onClick={prevMonth}>
            <i className="bi bi-caret-left-fill"></i>
          </button>
          <div className="month"></div>
          <button className="rightBtn" onClick={nextMonth}>
            <i className="bi bi-caret-right-fill"></i>
          </button>
        </div>
        <div className="week unit1">
          {/* 这里是你的星期渲染 JSX 代码 */}
          <div className="weekdays">日</div>
          <div className="weekdays">一</div>
          <div className="weekdays">二</div>
          <div className="weekdays">三</div>
          <div className="weekdays">四</div>
          <div className="weekdays">五</div>
          <div className="weekdays">六</div>
      
        </div>
        <div className="dates unit1">{calendar}</div>
      </div>
      <style jsx>{`
      body {
        max-height: 300px;
        padding: 0;
        margin: 0;
      }
      * {
        box-sizing: border-box;
        font-family: sans-serif;
        color: white;
      }

      :root {
        --nav-height: 60px;
        --week-height: 30px;
        --date-height: 100px;
      }

      .calendarContainer {
        width: 400px;
        height: 300px;
        background-color: #484848;
        justify-content: center;
        border-radius: 10px;
      }

      .calendar {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #323232;
        height: fit-content;
        border-radius: 10px 10px 0 0;
      }
      .calendar .nav {
        position: relative;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        height: var(--nav-height);
      }
      .calendar .nav button {
        position: absolute;
        font-size: 14px;
        scale: 2;
        font-weight: bold;
        cursor: pointer;
        color: #fff;
        border: none;
        background: none;
        border-radius: 5px;
      }
/* 
      .calendar .nav button:hover {
        background-color: #7e7e7e;
      } */
      .calendar .nav .leftBtn {
        right: 50px;
      }

      .calendar .nav .rightBtn {
        right: 20px;
      }
      .calendar .nav .month {
        display: flex;
        justify-content: center;
        color: #fff;
        font-size: 36px;
      }
      .calendar .unit1 {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        color: white;
        font-weight: bold;
        width: 100%;
      }
      .calendar .weekdays {
        height: var(--week-height);
        /* text-align: center; */
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #323232;
        color: white;
        font-weight: bold;
        border-top: 1px solid rgb(108, 107, 107);
      }
      .calendar .dates div {
        text-align: center;
        font-size: 20px;
        padding: initial;
        height: var(--date-height);
        display: grid;
        place-items: center;
      }
      .calendar .dates .currentDate {
        background-color: #fe7f17;
        border-radius: 5px;
      }

      .calendar .dates div:hover {
        background-color: #ff7272;
        border-radius: 5px;

      `}</style>
    </div>
  );
}


