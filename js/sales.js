var parent=document.getElementById('centerDiv');

function showCheckout(){
    console.log("Hello");
    var sales = localStorage.getItem('sales');
    if (sales !== null) {
        sales = JSON.parse(sales);
    }
    else if (sales === null) {
        sales = [];
    }

    if(sales.length===0){
        parent.innerHTML="";
        var head=document.createElement('h4');
        var txt=document.createTextNode("No sales uptill now!!");
        head.appendChild(txt);
        parent.appendChild(head);
    }
    else{
        var table=document.getElementById('mytable');

        for(var i=0;i<sales.length;i++){
            var newRow=document.createElement('tr');

            var dateTd=document.createElement('td');
            var bcodeTd=document.createElement('td');
            var quanTd=document.createElement('td');
            var priceTd=document.createElement('td');

            var dateTxt=document.createTextNode(sales[i].date);
            var bcodeTxt=document.createTextNode(sales[i].barcode);
            var quanTxt=document.createTextNode(sales[i].quantity);
            var priceTxt=document.createTextNode(sales[i].price);

            dateTd.appendChild(dateTxt);
            bcodeTd.appendChild(bcodeTxt);
            quanTd.appendChild(quanTxt);
            priceTd.appendChild(priceTxt);

            newRow.appendChild(dateTd);
            newRow.appendChild(bcodeTd);
            newRow.appendChild(quanTd);
            newRow.appendChild(priceTd);

            table.appendChild(newRow);
        }
    }
}