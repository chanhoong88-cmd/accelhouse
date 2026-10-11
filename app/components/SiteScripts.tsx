'use client';

import { useEffect } from 'react';

// Scroll behaviour for every page: blocks rise and settle in as they are reached,
// photographs ease into place, and a gold line under the menu tracks progress.
export default function SiteScripts() {
  useEffect(() => {
    const d = document.documentElement;
    const bar = document.getElementById('progress');
    function prog() {
      const max = d.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ')';
    }
    window.addEventListener('scroll', prog, { passive: true });
    prog();

    let io: IntersectionObserver | null = null;
    if (d.classList.contains('js')) {
      const heroDelay = d.classList.contains('seen') ? 0.15 : 2.1;
      const skip =
        '.trio, .ledger, .calendar, .directory, .tiers, .steps, .privs, .props, form, .stack, .invite, .mosaic, .panel, .reserve';
      const groups = document.querySelectorAll(
        'main .split-words, main .inner, main .trio, main .ledger, main .calendar, main .directory, main .tiers, main .steps, main .privs, main .props, main form, main .stack'
      );
      const items: Element[] = [];
      groups.forEach((g) => {
        const hero = !!g.closest('.hero');
        Array.prototype.forEach.call(g.children, (el: HTMLElement, i: number) => {
          if (el.classList.contains('rv') || el.matches(skip)) return;
          el.classList.add('rv');
          el.style.transitionDelay = (hero ? heroDelay : 0) + Math.min(i, 7) * 0.09 + 's';
          items.push(el);
        });
      });
      document.querySelectorAll('.split-photo').forEach((p) => items.push(p));
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io?.unobserve(e.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
      );
      items.forEach((el) => io!.observe(el));
      requestAnimationFrame(() => d.classList.remove('pre'));
    }

    return () => {
      window.removeEventListener('scroll', prog);
      io?.disconnect();
    };
  }, []);

  return null;
}
