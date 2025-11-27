import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (for demo purposes)
// In production, you'd want to use a database or Redis
const clickCounts: Record<string, number> = {};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { linkId } = body;

    if (!linkId) {
      return NextResponse.json(
        { error: 'linkId is required' },
        { status: 400 }
      );
    }

    // Increment click count
    clickCounts[linkId] = (clickCounts[linkId] || 0) + 1;

    // Log the click (you can replace this with database storage)
    console.log(`Click tracked for ${linkId}: ${clickCounts[linkId]}`);

    return NextResponse.json({
      success: true,
      count: clickCounts[linkId],
    });
  } catch (error) {
    console.error('Error tracking click:', error);
    return NextResponse.json(
      { error: 'Failed to track click' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve counts (for admin purposes)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const linkId = searchParams.get('linkId');

  if (linkId) {
    return NextResponse.json({
      linkId,
      count: clickCounts[linkId] || 0,
    });
  }

  return NextResponse.json({
    counts: clickCounts,
  });
}

