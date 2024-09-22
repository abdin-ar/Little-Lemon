import Person1 from "../assets/image/person1.jpg";
import Person2 from "../assets/image/person2.jpg";
import Person3 from "../assets/image/person3.jpg";
import Person4 from "../assets/image/person4.jpg";

export type Testimonial = {
  id: string;
  name: string;
  rating: number;
  review: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "0",
    name: "John Doe",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa quia ab dolor velit quas numquam eligendi!",
    image: Person1,
  },
  {
    id: "1",
    name: "Sam Doe",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit expedita, a temporibus pariatur!",
    image: Person2,
  },
  {
    id: "2",
    name: "Mike Doe",
    rating: 5,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eveniet minima adipisci saepe quos sed ipsum enim.",
    image: Person3,
  },
  {
    id: "3",
    name: "Tom Doe",
    rating: 3,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illo atque placeat qui doloribus!",
    image: Person4,
  },
];
