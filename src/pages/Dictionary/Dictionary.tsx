import { useEffect, useMemo, useRef, useState } from 'react';
import './Dictionary.css';
import { glossaryAdditions } from './glossaryAdditions';

type DictionaryTerm = { term: string; category: string; definition: string };

const baseTerms: DictionaryTerm[] = [
  { term: 'Blockchain', category: 'Foundations', definition: 'A shared digital record that stores transactions and other data across a network of computers.' },
  { term: 'Cryptocurrency', category: 'Foundations', definition: 'A digital asset that can be transferred between participants using cryptographic technology and a blockchain or related network.' },
  { term: 'Wallet', category: 'Wallets', definition: 'Software or hardware that lets you manage the keys used to access and control digital assets.' },
  { term: 'Wallet Address', category: 'Wallets', definition: 'A unique string of characters used to identify a destination for digital assets on a particular blockchain network.' },
  { term: 'Private Key', category: 'Wallets', definition: 'A secret cryptographic credential that can authorize transactions from a blockchain account. Whoever controls it may be able to control the associated assets.' },
  { term: 'Recovery Phrase', category: 'Wallets', definition: 'A sequence of words that can be used to restore access to a compatible self-custody wallet. It must never be shared.' },
  { term: 'Public Key', category: 'Wallets', definition: 'A cryptographic value that can be shared and is mathematically related to a private key.' },
  { term: 'Transaction', category: 'Transactions', definition: 'A digitally submitted instruction that changes state on a blockchain, such as transferring an asset.' },
  { term: 'Transaction Hash', category: 'Transactions', definition: 'A reference identifier commonly used to find a specific blockchain transaction on an explorer.' },
  { term: 'Block', category: 'Foundations', definition: 'A batch of blockchain data that is added to the chain according to the rules of that network.' },
  { term: 'Network', category: 'Foundations', definition: 'The specific blockchain environment on which an asset or transaction exists and is processed.' },
  { term: 'Gas Fee', category: 'Transactions', definition: 'A network fee paid for processing certain blockchain transactions or computations.' },
  { term: 'Confirmation', category: 'Transactions', definition: 'A measure of a transaction being included in a block and followed by additional blocks or network acceptance.' },
  { term: 'Coin', category: 'Assets', definition: 'A digital asset that operates natively on its own blockchain network.' },
  { term: 'Token', category: 'Assets', definition: 'A digital asset created through a blockchain’s existing infrastructure, often using a token standard or smart contract.' },
  { term: 'Stablecoin', category: 'Assets', definition: 'A crypto asset designed to maintain a relatively stable value, often by referencing a fiat currency.' },
  { term: 'Smart Contract', category: 'Applications', definition: 'Code deployed on a blockchain that can execute defined actions when its rules and conditions are met.' },
  { term: 'Exchange', category: 'Platforms', definition: 'A platform where users can buy, sell or trade digital assets.' },
  { term: 'Centralized Exchange', category: 'Platforms', definition: 'A crypto trading platform operated by a company that typically manages user accounts and custody of assets held on the platform.' },
  { term: 'DEX', category: 'Platforms', definition: 'A blockchain-based system that allows users to trade assets through smart contracts rather than a traditional central custodian.' },
  { term: 'BEP-20', category: 'Networks & Standards', definition: 'A token standard associated with BNB Smart Chain that defines common rules for compatible tokens.' },
  { term: 'TRC-20', category: 'Networks & Standards', definition: 'A token standard used on the TRON blockchain for compatible tokens.' },
  { term: 'Phishing', category: 'Security', definition: 'A technique using deceptive messages, websites or accounts to trick people into revealing information or taking an unsafe action.' },
  { term: 'Security', category: 'Security', definition: 'The practices and precautions used to protect wallets, keys, transactions and digital assets from loss, theft and fraud.' },
];

const baseNames = new Set(baseTerms.map((term) => term.term));
const additionTerms: DictionaryTerm[] = glossaryAdditions.filter((term) => !baseNames.has(term.term)).map((term) => ({ term: term.term, category: term.category, definition: term.definition }));
const terms = [...baseTerms, ...additionTerms];
const categories = ['All', ...Array.from(new Set(terms.map((term) => term.category)))];

