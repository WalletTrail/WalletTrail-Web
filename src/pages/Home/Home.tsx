import { useEffect } from 'react';
import SiteFooter from '../../components/SiteFooter';

const journeys = [
  { icon: '🌱', title: 'I’m New to Cryptocurrency', text: 'Start your journey by learning the fundamentals of cryptocurrency and blockchain.', href: '/wallettrail-101', label: 'Start Here' },
  { icon: '🚨', title: 'Report a Scam', text: 'Dedicated reporting pathway — details to be developed.' },
  { icon: '🗂️', title: 'I Need to Organise Information', text: 'Learn what blockchain information is important and how to keep it organised for future reference.', href: '/organise-information', label: 'Organise Information' },
  { icon: '🚨', title: 'I Think Something Went Wrong', text: 'If you’ve experienced a suspicious transaction or think you’ve been affected by fraud, start by preserving the information you already have.', href: '/security', label: 'Start with Security Guidance', urgent: true },
  { icon: '📚', title: 'I Want to Learn', text: 'Explore easy-to-understand guides covering blockchain, wallets, digital assets and more.', href: '/wallettrail-101', label: 'Start Learning' },
  { icon: '🔍', title: 'I Want to Understand Something', text: 'Looking for a specific answer? Explore our dictionary for clear explanations of blockchain terms.', href: '/dictionary', label: 'Explore Dictionary' },
];

const learningCards = [
  { eyebrow: 'Featured Guide', title: 'Before You Buy Cryptocurrency', text: 'Understand the fundamentals before making your first transaction.', href: '/wallettrail-101', label: 'Read Guide' },
  { eyebrow: 'Blockchain Term of the Week', title: 'Wallet Address', text: 'Learn what it is, why it’s important and how it’s used.', href: '/dictionary', label: 'Learn More' },
  { eyebrow: 'Security Tip', title: 'Protect Your Recovery Phrase', text: 'Your recovery phrase gives access to your wallet. Keep it private, offline and never share it with anyone.', href: '/security', label: 'View Security Tips' },
];

