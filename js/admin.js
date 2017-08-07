function addEmployee(){
    document.getElementById('centerDiv').innerHTML="";
    var parent = document.getElementById('centerDiv');

//Label and textfield for name starts

var labelName = document.createElement('label');
labelName.setAttribute('for','name');
labelName.setAttribute('class','labels');
var labelNameTxt = document.createTextNode('Name');
labelName.appendChild(labelNameTxt);

var inputName = document.createElement('input');
inputName.setAttribute('type','text');
inputName.setAttribute('id','name');
inputName.setAttribute('placeholder','Enter Name');
inputName.setAttribute('class','fields');

//Label and textfield for name ends

//Label and textfield for address starts

var labelAddress = document.createElement('label');
labelAddress.setAttribute('for','address');
labelAddress.setAttribute('class','labels');
var labelAddressTxt = document.createTextNode('Address');
labelAddress.appendChild(labelAddressTxt);

var inputAddress = document.createElement('input');
inputAddress.setAttribute('type','text');
inputAddress.setAttribute('id','address');
inputAddress.setAttribute('placeholder','Enter Address');
inputAddress.setAttribute('class','fields');

//Label and textfield for address ends

//Label and textfield for email starts

var labelEmail = document.createElement('label');
labelEmail.setAttribute('for','empid');
labelEmail.setAttribute('class','labels');
var labelEmailTxt = document.createTextNode('Email');
labelEmail.appendChild(labelEmailTxt);

var inputEmail = document.createElement('input');
inputEmail.setAttribute('type','email');
inputEmail.setAttribute('id','empid');
inputEmail.setAttribute('placeholder','Enter Email Address');
inputEmail.setAttribute('class','fields');

//Label and textfield for email ends

//Label and textfield for contact starts

var labelContact = document.createElement('label');
labelContact.setAttribute('for','contact');
labelContact.setAttribute('class','labels');
var labelContactTxt = document.createTextNode('Contact');
labelContact.appendChild(labelContactTxt);

var inputContact = document.createElement('input');
inputContact.setAttribute('type','text');
inputContact.setAttribute('id','contact');
inputContact.setAttribute('placeholder','Enter Contact Number');
inputContact.setAttribute('class','fields');

//Label and textfield for contacts ends

//Label and textfield for password starts

var labelPassword = document.createElement('label');
labelPassword.setAttribute('for','nic');
labelPassword.setAttribute('class','labels');
var labelPasswordTxt = document.createTextNode('Password');
labelPassword.appendChild(labelPasswordTxt);

var inputPassword = document.createElement('input');
inputPassword.setAttribute('type','password');
inputPassword.setAttribute('id','nic');
inputPassword.setAttribute('placeholder','Enter Password');
inputPassword.setAttribute('class','fields');

//Label and textfield for password ends

//Label and textfield for designation starts

var labelDesignation = document.createElement('label');
labelDesignation.setAttribute('for','desg');
labelDesignation.setAttribute('id','des');
labelDesignation.setAttribute('class','labels');
var labelDesignationTxt = document.createTextNode('Designation');
labelDesignation.appendChild(labelDesignationTxt);

var inputDesignation = document.createElement('select');
inputDesignation.setAttribute('name','designation');
inputDesignation.setAttribute('id','desg');
inputDesignation.setAttribute('class','fields');

//option 1 (Cashier)
var optionCashier = document.createElement('option');
optionCashier.setAttribute('value','Cashier');
var optionCashierTxt = document.createTextNode('Cashier');
optionCashier.appendChild(optionCashierTxt);

//option 2 (Admin)
var optionAdmin = document.createElement('option');
optionAdmin.setAttribute('value','Admin');
var optionAdminTxt = document.createTextNode('Admin');
optionAdmin.appendChild(optionAdminTxt);

inputDesignation.appendChild(optionCashier);
inputDesignation.appendChild(optionAdmin);

//Label and textfield for designation ends

//add button
var button = document.createElement('img');
button.setAttribute('src','http://res.cloudinary.com/oi12345/image/upload/v1502041480/ADD_NEW_olksz4.png');
button.setAttribute('id','todoButton');
button.setAttribute('onclick','addNewEmp()');

//add fields to parentDiv
parent.appendChild(labelName);
parent.appendChild(inputName);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelAddress);
parent.appendChild(inputAddress);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelEmail);
parent.appendChild(inputEmail);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelContact);
parent.appendChild(inputContact);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelPassword);
parent.appendChild(inputPassword);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelDesignation);
parent.appendChild(inputDesignation);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(button);
}

