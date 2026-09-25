import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#0b0d0c] px-4 pb-8 pt-5 sm:px-6 sm:pb-10 sm:pt-6 md:px-8">
      <div className="mx-auto flex min-h-[320px] max-w-[1248px] flex-col overflow-hidden rounded-[12px] border border-[#252930] bg-[#15181e] md:flex-row">

{/* Text Content */}

        <div className="flex flex-1 flex-col justify-center px-6 py-9 sm:px-10 sm:py-10 md:px-14">
        
          <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c8ff00] sm:text-[11px]">
            WORKOUT LIBRARY
          </p>

          
          <h1 className="font-oswald mt-5 max-w-[650px] text-[38px] font-bold uppercase leading-[0.92] tracking-[-1px] text-white sm:text-[52px] sm:tracking-[-1.2px] md:text-[62px]">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          
          <p className="mt-5 max-w-[510px] text-[12px] leading-[1.65] text-[#9298a2] sm:text-[13px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="mt-6">
        
            <a
              href="#library"
              className="inline-flex h-[38px] items-center justify-center gap-2 rounded-[6px] bg-[#c8ff00] px-5 text-[11px] font-semibold uppercase tracking-[0.02em] text-black transition hover:bg-[#b9ed00]"
            >
              BROWSE WORKOUTS

              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

{/* Banner Image */}

        <div className="relative flex h-[190px] w-full items-center justify-center md:h-auto md:w-[42%] md:min-w-[330px]">
          <Image
            src="/assets/banner.png"
            alt="Workout illustration"
            width={430}
            height={330}
            priority
            className="h-[175px] w-auto object-contain sm:h-[210px] md:h-[285px]"
          />
        </div>
      </div>
    </section>
  );
}