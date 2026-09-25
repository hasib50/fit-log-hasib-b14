import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#24282f] bg-[#0f1114] px-5 py-8 text-white sm:px-7 md:px-8">
      <div className="mx-auto flex max-w-[1248px] flex-col items-center justify-between gap-5 sm:flex-row">
        
{/* Logo part */}

        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/assets/logo.png"
            alt="FitLog Logo"
            width={32}
            height={32}
            className="h-[32px] w-[32px] object-contain"
          />

{/* FITLOG */}

          <span className="font-oswald text-[21px] font-bold uppercase tracking-[0.8px] text-white">
            FITLOG
          </span>
        </Link>

{/* Footer text */}

        <p className="font-inter text-center text-[10px] leading-5 text-[#737983] sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}