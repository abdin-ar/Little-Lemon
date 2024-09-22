import { useState } from "react";
import { z } from "zod";

type step = {
  schema: z.Schema;
  defaultValues: any;
};

export type useMultistepFormReturn<T> = {
  currentStepIndex: number;
  step: step;
  steps: step[];
  isFirstStep: boolean;
  isLastStep: boolean;
  updateData(values?: any): void;
  next(values?: any): void;
  back(values?: any): void;
  goTo(index: number, values?: any): void;
  getAllData(): T;
  schema: z.Schema;
  defaultValues: any;
};

function getAllDefaults(steps: step[]) {
  let all: any[] = [];
  steps.forEach((step) => {
    all = [...all, step.defaultValues];
  });
  return all;
}

function useMultistepForm<T>(
  steps: {
    schema: z.Schema;
    defaultValues: any;
  }[],
): useMultistepFormReturn<T> {
  const [allData, setAllData] = useState<any[]>(getAllDefaults(steps));
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const step = steps[currentStepIndex];

  function getAllData(): T {
    let all = {};
    allData.forEach((step) => {
      all = { ...all, ...step };
    });
    return all as T;
  }

  function updateData(values?: any) {
    if (values) {
      setAllData((prev) => {
        const newData = [...prev];
        newData[currentStepIndex] = values;
        return newData;
      });
    }
  }

  function next(values?: any) {
    updateData(values);
    setCurrentStepIndex((prev) => (prev >= steps.length - 1 ? prev : prev + 1));
  }

  function back(values?: any) {
    updateData(values);
    setCurrentStepIndex((prev) => (prev <= 0 ? prev : prev - 1));
  }

  function goTo(index: number, values?: any) {
    if (index >= 0 || index <= steps.length - 1) {
      updateData(values);
      setCurrentStepIndex(index);
    }
  }

  return {
    currentStepIndex,
    step,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    updateData,
    next,
    back,
    goTo,
    getAllData,
    schema: steps[currentStepIndex].schema,
    defaultValues: allData[currentStepIndex],
  };
}
export default useMultistepForm;
