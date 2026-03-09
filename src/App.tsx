import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
import { PageId } from './data/types'
import TopNav from './components/TopNav'
import MobileDrawer from './components/MobileDrawer'
import SplashScreen from './components/SplashScreen'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import TutorialsPage from './pages/TutorialsPage'
import DistributionPage from './pages/DistributionPage'
import StorePolicyPage from './pages/StorePolicyPage'
import TroubleshootingPage from './pages/TroubleshootingPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import FinancialsPage from './pages/FinancialsPage'
import './styles/app.css'

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [splashVisible, setSplashVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setSplashVisible(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleNavigate = (p: PageId) => {
    navigate(p === 'home' ? '/' : `/${p}`)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentPage = location.pathname === '/' ? 'home' : location.pathname.slice(1) as PageId

  return (
    <div className="app">
      <SplashScreen visible={splashVisible} />
      <TopNav currentPage={currentPage} navigate={handleNavigate} onHamburger={() => setMobileOpen(true)} />
      <MobileDrawer open={mobileOpen} currentPage={currentPage} navigate={handleNavigate} onClose={() => setMobileOpen(false)} />
      <main className="main">
        <div className="page-wrap" key={location.pathname}>
          <Routes>
            <Route path="/" element={<HomePage navigate={handleNavigate} />} />
            <Route path="/tutorials" element={<TutorialsPage navigate={handleNavigate} />} />
            <Route path="/distribution" element={<DistributionPage navigate={handleNavigate} />} />
            <Route path="/storepolicy" element={<StorePolicyPage navigate={handleNavigate} />} />
            <Route path="/troubleshooting" element={<TroubleshootingPage navigate={handleNavigate} />} />
            <Route path="/terms" element={<TermsPage navigate={handleNavigate} />} />
            <Route path="/privacy" element={<PrivacyPage navigate={handleNavigate} />} />
            <Route path="/financials" element={<FinancialsPage navigate={handleNavigate} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Footer navigate={handleNavigate} />
    </div>
  )
}
