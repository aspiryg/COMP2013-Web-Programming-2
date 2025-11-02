export default function CartCard({
  id,
  product,
  quantity,
  currentPrice,
  handleRemoveFromCart,
}) {
  return (
    <div className="CartItem">
      <h2>{product}</h2>
      <p>Quantity: {quantity}</p>
      <p>Total Price: ${(currentPrice * quantity).toFixed(2)}</p>
      <button onClick={() => handleRemoveFromCart(id)}>Remove from Cart</button>
    </div>
  );
}
