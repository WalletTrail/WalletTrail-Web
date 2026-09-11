import { useEffect } from 'react';
import './Knowledge.css';
import SiteFooter from '../../components/SiteFooter';

const areas = [
  ['Blockchain', 'Build a clear foundation for how blockchain networks record and verify activity.'],
  ['Cryptocurrency & Digital Assets', 'Understand coins, tokens, stablecoins and the ideas behind digital value.'],
  ['Wallets & Transactions', 'Learn how wallets, addresses, keys and transactions fit together.'],
  ['Security', 'Recognise common risks and understand safer ways to handle digital assets.'],
  ['DeFi', 'Explore decentralised finance and the technology behind these services.'],
  ['Trading & Markets', 'Learn the language used when people buy, sell and trade digital assets.'],
  ['Regulation & Compliance', 'Build a starting point for understanding rules, responsibilities and changing requirements.'],
  ['Blockchain Evidence', 'Understand the blockchain information that can be preserved and organised when something goes wrong.'],
];

export default function Knowledge() {
  useEffect(() => { document.title = 'WalletTrail Knowledge — Learn & Research Blockchain'; }, []);

  return (
    <main className="knowledge-page">
      <header className="knowledge-header">
        <a className="brand" href="/" aria-label="WalletTrail home"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a>
        <a className="knowledge-back" href="/">Back to WalletTrail</a>
      </header>
      <section className="knowledge-hero"><p className="eyebrow">WalletTrail Knowledge</p><h1>Go deeper. Understand the bigger picture.</h1><p>WalletTrail Knowledge is where we build beyond quick definitions and beginner lessons. Explore practical explanations and research that help blockchain and cryptocurrency make more sense.</p></section>
      <section className="knowledge-intro"><p className="eyebrow">A growing resource</p><h2>Learn one subject at a time.</h2><p>Not everything can be explained in a definition. Knowledge gives us room to explain how things work, why they matter and what to look at when making sense of blockchain information.</p></section>
      <section className="knowledge-grid" aria-label="Knowledge areas">{areas.map(([title, text]) => <article className="knowledge-card" key={title}><h2>{title}</h2><p>{text}</p><span>Knowledge area</span></article>)}</section>
      <section className="knowledge-bridge"><p className="eyebrow">Choose your starting point</p><h2>Need a quick answer first?</h2><p>Use the Dictionary for clear explanations of individual blockchain terms. If you are starting from the beginning, WalletTrail 101 will guide you through the fundamentals.</p><div className="knowledge-links"><a className="button button-primary" href="/dictionary">Explore the Dictionary</a><a className="text-link" href="/wallettrail-101">Start WalletTrail 101 →</a></div></section>
      <SiteFooter />
    </main>
  );
}
