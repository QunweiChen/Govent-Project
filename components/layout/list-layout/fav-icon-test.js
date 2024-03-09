import { useAuth } from '@/hooks/use-auth'
import { addFav, removeFav } from '@/services/user'
import toast from 'react-hot-toast'
import data from '@/data/event.json'

const Heart = () => (
  <button
    className={`btn position-absolute top-0 end-0 text-white
    }`}
    onClick={}
  >
    <i
      style={{ opacity: 0.8 }}
      className="px-2 py-1 rounded-3 bi bi-heart-fill fs-5"
    ></i>
  </button>
)

export default function FavIcon({ id }) {
  // 由context取得auth-判斷是否能執行add或remove用，favorites決定愛心圖案用
  const { auth, favorites, setFavorites } = useAuth()

  const handleTriggerFav = (pid) => {
    // 在陣列中->移出
    if (favorites.includes(pid)) {
      setFavorites(favorites.filter((v) => v !== pid))
    } else {
      //不在陣列中加入
      setFavorites([...favorites, pid])
    }
  }

  const handleAddFav = async (pid) => {
    const res = await addFav(pid)

    if (res.data.status === 'success') {
      // 伺服器成功後，更新context中favorites的狀態，頁面上的圖示才會對應更動
      handleTriggerFav(pid)
      toast.success(`商品 id=${pid} 新增成功!`)
    }
  }

  const handleRemoveFav = async (pid) => {
    const res = await removeFav(pid)

    if (res.data.status === 'success') {
      // 伺服器成功後，更新context中favorites的狀態，頁面上的圖示才會對應更動
      handleTriggerFav(pid)
      toast.success(`商品 id=${pid} 刪除成功!`)
    }
  }

  return (
    <>
      {/* 由favorites狀態決定呈現實心or空心愛愛圖示 */}
      {favorites.includes(id) ? (
        <button
          style={{ padding: 0, border: 'none', background: 'none' }}
          onClick={() => {
            // 沒登入不能用
            if (!auth.isAuth) {
              return toast.error('會員才能使用!')
            }

            handleRemoveFav(id)
          }}
        >
          <Heart />
        </button>
      ) : (
        <button
          style={{ padding: 0, border: 'none', background: 'none' }}
          onClick={() => {
            // 沒登入不能用
            if (!auth.isAuth) {
              return toast.error('會員才能使用!')
            }

            handleAddFav(id)
          }}
        >
          <Heart color="white" />
        </button>
      )}
    </>
  )
}
