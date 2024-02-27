import { useRouter } from 'next/router'

// 只作導向到 product/list
export default function OrganizerIndex() {
  const router = useRouter()

  // 確認window(瀏覽器)開始運作
  if (typeof window !== 'undefined') {
    router.push('/organizer/event')
  }

  return <></>
}