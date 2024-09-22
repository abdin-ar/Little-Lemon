import { ReactNode } from "react";
import Typography from "../common/Typography";

type BookingMainProps = {
  children?: ReactNode;
};

const BookingMain = ({ children }: BookingMainProps) => {
  return (
    <article className="flex h-fit items-center justify-center bg-theme-darkgreen py-8">
      <div className="w-content">
        <Typography variant="h1" element="h1" className="text-theme-yellow">
          Little Lemon
        </Typography>
        <Typography variant="h2" element="h2" className="text-theme-lightgrey">
          Chicago
        </Typography>
        {children}
      </div>
    </article>
  );
};
export default BookingMain;
