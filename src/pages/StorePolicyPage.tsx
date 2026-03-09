import { PageId } from '../data/types'
import BackButton from '../components/BackButton'
import ContentLayout from '../components/ContentLayout'
import Callout from '../components/Callout'
import './shared.css'

interface Props { navigate: (p: PageId) => void }

export default function StorePolicyPage({ navigate }: Props) {
  return (
    <>
      <BackButton navigate={navigate} />
      <ContentLayout toc={['Supported Stores', 'General Rules', 'Spotify', 'Apple Music', 'YouTube & Content ID', 'CRBT', 'Takedowns']}>
        <div className="page-kicker">🏪 Store Policy</div>
        <h1 className="article-h1">Digital Store Policies</h1>
        <p className="article-lead">Each DSP maintains its own content and metadata rules. Here's what you need to keep your music live and compliant across all platforms.</p>
        <div className="article-meta"><span>📅 Updated March 2025</span><span>⏱ ~8 min read</span></div>
        <div className="art">
          <h2 id="supported-stores">Supported Stores</h2>
          <div className="store-grid">
            {[['🎵','Spotify'],['🍎','Apple Music'],['▶️','YouTube Music'],['📦','Amazon Music'],['🎶','Deezer'],['🌊','Tidal'],['🎤','JioSaavn'],['🎸','Gaana'],['🌍','Boomplay']].map(([e,n]) => (
              <div key={n} className="store-chip"><span className="se">{e}</span><span>{n}</span></div>
            ))}
          </div>

          <h2 id="general-rules">General Content Policies (All Stores)</h2>
          <ul>
            <li><strong>No uncleared samples</strong> — all samples or interpolations must have valid clearance documentation.</li>
            <li><strong>No misleading metadata</strong> — artist names, titles, and genres must reflect actual content.</li>
            <li><strong>No hate speech or discriminatory content</strong> in lyrics or artwork.</li>
            <li><strong>Explicit content must be flagged</strong> — failure to mark explicit content may result in de-listing.</li>
            <li><strong>No keyword stuffing</strong> in titles or artist names.</li>
            <li><strong>No duplicate releases</strong> — same content cannot be submitted twice with different metadata.</li>
          </ul>
          <Callout type="danger" emoji="🚫" title="Zero Tolerance" text=" Content that exploits minors, incites violence, or promotes terrorism results in immediate account termination and legal referral." />

          <h2 id="spotify">Spotify-Specific Rules</h2>
          <ul>
            <li>Artist name must exactly match the verified Spotify artist profile.</li>
            <li>Cover art must not contain Spotify branding, logos, or UI screenshots.</li>
            <li>For editorial pitch consideration, submit at least <strong>7 days before release date</strong>.</li>
            <li>Remix releases must follow the format: <code>Original Song (Artist Remix)</code>.</li>
          </ul>

          <h2 id="apple-music">Apple Music Rules</h2>
          <ul>
            <li>Text overlay covering more than 10% of artwork may trigger rejection.</li>
            <li>ISRC codes must be unique — Apple rejects releases with recycled ISRCs.</li>
            <li>Live track versions must be labelled as <code>(Live)</code> in the track title.</li>
            <li>Lyrics submission is optional but strongly encouraged.</li>
          </ul>

          <h2 id="youtube-content-id">YouTube Music & Content ID</h2>
          <ul>
            <li>Enable <strong>YouTube Content ID</strong> during Step 6 to protect music from unauthorised use.</li>
            <li>Whitelist your own YouTube channel before the release goes live to avoid self-claiming.</li>
            <li>Music videos must be submitted separately through YouTube for Artists.</li>
          </ul>
          <Callout type="warn" emoji="⚠️" title="Content ID Warning" text=" Only enable Content ID on fully original, cleared compositions. Using it on music with uncleared samples may trigger counter-claims against you." />

          <h2 id="crbt">CRBT Policy</h2>
          <ul>
            <li>CRBT title and clip duration must be specified in Step 5 (Tracklist).</li>
            <li>Clip should capture the most recognisable portion — typically the chorus.</li>
            <li>Maximum CRBT duration: <strong>30 seconds</strong>.</li>
            <li>Subject to individual carrier acceptance — may not be available in all regions.</li>
          </ul>

          <h2 id="takedowns">Takedown Policy</h2>
          <p>A release may be taken down due to a valid DMCA notice, policy violation, voluntary artist request, or store compliance audit. Takedown processing typically takes <strong>5–10 business days</strong> across all stores.</p>

          <h2>Royalty & Monetisation</h2>
          <ul>
            <li>Royalties are calculated based on streams and downloads at each store's rate.</li>
            <li>Digitalsight distributes royalties to the registered account on the platform.</li>
            <li>YouTube Content ID royalties are reported separately through YouTube's system.</li>
          </ul>
        </div>
      </ContentLayout>
    </>
  )
}
