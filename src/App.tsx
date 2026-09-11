import Home from './pages/Home/Home';
import WalletTrail101 from './pages/WalletTrail101/WalletTrail101';
import Dictionary from './pages/Dictionary/Dictionary';
import Security from './pages/Security/Security';

const routes = {
  '/wallettrail-101': WalletTrail101,
  '/dictionary': Dictionary,
  '/security': Security,
} as const;

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const Page = routes[path as keyof typeof routes] ?? Home;

  return <Page />;
}
