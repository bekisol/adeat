const burger = document.querySelector(".burger")
const pizza = document.querySelector(".pizza")
const cake = document.querySelector(".cake")



const navForMobile = document.querySelector(".nav-for-mobile")






pizza.addEventListener("click", function(){
    pizza.setAttribute("style", "background-color: red;")
    
})


burger.addEventListener("click", function(){
    burger.setAttribute("style", "background-color: red;")
    
})

cake.addEventListener("click", function(){
    cake.setAttribute("style", "background-color: red;")
    //location.replace('/props/')
})



function menuBarOn(){
  
    navForMobile.setAttribute("style", "display: inline;")

    
}

function menuBarOff(){
  
    navForMobile.setAttribute("style", "display: none;")

    
}



















