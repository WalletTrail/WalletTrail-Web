import { useMemo, useState } from 'react';
import './Dictionary.css';

type DictionaryTerm = {
  term: string;
  category: string;
  definition: string;
  plain: string;
  usedFor: string;
  check: string;
  mistake: string;
  related: string[];
};

const terms: DictionaryTerm[] = [
  {
    term: 'Blockchain',
    category: 'Foundations',
    definition: 'A blockchain is a shared digital record that stores transactions and other data across a network of computers.',
    plain: 'Think of it as a record that many computers keep in agreement. Instead of one company controlling the only copy, the network maintains the record together.',
    usedFor: 'Blockchains can record transfers of digital assets, support applications and provide a way to verify what happened on a network.',
    check: 'When researching a transaction, first identify which blockchain network it happened on.',
    mistake: 'Assuming every cryptocurrency uses the same blockchain or that blockchain and cryptocurrency mean the same thing.',
    related: ['Transaction', 'Block', 'Network', 'Wallet Address'],
  },
  {
    term: 'Cryptocurrency',
    category: 'Foundations',
    definition: 'A digital asset that can be transferred between participants using cryptographic technology and a blockchain or related network.',
    plain: 'It is digital value that can move between people without needing a traditional bank transfer for every movement.',
    usedFor: 'People use different cryptocurrencies to transfer value, invest, trade, pay for things or interact with blockchain applications.',
    check: 'Know exactly which asset you are using and which network supports it before sending it.',
    mistake: 'Treating all cryptocurrencies as interchangeable or assuming an asset can be sent safely on any network.',
    related: ['Coin', 'Token', 'Stablecoin', 'Network'],
  },
  {
    term: 'Wallet',
    category: 'Wallets',
    definition: 'A crypto wallet is software or hardware that lets you manage the keys used to access and control digital assets.',
    plain: 'A wallet does not simply contain coins like a physical wallet contains cash. It manages the credentials that let you interact with assets recorded on a blockchain.',
    usedFor: 'Wallets can be used to receive, send, hold and interact with digital assets and blockchain applications.',
    check: 'Understand whether you are using a custodial wallet or controlling your own keys, and keep recovery credentials secure.',
    mistake: 'Thinking that a wallet address, password, private key and recovery phrase are all the same thing.',
    related: ['Wallet Address', 'Private Key', 'Recovery Phrase', 'Public Key'],
  },
  {
    term: 'Wallet Address',
    category: 'Wallets',
    definition: 'A wallet address is a unique string of characters used to identify a destination for digital assets on a particular blockchain network.',
    plain: 'Think of it as the destination you give someone when you want them to send cryptocurrency to you. It is public information and is not the same as the secret credentials that control a wallet.',
    usedFor: 'You can use an address to receive assets and to look up blockchain activity associated with that address on a suitable explorer.',
    check: 'Before sending, check the address, asset, network and amount. Compare the beginning and ending characters after pasting an address.',
    mistake: 'Assuming an address that works on one network will automatically work for another, or sending without checking the destination carefully.',
    related: ['Wallet', 'Network', 'Transaction', 'Transaction Hash'],
  },
  {
    term: 'Private Key',
    category: 'Wallets',
    definition: 'A private key is a secret cryptographic credential that can be used to authorize transactions from a blockchain account.',
    plain: 'It is one of the most sensitive pieces of information connected to a self-custody wallet. Whoever controls the private key may be able to control the associated assets.',
    usedFor: 'Wallet software uses private keys to create signatures that prove a transaction was authorized by the holder of the key.',
    check: 'Keep private keys secret and offline where appropriate. Never enter them into an unknown website or send them to support staff.',
    mistake: 'Sharing a private key because someone claims they need it to unlock, verify or recover funds.',
    related: ['Wallet', 'Recovery Phrase', 'Public Key', 'Transaction'],
  },
  {
    term: 'Recovery Phrase',
    category: 'Wallets',
    definition: 'A recovery phrase is a sequence of words that can be used to restore access to a compatible self-custody wallet.',
    plain: 'It is effectively a master backup for many self-custody wallets. Anyone who obtains it may be able to gain control of the wallet it restores.',
    usedFor: 'It is primarily used to restore a wallet when a device is lost, replaced or reset.',
    check: 'Store it privately and securely, preferably offline. Never share it with a person, website or app claiming to provide support.',
    mistake: 'Taking a screenshot, storing it in an exposed cloud account or typing it into a website because someone promises a recovery or bonus.',
    related: ['Wallet', 'Private Key', 'Phishing', 'Security'],
  },
  {
    term: 'Public Key',
    category: 'Wallets',
    definition: 'A public key is a cryptographic value that can be shared and is mathematically related to a private key.',
    plain: 'It belongs to the public side of a cryptographic key pair. Depending on the blockchain, a wallet address may be derived from a public key rather than being the public key itself.',
    usedFor: 'Public keys can be used in cryptographic systems to verify signatures or establish relationships with addresses.',
    check: 'Do not confuse a public key with a wallet address or with a private key.',
    mistake: 'Assuming that because a public key can be shared, the corresponding private key can be shared too.',
    related: ['Private Key', 'Wallet Address', 'Transaction'],
  },
  {
    term: 'Transaction',
    category: 'Transactions',
    definition: 'A blockchain transaction is a digitally submitted instruction that changes state on a blockchain, such as transferring an asset.',
    plain: 'It is the event you create when you tell a blockchain to do something, such as send cryptocurrency from one address to another.',
    usedFor: 'Transactions can transfer assets, interact with smart contracts and perform other actions supported by a network.',
    check: 'Look at the sending address, receiving address, asset, amount, network, timestamp and transaction status.',
    mistake: 'Treating a transaction screenshot as the final proof without checking the transaction on the blockchain itself.',
    related: ['Transaction Hash', 'Block', 'Confirmation', 'Gas Fee'],
  },
  {
    term: 'Transaction Hash',
    category: 'Transactions',
    definition: 'A transaction hash is a unique-looking identifier generated from the data of a blockchain transaction and commonly used to find that transaction on an explorer.',
    plain: 'Think of it as a reference number for a blockchain transaction. If you have it, you can often use the correct blockchain explorer to inspect what happened.',
    usedFor: 'It helps people locate and reference a specific transaction when checking blockchain records or organising evidence.',
    check: 'Confirm that the hash is being viewed on the correct blockchain network and that the transaction details match what you expect.',
    mistake: 'Searching the same hash on the wrong blockchain or assuming that possession of a hash means the transaction was successful.',
    related: ['Transaction', 'Blockchain', 'Block', 'Network'],
  },
  {
    term: 'Block',
    category: 'Foundations',
    definition: 'A block is a batch of blockchain data that is added to the chain according to the rules of that network.',
    plain: 'Transactions are commonly grouped into blocks. Each new block becomes part of the network history and can be referenced when examining transactions.',
    usedFor: 'Blocks organise blockchain activity and help the network maintain an ordered history of events.',
    check: 'When reviewing a transaction, note the block number or block identifier and its timestamp where the network provides one.',
    mistake: 'Thinking a block is the same thing as a wallet or that every blockchain structures blocks in exactly the same way.',
    related: ['Blockchain', 'Transaction', 'Confirmation'],
  },
  {
    term: 'Network',
    category: 'Foundations',
    definition: 'A blockchain network is the specific blockchain environment on which an asset or transaction exists and is processed.',
    plain: 'Network names matter. An asset can have similar names or representations across different networks, but the network determines where the transaction is recorded.',
    usedFor: 'You need the correct network when sending assets, checking transactions or selecting a blockchain explorer.',
    check: 'Always match the sending network with the receiving wallet or service before confirming a transfer.',
    mistake: 'Choosing a network because its name looks familiar or because its fee appears lower without checking whether the recipient supports it.',
    related: ['Blockchain', 'Wallet Address', 'Transaction', 'BEP-20', 'TRC-20'],
  },
  {
    term: 'Gas Fee',
    category: 'Transactions',
    definition: 'A gas fee is a network fee paid for processing certain blockchain transactions or computations.',
    plain: 'It is the cost of asking the network to process your transaction. The exact fee system differs between blockchains.',
    usedFor: 'Fees help compensate the network participants responsible for processing and validating activity.',
    check: 'Check which asset is required to pay the network fee and whether the fee shown is reasonable before confirming a transaction.',
    mistake: 'Assuming the asset you are sending is always the asset used to pay the network fee.',
    related: ['Transaction', 'Network', 'Confirmation', 'Smart Contract'],
  },
  {
    term: 'Confirmation',
    category: 'Transactions',
    definition: 'A confirmation generally refers to a transaction being included in a block and followed by additional blocks or network acceptance.',
    plain: 'The more confirmation or finality a network provides, the more established the transaction becomes under that network’s rules.',
    usedFor: 'Exchanges and other services may wait for a certain number of confirmations before treating a deposit as available.',
    check: 'Understand what “confirmed” or “final” means on the specific blockchain you are using.',
    mistake: 'Assuming every blockchain uses the same confirmation model or waiting period.',
    related: ['Transaction', 'Block', 'Network'],
  },
  {
    term: 'Coin',
    category: 'Assets',
    definition: 'A coin is a digital asset that operates natively on its own blockchain network.',
    plain: 'The simplest example is an asset that is built into the network itself rather than created as a separate token on another blockchain.',
    usedFor: 'Coins can be used for transfers, network fees, investment, trading and other activities supported by their native network.',
    check: 'Identify the native network of the coin before sending or researching it.',
    mistake: 'Using “coin” and “token” as if they always mean exactly the same thing.',
    related: ['Token', 'Cryptocurrency', 'Network', 'Gas Fee'],
  },
  {
    term: 'Token',
    category: 'Assets',
    definition: 'A token is a digital asset created and issued through a blockchain’s existing infrastructure, often using a token standard or smart contract.',
    plain: 'Instead of having its own independent blockchain, a token can operate on another blockchain and follow that network’s rules.',
    usedFor: 'Tokens can represent digital value, utility, access, governance rights or other assets depending on their design.',
    check: 'Verify the token contract or official asset information and the network on which the token exists.',
    mistake: 'Assuming two tokens with the same or similar name are the same asset.',
    related: ['Coin', 'Smart Contract', 'BEP-20', 'TRC-20'],
  },
  {
    term: 'Stablecoin',
    category: 'Assets',
    definition: 'A stablecoin is a crypto asset designed to maintain a relatively stable value, often by referencing a fiat currency such as the US dollar.',
    plain: 'The goal is usually to reduce the price volatility associated with many other crypto assets, although stability is not guaranteed.',
    usedFor: 'Stablecoins are commonly used for transfers, trading, holding value within crypto markets and moving funds between platforms.',
    check: 'Check which stablecoin you are using, what backs or supports it, and which network it is on.',
    mistake: 'Assuming every stablecoin is risk-free or that similarly named stablecoins are interchangeable.',
    related: ['Token', 'Coin', 'Network', 'Exchange'],
  },
  {
    term: 'Smart Contract',
    category: 'Applications',
    definition: 'A smart contract is code deployed on a blockchain that can execute defined actions when its rules and conditions are met.',
    plain: 'Think of it as a program running according to rules recorded on a blockchain. Interacting with it can create a blockchain transaction.',
    usedFor: 'Smart contracts power many decentralised applications, including token systems, exchanges, lending protocols and other blockchain services.',
    check: 'Understand what the contract is designed to do and what permissions or assets an interaction may involve before approving it.',
    mistake: 'Assuming a smart contract is automatically safe because it is visible on a blockchain.',
    related: ['Transaction', 'Gas Fee', 'Token', 'DEX'],
  },
  {
    term: 'Exchange',
    category: 'Platforms',
    definition: 'A crypto exchange is a platform where users can buy, sell or trade digital assets.',
    plain: 'It is a marketplace for crypto. Some exchanges hold assets for you, while others let you connect your own wallet directly.',
    usedFor: 'Exchanges can provide trading, deposits, withdrawals and conversion between different digital assets and traditional currencies.',
    check: 'Verify the platform, withdrawal address, network and transaction details before moving funds.',
    mistake: 'Assuming an exchange is the same thing as a personal self-custody wallet.',
    related: ['Wallet', 'Transaction', 'Centralized Exchange', 'DEX'],
  },
  {
    term: 'Centralized Exchange',
    category: 'Platforms',
    definition: 'A centralized exchange is a crypto trading platform operated by a company or organisation that typically manages user accounts and custody of assets held on the platform.',
    plain: 'You create an account with a company and the platform manages much of the trading and custody infrastructure for you.',
    usedFor: 'Centralized exchanges are commonly used to buy, sell, trade and withdraw digital assets.',
    check: 'Understand the platform’s deposit and withdrawal process and keep your own transaction records.',
    mistake: 'Assuming funds shown in an exchange account are the same as funds held directly in a self-custody wallet.',
    related: ['Exchange', 'Wallet', 'Transaction', 'DEX'],
  },
  {
    term: 'DEX',
    category: 'Platforms',
    definition: 'A decentralised exchange, or DEX, is a blockchain-based system that allows users to trade assets through smart contracts rather than a traditional central order-matching company.',
    plain: 'You generally connect your own wallet and interact directly with blockchain-based trading infrastructure.',
    usedFor: 'DEXs can allow users to swap tokens and interact with decentralised trading protocols.',
    check: 'Review the network, token contract, transaction details and permissions before interacting with a DEX.',
    mistake: 'Assuming decentralised means risk-free or that a token listed on a DEX has automatically been verified as legitimate.',
    related: ['Smart Contract', 'Exchange', 'Wallet', 'Token'],
  },
  {
    term: 'BEP-20',
    category: 'Networks & Standards',
    definition: 'BEP-20 is a token standard associated with BNB Smart Chain that defines common rules for compatible tokens.',
    plain: 'When you see BEP-20 in a wallet or exchange, it is referring to a token format and network context associated with BNB Smart Chain.',
    usedFor: 'It allows compatible tokens to work with wallets, applications and smart contracts that support the standard.',
    check: 'Confirm that the receiving service supports the BEP-20 network before sending an asset using it.',
    mistake: 'Choosing BEP-20 simply because the fee looks cheaper without confirming the destination supports it.',
    related: ['Token', 'Network', 'Smart Contract', 'Transaction'],
  },
  {
    term: 'TRC-20',
    category: 'Networks & Standards',
    definition: 'TRC-20 is a token standard used on the TRON blockchain for compatible tokens.',
    plain: 'It tells you the token follows a particular standard within the TRON ecosystem. The network matters when moving the asset.',
    usedFor: 'TRC-20 tokens can be transferred between compatible wallets and services that support the TRON network and token standard.',
    check: 'Confirm the destination supports TRC-20 and verify the address and network before sending.',
    mistake: 'Treating TRC-20 and other token standards as interchangeable because the asset name appears the same.',
    related: ['Token', 'Network', 'Wallet Address', 'Transaction'],
  },
];

