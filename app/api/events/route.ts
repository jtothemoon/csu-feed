import { NextResponse } from "next/server";
import { getEvents } from "@/lib/api/events";

/**
 * GET /api/events
 * 이벤트 목록 조회
 */
export async function GET() {
  try {
    const events = await getEvents();

    if (!events) {
      return NextResponse.json(
        { error: "Failed to fetch events" },
        { status: 500 }
      );
    }

    return NextResponse.json(events);
  } catch (error) {
    console.error("Error in GET /api/events:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
