import './Callout.css'

interface Props {
  type: 'info' | 'warn' | 'success' | 'danger'
  emoji: string
  title: string
  text: string
}

export default function Callout({ type, emoji, title, text }: Props) {
  return (
    <div className={`callout callout-${type}`}>
      <span className="callout-emoji">{emoji}</span>
      <div><strong>{title}</strong>{text}</div>
    </div>
  )
}
