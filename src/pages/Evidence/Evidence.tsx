import { useEffect } from 'react';
import './Evidence.css';
import SiteFooter from '../../components/SiteFooter';

const steps = [
  ['1. Preserve', 'Keep the information you already have before it is lost, changed or scattered across different places.'],
  ['2. Organise', 'Bring together relevant wallet addresses, transaction hashes, dates, times, amounts, screenshots and related information.'],
  ['3. Understand', 'Use blockchain information to understand what can be observed on the network and what still needs to be established.'],
  ['4. Report', 'A structured evidence package can give a professional investigator or relevant authority a clearer starting point for further work.'],
];

const informationItems = [
  { title: 'Wallet address', description: 'A wallet address is the destination or account identifier used to receive or send digital assets on a blockchain network. It usually appears as a long combination of letters and numbers.', keep: 'The complete wallet address exactly as it appears.', why: 'It can help establish which blockchain account was involved.' },
  { title: 'Transaction hash', description: 'A transaction hash is a unique reference associated with a particular blockchain transaction. It can usually be used to locate that transaction on a blockchain explorer.', keep: 'The complete transaction hash, if one was provided.', why: 'It can help locate and verify a specific transaction.' },
  { title: 'Dates and times', description: 'The date and time can help establish when something happened — for example, when you made a payment, received a message, or noticed an unusual transaction.', keep: 'The date and time shown in messages, receipts, exchange records, screenshots and other relevant information.', why: 'Timing can help put different pieces of information into the correct sequence.' },
  { title: 'Assets and amounts', description: 'This refers to what digital asset was involved and how much was sent, received or displayed. This could be a particular cryptocurrency and the amount associated with the transaction.', keep: 'The asset name, amount and currency or value information shown to you.', why: 'It helps describe what was involved in the transaction or account activity.' },
  { title: 'Screenshots and receipts', description: 'Screenshots and receipts can preserve information that may later disappear or become difficult to access.', keep: 'Payment confirmations, transaction screens, wallet activity, exchange records, receipts and other relevant screens.', why: 'They can preserve what was displayed to you at the time. Keep the original files where possible and avoid cropping or editing them unnecessarily.' },
  { title: 'Relevant messages and documents', description: 'Messages and documents can provide context around what happened. This could include emails, WhatsApp messages, Telegram messages, invoices, agreements, payment instructions or other communications connected to the incident.', keep: 'The original messages or documents where possible, including dates, names, usernames and links that may be relevant.', why: 'Context can help connect blockchain information with what was happening around the transaction.' },
];

export default function Evidence() {
  useEffect(() => { document.title = 'WalletTrail Evidence & Reporting'; }, []);
  return (
    <main className="evidence-page">
      <header className="evidence-header"><a className="brand" href="/" aria-label="WalletTrail home"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a><a className="evidence-back" href="/">Back to WalletTrail</a></header>
      <section className="evidence-hero"><p className="eyebrow">WalletTrail Evidence &amp; Reporting</p><h1>When something goes wrong, organise what you know.</h1><p>Blockchain activity can contain useful information, but it can also be difficult to understand when you are looking at it on your own. WalletTrail helps organise relevant blockchain information into a clearer evidence trail.</p></section>
      <section className="evidence-boundary" aria-label="What WalletTrail does"><strong>What this means:</strong><p>WalletTrail helps organise and present information. It does not determine who committed a crime, guarantee recovery of funds, or replace law enforcement or a professional investigation.</p></section>
      <section className="evidence-intro"><p className="eyebrow">The evidence pathway</p><h2>From scattered information to a structured trail.</h2><p>Start with what you already have. The goal is to preserve useful details, understand the blockchain observations and present them clearly enough for the next person to work with them.</p></section>
      <section className="evidence-steps" aria-label="Evidence and reporting steps"><div className="evidence-path-line" aria-hidden="true"></div>{steps.map(([title, text]) => <article key={title}><span className="evidence-step-dot" aria-hidden="true"></span><h2>{title}</h2><p>{text}</p></article>)}</section>
      <section className="evidence-what" aria-labelledby="preserving-title"><p className="eyebrow">Information worth preserving</p><h2 id="preserving-title">You do not need to understand everything before you keep it.</h2><p className="evidence-what-lead">If something has gone wrong, don't worry if you don't understand all the information yet. The important thing is to preserve what you have. WalletTrail can help you understand how these pieces fit together later.</p><div className="evidence-information-list">{informationItems.map((item, index) => <article className="evidence-information-card" key={item.title}><span className="evidence-item-index">{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.description}</p><div className="evidence-detail"><strong>Keep:</strong><span>{item.keep}</span></div><div className="evidence-detail"><strong>Why:</strong><span>{item.why}</span></div></article>)}</div><p className="evidence-preserve-note"><strong>You do not need to understand all of this before preserving it.</strong> Keep the original information first. Understanding comes next.</p></section>
      <section className="evidence-next"><p className="eyebrow">What happens next</p><h2>Turn what you have into something easier to work with.</h2><p>WalletTrail can help organise relevant blockchain information into a structured evidence package and report. The purpose is to make the information clearer and easier for the appropriate professional or authority to review and verify.</p><p>WalletTrail does not decide what happened, identify a person as a criminal or guarantee recovery. Any further investigation, legal assessment or recovery action remains with the appropriate professionals and authorities.</p><div className="evidence-links"><a className="button button-primary" href="/wallettrail-101">Learn the Fundamentals</a><a className="text-link" href="/dictionary">Explore the Dictionary →</a></div></section>
      <SiteFooter />
    </main>
  );
}
