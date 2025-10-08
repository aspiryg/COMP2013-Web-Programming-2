import { useState } from "react";
import data from "../data/data";
const testProduct = data[0]; // import data for testing
export default function ProductCard({
  product = testProduct.product,
  priceOptions = testProduct.priceOptions,
  img = testProduct.img,
  quantity = testProduct.quantity,
}) {
  console.log(testProduct);
  const [productQuantity, setProductQuantity] = useState({
    quantity,
    priceOptions: priceOptions[0],
  });
  return (
    <div className="product-card">
      <img src={img} alt="" height="100px" />
      <h3>{product}</h3>
      <p>Quantity: {productQuantity.quantity}</p>
      <select
        name=""
        id=""
        value={productQuantity.priceOptions}
        onChange={(e) => {
          console.log(e);
          setProductQuantity((prevData) => {
            return { ...prevData, priceOptions: parseFloat(e.target.value) };
          });
        }}
      >
        {priceOptions.map((opt, index) => (
          <option key={index} value={opt}>
            {opt.toFixed(2)}
          </option>
        ))}
      </select>
      <p>
        Total Price: $
        {(productQuantity.quantity * productQuantity.priceOptions).toFixed(2)}
      </p>
      <button
        onClick={() =>
          setProductQuantity((prevData) => {
            return { ...prevData, quantity: prevData.quantity + 1 };
          })
        }
      >
        Add
      </button>
      <button
        onClick={() =>
          setProductQuantity((prevData) => {
            return {
              ...prevData,
              quantity: prevData.quantity && prevData.quantity - 1,
            };
          })
        }
      >
        Remove
      </button>
    </div>
  );
}
