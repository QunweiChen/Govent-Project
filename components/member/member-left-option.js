import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function MemberleftOption({ link, icon, text }) {
  const router = useRouter()
  const isActive = link === router.pathname

  if (isActive) {
    return (
      <motion.h6
        initial={{ borderLeftColor: 'transparent' }}
        animate={{ borderLeftColor: 'var(--primary-color)' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`option-text active`}
      >
        <Link href={`${link}`} className="link">
          <i className={`bi ${icon} text-primary pe-3`}></i>
          <span>{text}</span>
        </Link>
      </motion.h6>
    )
  } else {
    return (
    <h6 className={`option-text`}>
      <Link href={`${link}`} className="link">
        <i className={`bi ${icon} text-primary pe-3`}></i>
        <span>{text}</span>
      </Link>
      <style global jsx>
        {`
          .link {
            color: white;
            text-decoration: none;
          }
          .option-text {
            padding: 0 20px;
            margin-bottom: 20px;
            border-left: 4px solid transparent;
            transition: 300ms;
          }
          .option-text.active {
            padding: 0 20px;
            margin-bottom: 20px;
            border-left: 4px solid var(--primary-color);
            transition: 300ms;
          }
        `}
      </style>
    </h6>
  )}
}
