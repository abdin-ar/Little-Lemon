import { testimonials } from "@/data/testimonials";
import Typography from "../common/Typography";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <article className="flex h-fit items-center justify-center bg-[#D9D9D9] py-12">
      <div className="w-content">
        <Typography variant="h3" element="h3" className="text-center">
          Testimonials
        </Typography>
        <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-6">
          {testimonials.map((item) => {
            return <Testimonial key={item.id} {...item} />;
          })}
        </div>
      </div>
    </article>
  );
};
export default Testimonials;
