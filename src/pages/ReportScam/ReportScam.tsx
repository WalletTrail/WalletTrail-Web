import SiteFooter from '../../components/SiteFooter';
import './ReportScam.css';

const evidenceItems = [
  'Wallet addresses',
  'Transaction hashes',
  'Dates and times',
  'Asset and amount',
  'Screenshots and receipts',
  'Messages and platform details',
];

const investigationSteps = [
  ['01', 'You tell us what happened', 'Provide the circumstances, platforms involved and information you already have.'],
  ['02', 'We examine the information', 'We assess the submitted details and identify the blockchain information relevant to the matter.'],
  ['03', 'We investigate the blockchain activity', 'We trace and analyse relevant transactions, wallet movements and timing.'],
  ['04', 'We establish what the evidence shows', 'Findings are structured around the available evidence and clearly separated from information that remains unverified.'],
  ['05', 'We prepare the findings', 'The investigation can result in a structured report that explains the relevant evidence and movements identified.'],
] as const;

export default function ReportScam() {
  return (
    <div className="site-shell report-scam-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="WalletTrail home"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a>
        <nav className="site-nav" aria-label="Primary navigation"><a href="/wallettrail-101">Start Here</a><a href="/knowledge">Knowledge</a><a href="/dictionary">Dictionary</a><a href="/security">Security</a><a href="/evidence">Evidence</a></nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span aria-hidden="true">☰</span><span>Menu</span></summary>
          <nav aria-label="Mobile navigation"><a href="/">Home</a><a href="/wallettrail-101">Start Here</a><a href="/knowledge">Knowledge</a><a href="/dictionary">Dictionary</a><a href="/security">Security</a><a href="/evidence">Evidence</a></nav>
        </details>
      </header>

      <main>
        <section className="report-hero section" aria-labelledby="report-title">
          <div className="report-hero-copy">
            <p className="eyebrow">Report a Scam</p>
            <h1 id="report-title">Think You’ve Been Affected by a Cryptocurrency Scam?</h1>
            <p>Tell us what happened. Your information gives WalletTrail a starting point for an investigation into the relevant blockchain activity and available evidence.</p>
            <a className="button button-primary report-cta" href="https://forms.gle/uiTbse2c9RMszqGN7" target="_blank" rel="noreferrer">REPORT IT TO WALLETTRAIL <span aria-hidden="true">→</span></a>
            <p className="report-cta-note">Use our secure intake form to provide the information you already have.</p>
          </div>
        </section>

        <section className="section report-explain" aria-labelledby="meaning-title">
          <div className="section-heading">
            <p className="eyebrow">What happens next</p>
            <h2 id="meaning-title">What does “Report a Scam” mean?</h2>
            <p>WalletTrail investigates suspected cryptocurrency scams by examining the information provided alongside relevant blockchain activity and other available evidence.</p>
            <p>Our aim is to establish what the available evidence shows, identify relevant transaction movements and present the findings clearly.</p>
          </div>
        </section>

        <section className="section investigation-flow" aria-labelledby="flow-title">
          <div className="section-heading">
            <p className="eyebrow">The investigation journey</p>
            <h2 id="flow-title">From your report to our findings</h2>
          </div>
          <div className="investigation-track">
            {investigationSteps.map(([number, title, text], index) => (
              <div className="investigation-step" key={number}>
                <div className="investigation-step-marker"><span>{number}</span>{index < investigationSteps.length - 1 && <i aria-hidden="true" />}</div>
                <div className="investigation-step-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section preserve-section" aria-labelledby="preserve-title">
          <div className="preserve-copy">
            <p className="eyebrow">Before you submit</p>
            <h2 id="preserve-title">Preserve what you have.</h2>
            <p>Do not delete information that may help establish what happened. Keep the original messages, transaction details, receipts and screenshots available.</p>
            <p>If someone asks you to send more money to “recover” your cryptocurrency, be cautious. A recovery promise should not be treated as proof that the person can recover your funds.</p>
          </div>
          <div className="evidence-list">
            <h3>Useful information can include</h3>
            <div className="evidence-grid">
              {evidenceItems.map((item) => <div className="evidence-item" key={item}><span aria-hidden="true">✓</span>{item}</div>)}
            </div>
          </div>
        </section>

        <section className="section report-boundary" aria-labelledby="boundary-title">
          <div className="section-heading">
            <p className="eyebrow">Clear findings</p>
            <h2 id="boundary-title">What WalletTrail investigates</h2>
            <p>We investigate the circumstances presented to us and the blockchain evidence available to us. Our findings describe what the evidence supports; they do not replace the formal powers or processes of law enforcement, regulators or the courts.</p>
          </div>
          <a className="button button-primary" href="https://forms.gle/uiTbse2c9RMszqGN7" target="_blank" rel="noreferrer">Start Your Scam Report <span aria-hidden="true">→</span></a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
