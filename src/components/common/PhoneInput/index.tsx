import { cn } from "@/lib/utils";
import PhoneInputWithCountrySelect, {
  DefaultInputComponentProps,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./styles.css";
import { forwardRef } from "react";

const PhoneInput = forwardRef<HTMLInputElement, DefaultInputComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <PhoneInputWithCountrySelect
        // @ts-expect-error
        ref={ref}
        className={cn(
          "border-grey-850 h-[3.3125rem] w-full rounded-xl border border-solid bg-transparent px-[1.25em] py-[0.5em] text-base text-black shadow-[0px_0px_8px_0px_#00000017] outline-none placeholder:text-muted-foreground focus-visible:border focus-visible:border-black focus-visible:outline-none",
          className,
        )}
        {...props}
      />
    );
  },
);
export default PhoneInput;
