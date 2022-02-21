import React, { useEffect } from 'react'
import { pageLinks } from '../pageLinks'
import { useRouter } from 'next/router'

const Home: React.FC<{}> = () => {
  const router = useRouter()
  useEffect(() => {
    router.push(pageLinks.seats)
  }, [router])
  return (
    null
  )
}

export default Home