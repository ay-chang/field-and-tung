import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

const FILE = join('/tmp', 'ft-maintenance.json');

export function isMaintenanceOn(): boolean {
  try {
    if (!existsSync(FILE)) return false;
    return JSON.parse(readFileSync(FILE, 'utf8')).on === true;
  } catch {
    return false;
  }
}

export function toggleMaintenance(): boolean {
  const next = !isMaintenanceOn();
  writeFileSync(FILE, JSON.stringify({ on: next }));
  return next;
}
