import { z } from "zod";
import { isPossiblePhoneNumber } from "react-phone-number-input";

export const reserveTableFormSchema2 = z
  .object({
    first_name: z.string().min(1, { message: "Enter your first name." }),
    last_name: z.string().min(1, { message: "Enter your last name." }),
    phone_number: z
      .string({ required_error: "Enter your phone number." })
      .min(1, { message: "Enter your phone number." }),
    email: z
      .string()
      .min(1, { message: "Enter your email." })
      .email("Enter a valid email."),
    password: z.string({ required_error: "Enter your password." }).min(6, {
      message: "Minimum password length must be 6 characters.",
    }),
    special_request: z.string().optional(),
  })
  .refine((data) => isPossiblePhoneNumber(data.phone_number), {
    message: "Enter a valid phone number.",
    path: ["phone_number"],
  });
export type reserveTableFormType2 = z.infer<typeof reserveTableFormSchema2>;

export const SignupFormDefault2: reserveTableFormType2 = {
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  password: "",
  special_request: "",
};
