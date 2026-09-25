import Link from "next/link";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

function ClockIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3c1.5 3.2 5 5.1 5 9.3A5 5 0 1 1 7 12c0-2.2 1.2-4 2.8-5.5.1 2 1.1 3.2 2.2 4.2C12.6 8.2 12.1 5.8 12 3Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    </svg>
  );
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-[11px] border border-[#272b32] bg-[#15181e] transition duration-200 hover:border-[#3a4049]"
    >
      
{/* Image */}

      <div className="aspect-[2/1] overflow-hidden bg-[#101216]">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="px-5 pb-5 pt-4">

{/* Tags - Inter */}

        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#c8ff00] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.02em] text-black"
            >
              {group}
            </span>
          ))}
        </div>

{/* Exercise Name - Oswald */}

        <h3 className="font-oswald mt-4 truncate text-[19px] font-semibold uppercase leading-none tracking-[-0.2px] text-white">
          {workout.name}
        </h3>

{/* Equipment - Inter */}

        <p className="mt-2 truncate text-[11px] text-[#858b95]">
          {workout.equipment}
        </p>

        <div className="my-4 h-px bg-[#272b32]" />

{/* Metadata - Inter */}

        <div className="flex items-center gap-4 text-[10px] text-[#9ca1aa]">
          <span className="flex items-center gap-1.5">
            <span className="text-[#c8ff00]">
              <ClockIcon />
            </span>
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <span className="text-[#c8ff00]">
              <FlameIcon />
            </span>
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <span className="text-[#c8ff00]">
              <StarIcon />
            </span>
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}