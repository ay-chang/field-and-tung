'use client';

import { useState } from 'react';

export default function Toggle() {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<null | boolean>(null);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    const res = await fetch('/api/maintenance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      const data = await res.json();
      setStatus(data.maintenance);
      setPassword('');
    } else {
      setError(true);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'monospace', gap: 16 }}>
      {status !== null && (
        <p style={{ fontSize: 14, color: status ? 'green' : 'red' }}>
          {status ? '🟢 Maintenance ON — site is blank' : '🔴 Maintenance OFF — site is live'}
        </p>
      )}
      {error && <p style={{ fontSize: 13, color: 'red' }}>Wrong password</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          autoFocus
          style={{ padding: '8px 12px', fontSize: 14, border: '1px solid #ccc', outline: 'none' }}
        />
        <button type="submit" style={{ padding: '8px 16px', fontSize: 14, cursor: 'pointer' }}>
          Toggle
        </button>
      </form>
    </div>
  );
}
