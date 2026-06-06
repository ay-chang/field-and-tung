import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">© 2025 Field &amp; Tung Structural Engineers · Washington, DC</div>
      <div className="footer-links">
        {[
          ['/projects', 'Projects'],
          ['/people', 'People'],
          ['/about', 'About'],
          ['/contact', 'Contact'],
        ].map(([href, label]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
      </div>
    </footer>
  );
}
