import Link from "next/link";
import { Workout } from "@/types/workout";

interface PlanCardProps {
  workout: Workout;
  onDone?: () => void;
  onRemove?: () => void;
}

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.5 2.5c.4 3.2-1.1 4.8-2.5 6.3-1.1 1.2-2 2.2-2 4.2 0 1.8 1.3 3.2 3 3.2 1.3 0 2.4-.8 2.8-2.1.6.8 1 1.8 1 2.9 0 2.8-2.2 4.8-5.1 4.8S5.5 19.7 5.5 16c0-4.2 2.6-6.5 4.8-8.6 1.5-1.4 2.8-2.7 3.2-4.9Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function PlanCard({
  workout,
  onDone,
  onRemove,
}: PlanCardProps) {
  return (
    <div className="flex min-w-0 flex-col gap-4 rounded-[15px] border border-[#282d35] bg-[#12151a] p-3 sm:min-h-[114px] sm:flex-row sm:items-center sm:px-4 sm:py-3.5">
      {/* Image + Workout Info */}
      <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
        <div className="h-[72px] w-[110px] shrink-0 overflow-hidden rounded-[9px] bg-[#1b1e24] sm:h-[80px] sm:w-[144px]">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-oswald truncate text-[15px] font-bold uppercase leading-none tracking-[-0.2px] text-white sm:text-[16px]">
            {workout.name}
          </h3>

          <p className="font-inter mt-1.5 truncate text-[10px] text-[#858b95] sm:text-[11px]">
            {workout.equipment}
          </p>

          <div className="font-inter mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-[#a2a7af] sm:text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="text-[#c8ff00]">
                <ClockIcon />
              </span>
              <span>{workout.duration} min</span>
            </span>

            <span className="flex items-center gap-1.5">
              <span className="text-[#c8ff00]">
                <FlameIcon />
              </span>
              <span>{workout.caloriesBurned} kcal</span>
            </span>

            <span className="flex items-center gap-1.5">
              <span className="text-[#c8ff00]">
                <StarIcon />
              </span>
              <span>{workout.rating}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="grid w-full grid-cols-[1fr_1fr_30px] items-center gap-2 sm:ml-5 sm:flex sm:w-auto sm:shrink-0 sm:gap-3">
        <Link
          href={`/workout/${workout.id}`}
          className="flex h-[35px] items-center justify-center rounded-full border border-[#39404a] px-2 text-[10px] font-medium text-[#d0d3d8] transition hover:border-[#c8ff00] hover:text-white sm:px-5 sm:text-[11px]"
        >
          View Details
        </Link>

        {onDone && (
          <button
            onClick={onDone}
            className="flex h-[35px] items-center justify-center gap-1.5 rounded-full bg-[#c8ff00] px-2 text-[10px] font-bold text-black transition hover:bg-[#b9ed00] sm:gap-2 sm:px-5 sm:text-[11px]"
          >
            <CheckIcon />
            <span>Mark as Done</span>
          </button>
        )}

        {onRemove && (
          <button
            onClick={onRemove}
            className="flex h-[35px] w-[30px] items-center justify-center text-[18px] text-[#656b75] transition hover:text-white"
            aria-label={`Remove ${workout.name}`}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}