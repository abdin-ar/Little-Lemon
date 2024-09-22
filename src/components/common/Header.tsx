import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import CartIcon from "@/assets/svg/CartIcon";
import Logo from "@/assets/image/Logo.jpg";
import { LucideXCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import BurgerIcon from "@/assets/svg/BurgerIcon";
import { navLinks } from "@/data/navLinks";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="sticky left-0 top-0 z-[999] flex h-fit items-center justify-center bg-background py-2">
      <nav className="w-content flex items-center justify-between gap-x-4">
        <Button
          variant={"link"}
          size={"link"}
          className="w-6 md:hidden"
          onClick={() => setIsNavOpen(true)}
        >
          <BurgerIcon className="w-full" />
        </Button>
        <Button variant={"link"} size={"link"} asChild className="w-32 sm:w-44">
          <Link to="/">
            <img
              src={Logo}
              alt="Little Lemon Restaurant Logo"
              className="w-full"
            />
          </Link>
        </Button>
        <Button variant={"link"} size={"link"} asChild className="md:order-1">
          <a href="#">
            <CartIcon className="w-7 md:w-9" />
          </a>
        </Button>
        <ul
          className={cn(
            "fixed left-0 top-0 z-[1000] hidden h-full w-full list-none flex-col items-center justify-center gap-5 bg-background text-center md:static md:flex md:flex-row md:bg-none lg:gap-x-8",
            isNavOpen && "flex",
          )}
        >
          <li>
            <Button
              variant="link"
              size="link"
              className="mb-8 block md:hidden"
              onClick={() => setIsNavOpen(false)}
            >
              <LucideXCircle />
            </Button>
          </li>
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <Button
                  variant="link"
                  size="link"
                  asChild
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.to === "#" ? (
                    <a href="#">{link.name}</a>
                  ) : (
                    <Link to={link.to}>{link.name}</Link>
                  )}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
