import React from 'react'

export default function BackToMainPage() {
  return (
    <>
      <div className="text-black mb-3 backToMainPage">
        <i className="bi bi-caret-left-fill"></i>回首頁
      </div>
      <style jsx>
        {`
          .backToMainPage {
            @media screen and (max-width: 435px) {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}
