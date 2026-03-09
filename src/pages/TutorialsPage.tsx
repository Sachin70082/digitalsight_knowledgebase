import { PageId } from '../data/types'
import BackButton from '../components/BackButton'
import ContentLayout from '../components/ContentLayout'
import Callout from '../components/Callout'
import './shared.css'

interface Props { navigate: (p: PageId) => void }

export default function TutorialsPage({ navigate }: Props) {
  return (
    <>
      <BackButton navigate={navigate} />
      <ContentLayout toc={['Dashboard Overview', 'Core Navigation', 'Creating a Release', 'Managing Artists', 'Correction Queue']}>
        <div className="page-kicker">📖 Tutorials</div>
        <h1 className="article-h1">Getting Started with Digitalsight</h1>
        <p className="article-lead">Follow these structured guides to master the platform — from account setup and artist creation to release submission and correction handling.</p>
        <div className="article-meta"><span>📅 Updated March 2025</span><span>⏱ ~15 min read</span></div>
        <div className="art">
          <h2 id="dashboard-overview">1. Dashboard Overview</h2>
          <p>The Dashboard is your central command center. When you log in to Digitalsight, you'll see:</p>
          <ul>
            <li><strong>Release Statistics</strong> — Real-time count of releases by status (Draft, Pending, Published, etc.).</li>
            <li><strong>Entity Statistics</strong> — Number of Artists and Labels registered to your account.</li>
            <li><strong>Corporate Board Notices</strong> — System updates, policy changes, and announcements.</li>
            <li><strong>Quick Actions</strong> — Fast access to "My Catalog" and "Manage Artists".</li>
          </ul>
          <Callout type="info" emoji="💡" title="Pro Tip" text=" Bookmark the Dashboard URL for fastest access. Release statistics update in real time whenever a status changes." />

          <h2 id="core-navigation">2. Core Navigation Pages</h2>
          <table className="art-table">
            <thead><tr><th>Page</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><strong>Dashboard</strong></td><td>Overview of account activity and release statistics.</td></tr>
              <tr><td><strong>My Catalog</strong></td><td>View and manage all music submissions and statuses.</td></tr>
              <tr><td><strong>Artists</strong></td><td>Create and manage artist profiles — required before any release.</td></tr>
              <tr><td><strong>Labels / Sub-Labels</strong></td><td>Manage publishing entities and label hierarchy.</td></tr>
              <tr><td><strong>Correction Queue</strong></td><td>Releases marked "Needs Info" awaiting your edits.</td></tr>
              <tr><td><strong>Notices</strong></td><td>Official communications and announcements.</td></tr>
              <tr><td><strong>Support & FAQ</strong></td><td>Help documentation and contact options.</td></tr>
              <tr><td><strong>Settings</strong></td><td>Profile, password, and account preferences.</td></tr>
            </tbody>
          </table>

          <h2 id="creating-a-release">3. Creating a Release — 7 Steps</h2>
          <p>Release creation follows a structured 7-step workflow. Complete each step fully before proceeding.</p>
          <div className="step-list">
            {[
              { n: 1, title: 'General Information', body: 'Enter the album title, album type (Album or Film/Single), content type (Single, Album, Compilation, Remix), and select primary and featured artists from your managed list.' },
              { n: 2, title: 'Commercial Metadata', body: 'Add UPC/EAN (or leave blank to auto-generate), catalogue number, release date (minimum 3 days from today), P-Line (e.g., Digitalsight), C-Line, and publisher information.' },
              { n: 3, title: 'Genre & Mood', body: 'Select primary genre, sub-genre, core mood (helps with playlist placement), lyric language, and set the Parental Advisory flag if content contains explicit material.' },
              { n: 4, title: 'Film Sync (Optional)', body: 'For cinematic releases only — add Director, Producer, Studio, and Star Cast. Leave blank if not applicable.' },
              { n: 5, title: 'Tracklist', body: 'Add each track: title and version (e.g., Radio Edit), ISRC (auto-generated if blank), full legal names of all Composers and Lyricists, WAV audio file, and CRBT details if needed.' },
              { n: 6, title: 'Artwork Upload', body: 'Upload cover art at 3000×3000 pixels, square format, JPEG or PNG. Optionally enable YouTube Content ID for digital fingerprinting protection.' },
              { n: 7, title: 'Review & Submit', body: 'Review all data carefully. Add submission notes for auditors if needed. Click Execute Ingest to submit your release for review.' },
            ].map(s => (
              <div key={s.n} className="step-row">
                <div className="step-num">{s.n}</div>
                <div className="step-body"><h4>{s.title}</h4><p>{s.body}</p></div>
              </div>
            ))}
          </div>
          <Callout type="success" emoji="✅" title="Pre-Submission Checklist" text=" WAV audio files · 3000×3000 cover art · Legal composer and lyricist names · Correct P-Line and C-Line · Release date at least 3 days out · Explicit content flagged if applicable." />

          <h2 id="managing-artists">4. Managing Artists</h2>
          <p>You must have at least one artist profile before creating any release. To add one: navigate to <strong>Artists</strong>, click <strong>Add Artist</strong>, enter legal and display names, optionally add Spotify and Apple Music artist IDs for better store linking, upload a profile image, and save. The artist will now appear in the release creation artist selector.</p>

          <h2 id="correction-queue">5. The Correction Queue</h2>
          <p>When a release receives "Needs Info" status, it appears in the Correction Queue. Open the release, read the <strong>Journal Memo</strong> or <strong>Admin Notes</strong> for specific instructions, make the required edits, and resubmit. The release returns to "Pending" for re-review.</p>
          <Callout type="warn" emoji="⚠️" title="Act Promptly" text=" Delays in addressing corrections may push back your release date, especially for time-sensitive or pre-announced releases." />
        </div>
      </ContentLayout>
    </>
  )
}
