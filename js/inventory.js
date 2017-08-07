function addProduct(){
     document.getElementById('centerDiv').innerHTML="";
    var parent = document.getElementById('centerDiv');
document.getElementById('task').innerHTML="Add Product";

//Label and textfield for name starts

var labelName = document.createElement('label');
labelName.setAttribute('for','name');
labelName.setAttribute('class','labels');
var labelNameTxt = document.createTextNode('Product Name');
labelName.appendChild(labelNameTxt);

var inputName = document.createElement('input');
inputName.setAttribute('type','text');
inputName.setAttribute('id','name');
inputName.setAttribute('placeholder','Enter Product Name');
inputName.setAttribute('class','fields');

//Label and textfield for name ends 

//Label and textfield for barcode starts

var labelBarcode = document.createElement('label');
labelBarcode.setAttribute('for','barcode');
labelBarcode.setAttribute('class','labels');
var labelBarcodeTxt = document.createTextNode('Barcode');
labelBarcode.appendChild(labelBarcodeTxt);

var inputBarcode = document.createElement('input');
inputBarcode.setAttribute('type','text');
inputBarcode.setAttribute('id','barcode');
inputBarcode.setAttribute('placeholder','Enter Barcode');
inputBarcode.setAttribute('class','fields');

//Label and textfield for barcode ends

//Label and textfield for quantity starts

var labelQuantity = document.createElement('label');
labelQuantity.setAttribute('for','quantity');
labelQuantity.setAttribute('class','labels');
var labelQuantityTxt = document.createTextNode('Quantity');
labelQuantity.appendChild(labelQuantityTxt);

var inputQuantity = document.createElement('input');
inputQuantity.setAttribute('type','text');
inputQuantity.setAttribute('id','quantity');
inputQuantity.setAttribute('placeholder','Enter Quantity');
inputQuantity.setAttribute('class','fields');

//Label and textfield for quantity ends

//Label and textfield for price starts

var labelPrice = document.createElement('label');
labelPrice.setAttribute('for','price');
labelPrice.setAttribute('class','labels');
var labelPriceTxt = document.createTextNode('Price');
labelPrice.appendChild(labelPriceTxt);

var inputPrice = document.createElement('input');
inputPrice.setAttribute('type','text');
inputPrice.setAttribute('id','price');
inputPrice.setAttribute('placeholder','Enter Price');
inputPrice.setAttribute('class','fields');

//Label and textfield for price ends

//add button
var button = document.createElement('img');
button.setAttribute('src','http://res.cloudinary.com/oi12345/image/upload/v1502041480/ADD_NEW_olksz4.png');
button.setAttribute('id','todoButton');
button.setAttribute('onclick','add()');

//add fields to parentDiv
parent.appendChild(labelName);
parent.appendChild(inputName);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelBarcode);
parent.appendChild(inputBarcode);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelQuantity);
parent.appendChild(inputQuantity);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelPrice);
parent.appendChild(inputPrice);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(button);
}

