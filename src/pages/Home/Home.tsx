import { useEffect } from 'react';

const journeys = [
  {
    icon: '🌱', title: 'I’m New to Cryptocurrency', text: 'Start your journey by learning the fundamentals of cryptocurrency and blockchain.', href: '/wallettrail-101', label: 'Start Here',
  },
  {
    icon: '📚', title: 'I Want to Learn', text: 'Explore easy-to-understand guides covering blockchain, wallets, digital assets and more.', href: '/wallettrail-101', label: 'Start Learning',
  },
  {
    icon: '🔍', title: 'I Want to Understand Something', text: 'Looking for a specific answer? Explore our articles, glossary and educational resources.', href: '/dictionary', label: 'Explore Dictionary',
  },
  {
    icon: '🗂️', title: 'I Need to Organise Information', text: 'Learn what blockchain information is important and how to keep it organised for future reference.', href: '/wallettrail-101', label: 'Learn the Basics',
  },
  {
    icon: '🚨', title: 'I Think Something Went Wrong', text: 'If you’ve experienced a suspicious transaction or think you’ve been affected by fraud, we’ll help you understand what information to preserve and how to organise it.', href: '/security', label: 'Get Security Guidance', urgent: true,
  },
  {
    icon: '🌍', title: 'Explore WalletTrail', text: 'Discover everything WalletTrail has to offer, from educational resources to practical blockchain tools.', href: '/wallettrail-101', label: 'Explore',
  },
];

