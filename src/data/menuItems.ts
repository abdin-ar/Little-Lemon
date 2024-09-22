import GreekSalad from "../assets/image/greek salad.jpg";
import Bruchetta from "../assets/image/bruchetta.jpg";
import LemonDessert from "../assets/image/lemon dessert.jpg";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

export const menuItems: MenuItem[] = [
  {
    id: "0",
    name: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: GreekSalad,
    price: 12.99,
  },
  {
    id: "1",
    name: "Bruchetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: Bruchetta,
    price: 5.99,
  },
  {
    id: "2",
    name: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: LemonDessert,
    price: 4.99,
  },
];
