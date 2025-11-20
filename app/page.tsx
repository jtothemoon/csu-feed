import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/header";
import { Card } from "@/components/ui/card";
import { formatEventDate } from "@/lib/utils/date";
import type { Event } from "@/lib/types/event";
import Link from "next/link";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/events`, { cache: "no-store" });
  const events: Event[] = res.ok ? await res.json() : [];

  return (
    <MainLayout>
      <div className="flex flex-col gap-10">
        {/* Header */}
        <Header />

        {/* Content */}
        <section className="flex flex-col gap-6">
          {events && events.length > 0 ? (
            events.map((event: Event, index: number) => (
              <Link key={event.id} href={`/events/${event.id}`}>
                <Card
                  image={event.image_url || "https://placehold.co/600x400/0033A0/white?text=Event"}
                  title={event.title}
                  subtitle={formatEventDate(event.start_date, event.end_date)}
                  priority={index === 0}
                />
              </Link>
            ))
          ) : (
            <p className="text-center text-pale-gray">등록된 이벤트가 없습니다.</p>
          )}
        </section>
      </div>
    </MainLayout>
  );
}
