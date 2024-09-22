import { cn } from "@/lib/utils";
import { AllHTMLAttributes } from "react";
type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Paragraphs = "p" | "small";
type TypographyProps =
  | (AllHTMLAttributes<HTMLHeadingElement> & {
      element?: Headings;
      variant?: Headings | Paragraphs;
    })
  | (AllHTMLAttributes<HTMLParagraphElement> & {
      element?: Paragraphs;
      variant?: Headings | Paragraphs;
    });

const styles = {
  h1: "max-w-prose text-balance font-markazi text-[4rem] font-medium capitalize leading-[1.1]",
  h2: "max-w-prose text-balance font-markazi text-[2.5rem] font-normal capitalize leading-[1.1]",
  h3: "max-w-prose text-balance font-karla text-xl font-extrabold uppercase",
  h4: "max-w-prose text-balance font-karla text-lg font-bold uppercase leading-snug",
  h5: "max-w-prose text-balance font-karla text-lg font-bold capitalize leading-snug",
  h6: "max-w-prose text-pretty font-karla text-lg font-medium leading-snug",
  p: "max-w-prose text-pretty font-karla text-lg font-normal leading-snug",
  small:
    "max-w-prose text-pretty font-karla text-base font-normal leading-normal",
};

const Typography = ({
  element = "p",
  variant = "p",
  children,
  className,
  ...props
}: TypographyProps) => {
  const Element = element;
  return (
    <Element className={cn(styles[variant], className)} {...props}>
      {children}
    </Element>
  );
};
export default Typography;
