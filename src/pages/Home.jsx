import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCards from "../components/ProductCards";
import Reviews from "../components/Reviews";

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <ProductCards />
      <Reviews />
    </div>
  );
}

export default Home;