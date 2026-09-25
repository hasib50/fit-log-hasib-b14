export default function Load() {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-zinc-700 border-t-[#ccff00]" />

        <p className="mt-4 text-sm font-semibold text-zinc-400">
          Loading workouts…
        </p>
      </div>
    </div>
  );
}