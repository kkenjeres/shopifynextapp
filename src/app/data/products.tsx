import nb1 from "../../../public/images/nb1.png";
import nb2 from "../../../public/images/nb2.png";
import nb3 from "../../../public/images/nb3.png";
import nb4 from "../../../public/images/nb4.png";
import nb5 from "../../../public/images/nb5.png";
import nb6 from "../../../public/images/nb6.png";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}
export const products: Product[] = [
  { id: 1, title: "New Balance 574 Vintage Brights", price: 650, image: "/images/nb3.png" },
  {
    id: 2,
    title: "New Balance Made in UK 920 Chinese New Year",
    price: 1200,
    image: "/images/nb2.png",
  },
  { id: 3, title: "New Balance 373 Modern Classics", price: 800, image: "/images/nb1.png" },
  {
    id: 4,
    title: "New Balance Made in UK 670 Chinese New Year",
    price: 780,
    image: "/images/nb4.png",
  },
  { id: 5, title: "New Balance X-Racer Utility", price: 1000, image: "/images/nb5.png" },
  { id: 6, title: "New Balance 5740 Think Colorfully", price: 940, image: "/images/nb6.png" },
];
