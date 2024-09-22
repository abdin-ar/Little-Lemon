import FacebookIcon from "@/assets/svg/FacebookIcon";
import InstagramIcon from "@/assets/svg/InstagramIcon";
import XIcon from "@/assets/svg/XIcon";

export type SocialLink = {
  id: string;
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const socialLinks: SocialLink[] = [
  {
    id: "0",
    name: "Facebook",
    href: "#",
    icon: FacebookIcon,
  },
  {
    id: "1",
    name: "Instagram",
    href: "#",
    icon: InstagramIcon,
  },
  {
    id: "2",
    name: "X",
    href: "#",
    icon: XIcon,
  },
];
