import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * 이메일을 SHA-256 해시로 변환
 */
async function hashEmail(email: string): Promise<string> {
  const normalized = email.toLowerCase().trim();
  const msgBuffer = new TextEncoder().encode(normalized);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

/**
 * POST /api/feedbacks
 * 피드백 생성 (TODO: 인증 필요)
 */
export async function POST(request: Request) {
  try {
    const supabase = await createClient();

    // TODO: 세션에서 이메일 가져오기
    const { data: { user } } = await supabase.auth.getUser();

    if (!user || !user.email) {
      return NextResponse.json(
        { error: "로그인이 필요합니다." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { eventId, content, rating, department } = body;

    // Validation
    if (!eventId || !content || !rating) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    const emailHash = await hashEmail(user.email);

    const { data, error } = await supabase
      .from("feedbacks")
      .insert({
        event_id: eventId,
        email_hash: emailHash,
        content,
        rating,
        department: department || null,
      })
      .select()
      .single();

    if (error) {
      // 중복 제출 에러
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "이미 이 이벤트에 피드백을 작성하셨습니다." },
          { status: 409 }
        );
      }
      console.error("Error creating feedback:", error);
      return NextResponse.json(
        { error: "Failed to create feedback" },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/feedbacks:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
