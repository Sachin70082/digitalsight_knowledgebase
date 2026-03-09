import { PageId } from '../data/types'
import LogoGem from './LogoGem'
import './MobileDrawer.css'

interface Props {
  open: boolean
  currentPage: PageId
  navigate: (p: PageId) => void
  onClose: () => void
}

const sections = [
  { label: 'Overview', items: [{ id: 'home' as PageId, label: 'Home' }] },
  {
    label: 'Learn',
    items: [
      { id: 'tutorials' as PageId, label: 'Tutorials' },
      { id: 'distribution' as PageId, label: 'Distribution Guidelines' },
      { id: 'storepolicy' as PageId, label: 'Store Policy' },
      { id: 'troubleshooting' as PageId, label: 'Troubleshooting' },
    ],
  },
  { label: 'Finance', items: [{ id: 'financials' as PageId, label: 'Financials & Royalties' }] },
  {
    label: 'Legal',
    items: [
      { id: 'terms' as PageId, label: 'Terms & Conditions' },
      { id: 'privacy' as PageId, label: 'Privacy Policy' },
    ],
  },
]

export default function MobileDrawer({ open, currentPage, navigate, onClose }: Props) {
  if (!open) return null
  return (
    <div className="mob-drawer">
      <div className="mob-overlay" onClick={onClose} />
      <div className="mob-panel">
        <div className="mob-logo-wrap">
          <LogoGem size="sm" />
          <div>
            <span style={{ fontWeight: 800, fontSize: 15, color: 'var(--ink)', display: 'block' }}>Digitalsight</span>
            <span style={{ fontSize: 10, color: 'var(--ink3)', display: 'block' }}>Help Center</span>
          </div>
        </div>
        {sections.map(sec => (
          <div key={sec.label}>
            <div className="mob-section-label">{sec.label}</div>
            {sec.items.map(item => (
              <button
                key={item.id}
                className={`mob-nav-item${currentPage === item.id ? ' active' : ''}`}
                onClick={() => navigate(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
