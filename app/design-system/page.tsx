import Image from "next/image";
import { GoogleIcon } from "@/components/ui/google-icon";
import { UserIcon } from "@/components/ui/user-icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full max-w-md mx-auto px-5 py-8 space-y-10">
        {/* Logo */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-tinted-black">Logo</h2>
          <Image
            src="/logo.png"
            alt="CSU Feed"
            width={0}
            height={0}
            sizes="160px"
            style={{ width: "160px", height: "auto" }}
            loading="eager"
          />
        </section>

        {/* Colors */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-tinted-black">Colors</h2>
          <div className="space-y-5">
            {/* Primary */}
            <div>
              <h3 className="text-base font-semibold mb-3 text-tinted-black">
                Primary
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary rounded-lg shadow-elevation-1"></div>
                  <span className="text-xs mt-2 text-tinted-black text-center">
                    Primary
                  </span>
                  <span className="text-[10px] text-medium-gray">#0033A0</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-extra rounded-lg shadow-elevation-1"></div>
                  <span className="text-xs mt-2 text-tinted-black text-center">
                    Extra
                  </span>
                  <span className="text-[10px] text-medium-gray">#DDDDDD</span>
                </div>
              </div>
            </div>

            {/* Blue */}
            <div>
              <h3 className="text-base font-semibold mb-3 text-tinted-black">
                Blue
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-dark-blue rounded-lg shadow-elevation-1"></div>
                  <span className="text-xs mt-2 text-tinted-black text-center">
                    Dark
                  </span>
                  <span className="text-[10px] text-medium-gray">#001F5B</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-light-blue rounded-lg shadow-elevation-1"></div>
                  <span className="text-xs mt-2 text-tinted-black text-center">
                    Light
                  </span>
                  <span className="text-[10px] text-medium-gray">#4C8CFF</span>
                </div>
              </div>
            </div>

            {/* Grayscale */}
            <div>
              <h3 className="text-base font-semibold mb-3 text-tinted-black">
                Grayscale
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-black rounded-lg shadow-elevation-1"></div>
                  <span className="text-xs mt-2 text-tinted-black">Black</span>
                  <span className="text-[10px] text-medium-gray">#000000</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-tinted-black rounded-lg shadow-elevation-1"></div>
                  <span className="text-xs mt-2 text-tinted-black text-center">
                    Tinted
                  </span>
                  <span className="text-[10px] text-medium-gray">#222222</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-dark-gray rounded-lg shadow-elevation-1"></div>
                  <span className="text-xs mt-2 text-tinted-black text-center">
                    Dark
                  </span>
                  <span className="text-[10px] text-medium-gray">#555555</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-medium-gray rounded-lg shadow-elevation-1"></div>
                  <span className="text-xs mt-2 text-tinted-black text-center">
                    Medium
                  </span>
                  <span className="text-[10px] text-medium-gray">#777777</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-tinted-gray rounded-lg shadow-elevation-1"></div>
                  <span className="text-xs mt-2 text-tinted-black text-center">
                    Tinted
                  </span>
                  <span className="text-[10px] text-medium-gray">#888888</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-pale-gray rounded-lg shadow-elevation-1"></div>
                  <span className="text-xs mt-2 text-tinted-black text-center">
                    Pale
                  </span>
                  <span className="text-[10px] text-medium-gray">#AAAAAA</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-shaded-white rounded-lg shadow-elevation-1 border border-medium-gray"></div>
                  <span className="text-xs mt-2 text-tinted-black text-center">
                    Shaded
                  </span>
                  <span className="text-[10px] text-medium-gray">#DDDDDD</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-elevation-1 border border-medium-gray"></div>
                  <span className="text-xs mt-2 text-tinted-black">White</span>
                  <span className="text-[10px] text-medium-gray">#FFFFFF</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elevation */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-tinted-black">
            Elevation
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-elevation-1 flex items-center justify-center border border-shaded-white">
                <span className="text-xs text-tinted-black font-semibold">
                  1
                </span>
              </div>
              <span className="text-[10px] mt-2 text-medium-gray">Level 1</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-elevation-2 flex items-center justify-center">
                <span className="text-xs text-tinted-black font-semibold">
                  2
                </span>
              </div>
              <span className="text-[10px] mt-2 text-medium-gray">Level 2</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-elevation-3 flex items-center justify-center">
                <span className="text-xs text-tinted-black font-semibold">
                  3
                </span>
              </div>
              <span className="text-[10px] mt-2 text-medium-gray">Level 3</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-elevation-4 flex items-center justify-center">
                <span className="text-xs text-tinted-black font-semibold">
                  4
                </span>
              </div>
              <span className="text-[10px] mt-2 text-medium-gray">Level 4</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-elevation-5 flex items-center justify-center">
                <span className="text-xs text-tinted-black font-semibold">
                  5
                </span>
              </div>
              <span className="text-[10px] mt-2 text-medium-gray">Level 5</span>
            </div>
          </div>
        </section>

        {/* Icons */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-tinted-black">Icons</h2>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <GoogleIcon size={28} />
              <span className="text-xs mt-2 text-tinted-black">Google</span>
            </div>
            <div className="flex flex-col items-center">
              <UserIcon size={28} />
              <span className="text-xs mt-2 text-tinted-black">User</span>
            </div>
          </div>
        </section>

        {/* Input */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-tinted-black">Input</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-2 text-tinted-black">
                Normal
              </h3>
              <div className="overflow-x-auto">
                <Input icon={<UserIcon />} placeholder="Enter username" />
              </div>
              <p className="text-xs text-medium-gray mt-2">
                Gray → Blue on focus
              </p>
            </div>
          </div>
        </section>

        {/* Button */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-tinted-black">Button</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-2 text-tinted-black">
                Normal
              </h3>
              <Button>SUBMIT</Button>
              <p className="text-xs text-medium-gray mt-2">
                Light Blue → Primary on click
              </p>
            </div>
          </div>
        </section>

        {/* Card */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-tinted-black">Card</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-2 text-tinted-black">
                Event Card
              </h3>
              <Card
                image="/logo.png"
                title="멘토링"
                subtitle="2024.01.15"
              />
              <p className="text-xs text-medium-gray mt-2">
                163px × 127px (이미지 90px + 컨텐츠 37px)
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