function updateProduct(){
    var userInput = prompt("Enter barcode of product which you want to update?");
    if(userInput===""){
        alert("Please enter barcode you leave field empty!");
        updateProduct();
    }
    userInput = userInput.toLocaleLowerCase();
    var name,bcode,quan,price;
    var products = localStorage.getItem("products");
            if(products !== null){
                products = JSON.parse(products);
            }
            else if (products == null){
                products=[];
            }
            var authentication=false;
            for(var i=0; i< products.length;i++){
                if(products[i].barcode === userInput)
                {
                    authentication=true;
                    name =products[i].pname;
                    bcode =products[i].barcode;
                    quan =products[i].quantity;
                    price =products[i].price;
                }
            }

            if(authentication===false){
                alert("This product of this barcode doesnt exist,Enter Valid barcode..");
                updateProduct();
            }
            else{
                     document.getElementById('centerDiv').innerHTML="";
                    var parent = document.getElementById('centerDiv');
                    document.getElementById('task').innerHTML="Update Product";

//Label and textfield for name starts

var labelName = document.createElement('label');
labelName.setAttribute('for','name');
labelName.setAttribute('class','labels');
var labelNameTxt = document.createTextNode('Product Name');
labelName.appendChild(labelNameTxt);

var inputName = document.createElement('input');
inputName.setAttribute('type','text');
inputName.setAttribute('id','name');
inputName.setAttribute('placeholder','Enter Product Name');
inputName.setAttribute('class','fields');

//Label and textfield for name ends 

//Label and textfield for barcode starts

var labelBarcode = document.createElement('label');
labelBarcode.setAttribute('for','barcode');
labelBarcode.setAttribute('class','labels');
var labelBarcodeTxt = document.createTextNode('Barcode');
labelBarcode.appendChild(labelBarcodeTxt);

var inputBarcode = document.createElement('input');
inputBarcode.setAttribute('type','text');
inputBarcode.setAttribute('id','barcode');
inputBarcode.setAttribute('placeholder','Enter Barcode');
inputBarcode.setAttribute('class','fields');

//Label and textfield for barcode ends

//Label and textfield for quantity starts

var labelQuantity = document.createElement('label');
labelQuantity.setAttribute('for','quantity');
labelQuantity.setAttribute('class','labels');
var labelQuantityTxt = document.createTextNode('Quantity');
labelQuantity.appendChild(labelQuantityTxt);

var inputQuantity = document.createElement('input');
inputQuantity.setAttribute('type','text');
inputQuantity.setAttribute('id','quantity');
inputQuantity.setAttribute('placeholder','Enter Quantity');
inputQuantity.setAttribute('class','fields');

//Label and textfield for quantity ends

//Label and textfield for price starts

var labelPrice = document.createElement('label');
labelPrice.setAttribute('for','price');
labelPrice.setAttribute('class','labels');
var labelPriceTxt = document.createTextNode('Price');
labelPrice.appendChild(labelPriceTxt);

var inputPrice = document.createElement('input');
inputPrice.setAttribute('type','text');
inputPrice.setAttribute('id','price');
inputPrice.setAttribute('placeholder','Enter Price');
inputPrice.setAttribute('class','fields');

//Label and textfield for price ends

//add button
var button = document.createElement('img');
button.setAttribute('src','http://res.cloudinary.com/oi12345/image/upload/v1502041482/UPDATE_nhsslp.png');
button.setAttribute('id','todoButton');
button.setAttribute('onclick','update()');

//add fields to parentDiv
parent.appendChild(labelName);
parent.appendChild(inputName);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelBarcode);
parent.appendChild(inputBarcode);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelQuantity);
parent.appendChild(inputQuantity);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelPrice);
parent.appendChild(inputPrice);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(button);

document.getElementById('barcode').value=bcode;
document.getElementById('name').value=name;
document.getElementById('quantity').value=quan;
document.getElementById('price').value=price;
document.getElementById('barcode').readOnly=true;
}
}

function deleteProduct(){
    var userInput = prompt("Enter barcode of product which you want to delete?");
    if(userInput===""){
        alert("Please enter barcode you leave field empty!");
        deleteProduct();
    }
    userInput = userInput.toLocaleLowerCase();
    var name,bcode,quan,price;
    var products = localStorage.getItem("products");
            if(products !== null){
                products = JSON.parse(products);
            }
            else if (products == null){
                products=[];
            }
            var authentication=false;
            for(var i=0; i< products.length;i++){
                if(products[i].barcode === userInput)
                {
                    authentication=true;
                    name =products[i].pname;
                    bcode =products[i].barcode;
                    quan =products[i].quantity;
                    price =products[i].price;
                }
            }

            if(authentication===false){
                alert("This product of this barcode doesnt exist,Enter Valid barcode..");
                deleteProduct();
            }
            else{
                     document.getElementById('centerDiv').innerHTML="";
                    var parent = document.getElementById('centerDiv');
                    document.getElementById('task').innerHTML="Delete Product";

//Label and textfield for name starts

var labelName = document.createElement('label');
labelName.setAttribute('for','name');
labelName.setAttribute('class','labels');
var labelNameTxt = document.createTextNode('Product Name');
labelName.appendChild(labelNameTxt);

var inputName = document.createElement('input');
inputName.setAttribute('type','text');
inputName.setAttribute('id','name');
inputName.setAttribute('placeholder','Enter Product Name');
inputName.setAttribute('class','fields');

//Label and textfield for name ends 

//Label and textfield for barcode starts

var labelBarcode = document.createElement('label');
labelBarcode.setAttribute('for','barcode');
labelBarcode.setAttribute('class','labels');
var labelBarcodeTxt = document.createTextNode('Barcode');
labelBarcode.appendChild(labelBarcodeTxt);

var inputBarcode = document.createElement('input');
inputBarcode.setAttribute('type','text');
inputBarcode.setAttribute('id','barcode');
inputBarcode.setAttribute('placeholder','Enter Barcode');
inputBarcode.setAttribute('class','fields');

//Label and textfield for barcode ends

//Label and textfield for quantity starts

var labelQuantity = document.createElement('label');
labelQuantity.setAttribute('for','quantity');
labelQuantity.setAttribute('class','labels');
var labelQuantityTxt = document.createTextNode('Quantity');
labelQuantity.appendChild(labelQuantityTxt);

var inputQuantity = document.createElement('input');
inputQuantity.setAttribute('type','text');
inputQuantity.setAttribute('id','quantity');
inputQuantity.setAttribute('placeholder','Enter Quantity');
inputQuantity.setAttribute('class','fields');

//Label and textfield for quantity ends

//Label and textfield for price starts

var labelPrice = document.createElement('label');
labelPrice.setAttribute('for','price');
labelPrice.setAttribute('class','labels');
var labelPriceTxt = document.createTextNode('Price');
labelPrice.appendChild(labelPriceTxt);

var inputPrice = document.createElement('input');
inputPrice.setAttribute('type','text');
inputPrice.setAttribute('id','price');
inputPrice.setAttribute('placeholder','Enter Price');
inputPrice.setAttribute('class','fields');

//Label and textfield for price ends

//add button
var button = document.createElement('img');
button.setAttribute('src','http://res.cloudinary.com/oi12345/image/upload/v1502041480/DELETE_d4css6.png');
button.setAttribute('id','todoButton');
button.setAttribute('onclick','deleteItem()');

//add fields to parentDiv
parent.appendChild(labelName);
parent.appendChild(inputName);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelBarcode);
parent.appendChild(inputBarcode);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelQuantity);
parent.appendChild(inputQuantity);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelPrice);
parent.appendChild(inputPrice);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(button);

