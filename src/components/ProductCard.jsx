import { useState } from "react";

/* eslint-disable react/prop-types */
const ProductCard = ({ details, handleAddToCart }) => {
  const { id, name, description, price, image, top_ordered } = details;
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="p-5 rounded-xl bg-slate-100">
      <img
        className="rounded-lg w-full h-56 object-cover"
        src={image}
        alt="Product Image"
      />
      <h6>{name}</h6>
      <p>{description}</p>
      <p>Price: ${price}</p>
      {top_ordered && <span> {top_ordered} Top Ordered</span>}
      <div className="flex items-center my-3 w-1/2 gap-3">
        <button
          className="btn bg-slate-200 rounded-full p-4 flex justify-center items-center"
          onClick={() => quantity !== 0 && setQuantity(quantity - 1)}
        >
          -
        </button>

        <p className="bg-white p-5 rounded-md">{quantity}</p>
        <button
          className="btn bg-slate-200 rounded-full p-4 flex justify-center items-center"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <button
        className="btn btn-primary block"
        onClick={() => quantity > 0 && handleAddToCart(id, quantity)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
