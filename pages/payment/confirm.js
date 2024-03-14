import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Confirm() {
  const router = useRouter()
  useEffect(() => {
    if (router.isReady) {
      console.log(router.query.transactionId)
      let transactionId = router.query.transactionId
      fetch(
        `http://localhost:3005/api/payment-line-pay/confirm?transactionId=${transactionId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => {
          let result = response.json()
          console.log(result)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [router.isReady])
  return <div class=" text-white">付款完成</div>
}
