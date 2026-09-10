const terms = [
  {
    term: 'Wallet Address',
    category: 'Wallets',
    definition: 'A wallet address is a unique string of letters and numbers used to receive digital assets on a specific blockchain network.',
    why: 'Think of it like an account destination. Someone can use your wallet address to send cryptocurrency to you, but knowing the address alone does not give them control of the wallet.',
    looks: 'Addresses can look different depending on the blockchain. They may begin with particular letters or numbers, and their format is not the same across every network.',
    remember: 'Always check both the address and the network before sending. Sending an asset to the wrong address or using the wrong network can result in a loss that may be difficult or impossible to reverse.',
  },
];

export default function Dictionary() {
  return (
    <div className="dictionary-page">
      <header className="dictionary-header">
        <a className="brand" href="/" aria-label="WalletTrail home">
          <span className="brand-mark" aria-hidden="true">WT</span>
          <span>WalletTrail</span>
        </a>
        <a className="dictionary-back" href="/">← Back to WalletTrail</a>
      </header>

      <main>
        <section className="dictionary-hero">
          <p className="eyebrow">WalletTrail Dictionary</p>
          <h1>Blockchain terms, explained clearly.</h1>
          <p>
            Crypto comes with a lot of unfamiliar words. The WalletTrail Dictionary breaks them down into practical explanations you can actually use.
          </p>
        </section>

        <section className="dictionary-entry" aria-labelledby="wallet-address-title">
          <div className="dictionary-entry-heading">
            <p className="card-eyebrow">{terms[0].category}</p>
            <h2 id="wallet-address-title">{terms[0].term}</h2>
            <p className="dictionary-definition">{terms[0].definition}</p>
          </div>

          <div className="dictionary-sections">
            <article>
              <h3>What does that mean?</h3>
              <p>{terms[0].why}</p>
            </article>
            <article>
              <h3>What does it look like?</h3>
              <p>{terms[0].looks}</p>
            </article>
            <article>
              <h3>What should you remember?</h3>
              <p>{terms[0].remember}</p>
            </article>
          </div>
        </section>

        <section className="dictionary-next">
          <p className="eyebrow">Keep exploring</p>
          <h2>More terms are coming.</h2>
          <p>WalletTrail will continue building the Dictionary so you can look up the words, concepts and blockchain ideas you encounter along the way.</p>
          <a className="button button-primary" href="/wallettrail-101">Continue Learning</a>
        </section>
      </main>

      <footer className="lesson-footer">
        <span>WalletTrail</span>
        <span>Keep learning. Keep asking questions. Keep building confidence.</span>
      </footer>
    </div>
  );
}
