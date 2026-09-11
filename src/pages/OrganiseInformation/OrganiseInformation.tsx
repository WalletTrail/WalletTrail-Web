import { useEffect } from 'react';
import SiteFooter from '../../components/SiteFooter';
import './OrganiseInformation.css';

const items = [
  ['Wallet address', 'The blockchain address involved.'],
  ['Transaction hash', 'The unique reference for a blockchain transaction.'],
  ['Date & time', 'When the activity or related event happened.'],
  ['Asset & amount', 'What digital asset was involved and how much.'],
  ['Screenshots & receipts', 'What was displayed or confirmed at the time.'],
  ['Messages & documents', 'The surrounding context and instructions.'],
];

export default function OrganiseInformation() {
  useEffect(() => { document.title = 'WalletTrail — Organise Your Information'; }, []);

  return (
    <div className="organise-page">
      <header className="organise-header">
        <a className="brand" href="/" aria-label="WalletTrail home"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a>
        <a className="organise-back" href="/">Back to WalletTrail</a>
      </header>

      <main>
        <section className="organise-hero section">
          <div className="organise-hero-copy">
            <p className="eyebrow">I Need to Organise Information</p>
            <h1>Put the pieces together.</h1>
            <p className="organise-lead">You may already have wallet addresses, transaction details, screenshots, messages or other documents — but not know what matters or how everything fits together.</p>
            <p>Start with what you have. You do not need to understand everything before you preserve it.</p>
          </div>
          <div className="organise-visual" aria-label="Information organisation pathway">
            <div className="organise-flow flow-one"><span>01</span><strong>Gather</strong><small>What you have</small></div>
            <div className="organise-flow flow-two"><span>02</span><strong>Understand</strong><small>What it means</small></div>
            <div className="organise-flow flow-three"><span>03</span><strong>Organise</strong><small>How it fits</small></div>
            <div className="organise-flow flow-four"><span>04</span><strong>Prepare</strong><small>Clearer file</small></div>
            <div className="organise-flow-line" aria-hidden="true" />
          </div>
        </section>

        <section className="organise-section section" aria-labelledby="keep-title">
          <div className="section-heading"><p className="eyebrow">Start with what you have</p><h2 id="keep-title">What should you keep?</h2><p>Preserve the original information first. You can work out what it means afterwards.</p></div>
          <div className="organise-items">{items.map(([title, description], index) => <article key={title}><span className="organise-item-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        </section>

        <section className="organise-understand section" aria-labelledby="understand-title">
          <div className="section-heading"><p className="eyebrow">Understand the pieces</p><h2 id="understand-title">Each detail answers a different question.</h2></div>
          <div className="organise-questions"><article><span>Where?</span><h3>Wallet address</h3><p>Which blockchain account was involved?</p></article><article><span>What?</span><h3>Transaction hash</h3><p>Which specific blockchain transaction can be located?</p></article><article><span>When?</span><h3>Date &amp; time</h3><p>Where does the activity sit in the sequence of events?</p></article><article><span>Context?</span><h3>Messages &amp; documents</h3><p>What was happening around the transaction?</p></article></div>
        </section>

        <section className="organise-assembly section" aria-labelledby="assembly-title">
          <div className="section-heading"><p className="eyebrow">Put the pieces together</p><h2 id="assembly-title">From scattered information to an organised file.</h2><p>The aim is not to make assumptions. It is to bring the relevant pieces together so the information is easier to understand, review and verify.</p></div>
          <div className="assembly-diagram" aria-label="Information becomes an organised file"><div><span>Blockchain details</span><span>Supporting documents</span><span>Your timeline</span></div><div className="assembly-arrow" aria-hidden="true">→</div><strong>Organised<br />information file</strong></div>
        </section>

        <section className="organise-next section" aria-labelledby="next-title">
          <p className="eyebrow">The next step</p><h2 id="next-title">Good organisation makes the information easier to work with.</h2>
          <p>Once the relevant information is preserved and organised, it can provide a clearer starting point for understanding what can be observed and for sharing the information with an appropriate professional or authority.</p>
          <p className="organise-note"><strong>Remember:</strong> WalletTrail helps organise and explain information. It does not determine who committed a crime, guarantee recovery of funds, or replace law enforcement or a professional investigation.</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
