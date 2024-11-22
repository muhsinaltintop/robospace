import Slider from "./_components/Slider";
import Specifications from "./_components/Specifications";
import Contact from "./_components/Contact";
import Products from "./_components/Products";
import { getAllProducts } from "./_utils/GlobalApi";


const Home = async() => {
const products = await getAllProducts();
  return (
    <div>
      <Slider />
      <Products products={products} />
      <Specifications />
      <Contact />
    </div>
  );
}

export default Home