import Image from 'next/image'
import Link from 'next/link'
import styles from './toolbar.module.scss'
//勾子
import { useCart } from '@/hooks/use-cart'

export default function Toolbar({ handleShow }) {

  const { calcTotalItems, merchantItems } = useCart()

  return (
    <ul className="navbar-nav pe-2 ms-auto">
      <li className="nav-item">
        <Link className="nav-link" href="/cart" role="button" title="購物車">
          <div className="d-flex justify-content-center align-items-center">
            <i className="bi bi-cart-fill"></i>
            <div className="bg-white text-center rounded-circle ms-2">
              <p className="cart-total text-center text-secondary">
                {calcTotalItems(merchantItems) }
              </p>
            </div>
          </div>

          <p className="d-none d-md-inline d-lg-none"> 購物車</p>
        </Link>
      </li>
      <li
        // className="nav-item dropdown"
        className={`nav-item dropdown ${styles['dropdown']}`}
      >
        <Link
          className="nav-link dropdown-toggle"
          href=""
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          title="會員中心"
        >
          <i className="bi bi-person-circle"></i>
          <p className="d-none d-md-inline d-lg-none"> 會員中心</p>
        </Link>
        <ul
          className={`dropdown-menu dropdown-menu-end p-4 mw-100 ${styles['slideIn']} ${styles['dropdown-menu']}`}
        >
          <li>
            <p className="text-center">
              <Image
                src="/avatar.svg"
                className="rounded-circle d-block mx-auto"
                alt="..."
                width={80}
                height={80}
              />
            </p>
            <p className="text-center">
              會員姓名: 艾迪
              <br />
              帳號: eddy123
            </p>
          </li>
          <li>
            <Link className="dropdown-item text-center" href="/admin">
              會員管理區
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item text-center " href="/about">
              客服中心
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <span
          className="nav-link"
          role="presentation"
          onClick={(e) => {
            e.preventDefault()
            handleShow()
          }}
          title="展示"
        >
          <i className="bi bi-mortarboard-fill"></i>
          <p className="d-none d-md-inline d-lg-none"> 展示</p>
        </span>
      </li>
      <style global jsx>
        {`
          .cart-total {
            width: 20px;
            height: 20px;
          }
        `}
      </style>
    </ul>
  )
}
