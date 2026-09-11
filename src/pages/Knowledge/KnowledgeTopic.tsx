import { useEffect } from 'react';
import './Knowledge.css';
import SiteFooter from '../../components/SiteFooter';

export const knowledgeTopics = {
  blockchain: { title: 'Blockchain', intro: 'Understand how blockchain networks record, confirm and preserve information.', sections: [['What you will learn', 'How blocks, transactions, networks and confirmations fit together, and why a blockchain can be used as a shared record.'], ['Where to start', 'Begin with the basic idea of a shared digital record, then learn how transactions are grouped and confirmed.'], ['Useful next steps', 'Use the Dictionary for individual terms and WalletTrail 101 if you want the fundamentals in a guided order.']] },
  'cryptocurrency-digital-assets': { title: 'Cryptocurrency & Digital Assets', intro: 'Build a practical understanding of coins, tokens, stablecoins and digital value.', sections: [['What you will learn', 'The difference between common types of digital assets, what they represent and how they can be transferred.'], ['Where to start', 'Start by understanding the asset you are using, what network it belongs to and what purpose you have for using it.'], ['Useful next steps', 'Learn the relevant terms in the Dictionary before moving into deeper market or transaction topics.']] },
  'wallets-transactions': { title: 'Wallets & Transactions', intro: 'Learn how wallets, addresses, keys and blockchain transactions fit together.', sections: [['What you will learn', 'How wallet access, wallet addresses, transaction details and blockchain networks relate to one another.'], ['Where to start', 'Understand the difference between a wallet and a wallet address, then learn what a transaction actually represents.'], ['Useful next steps', 'Use the Dictionary for wallet and transaction terminology, and Security for guidance on protecting sensitive credentials.']] },
  security: { title: 'Security', intro: 'Understand common risks and build safer habits around digital assets.', sections: [['What you will learn', 'How phishing, impersonation, exposed credentials and unsafe transaction requests can put digital assets at risk.'], ['Where to start', 'Learn the security basics before sharing information, connecting a wallet or approving a transaction.'], ['Useful next steps', 'Visit the Security Centre for practical guidance and what to do when something feels wrong.']] },
  defi: { title: 'DeFi', intro: 'Explore decentralised finance and the technology behind these services.', sections: [['What you will learn', 'The basic ideas behind decentralised finance, smart contracts and services that operate without a traditional central intermediary.'], ['Where to start', 'Begin with smart contracts and understand what you are interacting with before considering a DeFi service.'], ['Useful next steps', 'Use the Dictionary to clarify unfamiliar terms as you build your understanding.']] },
  'trading-markets': { title: 'Trading & Markets', intro: 'Learn the language used when people buy, sell and trade digital assets.', sections: [['What you will learn', 'Core market concepts, trading terminology and the information people use when assessing digital asset markets.'], ['Where to start', 'Understand the asset, market and purpose behind a transaction before focusing on trading terminology.'], ['Useful next steps', 'Build your vocabulary in the Dictionary and keep learning through practical Knowledge resources.']] },
  'regulation-compliance': { title: 'Regulation & Compliance', intro: 'Build a starting point for understanding rules, responsibilities and changing requirements.', sections: [['What you will learn', 'The terminology and concepts used when discussing regulation, compliance and responsibilities around digital assets.'], ['Where to start', 'Understand that requirements can depend on the country, activity and circumstances involved.'], ['Useful next steps', 'Use WalletTrail as an educational starting point and research the applicable official requirements for your situation.']] },
  'blockchain-evidence': { title: 'Blockchain Evidence', intro: 'Understand the blockchain information that can be preserved and organised when something goes wrong.', sections: [['What you will learn', 'How wallet addresses, transaction hashes, dates, amounts and related information can form part of a structured evidence trail.'], ['Where to start', 'Preserve the original information first. You do not need to understand every technical detail before keeping what you have.'], ['Useful next steps', 'Visit Evidence & Reporting to learn how WalletTrail approaches organising and presenting blockchain information.']] },
} as const;

type TopicSlug = keyof typeof knowledgeTopics;

