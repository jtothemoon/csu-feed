import { supabase } from "../supabase/client";
import type { Feedback } from "../types/feedback";

/**
 * 이메일을 SHA-256 해시로 변환 (Web Crypto API 사용)
 */
export async function hashEmail(email: string): Promise<string> {
  const normalized = email.toLowerCase().trim();
  const msgBuffer = new TextEncoder().encode(normalized);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

/**
 * 피드백 제출
 */
export async function submitFeedback({
  eventId,
  email,
  content,
  rating,
  department,
}: {
  eventId: string;
  email: string;
  content: string;
  rating: number;
  department?: string;
}) {
  const emailHash = await hashEmail(email);

  const { data, error } = await supabase
    .from("feedbacks")
    .insert({
      event_id: eventId,
      email_hash: emailHash,
      content,
      rating,
    })
    .select()
    .single();

  if (error) {
    // 중복 제출 에러 체크
    if (error.code === "23505") {
      throw new Error("이미 이 이벤트에 피드백을 작성하셨습니다.");
    }
    throw new Error("피드백 제출 중 오류가 발생했습니다.");
  }

  return data as Feedback;
}
