import { PageId } from '../data/types'
import LogoGem from './LogoGem'
import './TopNav.css'

interface Props {
  currentPage: PageId
  navigate: (p: PageId) => void
  onHamburger: () => void
}

const navItems: { id: PageId; label: string; iconPath: string }[] = [
  { id: 'home', label: 'Home', iconPath: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
  { id: 'tutorials', label: 'Tutorials', iconPath: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' },
  { id: 'distribution', label: 'Distribution', iconPath: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20' },
  { id: 'storepolicy', label: 'Store Policy', iconPath: 'M2 7h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' },
  { id: 'troubleshooting', label: 'Troubleshooting', iconPath: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 8v4M12 16h.01' },
  { id: 'financials', label: 'Financials', iconPath: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
]

export default function TopNav({ currentPage, navigate, onHamburger }: Props) {
  return (
    <nav className="topnav">
      <div className="topnav-inner">
        <div className="topnav-logo" onClick={() => navigate('home')}>
          <LogoGem size="md" />
          <div>
            <span className="logo-name">Digitalsight</span>
            <span className="logo-tag">Help Center</span>
          </div>
        </div>

        <div className="nav-pills">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-pill${currentPage === item.id ? ' active' : ''}`}
              onClick={() => navigate(item.id)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={item.iconPath} />
              </svg>
              {item.label}
            </button>
          ))}
        </div>

        <button className="ham-btn" onClick={onHamburger} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
