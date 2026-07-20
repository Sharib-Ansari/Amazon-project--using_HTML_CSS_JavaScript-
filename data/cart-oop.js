// modules hlp to prevent naming conflict and and we dont worry about the sequece of the file in main html file or else where

//in this file we learn abbout oop (conveting everything in objects)
//method= function inside an object

// creating a function to store the data about cart products

const cart = {
  cartItems: undefined,

  loadFromStorage: function(){
    this.cartItems = JSON.parse(localStorage.getItem('cart-oop')); //this is used to change the item back to array 

    if(!this.cartItems) {
        this.cartItems = [{
        productId:
        'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      },{
        productId:
        '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }];
    }
 },

  saveToStorage(){//short hand method
    localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
  },


  //CREATING FUNCTION THAT ADD WORKING IN ADD TO CART BUTTON
  addToCart(productId){
   //loop trough an array to check the item exist or not if it is increase by 1 otherwise add to cart
    let matchingItem;

    this.cartItems.forEach((cartItem) =>{
    if (productId === cartItem.productId){
      matchingItem = cartItem;
    }
    }); 
    
    //Adds that selected quantity to the cart instead of always adding 1 feature
    let quantity = 1;

    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`
    );

    if (quantitySelector) {
      quantity = Number(quantitySelector.value);
    }

    if (matchingItem) {
    matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({// added to cart by name and quntity
        productId: productId,
        quantity: quantity,
        deliveryOptionId: '1'
      });
    }
    //calling the function to save the cart products
    this.saveToStorage();
  },

  //fucntion for remove the item from cart
 removeFromCart(productId){
  const newCart = [];

  this.cartItems.forEach((cartItem) => {
    if (cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  this.cartItems = newCart;// update the cart

  //calling the function to save the cart products
  this.saveToStorage();
},

//function for making cart interactive
 updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;

      this.cartItems.forEach((cartItem) =>{
      if (productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
 },


};
cart.loadFromStorage();










 

  