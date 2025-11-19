import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-5">
      <div className="w-full max-w-md mx-auto text-center">
        <Image
          src="/logo.png"
          alt="CSU Feed"
          width={0}
          height={0}
          sizes="200px"
          style={{ width: "200px", height: "auto" }}
          loading="eager"
          className="mx-auto mb-8"
        />
        <h1 className="text-2xl font-bold text-tinted-black mb-4">
          멘토링 & 특강 피드백
        </h1>
        <p className="text-medium-gray mb-8">
          진행된 이벤트 목록이 여기에 표시됩니다.
        </p>
      </div>
    </main>
  );
}
