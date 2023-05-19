let firstIterater = document.getElementById("firstiteratorbtn")
let secondIterater = document.getElementById("seconditeratorbtn")
let thirdIterater = document.getElementById("thirditeratorbtn")
let firstIteraterv2 = document.getElementById("firstiteratorbtnv2d")
let secondIteraterv2 = document.getElementById("seconditeratorbtnv2d")
let thirdIteraterv2 = document.getElementById("thirditeratorbtnv2d")
let digit1Data = document.getElementById("digits")
let digit2Data = document.getElementById("digits2") 
let x = 0
firstIterater.addEventListener("click", function(){
     x = x + 1
     digit1Data.innerHTML = x 
})

secondIterater.addEventListener("click", function(){
     x = x + 2
     digit1Data.innerHTML = x
})

thirdIterater.addEventListener("click", function(){
     x = x + 3
     digit1Data.innerHTML = x
})

let y = 0






firstIteraterv2.addEventListener("click", function(){
     y = y + 1
     digit2Data.innerHTML = y
})

secondIteraterv2.addEventListener("click", function(){
     y = y + 2
     digit2Data.innerHTML = y
})

thirdIteraterv2.addEventListener("click", function(){
     y = y + 3
     digit2Data.innerHTML = y
})





