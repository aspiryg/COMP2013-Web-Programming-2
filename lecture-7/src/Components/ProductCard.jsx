export default function ProductCard({
  productQuantity,
  img,
  priceOptions,
  product,
  handleOnChangePrice,
  handleAddToQuantity,
  handleRemoveQuantity,
  handleAddToCart,
}) {
  return (
    <div className="ProductCard">
      <img src={img} alt="" height="100px" />

      <h3>{product}</h3>

      <p>Quantity: {productQuantity.quantity}</p>

      <select
        value={productQuantity.priceOptions}
        onChange={(e) => {
          handleOnChangePrice(productQuantity.id, e);
        }}
        // multiple={false}
      >
        {priceOptions.map((price, index) => (
          <option key={index} value={price}>
            {price.toFixed(2)}
          </option>
        ))}
      </select>

      <p>
        Total Price: $
        {(productQuantity.quantity * productQuantity.priceOptions).toFixed(2)}
      </p>

      <button onClick={() => handleAddToQuantity(productQuantity.id)}>
        Add
      </button>

      <button onClick={() => handleRemoveQuantity(productQuantity.id)}>
        Remove
      </button>
      <button onClick={() => handleAddToCart(productQuantity.id)}>
        Add to Cart
      </button>
    </div>
  );
}