function BlockchainGuide() {
  return (
    <>
      <section className="knowledge-visual-block" aria-label="How a blockchain transaction moves through a network">
        <div className="knowledge-visual-copy">
          <p className="eyebrow">See it in action</p>
          <h2>From a transaction to the blockchain</h2>
          <p>A blockchain can feel abstract until you see the journey. Here is a simplified view of what happens when a user sends a digital asset.</p>
        </div>
        <div className="blockchain-flow" aria-label="User, wallet, transaction, network, block, blockchain">
          {['User', 'Wallet', 'Transaction', 'Network', 'Block', 'Blockchain'].map((step, index) => (
            <div className="flow-item" key={step}>
              <div className="flow-icon" aria-hidden="true">{['●', '◇', '→', '◎', '▦', '▤'][index]}</div>
              <strong>{step}</strong>
              <span>{['Initiates a transfer', 'Uses wallet access', 'Request is created', 'Network processes it', 'Transaction is included', 'Record is preserved'][index]}</span>
              {index < 5 && <div className="flow-arrow" aria-hidden="true">→</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="knowledge-learning-section">
        <p className="eyebrow">A simple example</p>
        <h2>Imagine sending 50 USDT</h2>
        <div className="learning-steps">
          <article><span>01</span><h3>Send</h3><p>A user enters the recipient address and amount, then submits the transaction from a wallet.</p></article>
          <article><span>02</span><h3>Process</h3><p>The transaction is broadcast to the relevant blockchain network, where network participants process it.</p></article>
          <article><span>03</span><h3>Confirm</h3><p>The transaction is included in a block and receives confirmations as the network continues to build on the chain.</p></article>
          <article><span>04</span><h3>Check</h3><p>Transaction details can be viewed using the network's public information tools when available.</p></article>
        </div>
      </section>

      <section className="knowledge-block-visual" aria-label="Simplified block contents">
        <div>
          <p className="eyebrow">Look inside a block</p>
          <h2>A block is more than a box of transactions.</h2>
          <p>Different networks use different technical structures, but a simplified block can help you understand the idea: transactions are grouped together and linked into an ongoing chain.</p>
        </div>
        <div className="block-diagram">
          <div className="block-top"><span>BLOCK</span><strong>Example #10,482</strong></div>
          <div className="block-row"><span>Transactions</span><strong>Grouped activity</strong></div>
          <div className="block-row"><span>Timestamp</span><strong>When the block was recorded</strong></div>
          <div className="block-row"><span>Previous reference</span><strong>Connects it to earlier data</strong></div>
          <div className="block-row"><span>Network data</span><strong>Information used by that blockchain</strong></div>
        </div>
      </section>

      <section className="knowledge-scenarios">
        <p className="eyebrow">Why this matters</p>
        <h2>Blockchain becomes useful when you can connect it to real situations.</h2>
        <div className="scenario-grid">
          <article><h3>Sending crypto</h3><p>A transaction records the movement of an asset from one address to another.</p></article>
          <article><h3>Checking a transaction</h3><p>A transaction hash can help you locate and review a particular transaction on a supported network.</p></article>
          <article><h3>Something went wrong</h3><p>Wallet addresses, transaction hashes, amounts and dates can become important information to preserve and organise.</p></article>
        </div>
      </section>

      <section className="knowledge-checkpoint">
        <p className="eyebrow">You now have the foundation</p>
        <h2>If these five ideas make sense, you are ready for the next layer.</h2>
        <ul>
          <li>A blockchain records transactions.</li>
          <li>Wallets interact with blockchain networks.</li>
          <li>Transactions can be processed and confirmed by a network.</li>
          <li>Blocks group information and connect into a chain.</li>
          <li>Blockchain information can help us understand what happened.</li>
        </ul>
        <div className="knowledge-topic-links"><a className="button button-primary" href="/knowledge/cryptocurrency-digital-assets">Next: Digital Assets</a><a className="text-link" href="/dictionary">Look up a term →</a></div>
      </section>
    </>
  );
}

export default function KnowledgeTopic({ slug }: { slug: TopicSlug }) {
  const topic = knowledgeTopics[slug];
  useEffect(() => { document.title = `WalletTrail Knowledge — ${topic.title}`; }, [topic.title]);

  return (
    <main className="knowledge-topic-page">
      <header className="knowledge-topic-header"><a className="brand" href="/" aria-label="WalletTrail home"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a><a className="knowledge-topic-back" href="/knowledge">← Back to Knowledge</a></header>
      <section className="knowledge-topic-hero"><p className="eyebrow">WalletTrail Knowledge</p><h1>{topic.title}</h1><p>{topic.intro}</p></section>
      {slug === 'blockchain' ? <BlockchainGuide /> : <section className="knowledge-topic-content" aria-label={`${topic.title} learning guide`}>
        {topic.sections.map(([heading, text]) => <article key={heading}><p className="eyebrow">{heading}</p><p>{text}</p></article>)}
      </section>}
      {slug !== 'blockchain' && <section className="knowledge-topic-next"><p className="eyebrow">Keep exploring</p><h2>Build your understanding one topic at a time.</h2><p>Use the Dictionary when you need a clear definition, or return to Knowledge to explore another subject.</p><div className="knowledge-topic-links"><a className="button button-primary" href="/dictionary">Explore the Dictionary</a><a className="text-link" href="/knowledge">Back to Knowledge →</a></div></section>}
      <SiteFooter />
    </main>
  );
}
