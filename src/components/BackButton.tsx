import { PageId } from '../data/types'
import './BackButton.css'

interface Props { navigate: (p: PageId) => void }

export default function BackButton({ navigate }: Props) {
  return (
    <button className="back-btn" onClick={() => navigate('home')}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Back to Help Center
    </button>
  )
}
