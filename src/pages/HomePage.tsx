import { useState } from 'react'
import { PageId } from '../data/types'
import { searchData } from '../data/searchData'
import './HomePage.css'

interface Props { navigate: (p: PageId) => void }

export default function HomePage({ navigate }: Props) {
  const [query, setQuery] = useState('')

  const results = query.length >= 2
    ? searchData.filter(d =>
        d.title.toLowerCase().includes(query.toLowerCase()) ||
        d.text.toLowerCase().includes(query.toLowerCase()) ||
        (d.keywords && d.keywords.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 5)
    : []

  return (
    <>
      <div className="home-hero">
        <div>
          <div className="hero-eyebrow">Knowledge Base</div>
          <h1>Find <em>answers</em>,<br />ship music faster.</h1>
          <p>Everything you need to distribute, manage, and protect your music on the Digitalsight platform.</p>
          <div className="hero-searchbar">
            <input
              type="text"
              placeholder="Search tutorials, policies, guides…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoComplete="off"
            />
            <button>Search</button>
          </div>
          {results.length > 0 && (
            <div className="search-drop">
              {results.map((r, i) => (
                <div key={i} className="search-drop-item" onClick={() => { navigate(r.page); setQuery('') }}>
                  <span className="sdi-tag">{r.tag}</span>
                  <div className="sdi-info">
                    <h5>{r.title}</h5>
                    <p>{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {query.length >= 2 && results.length === 0 && (
            <div className="search-drop"><div className="no-results">No results for "{query}"</div></div>
          )}
        </div>
        <div className="hero-right">
          <div className="hero-stat"><div className="hero-stat-val">7</div><div className="hero-stat-label">Release Steps</div></div>
          <div className="hero-stat"><div className="hero-stat-val">3 days</div><div className="hero-stat-label">Min. Lead Time</div></div>
          <div className="hero-stat"><div className="hero-stat-val">150+</div><div className="hero-stat-label">Global Stores</div></div>
        </div>
      </div>

      <div className="section-eyebrow">Browse Topics</div>
      <div className="section-h">What do you need help with?</div>
      <div className="section-sub">Choose a category to explore step-by-step guides and documentation.</div>
      <div className="cat-grid">
        {[
          { id: 'tutorials' as PageId, cls: 'c-coral', iconCls: 'ci-coral', emoji: '📖', title: 'Tutorials', desc: 'Guided walkthroughs for dashboard navigation, release creation, and artist management.' },
          { id: 'distribution' as PageId, cls: 'c-teal', iconCls: 'ci-teal', emoji: '🌐', title: 'Distribution Guidelines', desc: 'Audio specs, metadata standards, release statuses, and submission timelines explained.' },
          { id: 'storepolicy' as PageId, cls: 'c-amber', iconCls: 'ci-amber', emoji: '🏪', title: 'Store Policy', desc: 'Platform-specific rules for Spotify, Apple Music, YouTube Music, and all major DSPs.' },
          { id: 'troubleshooting' as PageId, cls: 'c-green', iconCls: 'ci-green', emoji: '🔧', title: 'Troubleshooting', desc: 'Resolve rejections, audio errors, metadata issues, and store delivery problems fast.' },
          { id: 'financials' as PageId, cls: '', iconCls: '', emoji: '💰', title: 'Financials & Royalties', desc: 'Understand your earnings, withdrawals, revenue share calculations, and financial reports.' },
        ].map(cat => (
          <div key={cat.id} className={`cat-card${cat.cls ? ' ' + cat.cls : ''}`} onClick={() => navigate(cat.id)}>
            <div className={`cat-icon${cat.iconCls ? ' ' + cat.iconCls : ''}`} style={!cat.iconCls ? { background: '#f0f9ff' } : {}}>{cat.emoji}</div>
            <h3>{cat.title}</h3>
            <p>{cat.desc}</p>
            <span className="cat-link">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
          </div>
        ))}
      </div>

      <div className="section-eyebrow">Quick Reference</div>
      <div className="section-h">Most accessed</div>
      <div className="section-sub">Fast answers to the most common questions.</div>
      <div className="quick-grid">
        {[
          { page: 'distribution' as PageId, icon: '⏱', title: 'Submission Lead Time', desc: 'Min. 3 days before release. 2–3 weeks recommended for playlist pitching.' },
          { page: 'tutorials' as PageId, icon: '🎨', title: 'Cover Art Requirements', desc: '3000×3000 px, square, JPEG or PNG, RGB, no watermarks or URLs.' },
          { page: 'tutorials' as PageId, icon: '🎵', title: 'Audio Format', desc: 'WAV masters only. 44.1 kHz minimum, 16-bit minimum. No compressed formats.' },
          { page: 'distribution' as PageId, icon: '🔖', title: 'ISRC & UPC Codes', desc: 'Leave blank to auto-generate, or supply your own valid, unused codes.' },
          { page: 'storepolicy' as PageId, icon: '🚩', title: 'Explicit Content', desc: 'Must be flagged with Parental Advisory in Step 3. Failure risks de-listing.' },
          { page: 'troubleshooting' as PageId, icon: '📬', title: 'Needs Info Status', desc: 'Check the Journal Memo on your release for exact correction instructions.' },
          { page: 'financials' as PageId, icon: '💸', title: 'Minimum Withdrawal', desc: 'Min. 100 INR. Processing takes 2–3 business days after request is approved.' },
          { page: 'financials' as PageId, icon: '📊', title: 'Net Earnings Formula', desc: 'Net = Gross Revenue × (Revenue Share % / 100). Available = Net − Withdrawn − Pending.' },
          { page: 'financials' as PageId, icon: '💱', title: 'Currency Settings', desc: 'Switch between USD and INR in Settings → Regional Preferences. Updates instantly.' },
        ].map((qc, i) => (
          <div key={i} className="quick-card" onClick={() => navigate(qc.page)}>
            <div className="qc-icon">{qc.icon}</div>
            <div className="qc-info"><h4>{qc.title}</h4><p>{qc.desc}</p></div>
          </div>
        ))}
      </div>
    </>
  )
}
