import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Url } from '@/constants/url'

const Index: FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace(Url.AdminHome)
  }, [])

  return null
}
export default Index
