import { z } from "zod";
import {
  dinersOptions,
  getDateOptions,
  occasionOptions,
  seatingOptions,
} from "../bookingOptions";
import { fetchAPI } from "@/lib/api";

export const reserveTableFormSchema1 = z.object({
  reservation_date: z.object({
    label: z
      .string()
      .min(4, { message: "Enter your reservation date." })
      .nullable(),
    value: z.string().min(4, { message: "Enter your reservation date." }),
  }),
  reservation_time: z.object({
    label: z
      .string()
      .min(1, { message: "Enter your reservation time." })
      .nullable(),
    value: z.string().min(1, { message: "Enter your reservation time." }),
  }),
  diners_no: z.object({
    label: z.string().min(1, { message: "Enter the number of diners." }),
    value: z.string().min(1, { message: "Enter the number of diners." }),
  }),
  occasion: z.object({
    label: z.string().min(1, { message: "Enter the occasion." }),
    value: z.string().min(1, { message: "Enter the occasion." }),
  }),
  seating: z.object({
    label: z
      .string()
      .min(1, { message: "Select your preferred seating option." }),
    value: z
      .string()
      .min(1, { message: "Select your preferred seating option." }),
  }),
});

export type reserveTableFormType1 = z.infer<typeof reserveTableFormSchema1>;

export const SignupFormDefault1: reserveTableFormType1 = {
  reservation_date: getDateOptions(1)[0],
  reservation_time: fetchAPI(new Date(getDateOptions(1)[0].value))[0],
  diners_no: dinersOptions[0],
  occasion: occasionOptions[0],
  seating: seatingOptions[0],
};
