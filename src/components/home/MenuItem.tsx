import type { MenuItem } from "@/data/menuItems";
import Typography from "../common/Typography";
import { Button } from "../ui/button";
import DeliveryIcon from "@/assets/svg/DeliveryIcon";

const MenuItem = ({ name, description, price, image }: MenuItem) => {
  return (
    <section className="grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-t-md">
      <img
        src={image}
        alt={name}
        className="aspect-[265/185] w-full object-cover"
      />
      <div className="grid grid-rows-[auto_1fr_auto] gap-4 bg-secondary p-6">
        <div className="flex h-fit w-full items-center justify-between">
          <Typography variant="h5" element="h5">
            {name}
          </Typography>
          <Typography variant="h6" className="leading-snug text-theme-lightred">
            ${price}
          </Typography>
        </div>
        <Typography variant="small" className="text-theme-darkgreen">
          {description}
        </Typography>
        <Button
          variant="ghost"
          size="link"
          className="w-full justify-start gap-3 font-bold text-theme-darkgrey"
        >
          Order a delivery <DeliveryIcon />
        </Button>
      </div>
    </section>
  );
};
export default MenuItem;
