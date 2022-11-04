//Array copiado a otro archivo.

// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Exercise 1
function buy(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      cartList.push(products[i]);
      console.log(cartList); //probando la función. Ok.
    }
  }

  return cartList;
}

// debugger para probar!!!

// Exercise 2

function cleanCart() {
  cartList = [];
  cart = [];
  total = 0;
  console.log(cartList);
}

// Exercise 3
function calculateTotal() {
  //acá funcion sumar array.
  // Calculate total price of the cart using the "cartList" array

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].subtotalWithDiscount) {
      total += cart[i].subtotalWithDiscount;
    } else {
      total += cart[i].subtotal;
    }
  }
  console.log(total);
  return total;
}

// Exercise 4

function generateCart() {
  console.log("cart list ", cartList);
  for (let i = 0; i < cartList.length; i++) {
    //Recorro la CartList y la cart para buscar coincidencias, si encuentro coincidencia
    //la cantidad aumenta.
    let igual = false;
    //console.log('inside first for ', i);
    for (let j = 0; j < cart.length && !igual; j++) {
      // console.log('inside second for ', j);
      if (cartList[i].id === cart[j].id) {
        //console.log('equal id ');
        igual = true;
        cart[j].quantity++;
      }
    }
    if (!igual) {
      cartList[i].quantity = 1;
      cartList[i].subtotal;
      cart.push(cartList[i]);
      console.log(cartList[i]);
      //console.log('cart list item quantity ', cartList[i].quantity)
      // console.log('cart list item ', cartList[i])
    }
  }
  console.log(cart);
}

//Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  console.log("Applying promotions");
  cart = cart.map((product) => {
    //renombramos la variable cart y mapeamos en busqueda de product.
    //si el producto id es el 1 o 3 y además tiene el valor product.offer.number
    //aplicamos el descuento que sería el precio por el porcentaje que está como valor en el objeto
    //y dividimos 100.
    //Establecemos el valor subtotalWithDiscount y lo multiplicamos por la cantidad que hay de productos en cart.
    if (
      (product.id === 1 || product.id === 3) &&
      product.quantity >= product.offer.number
    ) {
      const finalPriceOfProduct =
        product.price - (product.price * product.offer.percent) / 100;
      console.log("Precio original: ", product.name, product.price);
      console.log("Precio con descuento: ", product.name, finalPriceOfProduct);

      product.subtotalWithDiscount = finalPriceOfProduct * product.quantity;

      console.log(product.price);
    } else {
      product.subtotal = product.price * product.quantity;

      console.log("Producto subtotal", product.name, product.subtotal);
    }

    return product;
  });
}

//Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  generateCart();
  applyPromotionsCart();
  // addToCart();
  calculateTotal(cart);

  let cartTable = document.getElementById("cart_list");
  let totalCart = document.getElementById("total_price");

  for (let i = 0; i < cart.length; i++) {
    let rows = document.createElement("tr");
    let celds = document.createElement("th");
    let precio = document.createElement("td");
    let quantity = document.createElement("td");
    let totalT = document.createElement("td");

    //Nombre
    celds.textContent = cart[i].name;
    //Precio
    precio.textContent = cart[i].price;
    //Cantidad
    quantity.textContent = cart[i].quantity;

    //if el indice de cart posee la propiedad subtotalWithDiscount, toma ese valor para calcular el total,
    // si no la posee entonces toma subtotal.

    totalT.textContent = (
      cart[i].hasOwnProperty("subtotalWithDiscount")
        ? cart[i].subtotalWithDiscount
        : cart[i].subtotal
    )
      //redondeado
      ?.toFixed(2);

    rows.appendChild(celds);
    rows.appendChild(precio);
    rows.appendChild(quantity);
    rows.appendChild(totalT);
    cartTable.appendChild(rows);
  }
  console.log(total);
  totalCart.textContent = total.toFixed(2);
}

// // ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  //

  let indexOfProduct;
  //indice del producto
  let selection = products.find((product) => product.id == id);

  indexOfProduct = cart.findIndex((product) => product.id == id);

  if (indexOfProduct == -1) {
    selection.quantity = 1;
    selection.subtotal = selection.price;
    cart.push(selection);
    console.log(`Se ha agregado a la Cart el producto ${selection.name}`);
    console.log(cart);
  } else {
    //si ya está en el array sumamos quantity y precio al subtotal por cada iteración.

    cart[indexOfProduct].quantity++;

    console.log(
      `El ${cart[indexOfProduct].name} ha aumentado su cantidad a ${cart[indexOfProduct].quantity}`
    );
    cart[indexOfProduct].subtotal += selection.price;

    //aplicando descuento. Si offer no es undefined, osea que tiene la prop offer y si además
    //la cantidad es mayor o igual entonces aplicamos descuento.

    if (
      (cart[indexOfProduct].id == 1 || cart[indexOfProduct].id == 3) &&
      cart[indexOfProduct].quantity >= cart[indexOfProduct].offer.number
    ) {
      cart[indexOfProduct].subtotalWithDiscount =
        (cart[indexOfProduct].subtotal *
          (100 - cart[indexOfProduct].offer.percent)) /
        100;
      console.log(
        `El producto ${cart[indexOfProduct].name} tiene un precio final de ${cart[indexOfProduct].subtotalWithDiscount}`
      );
    }
  }
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array // Esto está mal
}

function open_modal() {
  console.log("Open Modal");
  total = 0;
  printCart();
}
