import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

type Params = {
  params: Promise<{ id: string }>;
};

/**
 * @swagger
 * /api/events/{id}/feedbacks:
 *   get:
 *     summary: 피드백 목록 조회
 *     description: 특정 이벤트의 모든 피드백을 최신순으로 반환합니다
 *     tags:
 *       - Feedbacks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: 이벤트 ID
 *     responses:
 *       200:
 *         description: 성공
 *       500:
 *         description: 서버 오류
 */
export async function GET(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("feedbacks")
      .select("*")
      .eq("event_id", id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching feedbacks:", error);
      return NextResponse.json(
        { error: "Failed to fetch feedbacks" },
        { status: 500 }
      );
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error("Error in GET /api/events/[id]/feedbacks:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
