"use client";

import { useRouter } from "next/navigation";

export function DetailHeader() {
  const router = useRouter();

  return (
    <header className="flex items-center gap-4 px-6 py-4">
      <button
        onClick={() => router.back()}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-shaded-white transition-colors"
        aria-label="뒤로가기"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-tinted-black"
          />
        </svg>
      </button>
      <h1 className="text-lg font-semibold text-tinted-black">이벤트 상세</h1>
    </header>
  );
}
