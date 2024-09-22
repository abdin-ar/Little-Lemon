import { Link } from "react-router-dom";
import Typography from "../common/Typography";
import { Button } from "../ui/button";
import HeroImg from "../../assets/image/restaurant chef B.jpg";

const Hero = () => {
  return (
    <article className="flex h-fit items-center justify-center bg-theme-darkgreen py-8">
      <div className="w-content grid items-center justify-between gap-x-8 lg:grid-cols-2">
        <div>
          <Typography variant="h1" element="h1" className="text-theme-yellow">
            Little Lemon
          </Typography>
          <Typography
            variant="h2"
            element="h2"
            className="text-theme-lightgrey"
          >
            Chicago
          </Typography>
          <Typography
            variant="h6"
            element="p"
            className="py-4 text-theme-lightgrey"
          >
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Typography>
          <Button asChild variant={"accent"} size={"lg"} className="mb-2 mt-10">
            <Link to={"/booking"}>Reserve a table</Link>
          </Button>
        </div>
        <div>
          <img
            src={HeroImg}
            alt="Little Lemon Restaurant Chef"
            className="hidden rounded-lg shadow-[0.3rem_0.3rem_0px_hsl(var(--yellow))] lg:block"
          />
        </div>
      </div>
    </article>
  );
};
export default Hero;
