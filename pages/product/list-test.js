import React, { useState } from 'react'
import NavbarTopRwd from '@/components/layout/list-layout/navbar-top-sm'
import useEvents from '@/hooks/use-event/events'

export default function List() {

  const {
    data,
  } = useEvents()
  console.log(data.data?.posts);
  return (
    <>
      <useEvents>
        <nav>
          <NavbarTopRwd />
        </nav>
        <div className="container">
          <h1 className='text-white'></h1>
           
        </div>
      </useEvents>

      <style global jsx>{`
        body {
          background-color: #151515;
          color: #fff;
          border: border-inline;
        }
      `}</style>
    </>
  )
}
