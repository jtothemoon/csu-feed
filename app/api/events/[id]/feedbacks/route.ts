import { NextResponse } from "next/server";
import { getFeedbacksByEventId } from "@/lib/api/events";

type Params = {
  params: Promise<{ id: string }>;
};

/**
 * GET /api/events/[id]/feedbacks
 * 특정 이벤트의 피드백 목록 조회
 */
export async function GET(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const feedbacks = await getFeedbacksByEventId(id);

    if (!feedbacks) {
      return NextResponse.json(
        { error: "Failed to fetch feedbacks" },
        { status: 500 }
      );
    }

    return NextResponse.json(feedbacks);
  } catch (error) {
    console.error("Error in GET /api/events/[id]/feedbacks:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
