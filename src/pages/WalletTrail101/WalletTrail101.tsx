const lessons = [
  {
    number: '01',
    title: 'Know what you are using',
    text: 'Before you buy or send cryptocurrency, understand which digital asset you are using and what it is worth against the currency you normally use.',
  },
  {
    number: '02',
    title: 'Know why you are using it',
    text: 'Buying, sending, investing and trading are not the same thing. Knowing your purpose helps you make better decisions and keep the right information.',
  },
  {
    number: '03',
    title: 'Know where it is going',
    text: 'A wallet address is not just a string of letters and numbers. Learn how addresses and blockchain networks work before sending digital assets.',
  },
  {
    number: '04',
    title: 'Keep your proof',
    text: 'Keep confirmations, transaction details, receipts, screenshots and relevant communication. Good records can make a difficult situation much easier to understand later.',
  },
  {
    number: '05',
    title: 'Understand the blockchain',
    text: 'A blockchain is a shared record of transactions. Once you understand what a transaction represents, the information becomes much easier to follow.',
  },
  {
    number: '06',
    title: 'Slow down when something feels wrong',
    text: 'Pressure, guaranteed returns, urgent payment requests and requests for sensitive wallet information are reasons to stop and verify before continuing.',
  },
];

export default function WalletTrail101() {
  return (
    <div className="lesson-page">
      <header className="lesson-header">
        <a className="brand" href="/" aria-label="WalletTrail home">
          <span className="brand-mark" aria-hidden="true">WT</span>
          <span>WalletTrail</span>
        </a>
        <a className="lesson-back" href="/">← Back to WalletTrail</a>
      </header>

      <main>
        <section className="lesson-hero">
          <p className="eyebrow">WalletTrail 101</p>
          <h1>Before You Buy, Send or Invest in Cryptocurrency...</h1>
          <p className="lesson-lead">
            Cryptocurrency becomes easier to understand when you start with the basics. This guide gives you a practical foundation before you make your next move.
          </p>
        </section>

        <section className="lesson-intro">
          <div>
            <p className="eyebrow">Start here</p>
            <h2>First thing you must know...</h2>
          </div>
          <div className="lesson-intro-copy">
            <p>Crypto is not something you need to understand all at once.</p>
            <p>You need to understand the right things in the right order.</p>
            <p>We'll start with six practical ideas that can help you become more confident with cryptocurrency and blockchain.</p>
          </div>
        </section>

        <section className="lesson-grid" aria-label="WalletTrail 101 lessons">
          {lessons.map((lesson) => (
            <article className="lesson-card" key={lesson.number}>
              <span className="lesson-number">{lesson.number}</span>
              <h3>{lesson.title}</h3>
              <p>{lesson.text}</p>
            </article>
          ))}
        </section>

        <section className="lesson-next">
          <div>
            <p className="eyebrow">Keep exploring</p>
            <h2>Build your understanding one topic at a time.</h2>
            <p>
              When you are ready to go deeper, explore the <a className="text-link" href="/dictionary">WalletTrail Dictionary</a> for individual terms or the <a className="text-link" href="/security">Security Centre</a> for practical security guidance.
            </p>
          </div>
        </section>
      </main>

      <footer className="lesson-footer">
        <span>WalletTrail</span>
        <span>Keep learning. Keep asking questions. Keep building confidence.</span>
      </footer>
    </div>
  );
}
