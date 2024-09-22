import { Rating as RatingEl, RatingProps } from "react-simple-star-rating";

const Rating = ({
  containerClassName = "",
  SVGstyle,
  ...props
}: { containerClassName?: string } & RatingProps) => {
  return (
    <div
      style={{
        direction: "ltr",
        fontFamily: "sans-serif",
        touchAction: "none",
      }}
      className={containerClassName}
    >
      <RatingEl
        {...props}
        SVGstyle={{ ...SVGstyle, display: "inline-block" }}
      />
    </div>
  );
};
export default Rating;
