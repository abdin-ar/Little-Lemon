import { useMultistepFormReturn } from "@/hooks/useMultistepForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { reserveTableFormSchema2, reserveTableFormType2 } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reserveTableFormType1 } from "../ReserveTableForm1/schema";
import { reserveTableFormType3 } from "../ReserveTableForm3/schema";
import { XIcon } from "lucide-react";
import PhoneInput from "@/components/common/PhoneInput";
import { Textarea } from "@/components/ui/textarea";
import ScrollToTop from "@/components/common/ScrollToTop";
import Typography from "@/components/common/Typography";

const ReserveTableForm2 = ({
  form,
}: {
  form: useMultistepFormReturn<
    reserveTableFormType1 & reserveTableFormType2 & reserveTableFormType3
  >;
}) => {
  const reserveTableForm2 = useForm<reserveTableFormType2>({
    resolver: zodResolver(reserveTableFormSchema2),
    defaultValues: form.defaultValues,
  });

  return (
    <Form {...reserveTableForm2}>
      <ScrollToTop />
      <form
        onSubmit={reserveTableForm2.handleSubmit((values) => form.next(values))}
        className="mt-8"
      >
        <Typography
          variant="h4"
          className="mb-4 mt-12 text-2xl font-medium normal-case text-white"
        >
          Sign in to collect points{" "}
        </Typography>
        <div className="mb-4 grid gap-[1rem_2.5rem] md:grid-cols-[1fr_1fr]">
          <FormField
            control={reserveTableForm2.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
          <FormField
            control={reserveTableForm2.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4 grid gap-[1rem_2.5rem] md:grid-cols-[1fr_1fr]">
          <FormField
            control={reserveTableForm2.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <PhoneInput {...field} />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
          <FormField
            control={reserveTableForm2.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4 grid gap-[1rem_2.5rem] md:grid-cols-[1fr_1fr]">
          <FormField
            control={reserveTableForm2.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
          <FormField
            control={reserveTableForm2.control}
            name="special_request"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>Special request (optional)</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
        </div>
        <Button
          variant="accent"
          size="lg"
          className="mb-2 mt-4 w-full"
          type="submit"
        >
          Continue
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="mb-4 mt-2 w-full"
          type="button"
          onClick={() => form.back(reserveTableForm2.getValues())}
        >
          Back
        </Button>
      </form>
    </Form>
  );
};
export default ReserveTableForm2;
