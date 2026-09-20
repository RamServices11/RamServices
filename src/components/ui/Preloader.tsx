import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SESSION_KEY = 'ram-intro-shown';
const DURATION_MS = 750;

/**
 * Plays once per browser session (sessionStorage-gated) before the site is
 * revealed. Locks scroll while active, then wipes away with a clip-path
 * reveal so the page underneath is already fully painted when it appears.
 */
const Preloader = () => {
  const [show, setShow] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(SESSION_KEY) !== 'true';
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!show) return;

    document.body.style.overflow = 'hidden';
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / DURATION_MS) * 100);
      setProgress(pct);

      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => {
          sessionStorage.setItem(SESSION_KEY, 'true');
          setShow(false);
        }, 100);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = '';
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B192C]"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          style={{ clipPath: 'inset(0 0 0% 0)' }}
        >
          {/* Ambient ripple behind the mark */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="h-64 w-64 rounded-full border border-[#00B4D8]/20 animate-[ripple_2.8s_ease-out_infinite]" />
            <span className="absolute h-64 w-64 rounded-full border border-[#00B4D8]/20 animate-[ripple_2.8s_ease-out_infinite] [animation-delay:0.9s]" />
          </div>

          <motion.div
            className="relative flex flex-col items-center gap-7 px-6"
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeIn' }}
          >
            <motion.img
              src="/assets/brand/ram-logo.jpeg"
              alt="RAM Services Enterprises"
              className="h-16 w-16 rounded-sm object-contain"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-lg font-bold tracking-tight text-white">RAM SERVICES</span>
              <span className="text-xs tracking-[0.3em] font-medium text-[#00B4D8]">
                ENTERPRISES
              </span>
            </motion.div>

            <div className="flex flex-col items-center gap-2">
              <div className="h-[2px] w-52 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00B4D8] to-[#48CAE4]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
              <span className="text-[11px] tabular-nums tracking-widest text-gray-500">
                {Math.round(progress)}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