function whyItMatters(category: string) {
  switch (category) {
    case 'Security': return 'Understanding this can help you recognise risks and make safer decisions before sharing information or approving a transaction.';
    case 'Forensics': return 'Understanding this helps you organise and describe blockchain information when reviewing what happened.';
    case 'Regulation & Compliance': return 'Rules can vary between countries and situations. Understanding the term gives you a better starting point for researching the applicable requirements.';
    case 'Trading & Markets': return 'Understanding this term makes it easier to follow crypto markets and assess information carefully.';
    case 'Wallets': return 'Understanding this helps you protect access to your assets and avoid common wallet mistakes.';
    case 'Transactions': return 'Understanding this helps you read blockchain activity and check important details of a transfer.';
    case 'Mining & Consensus': return 'Understanding this helps explain how blockchain networks validate activity and maintain their records.';
    case 'DeFi': return 'Understanding this helps you see what a decentralised finance service is doing before you interact with it.';
    case 'Development': return 'Understanding this helps you make sense of the technology behind blockchain applications.';
    case 'NFTs & Digital Assets': return 'Understanding this helps you make sense of how digital assets are created, represented and traded.';
    default: return 'Understanding this gives you a stronger foundation for learning how blockchain and digital assets work.';
  }
}

export default function Dictionary() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedTerm, setSelectedTerm] = useState('Wallet Address');
  const entryRef = useRef<HTMLElement | null>(null);
  const shouldScrollToEntry = useRef(false);

  const filteredTerms = useMemo(() => {
    const search = query.trim().toLowerCase();
    return terms.filter((term) => {
      const matchesCategory = category === 'All' || term.category === category;
      const matchesSearch = !search || term.term.toLowerCase().includes(search) || term.definition.toLowerCase().includes(search);
      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  const activeTerm = filteredTerms.find((term) => term.term === selectedTerm) ?? filteredTerms[0] ?? terms[0];
  const relatedTerms = useMemo(() => terms.filter((term) => term.term !== activeTerm.term && term.category === activeTerm.category).slice(0, 5), [activeTerm]);

  const selectTerm = (term: string) => {
    setQuery('');
    setCategory('All');
    setSelectedTerm(term);
    shouldScrollToEntry.current = true;
  };

  const selectCategory = (nextCategory: string) => {
    setCategory(nextCategory);
    const firstMatch = terms.find((term) => nextCategory === 'All' || term.category === nextCategory);
    if (firstMatch) setSelectedTerm(firstMatch.term);
  };

  useEffect(() => {
    if (!shouldScrollToEntry.current) return;
    shouldScrollToEntry.current = false;
    requestAnimationFrame(() => entryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }, [selectedTerm]);

  return (
    <main className="dictionary-page">
      <header className="dictionary-header"><a className="brand-mark" href="/">WalletTrail</a><a className="dictionary-back" href="/">Back to WalletTrail</a></header>
      <section className="dictionary-hero"><p className="eyebrow">WalletTrail Dictionary</p><h1>Blockchain terms, explained clearly.</h1><p>Search a term, browse a category or choose something you want to understand. Start with the meaning, then explore why it matters.</p></section>
      <section className="dictionary-browser">
        <div className="dictionary-search-row"><label className="dictionary-search"><span>Search the dictionary</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “wallet”, “gas”, “phishing”..." /></label><p className="dictionary-count">{filteredTerms.length} terms</p></div>
        <div className="dictionary-categories" aria-label="Dictionary categories">{categories.map((item) => <button key={item} className={`category-button ${category === item ? 'active' : ''}`} type="button" onClick={() => selectCategory(item)}>{item}</button>)}</div>
        <div className="dictionary-layout">
          <aside className="dictionary-list" aria-label="Dictionary terms"><p className="list-label">Browse terms</p>{filteredTerms.length ? filteredTerms.map((term) => <button key={term.term} className={`term-button ${activeTerm.term === term.term ? 'active' : ''}`} type="button" onClick={() => selectTerm(term.term)}><span>{term.term}</span><small>{term.category}</small></button>) : <div className="no-results"><strong>No terms found</strong><p>Try a different word or choose another category.</p></div>}</aside>
          <article ref={entryRef} className="dictionary-entry" aria-live="polite">
            <div className="dictionary-entry-heading"><p className="eyebrow">{activeTerm.category}</p><h2>{activeTerm.term}</h2><p className="dictionary-definition">{activeTerm.definition}</p></div>
            <div className="dictionary-sections"><article><h3>Why does it matter?</h3><p>{whyItMatters(activeTerm.category)}</p></article></div>
            {relatedTerms.length > 0 && <section className="related-terms"><span>Explore related terms</span><div>{relatedTerms.map((term) => <button key={term.term} type="button" onClick={() => selectTerm(term.term)}>{term.term}</button>)}</div></section>}
          </article>
        </div>
      </section>
      <footer className="dictionary-footer"><p>Keep learning. Keep asking questions. Keep building confidence.</p><a href="/wallettrail-101">Continue with WalletTrail 101 →</a></footer>
    </main>
  );
}
