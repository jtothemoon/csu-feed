import { NextResponse } from "next/server";
import { submitFeedback } from "@/lib/api/feedbacks";

/**
 * POST /api/feedbacks
 * 피드백 생성 (TODO: 인증 필요)
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventId, email, content, rating, department } = body;

    // Validation
    if (!eventId || !email || !content || !rating) {
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

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // TODO: Get email from authenticated session instead of request body
    const feedback = await submitFeedback({
      eventId,
      email,
      content,
      rating,
      department,
    });

    return NextResponse.json(feedback, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/feedbacks:", error);

    if (error instanceof Error) {
      // 중복 제출 에러
      if (error.message.includes("이미")) {
        return NextResponse.json(
          { error: error.message },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
