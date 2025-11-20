import { NextResponse } from "next/server";
import { getEventById } from "@/lib/api/events";

type Params = {
  params: Promise<{ id: string }>;
};

/**
 * GET /api/events/[id]
 * 특정 이벤트 조회
 */
export async function GET(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const event = await getEventById(id);

    if (!event) {
      return NextResponse.json(
        { error: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error("Error in GET /api/events/[id]:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
