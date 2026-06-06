'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

  return (
    <nav>
      <Link href="/" className="nav-logo">
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
    </nav>
  );
}
