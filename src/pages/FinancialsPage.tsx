import { PageId } from '../data/types'
import BackButton from '../components/BackButton'
import ContentLayout from '../components/ContentLayout'
import Callout from '../components/Callout'
import './shared.css'

interface Props { navigate: (p: PageId) => void }

export default function FinancialsPage({ navigate }: Props) {
  return (
    <>
      <BackButton navigate={navigate} />
      <ContentLayout toc={['Overview', 'Pages & Navigation', 'Calculations & Logic', 'View Earnings', 'Download Reports', 'Withdraw Funds', 'Royalties Withdrawal Schedule', 'Change Currency']}>
        <div className="page-kicker">💰 Financials</div>
        <h1 className="article-h1">Financials & Royalty Management</h1>
        <p className="article-lead">Digitalsight Financials is a comprehensive royalty management platform for artists and labels to track revenue, manage payouts, and analyse financial performance across all digital stores.</p>
        <div className="article-meta"><span>📅 Updated March 2026</span><span>⏱ ~12 min read</span></div>
        <div className="art">

          <h2 id="overview">1. Overview</h2>
          <p>The Financials platform gives you complete visibility into your royalty earnings — from raw gross revenue across all DSPs down to your net share after distributor cuts. Everything is tracked in real time and available for download.</p>
          <Callout type="info" emoji="💡" title="Currency Support" text=" All financial data can be displayed in either US Dollars (USD) or Indian Rupees (INR). Switch at any time from Settings → Regional Preferences." />

          <h2 id="pages-navigation">2. Pages & Navigation</h2>
          <table className="art-table">
            <thead><tr><th>Page</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><strong>Dashboard</strong></td><td>Central hub for real-time analytics, revenue charts, and recent activity.</td></tr>
              <tr><td><strong>Financial Reports</strong></td><td>Detailed ledger of all monthly statements and historical revenue data.</td></tr>
              <tr><td><strong>Withdrawals</strong></td><td>Manage royalty withdrawals, view available balance, and track transfer history.</td></tr>
              <tr><td><strong>Settings</strong></td><td>Customise account preferences including display currency (USD / INR).</td></tr>
            </tbody>
          </table>

          <h2>3. Dashboard Controls</h2>
          <p>The Dashboard provides several interactive controls to customise your financial view:</p>
          <ul>
            <li><strong>Date Filters (From / To)</strong> — Filter revenue data and charts by a specific date range.</li>
            <li><strong>Export Button</strong> — Download your filtered royalty data as an Excel (.xlsx) file for offline analysis.</li>
            <li><strong>View Type (Monthly / Yearly)</strong> — Toggle the revenue chart between monthly and yearly aggregations.</li>
          </ul>

          <h2>4. Financial Reports Controls</h2>
          <ul>
            <li><strong>Search Bar</strong> — Quickly find specific statements by searching for filenames or dates.</li>
            <li><strong>Download Button</strong> — Download the original statement document (PDF / Excel) for any reporting period.</li>
            <li><strong>Pagination</strong> — Navigate through multiple pages of historical reports.</li>
          </ul>

          <h2>5. Withdrawals Controls</h2>
          <ul>
            <li><strong>Initiate Transfer</strong> — Submit a request to transfer your available balance to your connected bank account.</li>
            <li><strong>Transfer History</strong> — Monitor the status of each royalty withdrawal request.</li>
          </ul>
          <div className="status-grid">
            <div className="status-chip"><div className="s-dot s-pending" /><div><h5>Pending</h5><p>Withdrawal submitted and awaiting review.</p></div></div>
            <div className="status-chip"><div className="s-dot s-approved" /><div><h5>Approved</h5><p>Transfer approved and being processed.</p></div></div>
            <div className="status-chip"><div className="s-dot s-rejected" /><div><h5>Rejected</h5><p>Transfer declined — check notes for reason.</p></div></div>
          </div>

          <h2 id="calculations-logic">6. Calculations & Logic</h2>
          <p>The platform uses standardised financial logic to ensure full transparency. Here is exactly how each figure is calculated:</p>
          <table className="art-table">
            <thead><tr><th>Metric</th><th>Formula</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Gross Revenue</strong></td><td><code>Sum of all DSP earnings</code></td><td>Total revenue from all sources (Spotify, Apple Music, etc.) before any deductions.</td></tr>
              <tr><td><strong>Net Earnings (Your Share)</strong></td><td><code>Gross × (Share% ÷ 100)</code></td><td>The actual amount you earn after applying your revenue share percentage.</td></tr>
              <tr><td><strong>Deductions (Distributor Cut)</strong></td><td><code>Gross − Net Earnings</code></td><td>The distributor's commission deducted from gross revenue.</td></tr>
              <tr><td><strong>Available Balance</strong></td><td><code>Total Net − Withdrawn − Pending</code></td><td>The amount currently available and ready for royalty withdrawal.</td></tr>
            </tbody>
          </table>
          <Callout type="success" emoji="📐" title="Example Calculation" text=" If your Gross Revenue is ₹10,000 and your Revenue Share is 70%: Your Net Earnings = ₹10,000 × 0.70 = ₹7,000. Distributor Cut = ₹10,000 − ₹7,000 = ₹3,000." />

          <h2>7. How-To Guides</h2>

          <h3 id="view-earnings">How to View Your Earnings</h3>
          <div className="step-list">
            <div className="step-row"><div className="step-num">1</div><div className="step-body"><h4>Go to Dashboard</h4><p>Navigate to the <strong>Dashboard</strong> from the main menu.</p></div></div>
            <div className="step-row"><div className="step-num">2</div><div className="step-body"><h4>Check the Stats Grid</h4><p>The Stats Grid at the top shows your current <strong>Balance</strong>, <strong>Gross Revenue</strong>, and <strong>Net Share</strong> at a glance.</p></div></div>
            <div className="step-row"><div className="step-num">3</div><div className="step-body"><h4>Use the Revenue Chart</h4><p>Use the Revenue Chart to visualise earnings over time. Toggle between Monthly and Yearly views, and apply date filters as needed.</p></div></div>
          </div>

          <h3 id="download-reports">How to Download Reports</h3>
          <div className="step-list">
            <div className="step-row"><div className="step-num">1</div><div className="step-body"><h4>Go to Financial Reports</h4><p>Navigate to the <strong>Financial Reports</strong> page from the main menu.</p></div></div>
            <div className="step-row"><div className="step-num">2</div><div className="step-body"><h4>Find the Period</h4><p>Use the Search Bar to quickly locate the reporting period you need, or browse using Pagination.</p></div></div>
            <div className="step-row"><div className="step-num">3</div><div className="step-body"><h4>Click Download</h4><p>Click the <strong>Download</strong> button in the "Document" column to save the PDF or Excel statement to your device.</p></div></div>
          </div>

          <h3 id="withdraw-funds">How to Withdraw Royalties</h3>
          <div className="step-list">
            <div className="step-row"><div className="step-num">1</div><div className="step-body"><h4>Go to Withdrawals</h4><p>Navigate to the <strong>Withdrawals</strong> page.</p></div></div>
            <div className="step-row"><div className="step-num">2</div><div className="step-body"><h4>Verify Available Balance</h4><p>Check your <strong>Available for Royalty Withdrawal</strong> balance. Ensure it is above the minimum of <strong>₹100</strong>.</p></div></div>
            <div className="step-row"><div className="step-num">3</div><div className="step-body"><h4>Enter Amount & Submit</h4><p>Enter the desired amount in the <strong>Withdrawal Amount</strong> field and click <strong>Initiate Transfer</strong>.</p></div></div>
          </div>
          <Callout type="warn" emoji="⚠️" title="Withdrawal Rules" text=" Minimum royalty withdrawal is ₹100 INR. Processing typically takes 2–3 business days. Withdrawals are only transferred to your verified, connected bank account." />

          <h2 id="royalties-withdrawal-schedule">8. Royalties Withdrawal Schedule</h2>
          <p>Royalty withdrawals are processed on a <strong>quarterly basis</strong>. Each royalty withdrawal covers the earnings accumulated over the preceding three-month period. Please plan your royalty withdrawals accordingly — monthly royalty withdrawals are not available.</p>
          <table className="art-table">
            <thead><tr><th>Royalties Withdrawal Month</th><th>Earnings Period Covered</th><th>Quarter</th></tr></thead>
            <tbody>
              <tr><td><strong>April</strong></td><td>January – March</td><td>Q1</td></tr>
              <tr><td><strong>July</strong></td><td>April – June</td><td>Q2</td></tr>
              <tr><td><strong>October</strong></td><td>July – September</td><td>Q3</td></tr>
              <tr><td><strong>January</strong></td><td>October – December</td><td>Q4</td></tr>
            </tbody>
          </table>
          <div className="timeline">
            <div className="tl-item"><div className="tl-time">January – March</div><h5>Q1 Earnings Period</h5><p>Royalties accrued across all stores. Royalty withdrawal processed in <strong>April</strong>.</p></div>
            <div className="tl-item"><div className="tl-time">April – June</div><h5>Q2 Earnings Period</h5><p>Royalties accrued across all stores. Royalty withdrawal processed in <strong>July</strong>.</p></div>
            <div className="tl-item"><div className="tl-time">July – September</div><h5>Q3 Earnings Period</h5><p>Royalties accrued across all stores. Royalty withdrawal processed in <strong>October</strong>.</p></div>
            <div className="tl-item"><div className="tl-time">October – December</div><h5>Q4 Earnings Period</h5><p>Royalties accrued across all stores. Royalty withdrawal processed in <strong>January</strong>.</p></div>
          </div>
          <Callout type="danger" emoji="🚫" title="Monthly Royalty Withdrawals Not Available" text=" Royalties are consolidated and released once per quarter. Royalty withdrawal requests submitted outside the scheduled window will be queued and processed on the next quarterly date." />

          <h3 id="change-currency">How to Change Currency</h3>
          <div className="step-list">
            <div className="step-row"><div className="step-num">1</div><div className="step-body"><h4>Go to Settings</h4><p>Navigate to the <strong>Settings</strong> page.</p></div></div>
            <div className="step-row"><div className="step-num">2</div><div className="step-body"><h4>Select Currency</h4><p>Under <strong>Regional Preferences</strong>, select either <strong>US Dollar ($)</strong> or <strong>Indian Rupee (₹)</strong>.</p></div></div>
            <div className="step-row"><div className="step-num">3</div><div className="step-body"><h4>Apply Settings</h4><p>Click <strong>Apply Settings</strong>. All financial data across the entire platform will update immediately.</p></div></div>
          </div>

        </div>
      </ContentLayout>
    </>
  )
}
