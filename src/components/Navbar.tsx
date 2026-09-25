"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/components/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  const isHome = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <header className="border-b border-[#24272d] bg-[#0d0f12]">
      <div className="mx-auto flex min-h-[68px] max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-6 md:px-8">

{/* Logo part */}

        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src="/assets/logo.png"
            alt="FitLog Logo"
            width={32}
            height={32}
            priority
            className="h-[30px] w-[30px] object-contain sm:h-[32px] sm:w-[32px]"
          />

          <span className="font-oswald text-[19px] font-black tracking-[0.8px] text-white sm:text-[21px]">
            FITLOG
          </span>
        </Link>

{/* Navigation part */}

        <nav className="flex items-center gap-0.5 sm:gap-1">
          <Link
            href="/"
            className={`rounded-full px-2.5 py-2 text-[10px] font-semibold transition sm:px-4 sm:text-[12px] ${
              isHome
                ? "bg-[#20251c] text-[#c8ff00]"
                : "text-[#9298a1] hover:bg-[#181c19] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-2.5 py-2 text-[10px] font-semibold transition sm:px-4 sm:text-[12px] ${
              isMyPlan
                ? "bg-[#20251c] text-[#c8ff00]"
                : "text-[#9298a1] hover:bg-[#181c19] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

{/* Right Side */}

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-5">
          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-[10px] text-[#a1a6ae] transition hover:text-white sm:gap-2 sm:text-[12px]"
          >
            <span>Plan</span>

            <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#c8ff00] px-1 text-[9px] font-bold text-black sm:h-[20px] sm:min-w-[20px] sm:px-1.5 sm:text-[10px]">
              {plan.length}
            </span>
          </Link>

{/* Saved */}

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-[10px] text-[#a1a6ae] transition hover:text-white sm:gap-2 sm:text-[12px]"
          >
            <span>Saved</span>

            <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full border border-[#343941] px-1 text-[9px] font-medium text-[#c4c8cf] sm:h-[20px] sm:min-w-[20px] sm:px-1.5 sm:text-[10px]">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
