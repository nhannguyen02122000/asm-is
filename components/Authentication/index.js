import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setLogin, setToken } from '../../store/app.slice'

function getCookie(cname) {
  let name = cname + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

function Auth({ children }) {
  const router = useRouter()
  const { isLogin } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isLogin) return
    if (getCookie('ACCESS_TOKEN') !== '') {
      dispatch(setLogin(true))
      dispatch(setToken(getCookie('ACCESS_TOKEN')))
    } else if (!isLogin && router.pathname !== '/register') {
      router.push('/login')
    }
  }, [isLogin])
  return <div>{children}</div>
}

export default Auth
