import './ContentLayout.css'

interface Props {
  toc: string[]
  children: React.ReactNode
}

export default function ContentLayout({ toc, children }: Props) {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <div className="content-layout">
      <aside className="content-sidebar">
        <div className="toc-label">On this page</div>
        <ul className="toc-list">
          {toc.map((item, i) => (
            <li key={i}>
              <a 
                onClick={() => scrollToId(item.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''))} 
                style={{ cursor: 'pointer' }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <div className="content-body">{children}</div>
    </div>
  )
}
