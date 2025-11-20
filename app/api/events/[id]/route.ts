import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

type Params = {
  params: Promise<{ id: string }>;
};

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     summary: 이벤트 상세 조회
 *     description: 특정 이벤트의 상세 정보를 반환합니다
 *     tags:
 *       - Events
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
 *       404:
 *         description: 이벤트를 찾을 수 없음
 */
export async function GET(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in GET /api/events/[id]:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
