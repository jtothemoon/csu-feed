import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  className?: string;
}

export function Card({ image, title, subtitle, className }: CardProps) {
  return (
    <div className={cn("flex flex-col w-[163px] h-[127px]", className)}>
      {/* Image */}
      <div className="relative w-full h-[90px] rounded-t-[10px] overflow-hidden bg-primary">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative w-full h-[37px]">
        <div className="absolute inset-0 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-b-[10px]">
          {/* Title */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 font-bold text-[10px] leading-3 text-black">
            {title}
          </div>

          {/* Subtitle */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[18px] font-bold text-xs leading-[15px] text-tinted-gray">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
