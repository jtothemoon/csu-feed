import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/header";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-10">
        {/* Header */}
        <Header />

        {/* Content */}
        <section className="flex flex-col gap-6">
          <Card
            image="/logo.png"
            title="AI 멘토링"
            subtitle="2024.01.15"
          />
          <Card
            image="/logo.png"
            title="웹 개발 특강"
            subtitle="2024.01.20"
          />
          <Card
            image="/logo.png"
            title="데이터 분석 세미나"
            subtitle="2024.01.25"
          />
        </section>
      </div>
    </MainLayout>
  );
}
