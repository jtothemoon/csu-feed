import { cn } from "@/lib/utils";
import { Star } from "./star";

interface CommentProps {
  content: string;
  rating?: number; // 1-5
  createdAt?: string;
  className?: string;
}

export function Comment({ content, rating, createdAt, className }: CommentProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-3 p-0 w-full",
        className
      )}
    >
      {/* 코멘트 텍스트 */}
      <p className="w-full font-medium text-lg leading-[190%] text-center text-tinted-black">
        {content}
      </p>

      {/* 별점 (옵션) */}
      {rating && (
        <div className="flex flex-row items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} filled={index < rating} />
          ))}
        </div>
      )}

      {/* 날짜 (옵션) */}
      {createdAt && (
        <p className="text-xs text-pale-gray">
          {new Date(createdAt).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      )}
    </div>
  );
}
