import type { Testimonial } from "@/data/testimonials";
import Rating from "../common/Rating";
import Typography from "../common/Typography";

const Testimonial = ({ name, rating, review, image }: Testimonial) => {
  return (
    <section className="flex flex-col gap-2 rounded-md bg-primary-foreground p-6">
      <div className="grid grid-cols-[auto_1fr] items-center gap-2">
        <img
          src={image}
          alt={name}
          className="max-h-14 max-w-14 rounded-circle"
        />
        <div>
          <Typography variant="h5" className="-mb-2 text-base">
            {name}
          </Typography>
          <Rating readonly initialValue={rating} allowFraction size={14} />
        </div>
      </div>
      <Typography variant="small" className="text-sm">
        {review}
      </Typography>
    </section>
  );
};
export default Testimonial;
