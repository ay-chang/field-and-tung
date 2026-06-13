import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import { isMaintenanceOn } from '@/lib/maintenance';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Field & Tung Structural Engineers',
  description: 'A consulting structural engineering firm based in Washington, DC — serving the DMV region and projects nationwide since 2016.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (isMaintenanceOn()) {
    return (
      <html lang="en">
        <body>
          <div style={{ background: 'white', width: '100vw', height: '100vh' }} />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
