import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-10">
        {/* Header */}
        <Header />

        {/* Content */}
        <section className="grid grid-cols-2 gap-4">
          {/* Event Cards */}
          <div className="col-span-2 text-center py-8 text-medium-gray text-sm">
            이벤트 카드가 여기에 표시됩니다
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
