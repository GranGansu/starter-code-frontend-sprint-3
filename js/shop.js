// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Advance Hairball',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            unidad: 10
        }
    },
    {
        id: 2,
        name: 'Ultima Adult',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Ultima Nature',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            unidad: 3.333
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];
var emptyCart = document.getElementById('emptyCart');
// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    cartList.push(products.find(ide => { return ide.id == id }));
    calculateTotal();
}

// Exercise 2
function cleanCart() {
    cartList = [];
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;
    cart.forEach(element => {
        if (element.subTotal && element.subTotal != null) {
            total += element.subTotal;
        } else {
            total += element.price * element.quantity;
        }
    });
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart = [];
    cartList.forEach(element => {
        if (cart.find(elemento => { return elemento == element })) {
            element.quantity++;
        } else {
            element.quantity = 1;
            cart.push(element)
        }
    });
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach(element => {
        if (element.offer && element.quantity >= element.offer.number) {
            element.subTotal = element.offer.unidad * element.quantity;
        }
        else {
            element.subTotal = null;
        }
    });
    calculateTotal();
    printCart();
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    if (productoExistente = cart.find(productoCart => { return productoCart.id == id })) { //Compruebo si existe en el Cart
        productoExistente.quantity++;
    } else {
        let productoNuevo = Object.assign({}, products.find(producto => { return producto.id == id }));
        productoNuevo.quantity = 1;
        cart.push(productoNuevo);
    }
    applyPromotionsCart();
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    if (productoExistente = cart.find(productoCart => { return productoCart.id == id })) { //Compruebo si existe en el Cart
        if (productoExistente.quantity > 1) {
            productoExistente.quantity--
        }
        else {
            cart = cart.filter(value => { return value.id != id });
        }
    }
    applyPromotionsCart();
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let numero = 0;
    let contador = document.getElementById('count_product');
    let lista = document.querySelector('.list');
    let totalElement = document.getElementById('total');
    lista.innerHTML = '';
    contador.innerHTML = '';
    cart.forEach(element => {
        numero += element.quantity;
        let li = document.createElement('li');
        lista.appendChild(li);
        li.innerHTML = `${element.name} $${element.price} x${element.quantity} <button type="button" onclick="removeFromCart(${element.id})" class="btn btn-outline-dark borrar">- 1</button>`;
    })
    totalElement.innerHTML = total+'$';
    contador.innerHTML = numero;
    if (cart.length != 0) {
        emptyCart.classList.add('d-none')
    } else {
        emptyCart.classList.remove('d-none')
    }
}


function open_modal() {
    console.log("Open Modal");
}