function updateEmployee(){
    var userInput = prompt("Enter email of user which you want to update?");
    if(userInput===""){
        alert("Please enter email you leave field empty!");
        updateEmployee();
    }
    userInput = userInput.toLocaleLowerCase();
    var name,address,email,password,contact,desg;
    var users = localStorage.getItem("users");
            if(users !== null){
                users = JSON.parse(users);
            }
            else if (users == null){
                users=[];
            }
            var authentication=false;
            for(var i=0; i< users.length;i++){
                if(users[i].email === userInput)
                {
                    authentication=true;
                    name =users[i].name;
                    address =users[i].address;
                    email =users[i].email;
                    password =users[i].password;
                    contact =users[i].contact;
                    desg =users[i].designation;
                }
            }
            if(authentication===false){
                alert("This email doesnt exist,Enter Valid email..");
                updateEmployee();
            }
            else{
    document.getElementById('centerDiv').innerHTML="";
    var parent = document.getElementById('centerDiv');

//Label and textfield for name starts

var labelName = document.createElement('label');
labelName.setAttribute('for','name');
labelName.setAttribute('class','labels');
var labelNameTxt = document.createTextNode('Name');
labelName.appendChild(labelNameTxt);

var inputName = document.createElement('input');
inputName.setAttribute('type','text');
inputName.setAttribute('id','name');
inputName.setAttribute('placeholder','Enter Name');
inputName.setAttribute('class','fields');

//Label and textfield for name ends

//Label and textfield for address starts

var labelAddress = document.createElement('label');
labelAddress.setAttribute('for','address');
labelAddress.setAttribute('class','labels');
var labelAddressTxt = document.createTextNode('Address');
labelAddress.appendChild(labelAddressTxt);

var inputAddress = document.createElement('input');
inputAddress.setAttribute('type','text');
inputAddress.setAttribute('id','address');
inputAddress.setAttribute('placeholder','Enter Address');
inputAddress.setAttribute('class','fields');

//Label and textfield for address ends

//Label and textfield for email starts

var labelEmail = document.createElement('label');
labelEmail.setAttribute('for','empid');
labelEmail.setAttribute('class','labels');
var labelEmailTxt = document.createTextNode('Email');
labelEmail.appendChild(labelEmailTxt);

var inputEmail = document.createElement('input');
inputEmail.setAttribute('type','email');
inputEmail.setAttribute('id','empid');
inputEmail.setAttribute('placeholder','Enter Email Address');
inputEmail.setAttribute('class','fields');

//Label and textfield for email ends

//Label and textfield for contact starts

var labelContact = document.createElement('label');
labelContact.setAttribute('for','contact');
labelContact.setAttribute('class','labels');
var labelContactTxt = document.createTextNode('Contact');
labelContact.appendChild(labelContactTxt);

var inputContact = document.createElement('input');
inputContact.setAttribute('type','text');
inputContact.setAttribute('id','contact');
inputContact.setAttribute('placeholder','Enter Contact Number');
inputContact.setAttribute('class','fields');

//Label and textfield for contacts ends

//Label and textfield for password starts

var labelPassword = document.createElement('label');
labelPassword.setAttribute('for','nic');
labelPassword.setAttribute('class','labels');
var labelPasswordTxt = document.createTextNode('Password');
labelPassword.appendChild(labelPasswordTxt);

var inputPassword = document.createElement('input');
inputPassword.setAttribute('type','password');
inputPassword.setAttribute('id','nic');
inputPassword.setAttribute('placeholder','Enter Password');
inputPassword.setAttribute('class','fields');

//Label and textfield for password ends

//Label and textfield for designation starts

var labelDesignation = document.createElement('label');
labelDesignation.setAttribute('for','desg');
labelDesignation.setAttribute('id','des');
labelDesignation.setAttribute('class','labels');
var labelDesignationTxt = document.createTextNode('Designation');
labelDesignation.appendChild(labelDesignationTxt);

var inputDesignation = document.createElement('select');
inputDesignation.setAttribute('name','designation');
inputDesignation.setAttribute('id','desg');
inputDesignation.setAttribute('class','fields');

//option 1 (Cashier)
var optionCashier = document.createElement('option');
optionCashier.setAttribute('value','Cashier');
var optionCashierTxt = document.createTextNode('Cashier');
optionCashier.appendChild(optionCashierTxt);

//option 2 (Admin)
var optionAdmin = document.createElement('option');
optionAdmin.setAttribute('value','Admin');
var optionAdminTxt = document.createTextNode('Admin');
optionAdmin.appendChild(optionAdminTxt);

inputDesignation.appendChild(optionCashier);
inputDesignation.appendChild(optionAdmin);

//Label and textfield for designation ends

//add button
var button = document.createElement('img');
button.setAttribute('src','http://res.cloudinary.com/oi12345/image/upload/v1502041482/UPDATE_nhsslp.png');
button.setAttribute('id','todoButton');
button.setAttribute('onclick','updateEmp()');

//add fields to parentDiv
parent.appendChild(labelName);
parent.appendChild(inputName);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelAddress);
parent.appendChild(inputAddress);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelEmail);
parent.appendChild(inputEmail);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelContact);
parent.appendChild(inputContact);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelPassword);
parent.appendChild(inputPassword);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelDesignation);
parent.appendChild(inputDesignation);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(button);