export default function Home() {
  useEffect(() => { document.title = 'WalletTrail — Helping You Understand Blockchain'; }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="WalletTrail home"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a>
        <nav className="site-nav" aria-label="Primary navigation"><a href="/wallettrail-101">Start Here</a><a href="/knowledge">Knowledge</a><a href="/dictionary">Dictionary</a><a href="/security">Security</a><a href="/evidence">Evidence</a></nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span aria-hidden="true">☰</span><span>Menu</span></summary>
          <nav aria-label="Mobile navigation">
            <a href="/">Home</a><a href="/wallettrail-101">Start Here</a><a href="/knowledge">Knowledge</a><a href="/dictionary">Dictionary</a><a href="/security">Security</a><a href="/evidence">Evidence</a>
          </nav>
        </details>
      </header>

      <main id="top">
        <section className="hero section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-brand-name" aria-label="WalletTrail"><span>WALLET</span><strong>TRAIL</strong></p>
            <h1 id="hero-title">Helping You Understand Blockchain</h1>
            <p className="hero-text">Whether you&apos;re taking your first steps into cryptocurrency, trying to understand blockchain transactions, or looking for trusted educational resources, you&apos;re in the right place.</p>
            <p className="hero-text hero-text-secondary">WalletTrail helps people understand blockchain through practical learning, clear explanations and tools designed to make digital asset information easier to understand.</p>
            <div className="hero-actions"><a className="button button-primary" href="/wallettrail-101">Start Learning</a></div>
          </div>
          <div className="hero-panel" aria-hidden="true"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-node node-one" /><div className="hero-node node-two" /><div className="hero-node node-three" /><div className="hero-panel-center">WT</div></div>
        </section>

        <section className="section journey-section" aria-labelledby="journey-title">
          <div className="section-heading"><p className="eyebrow">Your journey</p><h2 id="journey-title">What brings you here today?</h2><p>Everyone starts somewhere. Choose the path that best matches what you&apos;re looking for today.</p></div>
          <div className="journey-grid">{journeys.map((journey) => <article className={`journey-card${journey.urgent ? ' journey-card-urgent' : ''}`} key={journey.title}><span className="card-icon" aria-hidden="true">{journey.icon}</span><h3>{journey.title}</h3><p>{journey.text}</p>{journey.href && <a className="text-link" href={journey.href}>{journey.label}<span aria-hidden="true"> →</span></a>}</article>)}</div>
        </section>

        <section className="section learning-section" aria-labelledby="learning-title">
          <div className="learning-content"><p className="eyebrow">WalletTrail 101</p><h2 id="learning-title">Before You Buy, Send or Invest in Cryptocurrency...</h2><p>There are a few things everyone should understand first.</p><p>Cryptocurrency isn&apos;t difficult because it&apos;s digital.</p><p>It feels difficult because nobody explains it from the beginning.</p><p>That&apos;s why we created WalletTrail 101.</p><p>Whether you&apos;re buying cryptocurrency for the first time, sending money to someone else, or simply curious about how blockchain works, we&apos;ll guide you step by step using clear, practical language.</p><p className="learning-list">No assumptions.<br />No unnecessary jargon.<br />Just the knowledge you need to move forward with confidence.</p><a className="button button-primary" href="/wallettrail-101">Start WalletTrail 101</a></div>
        </section>

        <section className="section" aria-labelledby="learn-title">
          <div className="section-heading"><p className="eyebrow">Keep learning</p><h2 id="learn-title">Learn Something Today</h2><p>Every visit is an opportunity to learn something new. Explore our latest educational content and build your understanding of blockchain one topic at a time.</p></div>
          <div className="learning-grid">{learningCards.map((card) => <article className="learning-card" key={card.title}><p className="card-eyebrow">{card.eyebrow}</p><h3>{card.title}</h3><p>{card.text}</p><a className="text-link" href={card.href}>{card.label}<span aria-hidden="true"> →</span></a></article>)}</div>
        </section>

        <section className="section why-section" aria-labelledby="why-title">
          <div className="section-heading"><p className="eyebrow">Our purpose</p><h2 id="why-title">Why WalletTrail?</h2><p>Blockchain is changing how people store, move and manage value. Understanding it shouldn&apos;t be limited to technical experts.</p><p>WalletTrail was created to help bridge that gap through practical education, structured learning and clear guidance that anyone can follow.</p><p>Whether you&apos;re here to learn, understand or organise blockchain information, our goal is simple:</p><p className="section-emphasis">Help you leave knowing more than when you arrived.</p></div>
          <div className="principles-grid"><article><span>📖</span><h3>Learn Clearly</h3><p>Complex topics explained in plain language without unnecessary jargon.</p></article><article><span>🎯</span><h3>Practical Guidance</h3><p>Learn information you can apply in real-world situations, not just theory.</p></article><article><span>🧩</span><h3>Understand with Confidence</h3><p>Build your knowledge one step at a time through structured learning.</p></article><article><span>🤝</span><h3>Built for Everyone</h3><p>Whether you&apos;re completely new or already familiar with blockchain, there&apos;s always something new to discover.</p></article></div>
        </section>

        <section className="section commitment-section" aria-labelledby="commitment-title">
          <div className="section-heading"><p className="eyebrow">What we stand for</p><h2 id="commitment-title">Our Commitment</h2><p>At WalletTrail, we believe that understanding blockchain should be accessible to everyone.</p><p>We&apos;re committed to creating educational resources that are practical, accurate and easy to understand, helping people build confidence in a rapidly evolving digital world.</p><p>As blockchain technology continues to grow, so will WalletTrail. We&apos;ll continue learning, improving and creating resources that help our community make informed decisions with greater confidence.</p></div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
