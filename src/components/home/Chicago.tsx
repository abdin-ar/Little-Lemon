import Typography from "../common/Typography";
import Chefs1 from "../../assets/image/chefs1.jpg";
import Chefs2 from "../../assets/image/chefs2.jpg";

const Chicago = () => {
  return (
    <article className="flex h-fit items-center justify-center py-12">
      <div className="w-content grid grid-rows-[auto_auto] justify-between gap-8 lg:grid-cols-2 lg:grid-rows-1">
        <div className="h-fit">
          <Typography variant="h1" element="h1">
            Little Lemon
          </Typography>
          <Typography variant="h2" element="h2">
            Chicago
          </Typography>
          <Typography
            variant="h6"
            element="p"
            className="py-4 text-theme-darkgreen"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </Typography>
        </div>
        <div className="mx-auto grid h-fit max-w-md grid-cols-5 grid-rows-6">
          <img
            src={Chefs2}
            alt="Little Lemon Restaurant Chefs"
            className="col-start-1 col-end-4 row-start-2 row-end-7 -scale-x-100 rounded-lg"
          />
          <img
            src={Chefs1}
            alt="Little Lemon Restaurant Chefs"
            className="col-start-3 col-end-6 row-start-1 row-end-6 scale-x-100 rounded-lg"
          />
        </div>
      </div>
    </article>
  );
};
export default Chicago;
