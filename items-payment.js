const amountEl = document.querySelector(".amount-el")
const totalEl = document.querySelector(".total-money")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const payBtn = document.querySelector(".pay-btn")
const starBtn = document.querySelector("#right")
const addedToCart = document.querySelector(".cart")
const cartAmount = document.querySelector(".cart-amount")
const cartTotal = document.querySelector(".cart-total")



let price = 0
let amount = 1

plus.addEventListener("click", function(){

    
    price += 123
    amount += 1
    totalEl.textContent = "$: " + price
    amountEl.textContent = amount

})

minus.addEventListener("click", function(){
    
   
    if(price === 0){
        price = 123
        amount = 1

        totalEl.textContent = "$: " + price
        amountEl.textContent = amount
    }else{
        price -= 123
        amount -= 1

        totalEl.textContent = "$: " + price
        amountEl.textContent = amount
    }

    

})


payBtn.addEventListener("click", function(){
    alert("your order is on its way")
    cartAmount.textContent = amount
})


//export 
starBtn.addEventListener("click", function() {
    starBtn.setAttribute("style", "color: gold;")
})

addedToCart.addEventListener("click", function(){

})


cartTotal.addEventListener("click", function(){
    let a = "You have"
    let b = "items in your cart"

    alert(a + " " + amount + " " + b + ".")
})




