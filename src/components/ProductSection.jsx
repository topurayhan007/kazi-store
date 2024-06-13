/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import SectionHeading from "./shared/SectionHeading";
import SectionSubHeading from "./shared/SectionSubHeading";
import { Products } from "../constants/Products";
import ProductCard from "./ProductCard";
import productServices from "../services/productServices";
import { CartContext } from "../providers/CartProvider";

const ProductSection = () => {
  const [products, setProducts] = useState(Products);
  const { setCartItems } = useContext(CartContext);

  // example to fetch from db
  /*  const [products, setProducts] = useState(null);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = await productServices.getProducts();
        setProducts(allProducts);
      } catch (error) {
        console.log(error);
      }
    };

    loadProducts();
  }, []); */

  const handleAddToCart = (productId, productQuantity) => {
    // find the matched product
    const selectedProduct = products.find((product) => product.id == productId);
    // Add the product to the local storage and increment the cartItem and make a total of the price

  };

  return (
    <section className="wrapper">
      <SectionHeading>Our Products</SectionHeading>
      <SectionSubHeading>
        Highest quality and affordable prices
      </SectionSubHeading>
      <div className="grid grid-cols-3 gap-5">
        {products !== null &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              details={{
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
                top_ordered: product.top_ordered,
              }}
              handleAddToCart={handleAddToCart}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductSection;
