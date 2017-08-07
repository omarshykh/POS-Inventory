function setStorage(){
var users = localStorage.getItem('users');
if(users ===null){
    users=[];
    var user={
        name:"Omar Iqbal",
        email:"admin@gmail.com",
        password:"admin123",
        contact:"03443837443",
        address:"Karachi",
        designation:"Admin"
    }
    users.push(user);
    users=JSON.stringify(users);
    localStorage.setItem('users',users);
}

var products = localStorage.getItem('products');
if(products ===null){
    products=[];
    var product1={
        pname:"Rooh Afza 500 ml Bottle",
        barcode:"0000",
        price:280,
        quantity:30
    }
    var product2={
        pname:"Tang Orange Juice 1 litre",
        barcode:"0001",
        price:120,
        quantity:30
    }
    var product3={
        pname:"Safeguard Handwash soap(Small)",
        barcode:"0010",
        price:45,
        quantity:30
    }
    var product4={
        pname:"Pepsi 1 liter bottle",
        barcode:"0011",
        price:60,
        quantity:27
    }
    products.push(product1);
    products.push(product2);
    products.push(product3);
    products.push(product4);
    products=JSON.stringify(products);
    localStorage.setItem('products',products);
}

var sales = localStorage.getItem('sales');
if(sales ===null){
    sales=[];
    var sale={
        date:"01/7/2017",
        barcode:"0011",
        quantity:3,
        price:180
    }
    sales.push(sale);
    sales=JSON.stringify(sales);
    localStorage.setItem('sales',sales);
}
}