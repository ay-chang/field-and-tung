'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LogoMark from './LogoMark';

const PAGE_LABELS: Record<string, string> = {
  '/': 'Structural Engineers',
  '/projects': 'Projects',
  '/people': 'People',
  '/about': 'About',
  '/contact': 'Contact',
};

const NAV_LINKS = [
  { href: '/projects', label: 'Projects' },
  { href: '/people', label: 'People' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const centerLabel = PAGE_LABELS[pathname] ?? 'Structural Engineers';
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
          <LogoMark size={22} />
          Field &amp; Tung
        </Link>
        <div className="nav-center">{centerLabel}</div>
        <div className="nav-links">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'active' : ''}
            >
              {label}
            </Link>
          ))}
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className="ham-bar" style={{ transform: open ? 'translateY(6px) rotate(45deg)' : undefined }} />
          <span className="ham-bar" style={{ opacity: open ? 0 : 1 }} />
          <span className="ham-bar" style={{ transform: open ? 'translateY(-6px) rotate(-45deg)' : undefined }} />
        </button>
      </nav>
      {open && (
        <div className="nav-mobile-menu">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
