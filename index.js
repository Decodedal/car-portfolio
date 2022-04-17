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