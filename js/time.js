        function setDate() {
            var date = new Date();
            var d = date.toString();
            var d = d.slice(0, 16);
            document.getElementById('date').innerHTML = d;
        }

        function startTime() {
            var today = new Date();
            var h = today.getHours();
            if(h===0){
                h=12;
            }
            else if(h>12){
                h=h-12;
            }
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
            var t = setTimeout(startTime, 1000);
        }
        function checkTime(i) {
            if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
            return i;
        }

        function setUserName(){
            var userName = localStorage.getItem('userLogin');
            userName = JSON.parse(userName);
            var username=userName.name;
            document.getElementById('username').innerHTML="Hello "+username;
            if(userName.designation==="Admin"){
                document.getElementById('username').setAttribute('onclick',"window.location='admin.html'");
            }
            else if(userName.designation==="Cashier"){
                document.getElementById('username').setAttribute('onclick',"window.location='cashier.html'");
            }
            document.getElementById('logout').innerHTML="Logout";
            document.getElementById('logout').setAttribute('onclick',"window.location='index.html';localStorage.removeItem('userLogin');localStorage.removeItem('indexLogin')");
        }

        function changePass(){
           var newWindow = window.open("change.html", "Change Password", "width=620,height=360");
        }

        function checkPrevious(){
            var userLogin= localStorage.getItem('userLogin');
            userLogin=JSON.parse(userLogin);
            if(userLogin!==null){
                var desg=userLogin.designation;
                if(desg==="Admin"){window.location="admin.html";}
                else if(desg==="Cashier"){window.location="cashier.html";}
            }
        }