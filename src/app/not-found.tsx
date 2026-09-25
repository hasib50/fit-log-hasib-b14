import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d0c] px-5 text-white">
      <div className="w-full max-w-lg text-center">
        <p className="text-sm font-black tracking-[0.3em] text-[#ccff00]">
          404
        </p>

        <h1 className="mt-4 text-4xl font-black uppercase md:text-6xl">
          NOTHING HERE
        </h1>

        <p className="mt-4 text-sm leading-6 text-zinc-500">
          The workout or page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black text-black transition hover:bg-[#b8e600]"
        >
          BACK TO WORKOUTS
        </Link>
      </div>
    </main>
  );
}