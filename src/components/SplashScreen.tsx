import './SplashScreen.css'

interface Props { visible: boolean }

export default function SplashScreen({ visible }: Props) {
  return (
    <div id="splash" className={visible ? '' : 'hidden'}>
      <div className="splash-logo-wrap">
        <div className="splash-gem">
          <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
        </div>
        <div className="splash-name">Digitalsight</div>
        <div className="splash-tag">Help Center</div>
      </div>
      <div className="splash-bar-wrap">
        <div className="splash-bar" />
      </div>
      <div className="splash-loading">Loading knowledge base…</div>
    </div>
  )
}
