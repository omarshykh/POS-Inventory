        var bcode,quanti;
        var totalcost=0,totalitems=0;
        document.getElementById('totalitems').value=totalitems;
        document.getElementById('totalamount').value=totalcost;
        function handleKeyPressBarcode(e){
             var key=e.keyCode;
            if (key==13){
                if(document.getElementById('barcode').value===""){
                    alert("No barcode entered!");
                    document.getElementById('barcode').focus();
                }
                else{
                    bcode=document.getElementById('barcode').value;
                    document.getElementById('quantity').focus();
                }
            }
        }

        function handleKeyPressQuantity(e){
             var key=e.keyCode;
            if (key==13){
                if(document.getElementById('barcode').value===""){
                    alert('Enter barcode first');
                    document.getElementById('barcode').focus();
                }
                else{
                    if(document.getElementById('quantity').value===""){
                    document.getElementById('quantity').value="1";
                    quanti=1;
                    setTimeout(unitQuan, 1000);
                    addRecord();
                    document.getElementById('barcode').value="";
                    document.getElementById('barcode').focus();
                }
                else{
                    var check =checkInp();
                    if(check===true){
                        quanti=parseInt(document.getElementById('quantity').value);
                    addRecord();
                    setTimeout(unitQuan, 1000);
                    document.getElementById('barcode').value="";
                    document.getElementById('barcode').focus();
                    }
                    else{
                        alert("Quantity must be integer!!");
                    document.getElementById('quantity').focus();
                    }
                }
                }
            }
        }
        function unitQuan(){
            document.getElementById('quantity').value="";
        }
        function checkInp()
        {
            var auth=true;
            var x=document.getElementById('quantity').value;
            var regex=/^[0-9]+$/;
            if (!(x.match(regex)))
            {
                auth=false;
            }
            return auth; 
        }
        function addRecord(){
            var bcode=document.getElementById('barcode').value;
            var name,totalQuantity,price,index;

            var products = localStorage.getItem('products');
            if(products !== null){
                products = JSON.parse(products);

                var flag=false,outOfStock=false;
            for(var i=0;i<products.length;i++){
                if(products[i].barcode ===bcode){
                    flag=true;
                    name=products[i].pname;
                    totalQuantity=products[i].quantity;
                    if(totalQuantity==0){
                        outOfStock=true;
                    }
                    else if(totalQuantity<0){
                        outOfStock=true;
                        products[i].quantity=0;
                        products=JSON.stringify(products);
                        localStorage.setItem('products',products);
                    }
                    else if(totalQuantity>0 && totalQuantity<quanti){
                        outOfStock=true;
                    }
                    else if(totalQuantity>0 && totalQuantity>=quanti){
                        totalQuantity=totalQuantity-quanti;
                        price=products[i].price;
                        index=i;    
                    }
                    
                }
            }
            if(flag){
                if(outOfStock){
                        alert('Product out of stock!!');
                }
                else{
            price=price*quanti;
            totalitems=totalitems+quanti;
            document.getElementById('totalitems').value=totalitems;
            totalcost=totalcost+price;
            document.getElementById('totalamount').value=totalcost;
            products[index].quantity=totalQuantity;
            products=JSON.stringify(products);
            localStorage.setItem('products',products);
            addRow(bcode,name,quanti,price);
            addSale(bcode,quanti,price);
                }
        }
        else{
            alert('No such barcode found in stock!');
            document.getElementById('barcode').value="";
            document.getElementById('quantity').value="";
        }
            }
            else if(products === null){
                products=[];
                alert("No products available in stock!!");
            }
            
        }
        function addRow(bcode,prodName,quanti,pric){
            //add row in table
            var parent = document.getElementById('mytable');

            var newRow = document.createElement('tr');
            var barcodeTd = document.createElement('td');
            var productTd = document.createElement('td');
            var quanTd = document.createElement('td');
            var priceTd = document.createElement('td');
            var barcodeText = document.createTextNode(bcode);
            var productText = document.createTextNode(prodName);
            var quanText = document.createTextNode(quanti);
            var priceText = document.createTextNode(pric);
            barcodeTd.appendChild(barcodeText);
            productTd.appendChild(productText);
            quanTd.appendChild(quanText);
            priceTd.appendChild(priceText);
            newRow.appendChild(barcodeTd);
            newRow.appendChild(productTd);
            newRow.appendChild(quanTd);
            newRow.appendChild(priceTd);
            parent.appendChild(newRow);
        }

        function endShopping(){
            var cashPaid=+prompt("Enter the amount user paid?");
            var parent=document.getElementById('maindiv');
            parent.innerHTML="";

            var itemsstring="Total Items: "+totalitems;
            var amountstring="Total Amount: "+totalcost;
            var paidstring="Amount Paid: "+cashPaid;
            var changestring="Change Due: "+(cashPaid-totalcost);

            var para1=document.createElement('h3');
            para1.setAttribute('class','result');
            var para2=document.createElement('h3');
            para2.setAttribute('class','result');
            var para3=document.createElement('h3');
            para3.setAttribute('class','result');
            var para4=document.createElement('h3');
            para4.setAttribute('class','result');

            var para1txt=document.createTextNode(itemsstring);
            var para2txt=document.createTextNode(amountstring);
            var para3txt=document.createTextNode(paidstring);
            var para4txt=document.createTextNode(changestring);

            var button=document.createElement('button');
            button.setAttribute('id','newbutton');
            button.setAttribute('onclick',"location='cashier.html'");
            var buttonTxt=document.createTextNode("New Billing");
            button.appendChild(buttonTxt);

            para1.appendChild(para1txt);
            para2.appendChild(para2txt);
            para3.appendChild(para3txt);
            para4.appendChild(para4txt);

            parent.appendChild(para1);
            parent.appendChild(para2);
            parent.appendChild(para3);
            parent.appendChild(para4);
            parent.appendChild(button);

        }

        function addSale(bcode,quanti,price){
            var date = new Date();
            var d=date.getDate();
            var m=date.getMonth()+1;
            var y=date.getFullYear();
            var totalDate=d+"/"+m+"/"+y;

            var sales = localStorage.getItem('sales');
            if(sales !== null){
                sales = JSON.parse(sales);
            }
            else if(sales === null){
                sales=[];
            }

            var sale={
                date:totalDate,
                barcode:bcode,
                quantity:quanti,
                price:price
            };
            sales.push(sale);
            sales=JSON.stringify(sales);
            localStorage.setItem('sales',sales);
        }