const categories = ['All', ...Array.from(new Set(terms.map((term) => term.category)))];

export default function Dictionary() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedTerm, setSelectedTerm] = useState('Wallet Address');

  const filteredTerms = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return terms.filter((term) => {
      const matchesCategory = category === 'All' || term.category === category;
      const searchable = [term.term, term.category, term.definition, term.plain, ...term.related].join(' ').toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, query]);

  const activeTerm = terms.find((term) => term.term === selectedTerm) ?? filteredTerms[0] ?? terms[0];

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
            A growing knowledge resource for the words, concepts and standards you will encounter in cryptocurrency and blockchain.
            Search a term, browse a category or open an explanation when you need it.
          </p>
        </section>

        <section className="dictionary-browser" aria-label="Dictionary browser">
          <div className="dictionary-search-row">
            <label className="dictionary-search">
              <span>Search the Dictionary</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try: wallet, transaction, gas..."
                aria-label="Search the WalletTrail Dictionary"
              />
            </label>
            <div className="dictionary-count" aria-live="polite">
              {filteredTerms.length} {filteredTerms.length === 1 ? 'term' : 'terms'}
            </div>
          </div>

          <div className="dictionary-categories" aria-label="Dictionary categories">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? 'category-button active' : 'category-button'}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="dictionary-layout">
            <aside className="dictionary-list" aria-label="Dictionary terms">
              <p className="list-label">Browse terms</p>
              {filteredTerms.length > 0 ? (
                filteredTerms.map((term) => (
                  <button
                    type="button"
                    key={term.term}
                    className={activeTerm.term === term.term ? 'term-button active' : 'term-button'}
                    onClick={() => setSelectedTerm(term.term)}
                  >
                    <span>{term.term}</span>
                    <small>{term.category}</small>
                  </button>
                ))
              ) : (
                <div className="no-results">
                  <strong>No matching terms yet.</strong>
                  <p>Try another word or browse all categories.</p>
                </div>
              )}
            </aside>

            <article className="dictionary-entry" aria-live="polite">
              <div className="dictionary-entry-heading">
                <p className="card-eyebrow">{activeTerm.category}</p>
                <h2>{activeTerm.term}</h2>
                <p className="dictionary-definition">{activeTerm.definition}</p>
              </div>

              <div className="dictionary-sections">
                <article>
                  <h3>In plain English</h3>
                  <p>{activeTerm.plain}</p>
                </article>
                <article>
                  <h3>What is it used for?</h3>
                  <p>{activeTerm.usedFor}</p>
                </article>
                <article>
                  <h3>What should you check?</h3>
                  <p>{activeTerm.check}</p>
                </article>
                <article className="dictionary-warning">
                  <h3>Common mistake</h3>
                  <p>{activeTerm.mistake}</p>
                </article>
              </div>

              <div className="related-terms">
                <span>Related terms</span>
                <div>
                  {activeTerm.related.map((related) => (
                    <button
                      type="button"
                      key={related}
                      onClick={() => {
                        setQuery('');
                        setCategory('All');
                        setSelectedTerm(related);
                      }}
                    >
                      {related}
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="dictionary-next">
          <p className="eyebrow">Keep building your understanding</p>
          <h2>Start with the fundamentals, then go deeper.</h2>
          <p>
            The Dictionary is designed to grow with WalletTrail. Use it alongside WalletTrail 101 when you meet a term you do not understand, then return when you want to explore a concept in more depth.
          </p>
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
