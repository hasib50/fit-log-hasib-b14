"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Workout } from "@/types/workout";
import {
  getPlan,
  getSaved,
  savePlan,
  saveSaved,
} from "@/lib/storage";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => string;
  saveWorkout: (workout: Workout) => string;
  removeFromPlan: (id: number) => void;
  removeSaved: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  useEffect(() => {
    setPlan(getPlan());
    setSaved(getSaved());
  }, []);

  function addToPlan(workout: Workout) {
    if (plan.some((item) => item.id === workout.id)) {
      return "Already in today's plan.";
    }

    if (plan.length >= 5) {
      return "Today's plan is full.";
    }

    const updatedPlan = [...plan, workout];

    setPlan(updatedPlan);
    savePlan(updatedPlan);

    return "Added to today's plan.";
  }

  function saveWorkout(workout: Workout) {
    if (saved.some((item) => item.id === workout.id)) {
      return "Already saved.";
    }

    const updatedSaved = [...saved, workout];

    setSaved(updatedSaved);
    saveSaved(updatedSaved);

    return "Saved for later.";
  }

  function removeFromPlan(id: number) {
    const updatedPlan = plan.filter((workout) => workout.id !== id);

    setPlan(updatedPlan);
    savePlan(updatedPlan);
  }

  function removeSaved(id: number) {
    const updatedSaved = saved.filter((workout) => workout.id !== id);

    setSaved(updatedSaved);
    saveSaved(updatedSaved);
  }

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
}