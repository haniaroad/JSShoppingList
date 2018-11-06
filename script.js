//var myDiv = document.getElementById("test");
//
//myDiv.appendChild(document.createElement("ol"));
//myDiv.appendChild(document.createElement("li"));
var userItems = []
var grandTotal = [];



function addApplesToCart(){
    userItems.push("Apples");
    grandTotal.push(4.00);
}

function addSaladToCart(){
    userItems.push("Salad");
    grandTotal.push(6.00);
}

function addNutellaToCart(){
    userItems.push("Nutella");
    grandTotal.push(4.00);
}

function addCheeseToCart(){
    userItems.push("Cheese");
    grandTotal.push(4.00);
}

function addRiceCakesToCart(){
    userItems.push("Rice Cakes");
    grandTotal.push(2.00);
}

function addPizzaToCart(){
    userItems.push("Pizza");
    grandTotal.push(7.00);
}


function userCart(){
    
    var userReceipt = document.getElementById("receipt");
    
    for (var i = 0; i < userItems.length; i++){
        
        userReceipt.innerHTML += "<br>" + userItems[i];
        
    }
}

function checkOut(){
    
    var receipt = document.getElementById("prices");
    var sum = 0;
    
    var priceSum = grandTotal.reduce(function(a,b){
      
    return a + b;
                                  
   })
                                     
 receipt.innerHTML += "Total: $" + priceSum;
                                     
//    var sum = 0;
//    var receipt = document.getElementById("prices");
//    
//    for(var i = 0; i < grandTotal.length; i++){
//        sum += grandTotal[i];
//        
//     receipt.innerHTML += sum;
        
        
    }
