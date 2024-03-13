import React from 'react'

export default function TestPorps(props) {
  // 在适当的地方调用父组件传递的回调函数，并传递数据
  const sendDataToParent = () => {
    const dataToSend = 'Data from child component'
    props.onDataFromChild(dataToSend)
  }

  return (
    <div>
      {/* 渲染子组件中的内容 */}
      {props.datas.map((v, id) => (
        <div key={id}>
          <p className="text-normal-gray-light">{v.category_name}</p>
          <h5 className="card-title">{v.event_name}</h5>
        </div>
      ))}
      {/* 在适当的地方触发调用父组件传递的回调函数 */}
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  )
}
