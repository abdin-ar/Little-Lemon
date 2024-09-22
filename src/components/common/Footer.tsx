import { navLinks } from "@/data/navLinks";
import Logo2 from "../../assets/image/logo2.png";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Typography from "./Typography";
import { socialLinks } from "@/data/socialLinks";

const Footer = () => {
  return (
    <footer className="flex h-fit items-center justify-center bg-[#D9D9D9] py-12">
      <div className="w-content flex flex-col gap-8 sm:flex-row sm:justify-between">
        <section className="flex justify-between gap-8 sm:justify-start">
          <img
            src={Logo2}
            alt="Little Lemon Restaurant Logo"
            className="w-24"
          />
          <div className="flex flex-col items-center gap-2 sm:items-start">
            {navLinks.map((link) => {
              return (
                <Button key={link.id} asChild variant="ghost" size="link">
                  {link.to === "#" ? (
                    <a href="#">{link.name}</a>
                  ) : (
                    <Link to={link.to}>{link.name}</Link>
                  )}
                </Button>
              );
            })}
          </div>
        </section>
        <section className="flex flex-col items-center justify-between gap-2 sm:items-start">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <Typography
              className="text-center font-medium sm:text-left"
              variant="small"
            >
              15 Food St., Chicago
            </Typography>
            <Typography
              className="text-center font-medium sm:text-left"
              variant="small"
            >
              +1 (234) 567-8900
            </Typography>
            <a href="mailto:info@little-lemon.com">
              <Typography
                className="text-center font-medium sm:text-left"
                variant="small"
              >
                info@little-lemon.com
              </Typography>
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 pt-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button key={link.id} asChild variant="ghost" size="link">
                  <a href={link.href}>
                    <Icon className="w-4" />
                  </a>
                </Button>
              );
            })}
          </div>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
