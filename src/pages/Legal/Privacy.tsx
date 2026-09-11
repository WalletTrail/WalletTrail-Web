import { useEffect } from 'react';
import SiteFooter from '../../components/SiteFooter';

export default function Privacy() {
  useEffect(() => { document.title = 'Privacy Policy — WalletTrail'; }, []);

  return (
    <div className="lesson-page">
      <header className="lesson-header">
        <a className="brand" href="/" aria-label="WalletTrail home"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a>
        <a className="lesson-back" href="/">Back to Home</a>
      </header>
      <main>
        <section className="lesson-hero">
          <p className="eyebrow">WalletTrail Legal</p>
          <h1>Privacy Policy</h1>
          <p className="lesson-lead">This page explains how WalletTrail approaches information shared through this website and our services.</p>
        </section>
        <section className="lesson-intro">
          <h2>Our approach to privacy</h2>
          <div className="lesson-intro-copy"><p>We aim to collect and use information only where it is needed to provide, improve or support WalletTrail.</p><p>We do not sell personal information. We take reasonable steps to protect information in our care and keep our practices understandable.</p></div>
        </section>
        <section className="lesson-grid">
          <article className="lesson-card"><h3>Information you provide</h3><p>You may provide information when contacting WalletTrail, using a form, requesting assistance or using a WalletTrail service.</p></article>
          <article className="lesson-card"><h3>How information is used</h3><p>Information may be used to respond to requests, provide requested services, maintain the website, improve resources and communicate about an interaction you initiated.</p></article>
          <article className="lesson-card"><h3>Blockchain information</h3><p>Blockchain addresses, transaction hashes and related blockchain data may be publicly observable on their respective networks. WalletTrail may organise such information as part of its educational or evidence-related services.</p></article>
          <article className="lesson-card"><h3>Third-party services</h3><p>WalletTrail may rely on third-party infrastructure or service providers to operate parts of the website or deliver services. Their applicable terms and privacy practices may also apply.</p></article>
          <article className="lesson-card"><h3>Security</h3><p>We use reasonable technical and organisational measures appropriate to the information and services involved. No internet transmission or storage system can be guaranteed completely secure.</p></article>
          <article className="lesson-card"><h3>Questions</h3><p>For questions about information you have provided to WalletTrail, please contact us through the email address provided on the website.</p></article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
