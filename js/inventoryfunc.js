function add(){
//add product code
var name = document.getElementById('name').value;
var barcode = document.getElementById('barcode').value;
var quantity = document.getElementById('quantity').value;
var price = document.getElementById('price').value;

//validation
 if(!(name==="") && !(barcode==="") && !(quantity==="") && !(price==="")){
     var check=checkNum(quantity,price);
     if(check){
                var products = localStorage.getItem("products");
if(products !== null){
    products = JSON.parse(products);
}
else if (products == null){
    products=[];
}
var flag=true;
for(var i=0;i<products.length;i++){
    if(products[i].barcode===barcode){
        flag=false;
    }
}
if(flag){
    var product ={
                pname: name,
                barcode:barcode,
                price:price,
                quantity:quantity
            };

            products.push(product);
            products = JSON.stringify(products);
            localStorage.setItem('products',products);
            alert("Product Inserted successfully!!");
            
            document.getElementById('name').value="";
            document.getElementById('barcode').value="";
            document.getElementById('quantity').value="";
            document.getElementById('price').value="";
}
else{
    alert('This barcode is already in stock,try different one');
}

     }
     else{
         alert("Quantity and Price should be a Number");
     }        
 }
 else{
     alert("You leave some fields empty please fill them first!!");
 }
}

function checkNum(quantity,price){
    var pattern1 = new RegExp("^[0-9]+$");
    var pattern2 = new RegExp("^[0-9]+.[0-9]+$");

    if((pattern1.test(quantity)===true)&&((pattern1.test(price)===true)||(pattern2.test(price)===true))){
        return true;
    }
    else{
        return false;
    }
}

function update(){
//update product code
  var barcode = document.getElementById('barcode').value;
    var products = localStorage.getItem("products");
if(products !== null){
    products = JSON.parse(products);
}
else if (products == null){
    products=[];
}
    var index;
    for(var i=0;i<products.length;i++){
        if(barcode===products[i].barcode){
            index=i;
        }
    }
var name=document.getElementById('name').value;
var quantity=document.getElementById('quantity').value;
var price=document.getElementById('price').value;

if(!(name==="") && !(quantity==="") && !(price==="")){
var check=checkNum(quantity,price);
if(check){
products[index].pname=name;
products[index].quantity=quantity;
products[index].price=price;

products = JSON.stringify(products);
localStorage.setItem('products',products);
alert("Product updated successfully!!");
document.getElementById('centerDiv').innerHTML="";
document.getElementById('task').innerHTML="";
}
else{
    alert("Quantity and Price should be a Number");
}
}
else{
    alert("You leave some fields empty please fill them first!!");
}
}

function deleteItem(){
//delete product code
    var barcode = document.getElementById('barcode').value;
       var products = localStorage.getItem("products");
if(products !== null){
    products = JSON.parse(products);
}
else if (products == null){
    products=[];
}
    var index;
    for(var i=0;i<products.length;i++){
        if(barcode===products[i].barcode){
            index=i;
        }
    }
var deleteIndex = products.findIndex(function(o){
                return o.barcode===barcode;
        });
         products.splice(deleteIndex,1);
        products=JSON.stringify(products);
        localStorage.setItem('products',products);
        alert("Product deleted successfully!!");
        document.getElementById('centerDiv').innerHTML="";
        document.getElementById('task').innerHTML="";
}