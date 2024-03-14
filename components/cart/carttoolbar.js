import React from 'react'
import Link from 'next/link'
import { useCart } from '@/hooks/use-cart'

export default function Carttoolbar() {
  const { NavbaralcTotalItemstotal } = useCart()
  return (
    <>
      <Link className="nav-link" href="/cart" role="button" title="購物車">
        <div className="d-flex justify-content-center align-items-center">
          <i className="bi bi-cart-fill"></i>
          <div className="bg-white text-center rounded-circle ms-2">
            <p className="cart-total text-center text-secondary">
              {NavbaralcTotalItemstotal}
            </p>
          </div>
        </div>

        <p className="d-none d-md-inline d-lg-none"> 購物車</p>
      </Link>
    </>
  )
}
