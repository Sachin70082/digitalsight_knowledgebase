import { PageId } from '../data/types'
import BackButton from '../components/BackButton'
import './shared.css'

interface Props { navigate: (p: PageId) => void }

export default function PrivacyPage({ navigate }: Props) {
  return (
    <>
      <BackButton navigate={navigate} />
      <div className="page-kicker">🛡 Legal</div>
      <h1 className="article-h1">Privacy Policy</h1>
      <p className="article-lead">Digitalsight is committed to protecting your privacy. This policy explains what data we collect, why we collect it, your rights, and how we keep it secure.</p>
      <div className="article-meta"><span>📅 Effective: 1 January 2025</span><span>🔄 Updated: March 2025</span><span>📍 Jurisdiction: India</span></div>
      <div className="legal-meta"><span>📌 This policy complies with applicable Indian data protection law and international standards.</span></div>
      <div className="legal-content">
        <h2>1. Data We Collect</h2>
        <h3>Account & Identity Data</h3>
        <ul>
          <li>Full name, email address, phone number, and encrypted password.</li>
          <li>Company or label name and registered address (if applicable).</li>
          <li>Government-issued identity documents for KYC verification.</li>
          <li>Bank account or payment details for royalty disbursements.</li>
        </ul>
        <h3>Content & Metadata</h3>
        <ul>
          <li>Music files, artwork, and all associated release metadata submitted for distribution.</li>
          <li>Artist names, composer credits, and publishing information.</li>
          <li>Release history and full catalog information.</li>
        </ul>
        <h3>Usage & Technical Data</h3>
        <ul>
          <li>IP address, browser type, device identifiers, and operating system.</li>
          <li>Pages visited, features used, and session duration on the Platform.</li>
          <li>Error logs and crash reports used for platform improvement.</li>
          <li>Cookies and similar tracking technologies (see Section 6).</li>
        </ul>
        <h3>Communication Data</h3>
        <ul>
          <li>Messages sent through the Platform's support system.</li>
          <li>Email correspondence with our team.</li>
          <li>Feedback and survey responses.</li>
        </ul>
        <h2>2. How We Use Your Data</h2>
        <ul>
          <li><strong>Service Delivery:</strong> To provide distribution services, process releases, and manage your account.</li>
          <li><strong>Identity Verification:</strong> To comply with KYC and anti-money laundering requirements.</li>
          <li><strong>Royalty Processing:</strong> To calculate, report, and disburse royalty payments.</li>
          <li><strong>Communication:</strong> To send transactional notifications, support responses, and platform announcements.</li>
          <li><strong>Platform Improvement:</strong> To analyse usage patterns, fix bugs, and enhance features.</li>
          <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and court orders.</li>
          <li><strong>Security:</strong> To detect and prevent fraud, abuse, and unauthorised access.</li>
        </ul>
        <h2>3. Legal Basis for Processing</h2>
        <ul>
          <li><strong>Contractual necessity</strong> — required to deliver contracted distribution services.</li>
          <li><strong>Legal obligation</strong> — required by applicable law (e.g., tax reporting, KYC).</li>
          <li><strong>Legitimate interests</strong> — fraud prevention, security, and platform improvement.</li>
          <li><strong>Consent</strong> — where you have provided explicit consent (withdrawable at any time).</li>
        </ul>
        <h2>4. Data Sharing & Third Parties</h2>
        <p>We do not sell your personal data. We share data only with DSPs (for distribution), payment processors (for royalties), analytics providers (anonymised data only), legal authorities (when required by law), and trusted service providers under strict data processing agreements.</p>
        <h2>5. Data Retention</h2>
        <ul>
          <li>Account data: Retained for account duration plus 5 years after closure.</li>
          <li>Financial records: Retained for 7 years as required by Indian tax law.</li>
          <li>Content metadata: Retained for 3 years post-takedown for dispute resolution.</li>
        </ul>
        <h2>6. Cookies</h2>
        <p>We use essential cookies (required for login and security — cannot be disabled), analytics cookies (help us understand usage — can be opted out of), and preference cookies (remember your settings — optional). Control cookie preferences through your browser settings.</p>
        <h2>7. Your Rights</h2>
        <p>You have the right to access your personal data, correct inaccurate data, request deletion (where legally permitted), object to processing, and data portability. To exercise these rights, contact <strong>help@digitalsight.in</strong>.</p>
        <h2>8. Data Security</h2>
        <p>We implement industry-standard security measures including encrypted data transmission (TLS), encrypted storage for sensitive data, access controls and regular audits, and incident response procedures. No system is 100% secure — promptly report any suspected breach to our security team.</p>
        <h2>9. International Transfers</h2>
        <p>Your data may be transferred to and processed in countries where our DSP partners operate. All transfers are subject to appropriate safeguards to protect your data in accordance with applicable law.</p>
        <h2>10. Children's Privacy</h2>
        <p>Our Platform is not directed at individuals under 18. We do not knowingly collect data from minors. If you believe we have inadvertently collected such data, contact us immediately for deletion.</p>
        <h2>11. Contact</h2>
        <p>Privacy questions or requests: <strong>help@digitalsight.in</strong></p>
      </div>
    </>
  )
}