const learningCards = [
  { eyebrow: 'Featured Guide', title: 'Before You Buy Cryptocurrency', text: 'Understand the fundamentals before making your first transaction.', href: '/wallettrail-101', label: 'Read Guide' },
  { eyebrow: 'Blockchain Term of the Week', title: 'Wallet Address', text: 'Learn what it is, why it’s important and how it’s used.', href: '/dictionary', label: 'Learn More' },
  { eyebrow: 'Security Tip', title: 'Protect Your Recovery Phrase', text: 'Your recovery phrase gives access to your wallet. Keep it private, offline and never share it with anyone.', href: '/security', label: 'View Security Tips' },
];

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="WalletTrail home"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a>
        <nav className="site-nav" aria-label="Primary navigation"><a href="/wallettrail-101">Start Here</a><a href="#learn-today">Learn</a><a href="#why-wallettrail">About</a><a href="#footer">Contact</a></nav>
      </header>

      <main id="top">
        <section className="hero section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">WalletTrail</p><h1 id="hero-title">Helping You Understand Blockchain</h1>
            <p className="hero-text">Whether you&apos;re taking your first steps into cryptocurrency, trying to understand blockchain transactions, or looking for trusted educational resources, you&apos;re in the right place.</p>
            <p className="hero-text hero-text-secondary">WalletTrail helps people understand blockchain through practical learning, clear explanations and tools designed to make digital asset information easier to understand.</p>
            <div className="hero-actions"><a className="button button-primary" href="/wallettrail-101">Start Learning</a><a className="button button-secondary" href="/wallettrail-101">Explore WalletTrail</a></div>
          </div>
          <div className="hero-panel" aria-hidden="true"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-node node-one" /><div className="hero-node node-two" /><div className="hero-node node-three" /><div className="hero-panel-center">WT</div></div>
        </section>

        <section className="section journey-section" aria-labelledby="journey-title">
          <div className="section-heading"><p className="eyebrow">Your journey</p><h2 id="journey-title">What brings you here today?</h2><p>Everyone starts somewhere. Choose the path that best matches what you&apos;re looking for today.</p></div>
          <div className="journey-grid">{journeys.map((journey) => <article className={`journey-card${journey.urgent ? ' journey-card-urgent' : ''}`} key={journey.title}><span className="card-icon" aria-hidden="true">{journey.icon}</span><h3>{journey.title}</h3><p>{journey.text}</p><a className="text-link" href={journey.href}>{journey.label}<span aria-hidden="true"> →</span></a></article>)}</div>
        </section>

        <section className="section learning-section" id="wallettrail-101" aria-labelledby="learning-title">
          <div className="learning-content"><p className="eyebrow">WalletTrail 101</p><h2 id="learning-title">Before You Buy, Send or Invest in Cryptocurrency...</h2><p>There are a few things everyone should understand first.</p><p>Cryptocurrency isn&apos;t difficult because it&apos;s digital.</p><p>It feels difficult because nobody explains it from the beginning.</p><p>That&apos;s why we created WalletTrail 101.</p><p>Whether you&apos;re buying cryptocurrency for the first time, sending money to someone else, or simply curious about how blockchain works, we&apos;ll guide you step by step using clear, practical language.</p><p className="learning-list">No assumptions.<br />No unnecessary jargon.<br />Just the knowledge you need to move forward with confidence.</p><a className="button button-primary" href="/wallettrail-101">Start WalletTrail 101</a></div>
        </section>

        <section className="section" id="learn-today" aria-labelledby="learn-title">
          <div className="section-heading"><p className="eyebrow">Keep learning</p><h2 id="learn-title">Learn Something Today</h2><p>Every visit is an opportunity to learn something new. Explore our latest educational content and build your understanding of blockchain one topic at a time.</p></div>
          <div className="learning-grid">{learningCards.map((card) => <article className="learning-card" key={card.title}><p className="card-eyebrow">{card.eyebrow}</p><h3>{card.title}</h3><p>{card.text}</p><a className="text-link" href={card.href}>{card.label}<span aria-hidden="true"> →</span></a></article>)}</div>
          <div className="topic-notes" aria-label="Learning notes"><div id="wallet-address"><strong>Wallet Address</strong><span>A key concept you&apos;ll learn in the WalletTrail dictionary.</span></div><div id="security-tip"><strong>Security Centre</strong><span>Practical guidance on protecting your wallet and recognising common red flags.</span></div></div>
        </section>

        <section className="section why-section" id="why-wallettrail" aria-labelledby="why-title">
          <div className="section-heading"><p className="eyebrow">Our purpose</p><h2 id="why-title">Why WalletTrail?</h2><p>Blockchain is changing how people store, move and manage value. Understanding it shouldn&apos;t be limited to technical experts.</p><p>WalletTrail was created to help bridge that gap through practical education, structured learning and clear guidance that anyone can follow.</p><p>Whether you&apos;re here to learn, understand or organise blockchain information, our goal is simple:</p><p className="section-emphasis">Help you leave knowing more than when you arrived.</p></div>
          <div className="principles-grid"><article><span>📖</span><h3>Learn Clearly</h3><p>Complex topics explained in plain language without unnecessary jargon.</p></article><article><span>🎯</span><h3>Practical Guidance</h3><p>Learn information you can apply in real-world situations, not just theory.</p></article><article><span>🧩</span><h3>Understand with Confidence</h3><p>Build your knowledge one step at a time through structured learning.</p></article><article><span>🤝</span><h3>Built for Everyone</h3><p>Whether you&apos;re completely new or already familiar with blockchain, there&apos;s always something new to discover.</p></article></div>
        </section>

        <section className="section commitment-section" id="commitment" aria-labelledby="commitment-title">
          <div className="section-heading"><p className="eyebrow">What we stand for</p><h2 id="commitment-title">Our Commitment</h2><p>At WalletTrail, we believe that understanding blockchain should be accessible to everyone.</p><p>We&apos;re committed to creating educational resources that are practical, accurate and easy to understand, helping people build confidence in a rapidly evolving digital world.</p><p>As blockchain technology continues to grow, so will WalletTrail. We&apos;ll continue learning, improving and creating resources that help our community make informed decisions with greater confidence.</p></div>
          <div className="commitment-grid"><article><span>📚</span><h3>Education First</h3><p>Learning comes before assumptions.</p></article><article><span>🤝</span><h3>Built for People</h3><p>Everything we create starts with the person using it.</p></article><article><span>🎯</span><h3>Practical Knowledge</h3><p>Information you can understand and apply.</p></article><article><span>🔄</span><h3>Always Improving</h3><p>Blockchain evolves, and so will WalletTrail.</p></article></div>
        </section>
      </main>

      <footer className="site-footer" id="footer"><div className="footer-main"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a><p>Helping people understand blockchain through practical education, clear guidance and thoughtfully designed resources.</p></div><div className="footer-column"><h3>Explore</h3><a href="#top">Home</a><a href="/wallettrail-101">Start Here</a><a href="#learn-today">Learn</a><a href="#learn-today">Resources</a><a href="#why-wallettrail">About</a><a href="#footer">Contact</a></div><div className="footer-column"><h3>Legal</h3><a href="#footer">Privacy Policy</a><a href="#footer">Terms of Use</a><a href="#footer">Disclaimer</a></div><div className="footer-column"><h3>Connect</h3><a href="mailto:wallettrail@wallettrailhq.com">Email us</a></div></div><div className="footer-bottom"><p>Keep learning. Keep asking questions. Keep building confidence.</p><p>© 2026 WalletTrail. All Rights Reserved.</p></div></footer>
    </div>
  );
}
