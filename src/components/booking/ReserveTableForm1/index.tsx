import { useMultistepFormReturn } from "@/hooks/useMultistepForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { reserveTableFormSchema1, reserveTableFormType1 } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reserveTableFormType2 } from "../ReserveTableForm2/schema";
import { reserveTableFormType3 } from "../ReserveTableForm3/schema";
import { XIcon } from "lucide-react";
import Select from "react-select";
import { useState } from "react";
import { fetchAPI } from "@/lib/api";
import { OptionType } from "@/lib/Types";
import {
  dinersOptions,
  getDateOptions,
  occasionOptions,
  seatingOptions,
} from "../bookingOptions";
import Typography from "@/components/common/Typography";
import Img1 from "../../../assets/image/restaurant chef B.jpg";
import Img2 from "../../../assets/image/restaurant.jpg";
import ScrollToTop from "@/components/common/ScrollToTop";

const ReserveTableForm1 = ({
  form,
}: {
  form: useMultistepFormReturn<
    reserveTableFormType1 & reserveTableFormType2 & reserveTableFormType3
  >;
}) => {
  const [dateOptions] = useState<OptionType[]>(getDateOptions(30));
  const [timeOptions, setTimeOptions] = useState<OptionType[]>(
    fetchAPI(new Date(dateOptions[0].value)),
  );

  const reserveTableForm1 = useForm<reserveTableFormType1>({
    resolver: zodResolver(reserveTableFormSchema1),
    defaultValues: form.defaultValues,
  });

  return (
    <Form {...reserveTableForm1}>
      <ScrollToTop />
      <form
        onSubmit={reserveTableForm1.handleSubmit((values) => form.next(values))}
        className="mt-8"
      >
        <Typography
          variant="h4"
          className="mb-4 mt-12 text-2xl font-medium normal-case text-white"
        >
          Find a table for any occasion
        </Typography>
        <div className="mb-4 grid grid-cols-[1fr_1fr] gap-[1rem_2.5rem]">
          <img src={Img1} alt="Restaurant" />
          <img src={Img2} alt="Restaurant" />
        </div>
        <div className="mb-4 grid gap-[1rem_2.5rem] sm:grid-cols-[3fr_2fr_2fr] md:grid-cols-[1fr_1fr_1fr]">
          <FormField
            control={reserveTableForm1.control}
            name="reservation_date"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Select
                    options={dateOptions}
                    isSearchable={false}
                    {...field}
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e);
                      const newTimeOptions = fetchAPI(
                        e ? new Date(e.value) : new Date(),
                      );
                      setTimeOptions(newTimeOptions);
                      reserveTableForm1.setValue(
                        "reservation_time",
                        newTimeOptions[0],
                      );
                    }}
                  />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
          <FormField
            control={reserveTableForm1.control}
            name="reservation_time"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Select
                    options={timeOptions}
                    isSearchable={false}
                    isDisabled={timeOptions.length === 0}
                    {...field}
                  />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
          <FormField
            control={reserveTableForm1.control}
            name="diners_no"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>Number of Diners</FormLabel>
                <FormControl>
                  <Select
                    options={dinersOptions}
                    isSearchable={false}
                    {...field}
                  />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4 grid gap-[1rem_2.5rem] sm:grid-cols-[1fr_1fr]">
          <FormField
            control={reserveTableForm1.control}
            name="occasion"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>Occasion</FormLabel>
                <FormControl>
                  <Select
                    options={occasionOptions}
                    isSearchable={false}
                    {...field}
                  />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
          <FormField
            control={reserveTableForm1.control}
            name="seating"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormLabel>Seating</FormLabel>
                <FormControl>
                  <Select
                    options={seatingOptions}
                    isSearchable={false}
                    {...field}
                  />
                </FormControl>
                <FormMessage icon={<XIcon />} />
              </FormItem>
            )}
          />
        </div>
        <Button
          variant="accent"
          size="lg"
          className="my-4 w-full"
          type="submit"
        >
          Lets go
        </Button>
      </form>
    </Form>
  );
};
export default ReserveTableForm1;
