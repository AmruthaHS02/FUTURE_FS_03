let cart = []
let total = 0

function addToCart(item,price){

cart.push({item,price})

total += price

displayCart()

}

function displayCart(){

const cartList = document.getElementById("cartItems")

cartList.innerHTML=""

cart.forEach(product=>{

cartList.innerHTML += `<li>${product.item} - ₹${product.price}</li>`

})

document.getElementById("totalPrice").innerText = total

}

function placeOrder(){

if(cart.length === 0){

alert("Your cart is empty!")

return

}

alert("Order placed successfully! Thank you for visiting Malnad Coffee House ☕")

cart = []
total = 0

displayCart()

}


function addReview(){

const name = document.getElementById("customerName").value
const text = document.getElementById("reviewText").value
const image = document.getElementById("reviewImage").files[0]

const container = document.getElementById("reviewsContainer")

let reviewHTML = `
<div class="review-card">
<h4>${name}</h4>
<p>${text}</p>
`

if(image){

const imageURL = URL.createObjectURL(image)

reviewHTML += `<img src="${imageURL}">`

}

reviewHTML += `</div>`

container.innerHTML += reviewHTML

document.getElementById("customerName").value=""
document.getElementById("reviewText").value=""
document.getElementById("reviewImage").value=""

}

function processPayment(){

if(cart.length === 0){

alert("Your cart is empty!")
return

}

const method = document.getElementById("paymentMethod").value
const details = document.getElementById("paymentDetails").value

if(method === ""){

alert("Please select a payment method")
return

}

if(method !== "Cash" && details === ""){

alert("Please enter payment details")
return

}

alert("Payment Successful! Generating your bill...")

generateBill(method)

cart = []
total = 0

displayCart()

document.getElementById("paymentMethod").value=""
document.getElementById("paymentDetails").value=""

}
function generateBill(method){

document.getElementById("billSection").style.display = "block"

const billItems = document.getElementById("billItems")
billItems.innerHTML=""

cart.forEach(item=>{

billItems.innerHTML += `<li>${item.item} - ₹${item.price}</li>`

})

document.getElementById("billTotal").innerText = total
document.getElementById("billPayment").innerText = method

const date = new Date()
document.getElementById("billDate").innerText = date.toLocaleString()

}