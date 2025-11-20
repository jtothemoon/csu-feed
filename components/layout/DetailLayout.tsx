import { ReactNode } from "react";

interface DetailLayoutProps {
  children: ReactNode;
}

export function DetailLayout({ children }: DetailLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full max-w-[375px] mx-auto relative min-h-screen">
        {children}
      </div>
    </main>
  );
}
