//functionality functions now

function addNewEmp(){
    //add button employee
var userName=document.getElementById('name').value;
var userAddress=document.getElementById('address').value;
var userEmail=document.getElementById('empid').value;
var userContact=document.getElementById('contact').value;
var userPassword=document.getElementById('nic').value;
var userDesignation=document.getElementById('desg').value;
 
 //validation
if(!(userName==="") && !(userAddress==="") && !(userEmail==="") && !(userContact==="") && !(userPassword==="") && !(userDesignation==="")){
    var check=checkNum(userContact);
    if(check){
        var users = localStorage.getItem("users");
if(users !== null){
    users = JSON.parse(users);
}
else if (users == null){
    users=[];
}
    var user ={
                name: userName,
                address : userAddress,
                email : userEmail,
                contact : userContact,
                password : userPassword,
                designation : userDesignation,
            };

            users.push(user);
            users = JSON.stringify(users);
            localStorage.setItem('users',users);
            alert("User registered successfully!!");
            document.getElementById('name').value="";
            document.getElementById('address').value="";
            document.getElementById('empid').value="";
            document.getElementById('contact').value="";
            document.getElementById('nic').value="";
    }
    else{
        alert("Contact of user should all are numbers!!");
    }
}
else{
    alert("You leave some fields empty please fill them first!!");
}
}

function updateEmp(){ 
    var email = document.getElementById('empid').value;
    var users = localStorage.getItem("users");
if(users !== null){
    users = JSON.parse(users);
}
else if (users == null){
    users=[];
}
    var index;
    for(var i=0;i<users.length;i++){
        if(email===users[i].email){
            index=i;
        }
    }
var userName=document.getElementById('name').value;
var userAddress=document.getElementById('address').value;
var userContact=document.getElementById('contact').value;

if(!(userName==="") && !(userAddress==="") && !(userContact==="")){
users[index].name=userName;
users[index].address=userAddress;
users[index].contact=userContact;

users = JSON.stringify(users);
localStorage.setItem('users',users);
alert("User updated successfully!!");
document.getElementById('centerDiv').innerHTML="";
}
else{
    alert("You leave some fields empty please fill them first!!");
}
}

function deleteEmp(){
    var email = document.getElementById('empid').value;
       var users = localStorage.getItem("users");
if(users !== null){
    users = JSON.parse(users);
}
else if (users == null){
    users=[];
}
    var index;
    for(var i=0;i<users.length;i++){
        if(email===users[i].email){
            index=i;
        }
    }
var deleteIndex = users.findIndex(function(o){
                return o.email===email;
        });
         users.splice(deleteIndex,1);
        users=JSON.stringify(users);
        localStorage.setItem('users',users);
        alert("User deleted successfully!!");
        document.getElementById('centerDiv').innerHTML="";  
}

function checkNum(userContact){
    var pattern = new RegExp("^[0-9]+$");

    if(pattern.test(userContact)===true){
        return true;
    }
    else{
        return false;
    }
}