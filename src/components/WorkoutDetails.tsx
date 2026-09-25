"use client";

import { toast } from "react-toastify";
import { Workout } from "@/types/workout";
import { useFitLog } from "@/components/FitLogContext";

interface WorkoutDetailsProps {
  workout: Workout;
}

export default function WorkoutDetails({
  workout,
}: WorkoutDetailsProps) {
  const { addToPlan, saveWorkout } = useFitLog();

  function handleAddToPlan() {
    const result = addToPlan(workout);

    if (result === "Added to today's plan.") {
      toast.success(result);
    } else {
      toast.error(result);
    }
  }

  function handleSave() {
    const result = saveWorkout(workout);

    if (result === "Saved for later.") {
      toast.success(result);
    } else {
      toast.info(result);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
      {/* Image */}
      <div className="overflow-hidden rounded-xl border border-[#272b32] bg-[#15181e]">
        <img
          src={workout.image}
          alt={workout.name}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

{/* Content */}

      <div className="flex flex-col justify-center">
{/* Title */}

        <h1 className="font-oswald mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-1px] text-white sm:text-5xl">
          {workout.name}
        </h1>

{/* Description */}

        <p className="font-inter mt-5 text-sm leading-6 text-[#969ba4]">
          {workout.description}
        </p>

{/* Categories */}

        <div className="font-inter mt-6 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
            >
              {group}
            </span>
          ))}
        </div>

{/* Specs */}

        <div className="font-inter mt-8 overflow-hidden rounded-xl border border-[#292d34] bg-[#15181e]">
          <Spec label="Equipment" value={workout.equipment} />
          <Spec label="Difficulty" value={workout.difficulty} />
          <Spec label="Sets" value={String(workout.sets)} />
          <Spec label="Reps" value={workout.reps} />
          <Spec label="Duration" value={`${workout.duration} min`} />
          <Spec
            label="Calories"
            value={`${workout.caloriesBurned} kcal`}
          />
          <Spec
            label="Rating"
            value={`★ ${workout.rating}`}
            last
          />
        </div>

{/* Instructions */}

        <div className="font-inter mt-8">
          <h2 className="font-oswald text-[16px] font-bold uppercase tracking-[0.02em] text-white">
            INSTRUCTIONS
          </h2>

          <ol className="mt-4 space-y-3">
            {workout.instructions.map((instruction, index) => (
              <li
                key={index}
                className="flex items-start text-[13px] leading-[1.5] text-[#a5a9b0]"
              >
                <span className="mr-2 w-[12px] shrink-0 text-[#858a92]">
                  {index + 1}.
                </span>

                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        </div>

{/* Buttons */}

        <div className="font-inter mt-7 flex items-center gap-3">
          <button
            onClick={handleAddToPlan}
            className="inline-flex h-[36px] items-center justify-center gap-2 rounded-[9px] bg-[#c8ff00] px-4 text-[11px] font-bold text-black transition hover:bg-[#b9ed00]"
          >
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
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>

            Add to today&apos;s plan
          </button>

          <button
            onClick={handleSave}
            className="inline-flex h-[36px] items-center justify-center gap-2 rounded-[9px] border border-[#343941] px-4 text-[11px] font-medium text-[#c5c8cd] transition hover:border-[#c8ff00] hover:text-white"
          >
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
              <path d="M6 3h12v18l-6-4-6 4V3z" />
            </svg>

            Save for later
          </button>
        </div>
      </div>
    </div>
  );
}

function Spec({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`font-inter flex items-center justify-between px-5 py-3.5 ${
        !last ? "border-b border-[#292d34]" : ""
      }`}
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9298a2]">
        {label}
      </span>

      <span className="max-w-[60%] text-right text-sm font-semibold text-white">
        {value}
      </span>
    </div>
  );
}