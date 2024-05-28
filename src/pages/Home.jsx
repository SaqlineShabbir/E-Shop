import { useEffect, useState } from "react";
import ProductCard from "../components/product/productCard";

export default function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    // fetch("https://inventory-backend-ooh5.onrender.com/api/v1/recipe")
    //   .then((res) => res.json())
    //   .then((data) => setRescipes(data));

    async function load() {
      //get recipies
      const productRes = await fetch(
        "https://inventory-backend-ooh5.onrender.com/api/v1/product"
      );
      const productData = await productRes.json();
      console.log(productData);
      setProducts(productData?.data);
      //get categories
    }
    load();
  }, []);

  return (
    <div>
      {/* <Banner /> */}

      <div className="lg:mx-[200px]  mx-5"></div>
      <div className="lg:mx-[200px] mx-5 lg:my-[200px] my-10 ">
        <h1 className="text-4xl text-center mb-20">Our Products </h1>
        <div className="grid grid-cols-3 gap-6">
          {products
            ?.reverse()
            ?.slice(0, 4)
            ?.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
