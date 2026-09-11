import { useEffect } from 'react';
import SiteFooter from '../../components/SiteFooter';

export default function Terms() {
  useEffect(() => { document.title = 'Terms of Use — WalletTrail'; }, []);

  return (
    <div className="lesson-page">
      <header className="lesson-header">
        <a className="brand" href="/" aria-label="WalletTrail home"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a>
        <a className="lesson-back" href="/">Back to Home</a>
      </header>
      <main>
        <section className="lesson-hero">
          <p className="eyebrow">WalletTrail Legal</p>
          <h1>Terms of Use</h1>
          <p className="lesson-lead">These terms describe the basic conditions for using the WalletTrail website and its resources.</p>
        </section>
        <section className="lesson-intro">
          <h2>Using WalletTrail</h2>
          <div className="lesson-intro-copy"><p>WalletTrail provides educational resources, explanations and services intended to help people understand blockchain and organise relevant information.</p><p>By using the website, you agree to use its content and services lawfully and responsibly.</p></div>
        </section>
        <section className="lesson-grid">
          <article className="lesson-card"><h3>Educational information</h3><p>WalletTrail content is provided for general educational and informational purposes. It is not a substitute for professional legal, financial, tax, regulatory or investigative advice.</p></article>
          <article className="lesson-card"><h3>Evidence-related services</h3><p>WalletTrail may help organise blockchain information and user-provided material into structured outputs. These outputs are intended to support further review and do not determine criminal responsibility or guarantee recovery of assets.</p></article>
          <article className="lesson-card"><h3>Accuracy and availability</h3><p>We work to keep information useful and accurate, but blockchain data, third-party services and website availability can change. We do not guarantee that every resource will always be complete, current or uninterrupted.</p></article>
          <article className="lesson-card"><h3>Responsible use</h3><p>You must not use WalletTrail to engage in unlawful activity, misuse another person's information, interfere with the website or attempt to gain unauthorised access to systems or data.</p></article>
          <article className="lesson-card"><h3>External services</h3><p>The website may reference or rely on third-party services. Their own terms, policies and availability may apply when you use them.</p></article>
          <article className="lesson-card"><h3>Changes</h3><p>WalletTrail may update its website, resources and these terms as the platform develops. Continued use after an update means you are using the current version published on the website.</p></article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
