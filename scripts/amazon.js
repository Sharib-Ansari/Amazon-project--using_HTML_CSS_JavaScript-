// const products = [//saving the data in a list (array)
  
//   { 
//   image:'images/products/athletic-cotton-socks-6-pairs.jpg',
//   name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//   rating: {
//     stars: 4.5,
//     count: 87
//   },
//   priceCents: 1090
// }, {
//   image:'images/products/intermediate-composite-basketball.jpg',
//     name: 'Intermediate Size Basketball',
//     rating: {
//       stars: 3,
//       count: 127
//     },
//     priceCents: 2095
// }, {
//    image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating: {
//       stars: 4.5,
//       count: 56
//     },
//     priceCents: 799 
// }];

//Now all the data is taken from the products.js from data folder

let productsHTML = ''; // this is called accumulator pattern

// we force it show 2 decimals using toFixed method when we deal with the cost 
products.forEach((product) => {// this will loop through the products.js file rather than manually created it
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name} 
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars*10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>
      
      <div class="product-price">
        ${(product.priceCents / 100).toFixed(2)} 
      </div>

      <div class="product-quantity-container">                    <select class="js-quantity-selector-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart 
      </button>
    </div>
  `;

});

//Taking html through DOM 
document.querySelector('.js-products-grid').
innerHTML = productsHTML;

// adding functionality in Add to cart button by DOM
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {

    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      //data-product-name="${product.name}" this is a html attribut which is used to get the exact element into js
      //button.dataset.productName = to exactly get he name of the product not anything else
      
        //loop trough an array to check the item exist or not if it is increase by 1 otherwise add to cart
        let matchingItem;

       cart.forEach((item) =>{
        if (productId === item.productId){
          matchingItem = item;
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
        
        // make cart quantity interactive

        let cartQuantity = 0;

        cart.forEach((item) => {
          cartQuantity += item.quantity;
        });

        //update the result in the page 
        document.querySelector('.js-cart-quantity')
         .innerHTML = cartQuantity;
         

    });

  });

