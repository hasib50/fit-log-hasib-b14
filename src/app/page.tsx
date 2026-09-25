"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkoutGrid";
import Sort from "@/components/Sort";
import Load from "@/components/Load";
import { getWorkouts } from "@/lib/api";
import { Workout } from "@/types/workout";

type SortType = "default" | "duration" | "calories" | "rating";

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [sortBy, setSortBy] = useState<SortType>("duration");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        setLoading(true);

        const data = await getWorkouts();

        setWorkouts(data);
        setError(false);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchWorkouts();
  }, []);


  // Search

 const filteredWorkouts = workouts.filter((workout) => {
  const searchText = search.toLowerCase();

  const matchesName = workout.name.toLowerCase().includes(searchText);

  const matchesTag = workout.muscleGroups.some((group) =>
    group.toLowerCase().includes(searchText)
  );

  return matchesName || matchesTag;
});

// Sort

  const sortedWorkouts =
    sortBy === "default"
      ? filteredWorkouts
      : [...filteredWorkouts].sort((a, b) => {
          if (sortBy === "duration") {
            return a.duration - b.duration;
          }

          if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
          }

          if (sortBy === "rating") {
            return b.rating - a.rating;
          }

          return 0;
        });

  return (
    <main className="bg-[#0b0d0c] text-white">
      <Hero />

      <section
        id="library"
        className="bg-[#0b0d0c] px-5 pb-20 pt-8 sm:px-7 md:px-8 md:pt-10"
      >
        <div className="mx-auto max-w-[1248px]">

{/* Header */}

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-oswald text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c8ff00]">
                WORKOUTS
              </p>

              <h2 className="font-oswald mt-2 text-[32px] font-bold uppercase leading-none tracking-[-0.5px] text-white sm:text-[36px]">
                THE LIBRARY
              </h2>

              <p className="font-inter mt-3 text-[12px] leading-5 text-[#8e949d] sm:text-[13px]">
                Twelve lifts covering every major muscle group.
              </p>
            </div>

            {!loading && !error && workouts.length > 0 && (
              <div className="flex items-center gap-3">
                <span className="font-inter text-[11px] text-[#858b95]">
                  Sort By
                </span>

                <Sort
                  value={sortBy}
                  onChange={setSortBy}
                />
              </div>
            )}
          </div>

{/* Search */}

          {!loading && !error && workouts.length > 0 && (
            <div className="mt-6">
              <div className="relative max-w-[360px]">
                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search workouts..."
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

{/* Loading */}

          {loading && (
            <div className="mt-8">
              <Load />
            </div>
          )}

{/* Error */}

          {error && (
            <div className="mt-8 rounded-[12px] border border-red-900/50 bg-red-950/20 px-6 py-10 text-center">
              <p className="font-inter text-[12px] text-red-400">
                Failed to load workouts. Please try again.
              </p>
            </div>
          )}

{/* Workout Grid */}

          {!loading && !error && sortedWorkouts.length > 0 && (
            <div className="mt-8">
              <WorkoutGrid workouts={sortedWorkouts} />
            </div>
          )}

{/* No Results */}

          {!loading &&
            !error &&
            workouts.length > 0 &&
            sortedWorkouts.length === 0 && (
              <div className="py-20 text-center">
                <p className="font-oswald text-[20px] font-bold uppercase text-white">
                  NO WORKOUTS FOUND
                </p>

                <p className="font-inter mt-2 text-[12px] text-[#6f757e]">
                  Try searching with a different workout name.
                </p>
              </div>
            )}

{/* No API Data */}

          {!loading && !error && workouts.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-inter text-[12px] text-[#6f757e]">
                No workouts found.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}