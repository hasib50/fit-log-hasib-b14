import { notFound } from "next/navigation";
import WorkoutDetails from "@/components/WorkoutDetails";
import { getWorkout } from "@/lib/api";

interface WorkoutPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutPage({
  params,
}: WorkoutPageProps) {
  const { id } = await params;

  let workout;

  try {
    workout = await getWorkout(id);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b0d0c] px-5 py-12 text-white md:py-20">
      <div className="mx-auto max-w-7xl">
        <WorkoutDetails workout={workout} />
      </div>
    </main>
  );
}