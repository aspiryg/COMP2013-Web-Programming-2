import { useState } from "react";
import ProductsCardContainer from "./ProductCardsContainer";
import CartContainer from "./CartContainer";

export default function ProductApp({ data }) {
  const [productQuantity, setProductQuantity] = useState(
    data.map((prod) => {
      return {
        id: prod.id,
        quantity: prod.quantity,
        priceOptions: prod.priceOptions[0],
      };
    })
  );

  // Cart state
  const [cart, setCart] = useState([]); // {id, product, quantity, currentPrice}

  const handleOnChangePrice = (productId, e) => {
    const newProductQuantity = productQuantity.map((prod) => {
      if (prod.id === productId) {
        return { ...prod, priceOptions: e.target.value };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
    return;
  };

  const handleAddToQuantity = (productId) => {
    const newProductQuantity = productQuantity.map((prod) => {
      if (prod.id === productId) {
        return { ...prod, quantity: prod.quantity + 1 };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
  };

  const handleRemoveQuantity = (productId) => {
    const newProductQuantity = productQuantity.map((prod) => {
      return prod.id === productId
        ? { ...prod, quantity: prod.quantity && prod.quantity - 1 }
        : prod;
    });
    setProductQuantity(newProductQuantity);
  };

  // TODO LIST:
  // 1. Click "Add to Cart" button in ProductCard if the product is not in the cart, add it to the cart with its current quantity and price.
  // 2. If the product is already in the cart, post a message "Product is already in the cart".
  // 3. If the user add to cart a product with quantity 0, show a message "Quantity must be at least 1".

  const handleAddToCart = (productId) => {
    const currentProduct = productQuantity.find(
      (prod) => prod.id === productId
    );

    // Check if quantity is at least 1
    if (currentProduct.quantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    // Check if the product is already in the cart
    const isInCart = cart.find((item) => item.id === productId);
    if (isInCart) {
      alert("Product is already in the cart");
      return;
    }

    // Add product to cart
    const productDetails = data.find((prod) => prod.id === productId);
    const newCartItem = {
      ...productDetails,
      quantity: currentProduct.quantity,
      currentPrice: currentProduct.priceOptions,
    };
    setCart((prevCart) => [...prevCart, newCartItem]);
  };

  // This function will remove selected item from cart
  const handleRemoveFromCart = (productId) => {
    console.log("Removing product with id:", productId);
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
  };

  return (
    <div>
      <div>
        <ProductsCardContainer
          data={data}
          productQuantity={productQuantity}
          handleOnChangePrice={handleOnChangePrice}
          handleAddToQuantity={handleAddToQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleAddToCart={handleAddToCart}
        />
      </div>
      <div>
        <h2>Cart</h2>
        <p>{cart.length === 0 ? "Your cart is empty" : null}</p>
        <CartContainer
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </div>
  );
}
