import Home from './pages/Home/Home';
import WalletTrail101 from './pages/WalletTrail101/WalletTrail101';

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/wallettrail-101') {
    return <WalletTrail101 />;
  }

  return <Home />;
}
