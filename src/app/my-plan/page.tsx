"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

import PlanCard from "@/components/PlanCard";
import StatsCard from "@/components/StatsCard";
import Tabs from "@/components/Tabs";
import Sort from "@/components/Sort";
import { useFitLog } from "@/components/FitLogContext";

type SortType = "default" | "duration" | "calories" | "rating";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<SortType>("duration");
  const [search, setSearch] = useState("");

  const { plan, saved, removeFromPlan, removeSaved } = useFitLog();

// Active tab list/stats
  const currentList = activeTab === "plan" ? plan : saved;

  const totalMinutes = currentList.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = currentList.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

// Search by workout name or tag
  const filteredList = currentList.filter((workout) => {
    const searchText = search.toLowerCase();

    const matchesName = workout.name
      .toLowerCase()
      .includes(searchText);

    const matchesTag = workout.muscleGroups.some((group) =>
      group.toLowerCase().includes(searchText)
    );

    return matchesName || matchesTag;
  });

// Sort
  const sortedList = [...filteredList];

  if (sortBy === "duration") {
    sortedList.sort((a, b) => a.duration - b.duration);
  }

  if (sortBy === "calories") {
    sortedList.sort(
      (a, b) => a.caloriesBurned - b.caloriesBurned
    );
  }

  if (sortBy === "rating") {
    sortedList.sort((a, b) => b.rating - a.rating);
  }

// Mark as Done
  function handleDone(id: number) {
    removeFromPlan(id);
    toast.success("Workout marked as done.");
  }

// Remove
  function handleRemove(id: number) {
    if (activeTab === "plan") {
      removeFromPlan(id);
      toast.success("Removed from today's plan.");
    } else {
      removeSaved(id);
      toast.success("Removed from saved.");
    }
  }

  return (
    <main className="bg-[#0b0d0f] px-5 py-11 text-white sm:px-7 md:px-8">
      <div className="mx-auto max-w-[1184px]">

{/* Header */}
        <div>
          <h1 className="font-oswald text-[30px] font-bold uppercase leading-none tracking-[-1.2px] sm:text-[32px]">
            MY PLAN
          </h1>

          <p className="font-inter mt-3 text-[13px] text-[#8d939d]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

{/* Stats */}
        <div className="mt-6 grid overflow-hidden rounded-[15px] border border-[#282d35] bg-[#12151a] sm:grid-cols-3">
          <StatsCard
            label="Exercises"
            value={currentList.length}
          />

          <StatsCard
            label="Minutes"
            value={totalMinutes}
          />

          <StatsCard
            label="Calories"
            value={totalCalories}
          />
        </div>

{/* Tabs + Sort */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <Tabs
            activeTab={activeTab}
            onChange={setActiveTab}
          />

          <div className="flex shrink-0 items-center gap-3">
            <span className="font-inter hidden text-[11px] text-[#858b95] sm:block">
              Sort By
            </span>

            <Sort
              value={sortBy}
              onChange={setSortBy}
            />
          </div>
        </div>

{/* Search */}
        {currentList.length > 0 && (
          <div className="mt-5">
            <div className="relative max-w-[360px]">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search workouts or tags..."
                className="font-inter h-[38px] w-full rounded-[8px] border border-[#292e36] bg-[#12151a] px-4 pr-10 text-[11px] text-white outline-none placeholder:text-[#666c75] focus:border-[#c8ff00]"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[16px] leading-none text-[#6f757e] transition hover:text-white"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        )}

{/* Workout List */}
        <div className="mt-6 space-y-4">
          {sortedList.length > 0 ? (
            sortedList.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                onDone={
                  activeTab === "plan"
                    ? () => handleDone(workout.id)
                    : undefined
                }
                onRemove={() => handleRemove(workout.id)}
              />
            ))
          ) : currentList.length > 0 ? (
            <div className="flex min-h-[250px] flex-col items-center justify-center rounded-[15px] border border-[#30353d] bg-[#111419] px-6 text-center">
              <h2 className="font-oswald text-[20px] font-bold uppercase text-white">
                NO WORKOUTS FOUND
              </h2>

              <p className="font-inter mt-3 text-[12px] text-[#858b95]">
                Try searching with another workout name or tag.
              </p>
            </div>
          ) : (

/* Empty State */
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[15px] border border-[#30353d] bg-[#111419] px-6 text-center">
              <h2 className="font-oswald text-[20px] font-bold uppercase text-white">
                NOTHING HERE YET
              </h2>

              <p className="font-inter mt-3 max-w-[360px] text-[12px] leading-5 text-[#858b95]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="font-inter mt-5 rounded-full bg-[#c8ff00] px-5 py-2.5 text-[11px] font-bold text-black transition hover:bg-[#b9ed00]"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}