import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './toolbar.module.scss'
import dynamic from 'next/dynamic'
import { useCart } from '@/hooks/use-cart'
import { useAuth } from '@/hooks/use-auth'

const Carttoolbar = dynamic(() => import('@/components/cart/carttoolbar'), {
  ssr: false,
})

export default function Toolbar({ handleShow }) {
  const { NavbaralcTotalItemstotal } = useCart()
  const { isAuthenticated, signOut, auth } = useAuth()
  const [userData, setUserData] = useState([])
  console.log(auth)

  const handleSignOut = () => {
    signOut() // Call the sign out method
    // Redirect or perform additional actions after signing out if needed
  }

  const getUser = () => {
    fetch('http://localhost:3005/api/member', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        // 檢查是否有資料並設定到 state 中
        if (
          data &&
          data.data &&
          data.data.posts &&
          data.data.posts.length > 0
        ) {
          setUserData(data.data.posts[0])
        } else {
          console.warn('No data received from the server.')
        }
      })
      .catch((error) => console.error('Error fetching data:', error))
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <ul className="navbar-nav pe-2 ms-auto">
      <li className="nav-item">
        <Carttoolbar />
      </li>
      <li
        // className="nav-item dropdown"
        className={`nav-item dropdown ${styles['dropdown']}`}
      >
        <Link
          className="nav-link dropdown-toggle d-flex align-items-center"
          href="/member"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          title="會員中心"
        >
          <img
            width={30}
            className={`${styles['avatar']} rounded-circle me-2`}
            src={`http://localhost:3005/avatar/${userData.avatar}`}
          />
          <h6 className="m-0 me-1">{userData.name}</h6>
        </Link>
        <ul
          className={`dropdown-menu dropdown-menu-end p-4 mw-100 user ${styles['slideIn']} ${styles['dropdown-menu']}`}
        >
          <li>
            {auth.isAuthenticated && auth.user ? (
              <>
                <img
                  src={`http://localhost:3005/avatar/${userData.avatar}`}
                  className="rounded-circle d-block mx-auto"
                  alt="..."
                  width={80}
                  height={80}
                />
                <p className="text-center mt-2">{auth.user.name}</p>
              </>
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
              <Link className="dropdown-item text-center " href="/">
                回首頁
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
      <style global jsx>
        {`
          .cart-total {
            width: 20px;
            height: 20px;
          }
          .user {
            .dropdown-item {
              border-radius: 5px;
              margin-top: 5px;
              transition: 300ms;
              &:hover {
                background-color: var(--primary-50-color);
              }
            }
          }
        `}
      </style>
    </ul>
  )
}