document.getElementById('name').value=name;
document.getElementById('address').value=address;
document.getElementById('empid').value=email;
document.getElementById('contact').value=contact;
document.getElementById('nic').value=password;
document.getElementById('desg').value=desg;
document.getElementById("empid").readOnly = true;
document.getElementById('nic').readOnly=true;
document.getElementById('desg').style.pointerEvents="none";
}
}

function deleteEmployee(){
    var userInput = prompt("Enter email of user which you want to delete?");
    if(userInput===""){
        alert("Please enter email you leave field empty!");
        deleteEmployee();
    }
    userInput = userInput.toLocaleLowerCase();
    var name,address,email,password,contact,desg;
    var users = localStorage.getItem("users");
            if(users !== null){
                users = JSON.parse(users);
            }
            else if (users == null){
                users=[];
            }
            var authentication=false;
            for(var i=0; i<users.length;i++){
                if(users[i].email === userInput)
                {
                    authentication=true;
                    name =users[i].name;
                    address =users[i].address;
                    email =users[i].email;
                    password =users[i].password;
                    contact =users[i].contact;
                    desg =users[i].designation;
                }
            }
            if(authentication===false){
                alert("This email doesnt exist,Enter Valid email..");
                deleteEmployee();
            }
            else{
    document.getElementById('centerDiv').innerHTML="";
    var parent = document.getElementById('centerDiv');

//Label and textfield for name starts

var labelName = document.createElement('label');
labelName.setAttribute('for','name');
labelName.setAttribute('class','labels');
var labelNameTxt = document.createTextNode('Name');
labelName.appendChild(labelNameTxt);

var inputName = document.createElement('input');
inputName.setAttribute('type','text');
inputName.setAttribute('id','name');
inputName.setAttribute('placeholder','Enter Name');
inputName.setAttribute('class','fields');

//Label and textfield for name ends

//Label and textfield for address starts

var labelAddress = document.createElement('label');
labelAddress.setAttribute('for','address');
labelAddress.setAttribute('class','labels');
var labelAddressTxt = document.createTextNode('Address');
labelAddress.appendChild(labelAddressTxt);

var inputAddress = document.createElement('input');
inputAddress.setAttribute('type','text');
inputAddress.setAttribute('id','address');
inputAddress.setAttribute('placeholder','Enter Address');
inputAddress.setAttribute('class','fields');

//Label and textfield for address ends

//Label and textfield for email starts

var labelEmail = document.createElement('label');
labelEmail.setAttribute('for','empid');
labelEmail.setAttribute('class','labels');
var labelEmailTxt = document.createTextNode('Email');
labelEmail.appendChild(labelEmailTxt);

var inputEmail = document.createElement('input');
inputEmail.setAttribute('type','email');
inputEmail.setAttribute('id','empid');
inputEmail.setAttribute('placeholder','Enter Email Address');
inputEmail.setAttribute('class','fields');

//Label and textfield for email ends

//Label and textfield for contact starts

var labelContact = document.createElement('label');
labelContact.setAttribute('for','contact');
labelContact.setAttribute('class','labels');
var labelContactTxt = document.createTextNode('Contact');
labelContact.appendChild(labelContactTxt);

var inputContact = document.createElement('input');
inputContact.setAttribute('type','text');
inputContact.setAttribute('id','contact');
inputContact.setAttribute('placeholder','Enter Contact Number');
inputContact.setAttribute('class','fields');

//Label and textfield for contacts ends

//Label and textfield for password starts

var labelPassword = document.createElement('label');
labelPassword.setAttribute('for','nic');
labelPassword.setAttribute('class','labels');
var labelPasswordTxt = document.createTextNode('Password');
labelPassword.appendChild(labelPasswordTxt);

var inputPassword = document.createElement('input');
inputPassword.setAttribute('type','password');
inputPassword.setAttribute('id','nic');
inputPassword.setAttribute('placeholder','Enter Password');
inputPassword.setAttribute('class','fields');

//Label and textfield for password ends

//Label and textfield for designation starts

var labelDesignation = document.createElement('label');
labelDesignation.setAttribute('for','desg');
labelDesignation.setAttribute('id','des');
labelDesignation.setAttribute('class','labels');
var labelDesignationTxt = document.createTextNode('Designation');
labelDesignation.appendChild(labelDesignationTxt);

var inputDesignation = document.createElement('select');
inputDesignation.setAttribute('name','designation');
inputDesignation.setAttribute('id','desg');
inputDesignation.setAttribute('class','fields');

//option 1 (Cashier)
var optionCashier = document.createElement('option');
optionCashier.setAttribute('value','Cashier');
var optionCashierTxt = document.createTextNode('Cashier');
optionCashier.appendChild(optionCashierTxt);

//option 2 (Admin)
var optionAdmin = document.createElement('option');
optionAdmin.setAttribute('value','Admin');
var optionAdminTxt = document.createTextNode('Admin');
optionAdmin.appendChild(optionAdminTxt);

inputDesignation.appendChild(optionCashier);
inputDesignation.appendChild(optionAdmin);

//Label and textfield for designation ends

//add button
var button = document.createElement('img');
button.setAttribute('src','http://res.cloudinary.com/oi12345/image/upload/v1502041480/DELETE_d4css6.png');
button.setAttribute('id','todoButton');
button.setAttribute('onclick','deleteEmp()');

//add fields to parentDiv
parent.appendChild(labelName);
parent.appendChild(inputName);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelAddress);
parent.appendChild(inputAddress);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelEmail);
parent.appendChild(inputEmail);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelContact);
parent.appendChild(inputContact);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelPassword);
parent.appendChild(inputPassword);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(labelDesignation);
parent.appendChild(inputDesignation);
parent.appendChild(document.createElement('br'));
parent.appendChild(document.createElement('br'));
parent.appendChild(button);

document.getElementById('name').value=name;
document.getElementById('address').value=address;
document.getElementById('empid').value=email;
document.getElementById('contact').value=contact;
document.getElementById('nic').value=password;
document.getElementById('desg').value=desg;
document.getElementById("name").readOnly = true;
document.getElementById("address").readOnly = true;
document.getElementById("empid").readOnly = true;
document.getElementById("contact").readOnly = true;
document.getElementById("nic").readOnly = true;
document.getElementById("desg").style.pointerEvents="none";
}
}


function checkInventory(){
    //take to inventory page..
    window.location="inventory.html";
}

function openCheckout(){
    //open checkout
    window.location="sales.html";
}