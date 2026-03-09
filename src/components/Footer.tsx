import { PageId } from '../data/types'
import LogoGem from './LogoGem'
import './Footer.css'

interface Props { navigate: (p: PageId) => void }

const links: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'tutorials', label: 'Tutorials' },
  { id: 'distribution', label: 'Distribution' },
  { id: 'storepolicy', label: 'Store Policy' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
  { id: 'financials', label: 'Financials' },
  { id: 'terms', label: 'Terms' },
  { id: 'privacy', label: 'Privacy' },
]

export default function Footer({ navigate }: Props) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <LogoGem size="sm" />
            <span className="footer-brand-name">Digitalsight</span>
          </div>
          <div className="footer-copy">© 2025 Digitalsight Media. All rights reserved.</div>
        </div>
        <div className="footer-links">
          {links.map(l => (
            <a key={l.id} onClick={() => navigate(l.id)}>{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
