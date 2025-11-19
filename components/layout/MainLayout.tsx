import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full max-w-[375px] mx-auto px-6 pt-6 pb-10">
        {children}
      </div>
    </main>
  );
}
