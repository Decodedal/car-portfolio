{

let total = document.querySelector('#total')

document.getElementById("lam").addEventListener("click", function() {
//    console.log("ran lam")
//     window.prompt("Lamborghini Added to Cart");
       let pricelam = ("20,000,000")
       total.append(pricelam);
})

document.getElementById("benz").addEventListener("click", function() {
    // console.log("ran benz")    
    // window.prompt("Mercedez - Benz Added to cart");
    let priceBENZ = ("50,000")
       total.append(priceBENZ);
    })
        
document.getElementById("x").addEventListener("click", function() {
//     console.log("ran x")        
//     window.prompt("model x added to cart");
      let priceX = ("200,000")
      total.append(priceX);
 })
}
let car1 = document.querySelector('#car1')
car1.addEventListener("click",function(){
    car1.style.width = "500px"
    car1.style.height = "500px"
})
// let car1 = document.querySelector('#car1')
car1.addEventListener("dblclick",function(){
    car1.style.width = "200px"
    car1.style.height = "200px"
})
let xpic = document.querySelector("#tes")
let sizer = document.querySelector('#size')
sizer.addEventListener("click", function(){
    if(xpic.style.height >= "50px"){ 
    xpic.style.width= "50px"
     xpic.style.height= "50px";
    }
    if(xpic.style.height <= "50px"){ 
     xpic.style.width= "500px"
     xpic.style.height= "500px"
    }
})

