import { useEffect, useState } from 'react'
import MainPage from './pages/MainPage'
import ExhibitionListPage from './pages/ExhibitionListPage'
import ExhibitionDetailPage from './pages/ExhibitionDetailPage'
import ReservationPage from './pages/ReservationPage'
import { parseHash } from './routes'

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      // 본문 바로가기(#main)는 화면을 바꾸지 않음
      if (window.location.hash === '#main') return
      setHash(window.location.hash)
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // 주소 뒤 #부분에 맞는 화면 (모르는 주소는 메인)
  const route = parseHash(hash)
  if (route.page === 'list') return <ExhibitionListPage />
  if (route.page === 'detail') return <ExhibitionDetailPage key={route.id} id={route.id} />
  if (route.page === 'reservation') return <ReservationPage key={route.id} id={route.id} />
  return <MainPage />
}

export default App
