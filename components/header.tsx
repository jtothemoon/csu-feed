import Image from "next/image";

export function Header() {
  return (
    <header className="flex flex-col">
      <div className="flex items-center gap-2.5">
        <Image
          src="/logo.png"
          alt="CSU Feed"
          width={0}
          height={0}
          sizes="48px"
          style={{ width: "48px", height: "auto" }}
          loading="eager"
        />
        <span className="text-sm font-medium text-tinted-black">
          조선대학교 소프트웨어중심대학
        </span>
      </div>
      <h1 className="text-2xl font-semibold text-tinted-black">
        멘토링 및 특강 피드백
      </h1>
    </header>
  );
}
