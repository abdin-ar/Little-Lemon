import { z } from "zod";
import isCreditCard from "validator/lib/isCreditCard";

export const reserveTableFormSchema3 = z.object({
  card_number: z.string().refine(isCreditCard, {
    message: "Must be a valid credit card number",
  }),
  holder_name: z.string().min(1, "Holder name is required"),
  expiry_date: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry date must be in MM/YY format"),
  cvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
});

export type reserveTableFormType3 = z.infer<typeof reserveTableFormSchema3>;

export const SignupFormDefault3: reserveTableFormType3 = {
  card_number: "",
  holder_name: "",
  expiry_date: "",
  cvv: "",
};
