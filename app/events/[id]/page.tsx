import { DetailLayout } from "@/components/layout/DetailLayout";
import { DetailHeader } from "@/components/detail-header";
import { Comment } from "@/components/ui/comment";
import { FeedbackFABWrapper } from "@/components/feedback-fab-wrapper";
import { formatEventDate } from "@/lib/utils/date";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Event, Feedback } from "@/lib/types";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();

  // 이벤트 및 피드백 데이터 가져오기
  const [eventResult, feedbacksResult] = await Promise.all([
    supabase.from("events").select("*").eq("id", id).single(),
    supabase.from("feedbacks").select("*").eq("event_id", id).order("created_at", { ascending: false }),
  ]);

  // 이벤트가 없으면 404 페이지 표시
  if (eventResult.error || !eventResult.data) {
    notFound();
  }

  const event: Event = eventResult.data;
  const feedbacks: Feedback[] = feedbacksResult.data || [];

  return (
    <DetailLayout>
      {/* 헤더 */}
      <DetailHeader />

      <div className="flex flex-col">
        {/* 이벤트 정보 */}
        <div className="px-6 pt-6 pb-4 flex flex-col gap-2">
          <h1 className="text-xl font-bold text-tinted-black truncate">
            {event.title}
          </h1>
          <div className="flex flex-col gap-1 text-sm text-medium-gray">
            <p>{formatEventDate(event.start_date, event.end_date)}</p>
            {event.type && <p className="text-light-blue">{event.type}</p>}
          </div>
        </div>

        {/* 피드백 섹션 */}
        <section className="px-6 pb-10 flex flex-col gap-6">
          <h2 className="text-xl font-bold text-tinted-black">
            피드백 ({feedbacks?.length || 0})
          </h2>

          {feedbacks && feedbacks.length > 0 ? (
            <div className="flex flex-col gap-8">
              {feedbacks.map((feedback) => (
                <Comment
                  key={feedback.id}
                  content={feedback.content}
                  rating={feedback.rating}
                  department={feedback.department}
                  createdAt={feedback.created_at}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-pale-gray py-8">
              아직 피드백이 없습니다.
            </p>
          )}
        </section>
      </div>

      {/* FAB - 피드백 작성 버튼 */}
      <FeedbackFABWrapper eventId={id} />
    </DetailLayout>
  );
}
