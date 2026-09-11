import { useEffect } from 'react';
import SiteFooter from '../../components/SiteFooter';

export default function Notice() {
  useEffect(() => { document.title = 'Disclaimer — WalletTrail'; }, []);
  return (
    <div className="lesson-page">
      <header className="lesson-header">
        <a className="brand" href="/" aria-label="WalletTrail home"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a>
        <a className="lesson-back" href="/">Back to Home</a>
      </header>
      <main>
        <section className="lesson-hero">
          <p className="eyebrow">WalletTrail Legal</p>
          <h1>Disclaimer</h1>
          <p className="lesson-lead">WalletTrail helps people understand blockchain and organise information. The information on this website should be considered in context.</p>
        </section>
        <section className="lesson-grid">
          <article className="lesson-card"><h3>Educational purpose</h3><p>WalletTrail resources are provided for general educational and informational purposes and are not personalised professional advice.</p></article>
          <article className="lesson-card"><h3>Information and evidence</h3><p>WalletTrail may organise blockchain information and material supplied by users. Different sources may require additional context and review.</p></article>
          <article className="lesson-card"><h3>Official decisions</h3><p>WalletTrail does not make official findings about people, events or wrongdoing and does not replace law enforcement or professional review.</p></article>
          <article className="lesson-card"><h3>Digital assets</h3><p>WalletTrail does not promise that digital assets can be recovered or returned.</p></article>
          <article className="lesson-card"><h3>User-provided material</h3><p>Statements, screenshots, receipts, messages and other material supplied by users remain user-provided information and should be considered separately from blockchain observations.</p></article>
          <article className="lesson-card"><h3>Financial, tax and regulatory matters</h3><p>WalletTrail content is not personalised financial, investment, tax or regulatory advice. Seek qualified advice for decisions specific to your circumstances.</p></article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
