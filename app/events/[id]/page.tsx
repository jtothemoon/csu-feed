import { DetailHeader } from "@/components/detail-header";
import { Comment } from "@/components/ui/comment";
import { FeedbackFABWrapper } from "@/components/feedback-fab-wrapper";
import { formatEventDate } from "@/lib/utils/date";
import { notFound } from "next/navigation";
import type { Event, Feedback } from "@/lib/types";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // 이벤트 및 피드백 데이터 가져오기
  const [eventRes, feedbacksRes] = await Promise.all([
    fetch(`${baseUrl}/api/events/${id}`, { cache: "no-store" }),
    fetch(`${baseUrl}/api/events/${id}/feedbacks`, { cache: "no-store" }),
  ]);

  // 이벤트가 없으면 404 페이지 표시
  if (!eventRes.ok) {
    notFound();
  }

  const event: Event = await eventRes.json();
  const feedbacks: Feedback[] = feedbacksRes.ok ? await feedbacksRes.json() : [];

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <DetailHeader />

      <div className="flex flex-col">
        {/* 이벤트 정보 */}
        <div className="px-6 pt-6 pb-4 flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-tinted-black">
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
    </div>
  );
}
