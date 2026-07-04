import { cart } from "../../data/cart.js";
import { getProduct, products } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOption.js";

export function renderPaymentSummary () {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
   const product = getProduct(cartItem.productId);
   productPriceCents += product.priceCents* cartItem.quantity;

   const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
   shippingPriceCents += deliveryOption.priceCents
  });

  console.log(productPriceCents);
  console.log (shippingPriceCents);
}