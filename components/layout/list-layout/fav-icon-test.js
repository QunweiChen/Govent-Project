import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa6'
import { CiHeart } from 'react-icons/ci'
import { Button } from 'bootstrap'

// export default function FavIcon(props) {
//   // const [heartColor, setHeartColor] = useState('white')

//   // const handletoggleFav = (pid) => {
//   //   const newEvents = props.datas.map((v, i) => {
//   //     if (v.pid === pid) return { ...v, fav: !v.fav }
//   //     else return v
//   //   })
//   //   props.setEvents(newEvents)
//   // }

//   const handleToggleFav = (pid) => {
//     const index = props.datas.findIndex((event) => event.pid === pid)
//     if (index !== -1) {
//       const newEvents = [...props.datas]
//       newEvents[index] = { ...newEvents[index], fav: !newEvents[index].fav }
//       props.setEvents(newEvents)
//     }
//   }

//   return (
//     <>
//       {/* 收藏用愛心（測試用） */}
//       {props.datas.map((v, id) => (
//         <div key={id}>
//           <button
//             className={`btn bg-bg-gray text-white`}
//             style={{
//               position: 'absolute',
//               right: 5,
//               top: 5,
//               height: 25,
//               width: 25,
//               padding: 0,
//               border: 'none',
//               background: 'none',
//             }}
//             onClick={() => handleToggleFav(v.pid)}
//           >
//             {v.fav ? <FaHeart /> : <CiHeart />}
//           </button>
//         </div>
//       ))}
//     </>
//   )
// }
export default function FavIcon({ pid, events, setEvents }) {
  const handleToggleFav = () => {
    const newEvents = events.map((event) => {
      if (event.pid === pid) {
        return { ...event, fav: !event.fav }
      }
      return event
    })
    setEvents(newEvents)
  }

  // 查找具有给定pid的事件对象
  const event = events.find((event) => event.pid === pid)

  if (!event) return null; // 如果未找到事件，则不渲染 FavIcon

  return (
    <button
      className={`btn bg-bg-gray text-white`}
      style={{
        position: 'absolute',
        right: 5,
        top: 5,
        height: 25,
        width: 25,
        padding: 0,
        border: 'none',
        background: 'none',
      }}
      onClick={handleToggleFav}
    >
      {event.fav ? <FaHeart /> : <CiHeart />}
    </button>
  )
}