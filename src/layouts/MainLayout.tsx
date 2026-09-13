import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Preloader from '../components/ui/Preloader';
import RouteProgressBar from '../components/ui/RouteProgressBar';
import PageTransition from '../components/ui/PageTransition';

const MainLayout = () => {
  const { pathname, hash } = useLocation();

  // Handle scroll position on route and hash changes.
  // If a hash anchor is present (e.g. #water-treatment), scroll to the element.
  // Otherwise, scroll to top of page.
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      let attempts = 0;
      const maxAttempts = 12;

      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(scrollToElement, 60);
        }
      };

      const timer = setTimeout(scrollToElement, 80);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return (
    <div className="flex flex-col min-h-screen">
      <Preloader />
      <RouteProgressBar />
      <Header />
      <main className="flex-grow">
        {/* The route-progress bar above already signals loading, so no
            visible fallback is needed here — just don't unmount the shell. */}
        <Suspense fallback={null}>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
