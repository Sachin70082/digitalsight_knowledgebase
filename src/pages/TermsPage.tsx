import { PageId } from '../data/types'
import BackButton from '../components/BackButton'
import './shared.css'

interface Props { navigate: (p: PageId) => void }

export default function TermsPage({ navigate }: Props) {
  return (
    <>
      <BackButton navigate={navigate} />
      <div className="page-kicker">📄 Legal</div>
      <h1 className="article-h1">Terms &amp; Conditions</h1>
      <p className="article-lead">Please read these Terms carefully before using the Digitalsight Distribution Platform. By registering or submitting content, you agree to be bound by these Terms in full.</p>
      <div className="article-meta"><span>📅 Effective: 1 January 2025</span><span>🔄 Updated: March 2025</span><span>📍 Jurisdiction: India</span></div>
      <div className="legal-meta"><span>📌 These Terms form a legally binding agreement between you and Digitalsight Media Private Limited.</span></div>
      <div className="legal-content">
        <h2>1. Acceptance of Terms</h2>
        <p>By creating an account or submitting content for distribution, you confirm you have read, understood, and agree to be bound by these Terms along with our Privacy Policy. Digitalsight reserves the right to amend these Terms at any time. Continued use after changes constitutes acceptance of the revised Terms.</p>
        <h2>2. Eligibility</h2>
        <p>You must be at least 18 years of age to create an account. By using the Platform, you represent that you are at least 18 years old or accessing on behalf of a legally registered entity, that you have the legal authority to enter this agreement, and that applicable law does not prohibit your use of the Platform.</p>
        <h2>3. Account Registration & Security</h2>
        <p>You agree to provide accurate and complete information during registration, keep login credentials confidential, notify Digitalsight immediately of any unauthorised access, and accept sole responsibility for all activity under your account. Digitalsight may suspend or terminate accounts that violate these obligations or engage in fraudulent activity.</p>
        <h2>4. Intellectual Property & Content Ownership</h2>
        <p>You retain full ownership of all music, artwork, and content submitted to the Platform. By submitting content, you grant Digitalsight a non-exclusive, worldwide, royalty-free licence to distribute, encode, and transmit your content to DSPs solely for fulfilling distribution services. You warrant that you own or have all necessary rights for the submitted content, that your content does not infringe any third-party intellectual property rights, and that all samples and interpolations have been properly cleared.</p>
        <h2>5. Prohibited Content</h2>
        <p>You may not submit content that infringes third-party IP rights, contains hate speech or incitement to violence, is defamatory or violates applicable law, depicts or exploits minors inappropriately, impersonates another artist without authorisation, or contains fraudulent or misleading metadata. Digitalsight may remove violating content without notice and terminate repeat offenders' accounts.</p>
        <h2>6. Distribution Services</h2>
        <p>Digitalsight will use commercially reasonable efforts to deliver approved content to contracted DSPs within stated timelines. However, Digitalsight does not guarantee acceptance by any specific DSP, specific playlist placements or chart positions, or uninterrupted platform availability.</p>
        <h2>7. Royalties & Payments</h2>
        <p>Royalties generated from streams and downloads are collected from DSPs and disbursed to the registered payout account, subject to your distribution plan and applicable fees. Digitalsight may withhold payments pending investigation of suspected fraudulent streaming activity or rights disputes.</p>
        <h2>8. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, Digitalsight shall not be liable for any indirect, incidental, consequential, or punitive damages including loss of revenue, data loss, or business interruption. Total aggregate liability shall not exceed fees paid in the 12 months preceding the relevant event.</p>
        <h2>9. Termination</h2>
        <p>Either party may terminate this agreement at any time. Upon termination, Digitalsight will initiate takedown requests with all DSPs — typically completed within 5–15 business days. Pending royalty earnings will be paid per the standard payment schedule.</p>
        <h2>10. Governing Law & Disputes</h2>
        <p>These Terms are governed by the laws of India. Disputes shall first be addressed through good-faith negotiation. Unresolved disputes shall be submitted to binding arbitration under the Arbitration and Conciliation Act, 1996, conducted in English in Mumbai, India.</p>
        <h2>11. Contact</h2>
        <p>For questions regarding these Terms: <strong>help@digitalsight.in</strong></p>
      </div>
    </>
  )
}
