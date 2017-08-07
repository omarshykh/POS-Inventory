 var email = document.getElementById('email');
 var password = document.getElementById('password');

 function loginCheck(){
            var emailVal=email.value;
            var passwordVal=password.value;
            var index,desg;
            if(emailVal==="" && passwordVal===""){
                alert("Enter email and password please!");
                email.focus();
            }
            else if(emailVal==="" && passwordVal!==""){
                alert("Enter email please!");
                email.focus();
            }
            else if(emailVal!=="" && passwordVal===""){
                alert("Enter password please!");
                password.focus();
            }
            else if(emailVal!=="" && passwordVal!==""){
            var users = localStorage.getItem("users");
            var flag=false;

            if(users !== null){
                users = JSON.parse(users);
            }
            else if (users == null){
                users=[];
            }
            for(var i=0;i<users.length;i++){
                if(users[i].email===emailVal && users[i].password===passwordVal){
                    flag=true;
                    index=i;
                    desg=users[i].designation;
                }
            }
            var userLogin=users[index];
            userLogin=JSON.stringify(userLogin);
            if(flag){
                localStorage.setItem("userLogin",userLogin);
                localStorage.setItem("indexLogin",index);
                if(desg==="Admin"){window.location="admin.html";}
                if(desg==="Cashier"){window.location="cashier.html";}
            }
            else{
                alert("Wrong email or password!");
            }
            }
        }
