export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand" href="/" aria-label="WalletTrail home">
            <span className="brand-mark" aria-hidden="true">WT</span>
            <span>WalletTrail</span>
          </a>
          <p>Helping people understand blockchain through practical education, clear guidance and thoughtfully designed resources.</p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <a href="/">Home</a>
          <a href="/wallettrail-101">Start Here</a>
          <a href="/knowledge">Knowledge</a>
          <a href="/dictionary">Dictionary</a>
          <a href="/security">Security</a>
          <a href="/evidence">Evidence</a>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/disclaimer">Disclaimer</a>
        </div>

        <div className="footer-column">
          <h3>Connect</h3>
          <a href="mailto:wallettrail@wallettrailhq.com">Email us</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Keep learning. Keep asking questions. Keep building confidence.</p>
        <p>© 2026 WalletTrail. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
