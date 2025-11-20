"use client";

import { useState } from "react";
import { Drawer } from "vaul";
import { Star } from "./ui/star";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { DepartmentIcon } from "./ui/department-icon";
import { createFeedback } from "@/lib/actions/feedback";

interface FeedbackFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eventId: string;
}

export function FeedbackForm({ open, onOpenChange, eventId }: FeedbackFormProps) {
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (rating === 0) {
      setError("평점을 선택해주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await createFeedback({
        eventId,
        content: comment,
        rating,
        department: department || undefined,
      });

      if (result.error) {
        throw new Error(result.error);
      }

      // Success - close drawer and reset form
      onOpenChange(false);
      setDepartment("");
      setRating(0);
      setComment("");

      // Reload to show new feedback
      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "피드백 제출 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} modal={true}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" onClick={() => onOpenChange(false)} />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[12px] h-[565px] mt-24 fixed bottom-0 left-0 right-0 max-w-[375px] mx-auto z-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          {/* Drag Handle */}
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-pale-gray mt-4" />

          {/* Accessibility: Hidden title and description */}
          <Drawer.Title className="sr-only">피드백 작성</Drawer.Title>
          <Drawer.Description className="sr-only">
            이벤트에 대한 피드백을 작성해주세요.
          </Drawer.Description>

          <div className="p-[30px_25px] flex flex-col gap-[60px] overflow-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[30px]">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-medium text-red-600">{error}</p>
                </div>
              )}

              {/* Input Section */}
              <div className="flex flex-col gap-5">
                {/* Department Input */}
                <div className="flex flex-col gap-[5px]">
                  <label className="font-bold text-xs text-black">
                    학과
                  </label>
                  <Input
                    type="text"
                    placeholder="학과를 입력하세요"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    icon={<DepartmentIcon />}
                    iconActive={<DepartmentIcon active />}
                  />
                </div>
              </div>

              {/* Rating Section */}
              <div className="flex flex-col gap-[5px]">
                <label className="font-bold text-xs text-black">
                  평점을 남겨주세요
                </label>
                <div className="flex flex-row items-start gap-2.5 py-2.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setRating(index + 1)}
                    >
                      <Star filled={index < rating} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div className="flex flex-col gap-2.5">
                <div className="relative w-full h-[120px]">
                  <textarea
                    className="w-full h-full bg-white border border-shaded-white shadow-[0px_2px_2px_rgba(0,0,0,0.18)] rounded-[9px] p-[10px] text-xs font-medium text-tinted-black placeholder:text-pale-gray resize-none focus:outline-none focus:border-light-blue"
                    placeholder="코멘트를 추가하세요"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                  {/* Resize indicator */}
                  <div className="absolute bottom-[5px] right-[5px] w-4 h-4 pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="6.86401" y1="13.7323" x2="13.6569" y2="6.93936" stroke="#777777" strokeLinecap="round"/>
                      <line x1="11.4568" y1="14.0824" x2="14.4997" y2="11.0395" stroke="#777777" strokeLinecap="round"/>
                      <line x1="0.5" y1="14.7929" x2="14.7929" y2="0.5" stroke="#777777" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-row items-center gap-[30px] justify-end">
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  disabled={isSubmitting}
                  className="px-2.5 py-2.5 font-bold text-xs text-[#0096FF] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  취소
                </button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-[150px] h-[45px] bg-[#0096FF] active:bg-primary shadow-[1px_2px_2px_rgba(0,0,0,0.4)] rounded-[8px] font-bold text-sm text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "제출 중..." : "제출"}
                </Button>
              </div>
            </form>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
