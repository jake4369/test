import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "Test Product 1",
    link: "http://www.testlink.co.uk",
    thumbnail: "/assets/images/hero1.jpg",
  },
  {
    title: "Test Product 5",
    link: "http://www.testlink.co.uk",
    thumbnail: "/assets/images/hero5.jpg",
  },
  {
    title: "Test Product 3",
    link: "http://www.testlink.co.uk",
    thumbnail: "/assets/images/hero3.jpg",
  },
  {
    title: "Test Product 4",
    link: "http://www.testlink.co.uk",
    thumbnail: "/assets/images/hero4.jpg",
  },
  {
    title: "Test Product 2",
    link: "http://www.testlink.co.uk",
    thumbnail: "/assets/images/hero2.jpg",
  },
];

const Home = () => {
  return <HeroParallax products={products} />;
};

export default Home;
