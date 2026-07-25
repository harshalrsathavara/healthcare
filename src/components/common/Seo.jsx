import { useEffect } from 'react';
import { siteName } from '../../data/siteContent';

function setMeta(name, content, attr = 'name') {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export default function Seo({ title, description, image }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${siteName}` : siteName;
    document.title = fullTitle;
    setMeta('description', description || 'Compassionate, modern healthcare you can trust.');
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description || 'Compassionate, modern healthcare you can trust.', 'property');
    if (image) setMeta('og:image', image, 'property');
  }, [title, description, image]);

  return null;
}
