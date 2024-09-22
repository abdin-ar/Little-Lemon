import { menuItems } from "@/data/menuItems";
import Typography from "../common/Typography";
import { Button } from "../ui/button";
import MenuItem from "./MenuItem";

const Specials = () => {
  return (
    <article className="flex h-fit items-center justify-center py-12">
      <div className="w-content">
        <div className="flex w-full items-center justify-between">
          <Typography variant="h3" element="h3">
            Specials
          </Typography>
          <Button size="md" variant="secondary" asChild>
            <a href="#">Online Menu</a>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(16.5rem,1fr))] gap-8">
          {menuItems.map((item) => {
            return <MenuItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </article>
  );
};
export default Specials;
