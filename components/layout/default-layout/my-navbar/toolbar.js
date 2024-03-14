import Image from 'next/image'
import Link from 'next/link'
import styles from './toolbar.module.scss'
import { useAuth } from '@/hooks/use-auth'
import { useCart } from '@/hooks/use-cart'

export default function Toolbar({ handleShow }) {
  const { NavbaralcTotalItemstotal } = useCart()
  const { isAuthenticated, signOut, auth } = useAuth()
  console.log(auth)

  const handleSignOut = () => {
    signOut() // Call the sign out method
    // Redirect or perform additional actions after signing out if needed
  }

  return (
    <ul className="navbar-nav pe-2 ms-auto">
      <li className="nav-item">
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
      </li>
      <li
        // className="nav-item dropdown"
        className={`nav-item dropdown ${styles['dropdown']}`}
      >
        <Link
          className="nav-link dropdown-toggle"
          href="/member"
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
            {auth.isAuthenticated && auth.user ? (
              <p className="text-center dropdown-item">
                會員姓名:
                <br />
                {auth.user.name}
                <br />
                帳號: <br />
                {auth.user.username}
              </p>
            ) : (
              <Link className="dropdown-item text-center" href="/user/signin">
                請登入
              </Link>
            )}
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          {auth.isAuthenticated && (
            <li>
              <Link className="dropdown-item text-center " href="/member">
                會員中心
              </Link>
            </li>
          )}
          {auth.isAuthenticated && auth.user ? (
            <li>
              <button
                className="dropdown-item text-center "
                onClick={handleSignOut}
              >
                登出
              </button>
            </li>
          ) : (
            <Link className="dropdown-item text-center" href="/user/signup">
              我要註冊
            </Link>
          )}
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
