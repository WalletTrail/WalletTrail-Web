import Home from './pages/Home/Home';
import WalletTrail101 from './pages/WalletTrail101/WalletTrail101';
import Dictionary from './pages/Dictionary/Dictionary';
import Security from './pages/Security/Security';
import Knowledge from './pages/Knowledge/Knowledge';
import KnowledgeTopic from './pages/Knowledge/KnowledgeTopic';
import Evidence from './pages/Evidence/Evidence';
import OrganiseInformation from './pages/OrganiseInformation/OrganiseInformation';
import Privacy from './pages/Legal/Privacy';
import Terms from './pages/Legal/Terms';
import Notice from './pages/Legal/Notice';

const routes = {
  '/wallettrail-101': WalletTrail101,
  '/dictionary': Dictionary,
  '/security': Security,
  '/knowledge': Knowledge,
  '/knowledge/blockchain': () => <KnowledgeTopic slug="blockchain" />,
  '/knowledge/cryptocurrency-digital-assets': () => <KnowledgeTopic slug="cryptocurrency-digital-assets" />,
  '/knowledge/wallets-transactions': () => <KnowledgeTopic slug="wallets-transactions" />,
  '/knowledge/security': () => <KnowledgeTopic slug="security" />,
  '/knowledge/defi': () => <KnowledgeTopic slug="defi" />,
  '/knowledge/trading-markets': () => <KnowledgeTopic slug="trading-markets" />,
  '/knowledge/regulation-compliance': () => <KnowledgeTopic slug="regulation-compliance" />,
  '/knowledge/blockchain-evidence': () => <KnowledgeTopic slug="blockchain-evidence" />,
  '/evidence': Evidence,
  '/organise-information': OrganiseInformation,
  '/privacy': Privacy,
  '/terms': Terms,
  '/disclaimer': Notice,
} as const;

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const Page = routes[path as keyof typeof routes] ?? Home;
  return <Page />;
}
