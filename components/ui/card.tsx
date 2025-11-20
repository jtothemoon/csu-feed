import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  className?: string;
  priority?: boolean;
}

export function Card({ image, title, subtitle, className, priority = false }: CardProps) {
  return (
    <div className={cn("flex flex-col w-full", className)}>
      {/* Image - 비율 유지 (90/163 ≈ 55%) */}
      <div className="relative w-full aspect-[163/90] rounded-t-[10px] overflow-hidden bg-primary">
        <Image
          src={image}
          alt={title}
          fill
          sizes="327px"
          priority={priority}
          className="object-cover"
        />
      </div>

      {/* Content - 비율 유지 (37/163 ≈ 23%) */}
      <div className="relative w-full aspect-[163/37]">
        <div className="absolute inset-0 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-b-[10px] flex flex-col items-start justify-center gap-1 px-4">
          {/* Title */}
          <div className="font-bold text-sm leading-tight text-black">
            {title}
          </div>

          {/* Subtitle */}
          <div className="font-bold text-base leading-tight text-tinted-gray">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
