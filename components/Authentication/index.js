import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function Auth({ children }) {
  const router = useRouter()
  const { isLogin } = useSelector((state) => state.app)
  useEffect(() => {
    if (!isLogin && router.pathname !== '/register') {
      router.push('/login')
    }
  }, [isLogin])
  return <div>{children}</div>
}

export default Auth
