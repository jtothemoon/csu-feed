import Image from "next/image";
import { getUser } from "@/lib/actions/auth";
import { AuthButton } from "./auth-button";

export async function Header() {
  const user = await getUser();

  return (
    <header className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="CSU Feed"
            width={48}
            height={48}
            loading="eager"
            fetchPriority="high"
          />
          <span className="text-sm font-medium text-tinted-black">
            조선대학교 소프트웨어중심대학
          </span>
        </div>
        <AuthButton user={user} />
      </div>
      <h1 className="text-2xl font-semibold text-tinted-black">
        멘토링 및 특강 피드백
      </h1>
    </header>
  );
}
