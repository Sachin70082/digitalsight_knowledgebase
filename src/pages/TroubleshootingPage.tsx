import { PageId } from '../data/types'
import BackButton from '../components/BackButton'
import ContentLayout from '../components/ContentLayout'
import FAQ from '../components/FAQ'
import './shared.css'

interface Props { navigate: (p: PageId) => void }

const faqs = [
  { question: 'My release shows "Needs Info" — what do I do?', answer: 'Navigate to <strong>My Catalog</strong>, open the release, and read the <strong>Journal Memo</strong> or <strong>Admin Notes</strong> for exact correction details. Make the required changes, then resubmit. The release returns to "Pending" and will be re-reviewed by the Digitalsight team.' },
  { question: 'How do I change the release date after submission?', answer: 'If still in <strong>Pending</strong> or <strong>Needs Info</strong> status, open the release and edit Step 2 (Commercial Metadata). If already <strong>Approved</strong> or <strong>Processed</strong>, contact your Account Manager — stores may have already been notified of the original date.' },
  { question: 'My release is "Published" but I can\'t find it on Spotify.', answer: 'Stores take 24–72 hours to reflect a Processed release. Spotify can take up to 72 hours. Search using the exact artist name and release title. If still missing after 5 business days of Published status, contact support with the Release ID.' },
  { question: 'Can I edit a release after it\'s been published?', answer: 'Minor metadata corrections (typos, credit updates) are possible via a <strong>Metadata Update Request</strong> — contact your Account Manager. Audio file replacements require a full takedown and resubmission. Cover art changes are handled case-by-case.' },
  { question: 'What if my UPC or ISRC is rejected by a store?', answer: 'Auto-generated codes from Digitalsight are guaranteed valid. If you supplied your own codes and they\'re rejected, they\'re likely already registered to different content in that store\'s system. Contact your Account Manager for replacement — do not resubmit with the same rejected codes.' },
  { question: 'Why is my artist name displaying differently on some stores?', answer: 'This happens when your Digitalsight artist profile doesn\'t exactly match an existing verified profile at the store. Fix this by adding the correct Spotify Artist ID and Apple Music Artist ID to your artist profile — future submissions will link to the verified profile.' },
  { question: 'How do I request a takedown?', answer: 'Contact your Account Manager or open a support ticket via <strong>Support & FAQ</strong>. Provide the release name, UPC, and which stores to remove it from. Takedown processing typically takes 5–10 business days across all stores.' },
  { question: 'My audio file upload keeps failing — what should I check?', answer: 'Check: (1) File must be <strong>.wav</strong> only. (2) File size must be within the limit shown on the upload screen. (3) Ensure a stable internet connection for large WAV uploads. (4) If the issue persists, try Chrome or Firefox, or contact support with the error message shown.' },
]

export default function TroubleshootingPage({ navigate }: Props) {
  return (
    <>
      <BackButton navigate={navigate} />
      <ContentLayout toc={['Rejection Causes', 'FAQ', 'Contact Support']}>
        <div className="page-kicker">🔧 Troubleshooting</div>
        <h1 className="article-h1">Troubleshooting & Common Issues</h1>
        <p className="article-lead">Resolve the most common problems encountered during release submission, audit review, and store delivery.</p>
        <div className="article-meta"><span>📅 Updated March 2025</span><span>⏱ ~10 min read</span></div>
        <div className="art">
          <h2 id="rejection-causes">Release Rejected — Common Causes</h2>
          <table className="art-table">
            <thead><tr><th>Issue</th><th>Cause</th><th>Resolution</th></tr></thead>
            <tbody>
              <tr><td><strong>Copyright Claim</strong></td><td>Uncleared samples or unlicensed covers.</td><td>Obtain a mechanical licence or use original compositions.</td></tr>
              <tr><td><strong>Low Audio Quality</strong></td><td>MP3-to-WAV conversion or clipping.</td><td>Export a fresh WAV from the original session files.</td></tr>
              <tr><td><strong>Artwork Rejected</strong></td><td>Below 3000×3000px, watermarks, or URLs present.</td><td>Recreate artwork to spec and reupload in Step 6.</td></tr>
              <tr><td><strong>Missing Composer</strong></td><td>Composer or Lyricist field left blank.</td><td>Add full legal names in Step 5 (Tracklist).</td></tr>
              <tr><td><strong>Duplicate Release</strong></td><td>Same content already exists with different metadata.</td><td>Consolidate or contact your Account Manager.</td></tr>
            </tbody>
          </table>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQ items={faqs} />

          <h2 id="contact-support">Contact Support</h2>
          <div className="two-col">
            <div className="info-card" onClick={() => window.location.href = 'mailto:help@digitalsight.in'}>
              <div className="ic-e">📧</div>
              <h4>Email Support</h4>
              <p>Send your Release ID and a detailed description of the issue to our team.</p>
              <span className="ic-link">help@digitalsight.in</span>
            </div>
            <div className="info-card" onClick={() => window.open('https://wa.me/918339951575', '_blank')}>
              <div className="ic-e">💬</div>
              <h4>WhatsApp Support</h4>
              <p>Chat directly with our support team on WhatsApp for fast, real-time assistance.</p>
              <span className="ic-link">+91 83399 51575 →</span>
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  )
}
