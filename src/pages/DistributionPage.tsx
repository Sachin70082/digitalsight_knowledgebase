import { PageId } from '../data/types'
import BackButton from '../components/BackButton'
import ContentLayout from '../components/ContentLayout'
import Callout from '../components/Callout'
import './shared.css'

interface Props { navigate: (p: PageId) => void }

export default function DistributionPage({ navigate }: Props) {
  return (
    <>
      <BackButton navigate={navigate} />
      <ContentLayout toc={['Audio Requirements', 'Cover Art', 'Metadata Standards', 'ISRC & UPC', 'Release Statuses', 'Timelines']}>
        <div className="page-kicker">🌐 Distribution</div>
        <h1 className="article-h1">Distribution Guidelines</h1>
        <p className="article-lead">All releases must meet these technical and metadata standards before they can be ingested and distributed to global digital stores.</p>
        <div className="article-meta"><span>📅 Updated March 2025</span><span>⏱ ~10 min read</span></div>
        <div className="art">
          <h2 id="audio-requirements">Audio Requirements</h2>
          <p>Only high-fidelity WAV master files are accepted. Compressed formats are automatically rejected at submission.</p>
          <table className="art-table">
            <thead><tr><th>Parameter</th><th>Requirement</th></tr></thead>
            <tbody>
              <tr><td><strong>Format</strong></td><td>WAV (Waveform Audio File Format)</td></tr>
              <tr><td><strong>Sample Rate</strong></td><td>44.1 kHz minimum — 48 kHz or 96 kHz preferred</td></tr>
              <tr><td><strong>Bit Depth</strong></td><td>16-bit minimum — 24-bit recommended</td></tr>
              <tr><td><strong>Channels</strong></td><td>Stereo (2 channels)</td></tr>
              <tr><td><strong>Normalisation</strong></td><td>No clipping. Peak below –1 dBFS recommended</td></tr>
              <tr><td><strong>Silence</strong></td><td>Maximum 2 seconds at start or end of track</td></tr>
            </tbody>
          </table>
          <Callout type="danger" emoji="🚫" title="Not Accepted" text=" MP3, AAC, FLAC, OGG, or any lossy/compressed format — including WAV files re-encoded from MP3. These are rejected immediately." />

          <h2 id="cover-art">Cover Art Specifications</h2>
          <ul>
            <li><strong>Dimensions:</strong> 3000 × 3000 pixels (strictly square)</li>
            <li><strong>Format:</strong> JPEG (.jpg) or PNG (.png)</li>
            <li><strong>Colour Space:</strong> RGB — not CMYK</li>
            <li><strong>File Size:</strong> Under 20 MB</li>
            <li>No blurry, pixelated, or watermarked images</li>
            <li>No URLs, pricing, or promotional text on artwork</li>
            <li>No explicit imagery unless flagged in platform settings</li>
          </ul>

          <h2 id="metadata-standards">Metadata Standards</h2>
          <p>Accurate metadata is critical for discoverability and royalty routing. All fields must reflect factual, correct information.</p>
          <ul className="chk-list">
            {[
              ['Album Title', 'Official release name, correctly capitalised'],
              ['Artist Names', 'Legal name matching your verified artist profile'],
              ['Release Date', 'At least 3 days from submission date'],
              ['P-Line', 'Phonographic copyright (e.g., ℗ 2025 Label Name)'],
              ['C-Line', 'Composition copyright (e.g., © 2025 Publisher Name)'],
              ['Genre & Sub-Genre', 'Accurate to the style of music'],
              ['Composer & Lyricist', 'Full legal names on every track'],
              ['Language', 'Primary language of the lyrics'],
              ['Parental Advisory', 'Must be flagged for any explicit content'],
            ].map(([field, desc], i) => (
              <li key={i}><span className="chk-mark">✓</span><span><strong>{field}</strong> — {desc}</span></li>
            ))}
          </ul>

          <h2 id="isrc-upc">ISRC & UPC Codes</h2>
          <p>Digitalsight will auto-generate valid codes if you leave the fields blank. If supplying your own, ensure they are valid, unused, and registered to you.</p>
          <ul>
            <li><strong>UPC/EAN:</strong> Release-level barcode. Leave blank to auto-generate.</li>
            <li><strong>ISRC:</strong> Track-level identifier. Leave blank to auto-generate per track.</li>
          </ul>

          <h2 id="release-statuses">Release Status Lifecycle</h2>
          <div className="status-grid">
            {[
              ['s-draft', 'Draft', 'Saved locally, not yet submitted.'],
              ['s-pending', 'Pending', 'Submitted — awaiting Digitalsight audit.'],
              ['s-needs', 'Needs Info', 'Correction requested — check Journal Memo.'],
              ['s-approved', 'Approved', 'Passed audit — ready for ingestion.'],
              ['s-processed', 'Processed', 'Ingested into distribution system.'],
              ['s-published', 'Published', 'Live on Spotify, Apple Music, and more.'],
              ['s-rejected', 'Rejected', 'Denied — usually copyright or quality issue.'],
              ['s-takedown', 'Takedown', 'Release removed from all stores.'],
            ].map(([cls, title, desc], i) => (
              <div key={i} className="status-chip">
                <div className={`s-dot ${cls}`} />
                <div><h5>{title}</h5><p>{desc}</p></div>
              </div>
            ))}
          </div>

          <h2 id="timelines">Timelines & Lead Times</h2>
          <div className="timeline">
            <div className="tl-item"><div className="tl-time">Day 0</div><h5>Submission</h5><p>You submit via Execute Ingest.</p></div>
            <div className="tl-item"><div className="tl-time">24–72 hours</div><h5>Audit Review</h5><p>Digitalsight team reviews and approves or flags the submission.</p></div>
            <div className="tl-item"><div className="tl-time">24–48 hours</div><h5>Store Processing</h5><p>Once Processed, stores reflect the release within 1–2 days.</p></div>
            <div className="tl-item"><div className="tl-time">Best Practice</div><h5>Submit 2–3 Weeks Early</h5><p>For playlist pitching and editorial placement, always submit 2–3 weeks ahead.</p></div>
          </div>
          <Callout type="info" emoji="📅" title="Minimum Lead Time:" text=" 3 days is the technical floor — for meaningful store and playlist placement, 2–3 weeks is strongly recommended." />
        </div>
      </ContentLayout>
    </>
  )
}
