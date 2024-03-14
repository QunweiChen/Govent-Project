import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import LoadingLayout from '@/components/layout/loading-layout'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { motion } from 'framer-motion'

// 只作導向到 product/list
export default function OrganizerIndex() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [progressNumber, setProgressNumber] = useState(0)

  const incrementNumber = (currentNumber, setNumber, incrementSpeed, max) => {
    if (currentNumber < max) {
      setNumber((prevNumber) => prevNumber + incrementSpeed)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      incrementNumber(progressNumber, setProgressNumber, 1, 100)
    }, 10)

    return () => clearInterval(interval)
  }, [progressNumber])

  useEffect(() => {
    // 设置一个3秒的定时器
    const timer = setTimeout(() => {
      setIsVisible(true) // 3秒后将 isVisible 设置为 true
    }, 2000)

    // 组件卸载时清除定时器，以避免内存泄漏
    return () => clearTimeout(timer)
  }, []) // 空数组作为第二个参数，表示只在组件挂载时运行一次

  useEffect(() => {
    if (isVisible) {
      router.push('/organizer/event')
    }
  }, [isVisible, router])

  return (
    <div className="loading-bg d-flex justify-content-center align-items-center">
      <div className="control-bgc text-white p-3 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h4>前往主辦中心</h4>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}>
            <span className="sm-p">{progressNumber}%</span>
          <ProgressBar now={`${progressNumber}`} className="my-3 progress" />
        </motion.div>
      </div>
      <style global jsx>
        {`
          .loading-bg {
            background-color: var(--bg-gray-color);
            width: 100%;
            height: 100vh;
          }
          .control-bgc {
            width: 800px;
          }
          .progress {
            padding: 5px;
            height: 20px;
            background-color: var(--bg-gray-secondary-color);
            border: 1px solid var(--primary-color);
          }
        `}
      </style>
    </div>
  )
}

OrganizerIndex.getLayout = function (page) {
  return <LoadingLayout title="進入主辦中心">{page}</LoadingLayout>
}
