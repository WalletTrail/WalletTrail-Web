import { useEffect } from 'react';
import './Evidence.css';
import SiteFooter from '../../components/SiteFooter';

const steps = [
  ['1. Preserve', 'Keep the information you already have before it is lost, changed or scattered across different places.'],
  ['2. Organise', 'Bring together relevant wallet addresses, transaction hashes, dates, times, amounts, screenshots and related information.'],
  ['3. Understand', 'Use blockchain information to understand what can be observed on the network and what still needs to be established.'],
  ['4. Report', 'A structured evidence package can give a professional investigator or relevant authority a clearer starting point for further work.'],
];

export default function Evidence() {
  useEffect(() => { document.title = 'WalletTrail Evidence & Reporting'; }, []);

  return (
    <main className="evidence-page">
      <header className="evidence-header"><a className="brand" href="/" aria-label="WalletTrail home"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a><a className="evidence-back" href="/">Back to WalletTrail</a></header>
      <section className="evidence-hero"><p className="eyebrow">WalletTrail Evidence &amp; Reporting</p><h1>When something goes wrong, organise what you know.</h1><p>Blockchain activity can contain useful information, but it can also be difficult to understand when you are looking at it on your own. WalletTrail helps organise relevant blockchain information into a clearer evidence trail.</p></section>
      <section className="evidence-boundary" aria-label="What WalletTrail does"><strong>What this means:</strong><p>WalletTrail helps organise and present information. It does not determine who committed a crime, guarantee recovery of funds, or replace law enforcement or a professional investigation.</p></section>
      <section className="evidence-intro"><p className="eyebrow">The evidence pathway</p><h2>From scattered information to a structured trail.</h2><p>Start with what you already have. The goal is to preserve useful details, understand the blockchain observations and present them clearly enough for the next person to work with them.</p></section>
      <section className="evidence-steps" aria-label="Evidence and reporting steps">{steps.map(([title, text]) => <article key={title}><h2>{title}</h2><p>{text}</p></article>)}</section>
      <section className="evidence-what"><p className="eyebrow">Information worth preserving</p><div className="evidence-list"><span>Wallet addresses</span><span>Transaction hashes</span><span>Dates and times</span><span>Assets and amounts</span><span>Screenshots and receipts</span><span>Relevant messages and documents</span></div></section>
      <section className="evidence-next"><p className="eyebrow">Start with the basics</p><h2>Not sure what you are looking at?</h2><p>Learn the fundamentals first, or use the Dictionary when you need a clear explanation of a blockchain term.</p><div className="evidence-links"><a className="button button-primary" href="/wallettrail-101">Start WalletTrail 101</a><a className="text-link" href="/dictionary">Explore the Dictionary →</a></div></section>
      <SiteFooter />
    </main>
  );
}
