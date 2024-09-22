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
import { reserveTableFormSchema3, reserveTableFormType3 } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reserveTableFormType1 } from "../ReserveTableForm1/schema";
import { reserveTableFormType2 } from "../ReserveTableForm2/schema";
import { XIcon } from "lucide-react";
import ScrollToTop from "@/components/common/ScrollToTop";
import { submitAPI } from "@/lib/api";
import { useNavigate } from "react-router-dom";
import Typography from "@/components/common/Typography";

const ReserveTableForm3 = ({
  form,
}: {
  form: useMultistepFormReturn<
    reserveTableFormType1 & reserveTableFormType2 & reserveTableFormType3
  >;
}) => {
  const reserveTableForm3 = useForm<reserveTableFormType3>({
    resolver: zodResolver(reserveTableFormSchema3),
    defaultValues: form.defaultValues,
  });

  const navigate = useNavigate();

  return (
    <Form {...reserveTableForm3}>
      <ScrollToTop />
      <form
        onSubmit={reserveTableForm3.handleSubmit((values) => {
          form.updateData(values);
          submitAPI({ ...form.getAllData(), ...values });
          alert("Booked Successfully!");
          navigate("/");
        })}
        className="mt-8"
      >
        <Typography
          variant="h4"
          className="mb-4 mt-12 text-2xl font-medium normal-case text-white"
        >
          Credit Card Details
        </Typography>
        <div className="mb-4 grid gap-[1rem_2.5rem] md:grid-cols-[1fr_1fr]">
          <FormField
            control={reserveTableForm3.control}
            name="card_number"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>Card Number</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
          <FormField
            control={reserveTableForm3.control}
            name="holder_name"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>Holder Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4 grid grid-cols-[1fr_1fr] gap-[1rem_2.5rem]">
          <FormField
            control={reserveTableForm3.control}
            name="expiry_date"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>Expiry Date</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
          <FormField
            control={reserveTableForm3.control}
            name="cvv"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>CVV</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
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
          Book
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="mb-4 mt-2 w-full"
          type="button"
          onClick={() => form.back(reserveTableForm3.getValues())}
        >
          Back
        </Button>
      </form>
    </Form>
  );
};
export default ReserveTableForm3;
