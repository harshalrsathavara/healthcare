import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" />
      <section className="section-py text-center" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">404</span>
          <h1 className="section-title">Page Not Found</h1>
          <p className="mb-6" style={{ color: 'var(--ph-muted)' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn btn-ph-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
