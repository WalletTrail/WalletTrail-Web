import Home from './pages/Home/Home';
import WalletTrail101 from './pages/WalletTrail101/WalletTrail101';
import Dictionary from './pages/Dictionary/Dictionary';

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/wallettrail-101') {
    return <WalletTrail101 />;
  }

  if (path === '/dictionary') {
    return <Dictionary />;
  }

  return <Home />;
}
