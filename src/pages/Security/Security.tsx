import { useEffect } from 'react';
import './Security.css';
import SiteFooter from '../../components/SiteFooter';

const securityTopics = [
  { title: 'Protect your recovery phrase', text: 'Your recovery phrase can control access to a self-custodial wallet. Never share it with a person, website, support agent or anyone claiming they need it to protect or recover your funds.', action: 'Never enter it into a website or send it by message.' },
  { title: 'Do not rely on screenshots', text: 'A screenshot of a recovery phrase or private key can be copied, synced or exposed through other devices and services. Keep sensitive wallet credentials offline and protected.', action: 'Treat recovery phrases and private keys as secrets, not ordinary notes.' },
  { title: 'Check before you send', text: 'Before confirming a transaction, check the destination address, asset, network and amount. Blockchain transactions can be difficult or impossible to reverse once confirmed.', action: 'Slow down when a transaction matters.' },
  { title: 'Watch for phishing and impersonation', text: 'Fake support accounts, websites, messages and urgent requests can be designed to make you reveal sensitive information or approve an unwanted transaction.', action: 'Verify through an official channel you found independently.' },
  { title: 'Be careful what you sign', text: 'Connecting a wallet or signing a request can have consequences beyond simply logging in. If you do not understand what a wallet is asking you to approve, stop and investigate before confirming.', action: 'Do not blind-sign something you cannot understand.' },
  { title: 'Keep your software current', text: 'Wallets, browsers and operating systems receive security updates. Keeping them current reduces exposure to known security problems.', action: 'Install updates from legitimate sources.' },
];

export default function Security() {
  useEffect(() => { document.title = 'WalletTrail Security Centre — Stay Safe'; }, []);
  return (
    <div className="security-page">
      <header className="security-header"><a className="brand" href="/" aria-label="WalletTrail home"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a><a className="security-back" href="/">← Back to WalletTrail</a></header>
      <main>
        <section className="security-hero"><p className="eyebrow">WalletTrail Security Centre</p><h1>Protect what you cannot afford to lose.</h1><p>Good crypto security starts with understanding what can go wrong. These practical guidelines are designed to help you recognise common risks before you send, sign, connect or share anything.</p></section>
        <section className="security-warning" aria-label="Important security warning"><span className="security-warning-icon" aria-hidden="true">!</span><div><strong>One rule comes first:</strong><p>Never share your recovery phrase or private key. A legitimate wallet provider or support agent should not need these credentials from you.</p></div></section>
        <section className="security-grid" aria-label="Security guidance">{securityTopics.map((topic) => <article className="security-card" key={topic.title}><p className="card-eyebrow">Security basics</p><h2>{topic.title}</h2><p>{topic.text}</p><strong>{topic.action}</strong></article>)}</section>
        <section className="security-red-flags"><p className="eyebrow">⚠️ STOP AND VERIFY</p><h2>Pressure is a warning sign.</h2><p>Be especially careful when someone tells you that you must act immediately, promises guaranteed returns, asks for your recovery phrase, asks you to install software to “fix” your wallet, or directs you to a link you were not expecting.</p><div className="red-flag-list"><span>🚨 Urgent payment request</span><span>💰 Guaranteed profit</span><span>🎭 Fake support</span><span>⚠️ Unexpected wallet request</span><span>🔐 Recovery phrase request</span><span>🔗 Unknown software or link</span></div></section>
        <section className="security-incident" aria-label="Something went wrong alert"><p className="eyebrow">🚨 SOMETHING WENT WRONG?</p><h2>Stop. Preserve what you have.</h2><p>If you think something suspicious has happened, stop making further transactions where possible and preserve the information you already have. Keep transaction hashes, wallet addresses, dates and times, screenshots, receipts and relevant messages. Do not delete evidence simply because you are unsure whether it matters.</p><a className="button button-primary" href="/evidence">Explore Evidence &amp; Reporting</a></section>
      </main>
      <SiteFooter />
    </div>
  );
}
