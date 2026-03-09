import { useState } from 'react'
import './FAQ.css'

interface FAQItem { question: string; answer: string }
interface Props { items: FAQItem[] }

export default function FAQ({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className="faq-wrap">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <button className="faq-btn" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            {item.question}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="faq-ans" dangerouslySetInnerHTML={{ __html: item.answer }} />
        </div>
      ))}
    </div>
  )
}
