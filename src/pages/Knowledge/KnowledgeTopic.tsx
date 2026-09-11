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

export default function KnowledgeTopic({ slug }: { slug: TopicSlug }) {
  const topic = knowledgeTopics[slug];
  useEffect(() => { document.title = `WalletTrail Knowledge — ${topic.title}`; }, [topic.title]);

  return (
    <main className="knowledge-topic-page">
      <header className="knowledge-topic-header"><a className="brand" href="/" aria-label="WalletTrail home"><span className="brand-mark" aria-hidden="true">WT</span><span>WalletTrail</span></a><a className="knowledge-topic-back" href="/knowledge">← Back to Knowledge</a></header>
      <section className="knowledge-topic-hero"><p className="eyebrow">WalletTrail Knowledge</p><h1>{topic.title}</h1><p>{topic.intro}</p></section>
      <section className="knowledge-topic-content" aria-label={`${topic.title} learning guide`}>
        {topic.sections.map(([heading, text]) => <article key={heading}><p className="eyebrow">{heading}</p><p>{text}</p></article>)}
      </section>
      <section className="knowledge-topic-next"><p className="eyebrow">Keep exploring</p><h2>Build your understanding one topic at a time.</h2><p>Use the Dictionary when you need a clear definition, or return to Knowledge to explore another subject.</p><div className="knowledge-topic-links"><a className="button button-primary" href="/dictionary">Explore the Dictionary</a><a className="text-link" href="/knowledge">Back to Knowledge →</a></div></section>
      <SiteFooter />
    </main>
  );
}
