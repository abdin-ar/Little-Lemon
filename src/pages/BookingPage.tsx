import BookingMain from "@/components/booking/BookingMain";
import ReserveTableForm1 from "@/components/booking/ReserveTableForm1";
import {
  reserveTableFormSchema1,
  reserveTableFormType1,
  SignupFormDefault1,
} from "@/components/booking/ReserveTableForm1/schema";
import ReserveTableForm2 from "@/components/booking/ReserveTableForm2";
import {
  reserveTableFormSchema2,
  reserveTableFormType2,
  SignupFormDefault2,
} from "@/components/booking/ReserveTableForm2/schema";
import ReserveTableForm3 from "@/components/booking/ReserveTableForm3";
import {
  reserveTableFormSchema3,
  reserveTableFormType3,
  SignupFormDefault3,
} from "@/components/booking/ReserveTableForm3/schema";
import useMultistepForm from "@/hooks/useMultistepForm";

// const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const BookingPage = () => {
  const reserveTableForm = useMultistepForm<
    reserveTableFormType1 & reserveTableFormType2 & reserveTableFormType3
  >([
    {
      schema: reserveTableFormSchema1,
      defaultValues: SignupFormDefault1,
    },
    {
      schema: reserveTableFormSchema2,
      defaultValues: SignupFormDefault2,
    },
    {
      schema: reserveTableFormSchema3,
      defaultValues: SignupFormDefault3,
    },
  ]);

  const FormElements = [
    <ReserveTableForm1 form={reserveTableForm} />,
    <ReserveTableForm2 form={reserveTableForm} />,
    <ReserveTableForm3 form={reserveTableForm} />,
  ];

  return (
    <BookingMain>{FormElements[reserveTableForm.currentStepIndex]}</BookingMain>
    // <div>
    //   <form className="grid max-w-[200px] gap-5">
    //     <label htmlFor="res-date">Choose date</label>
    //     <input type="date" id="res-date" />
    //     <label htmlFor="res-time">Choose time</label>
    //     <select id="res-time ">
    //       {availableTimes.map((time) => {
    //         return <option key={time}>{time}</option>;
    //       })}
    //     </select>
    //     <label htmlFor="guests">Number of guests</label>
    //     <input type="number" placeholder="1" min="1" max="10" id="guests" />
    //     <label htmlFor="occasion">Occasion</label>
    //     <select id="occasion">
    //       <option>Birthday</option>
    //       <option>Anniversary</option>
    //     </select>
    //     <input type="submit" value="Make Your reservation" />
    //   </form>
    // </div>
  );
};
export default BookingPage;
