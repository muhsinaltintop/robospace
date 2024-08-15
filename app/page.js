import Slider from "./_components/Slider";
import Specifications from "./_components/Specifications";
import Contact from "./_components/Contact";
import Products from "./_components/Products";

export default function Home() {
  return (
    <div>
      <Slider />
      <Products />
      <Specifications />
      <Contact />
    </div>
  );
}
