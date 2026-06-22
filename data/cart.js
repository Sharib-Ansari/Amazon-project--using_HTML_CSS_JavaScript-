// modules hlp to prevent naming conflict and and we dont worry about the sequece of the file in main html file or else where
export const cart = [];

//CREATING FUNCTION THAT ADD WORKING IN ADD TO CART BUTTON
export function addToCart(productId){
   //loop trough an array to check the item exist or not if it is increase by 1 otherwise add to cart
    let matchingItem;

    cart.forEach((cartItem) =>{
    if (productId === cartItem.productId){
      matchingItem = cartItem;
    }
    }); 
    
    //Adds that selected quantity to the cart instead of always adding 1 feature
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`
    );
    const quantity = Number(quantitySelector.value);

    if (matchingItem) {
    matchingItem.quantity += quantity;
    } else {
      cart.push({// added to cart by name and quntity
        productId: productId,
        quantity: quantity
      });
    }
 };