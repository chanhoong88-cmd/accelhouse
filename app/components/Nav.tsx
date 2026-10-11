'use client';

import { useEffect, useRef, useState } from 'react';
import { MEMBER_LOGIN_URL } from '@/lib/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const more = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (more.current && !more.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        btn.current?.focus();
      }
    }
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header className="nav">
      <div className="nav-row">
        <a className="nav-brand" href="/">
          <img src="/img/logo.png" alt="Accel Elite" />
          <span>Accel House</span>
        </a>
        <ul className="nav-links">
          <li><a href="/#house">The House</a></li>
          <li><a href="/#business">Business</a></li>
          <li><a href="/#social">Social</a></li>
          <li><a href="/#recovery">Recovery</a></li>
          <li><a href="/#privileges">Privileges</a></li>
          <li><a href="/#membership">Membership</a></li>
        </ul>
        <div className="nav-end">
          <a className="signin" href={MEMBER_LOGIN_URL}>Member sign in</a>
          <a className="btn" href="/#invitation">Request an invitation</a>
          <div className={open ? 'more open' : 'more'} ref={more}>
            <button
              className="dots"
              ref={btn}
              type="button"
              aria-label="More links"
              aria-haspopup="true"
              aria-expanded={open}
              aria-controls="more-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <i /><i /><i />
            </button>
            <div className="more-menu" id="more-menu">
              <a href="/collection">Accel Collection</a>
              <a href="/faq">FAQ</a>
              <a href="/contact">Contact us</a>
            </div>
          </div>
        </div>
      </div>
      <div className="progress" id="progress" />
    </header>
  );
}
