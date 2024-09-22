import { OptionType } from "@/lib/Types";
import { months } from "@/data/months";

export function getDateOptions(noOfDays: number = 1) {
  const date = Number(new Date()) / 1000 / 60 / 60 / 24;
  const days: number[] = [];
  for (let i = 0; i < noOfDays; i++) {
    days.push(i);
  }
  const newDays = days.map((day) => {
    const newDay = new Date((day + date) * 1000 * 60 * 60 * 24);
    const text = `${months[newDay.getMonth()]} ${newDay.getDate()} ${newDay.getFullYear()}`;
    return { label: text, value: text };
  });
  return newDays;
}

export const dinersOptions: OptionType[] = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "4", value: "4" },
  { label: "6", value: "6" },
  { label: "8", value: "8" },
  { label: "12", value: "12" },
  { label: "16", value: "16" },
  { label: "20", value: "20" },
  { label: "24", value: "24" },
];

export const occasionOptions: OptionType[] = [
  { label: "Birthday", value: "Birthday" },
  { label: "Graduation", value: "Graduation" },
  { label: "Other", value: "Other" },
];

export const seatingOptions: OptionType[] = [
  { label: "Indoors", value: "Indoors" },
  { label: "Outdoors", value: "Outdoors" },
  { label: "VIP", value: "VIP" },
];
