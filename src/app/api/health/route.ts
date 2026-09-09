import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Keep-alive database ping to prevent Supabase from pausing after 7 days
    const orderCount = await prisma.order.count();
    return NextResponse.json({
      status: 'healthy',
      database: 'connected',
      activeOrders: orderCount,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return NextResponse.json(
      { status: 'degraded', error: error.message },
      { status: 500 }
    );
  }
}