document.getElementById('barcode').value=bcode;
document.getElementById('name').value=name;
document.getElementById('quantity').value=quan;
document.getElementById('price').value=price;

document.getElementById('name').readOnly=true;
document.getElementById('barcode').readOnly=true;
document.getElementById('quantity').readOnly=true;
document.getElementById('price').readOnly=true;
}
}

function checkItems(){
//gives the total count of items in stock
var products=localStorage.getItem('products');
products=JSON.parse(products);
var totalitem=0;
for(var i=0;i<products.length;i++){
totalitem=totalitem+Number(products[i].quantity);
}
alert("Total products in stock rightnow are,"+totalitem);
}

function viewStock(){
    var parent=document.getElementById('centerDiv');
    document.getElementById('task').innerHTML="Stock Details";
    //show stock(products) in table
var table = document.createElement('table');

var headRow = document.createElement('tr');
var headName = document.createElement('th');
headName.setAttribute('class','pname');
var headBarcode = document.createElement('th');
headBarcode.setAttribute('class','bcode');
var headQuantity = document.createElement('th');
headQuantity.setAttribute('class','quan');
var headPrice = document.createElement('th');
headPrice.setAttribute('class','pric');

var headBarcodeTxt = document.createTextNode("Barcode");
var headNameTxt = document.createTextNode("Product Name");
var headQuantityTxt = document.createTextNode("Quantity");
var headPriceTxt = document.createTextNode("Price(Each)");

headName.appendChild(headNameTxt);
headBarcode.appendChild(headBarcodeTxt);
headQuantity.appendChild(headQuantityTxt);
headPrice.appendChild(headPriceTxt);

headRow.appendChild(headBarcode);
headRow.appendChild(headName);
headRow.appendChild(headQuantity);
headRow.appendChild(headPrice);

table.appendChild(headRow);

var products = localStorage.getItem('products');
products=JSON.parse(products);

for(var i=0;i<products.length;i++){
    var newRow = document.createElement('tr');

    var barcodeTd= document.createElement('td');
    var nameTd= document.createElement('td');
    var quantityTd= document.createElement('td');
    var priceTd= document.createElement('td');

    var barcodeTxt = document.createTextNode(products[i].barcode);
    var nameTxt = document.createTextNode(products[i].pname);
    var quantityTxt = document.createTextNode(products[i].quantity);
    var priceTxt = document.createTextNode(products[i].price);

    barcodeTd.appendChild(barcodeTxt);
    nameTd.appendChild(nameTxt);
    quantityTd.appendChild(quantityTxt);
    priceTd.appendChild(priceTxt);

    newRow.appendChild(barcodeTd);
    newRow.appendChild(nameTd);
    newRow.appendChild(quantityTd);
    newRow.appendChild(priceTd);

    table.appendChild(newRow);
}
    parent.innerHTML="";
    parent.appendChild(table);
}