import { useState } from 'react'

export default function TodoIndex() {
  // 依傳入id進行切換completed屬性改變
  const toggleCompleted = (todos, id) => {
    return todos.map((v) => {
      if (v.id === id) return { ...v, completed: !v.completed }
      else return { ...v }
    })
  }

  // 依傳入id進行切換editing屬性改變
  // 注意: 同時間只會有一個editing是true
  const toggleEditing = (todos, id) => {
    return todos.map((v) => {
      if (v.id === id) return { ...v, editing: true }
      // 其它非此id的項目，editing全設為false
      else return { ...v, editing: false }
    })
  }

  // 依傳入id進行更新text
  // 注意: 更新完成後，editing要改為false
  const updateText = (todos, id, text) => {
    return todos.map((v) => {
      if (v.id === id) return { ...v, text: text, editing: false }
      else return { ...v }
    })
  }

  // 依傳入isSelectedAll(布林值)進行切換所有completed屬性改變
  const toggleSelectedAll = (todos, isSelectedAll) => {
    return todos.map((v) => {
      return { ...v, completed: isSelectedAll }
    })
  }
  // -----------------------------------------------
  // 事件處理函式
  // -----------------------------------------------
  // 第3.步 設定回原本的狀態中
  const handleAdd = (text) => {
    setTodos(add(todos, text))
  }

  const handleRemove = (id) => {
    setTodos(remove(todos, id))
  }

  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id))
  }

  const handleToggleEditing = (id) => {
    setTodos(toggleEditing(todos, id))
  }

  const handleUpdateText = (id, text) => {
    setTodos(updateText(todos, id, text))
  }

  const handleToggleSelectedAll = (isSelectedAll) => {
    setTodos(toggleSelectedAll(todos, isSelectedAll))
  }
  // -----------------------------------------------

  return (
    <>
      <AddForm handleAdd={handleAdd} />
      <br />
      <input
        // 使用不可控表單元素即可
        type="checkbox"
        onChange={(e) => {
          // 切換所有的項目
          handleToggleSelectedAll(e.target.checked)
        }}
      />{' '}
      全選
      <List
        // 列表中呈現的項目，還需先經過類型過濾再呈現，並非原本的狀態
        todos={filterTodos(todos, filterType)}
        handleRemove={handleRemove}
        handleToggleCompleted={handleToggleCompleted}
        handleToggleEditing={handleToggleEditing}
        handleUpdateText={handleUpdateText}
      />
      <hr />
    </>
  )
}
