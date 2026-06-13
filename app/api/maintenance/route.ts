import { toggleMaintenance, isMaintenanceOn } from '@/lib/maintenance';

export async function POST(req: Request) {
  const { password } = await req.json();
  if (password !== process.env.MAINTENANCE_PASSWORD) {
    return Response.json({ error: 'Wrong password' }, { status: 401 });
  }
  const state = toggleMaintenance();
  return Response.json({ maintenance: state });
}

export async function GET() {
  return Response.json({ maintenance: isMaintenanceOn() });
}
