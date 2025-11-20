"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

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

export async function createFeedback(formData: {
  eventId: string;
  content: string;
  rating: number;
  department?: string;
}) {
  try {
    const supabase = await createClient();

    // 세션에서 이메일 가져오기
    const { data: { user } } = await supabase.auth.getUser();

    if (!user || !user.email) {
      return { error: "로그인이 필요합니다." };
    }

    const { eventId, content, rating, department } = formData;

    // Validation
    if (!eventId || !content || !rating) {
      return { error: "필수 항목을 입력해주세요." };
    }

    if (rating < 1 || rating > 5) {
      return { error: "평점은 1에서 5 사이여야 합니다." };
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
        return { error: "이미 이 이벤트에 피드백을 작성하셨습니다." };
      }
      console.error("Error creating feedback:", error);
      return { error: "피드백 제출 중 오류가 발생했습니다." };
    }

    // 이벤트 상세 페이지 재검증
    revalidatePath(`/events/${eventId}`);

    return { success: true, data };
  } catch (error) {
    console.error("Error in createFeedback:", error);
    return { error: "서버 오류가 발생했습니다." };
  }
}
