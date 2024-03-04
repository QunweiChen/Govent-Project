import React, { useState } from 'react'
import NavbarTopRwd from '@/components/layout/list-layout/navbar-top-sm'
import AlwaysOpenExample from '@/components/layout/list-layout/accordion'

export default function List() {
  return (
    <>
      <nav>
        <NavbarTopRwd />
      </nav>
      <AlwaysOpenExample />
      <useAccordionButton />

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
