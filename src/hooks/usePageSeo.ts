import { useEffect } from 'react';

interface PageSeoProps {
  title: string;
  description?: string;
  canonicalPath?: string;
}

export const usePageSeo = ({ title, description, canonicalPath }: PageSeoProps) => {
  useEffect(() => {
    if (title) {
      document.title = title;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', title);
    }

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', description);
    }

    if (canonicalPath) {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', `https://www.ramservices.in${canonicalPath === '/' ? '/' : canonicalPath}`);
      }
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', `https://www.ramservices.in${canonicalPath === '/' ? '/' : canonicalPath}`);
      }
      const twUrl = document.querySelector('meta[name="twitter:url"]');
      if (twUrl) {
        twUrl.setAttribute('content', `https://www.ramservices.in${canonicalPath === '/' ? '/' : canonicalPath}`);
      }
    }
  }, [title, description, canonicalPath]);
};

export default usePageSeo;
