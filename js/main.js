// for cart 1

function addtocart1(){
    document.getElementById('cart1').style.display="";
    var card = document.getElementById('addb');
    document.getElementById('addgroup').style.display = "block";
    card.style.display= "none";
    Number(document.getElementById('c1').value = 1);
    Number(document.getElementById('qty1').innerHTML = 1);
    Number(document.getElementById('price1').innerHTML = 400);
}

function add1(){
    var x = Number(document.getElementById('c1').value);
    x = x + 1;
    Number(document.getElementById('c1').value = x);
    Number(document.getElementById('qty1').innerHTML = x);
    Number(document.getElementById('price1').innerHTML = 400*x);
}

function min1(){
    
    var x = Number(document.getElementById('c1').value);
    if(x>1){
    x = x - 1;
    Number(document.getElementById('c1').value = x);
    var q = Number(document.getElementById('qty1').innerHTML);
    Number(document.getElementById('qty1').innerHTML = q-1);
    var num = Number(document.getElementById('price1').innerHTML);
    Number(document.getElementById('price1').innerHTML = num-400);
    }else{
        document.getElementById('cart1').style.display="none";
        document.getElementById('addb').style.display = "block"; 
        document.getElementById('addb').style.margin = "auto"; 
        document.getElementById('addgroup').style.display = "none";
        Number(document.getElementById('price1').innerHTML = 0);
    }
}

// for cart 2
function addtocart2(){
    document.getElementById('cart2').style.display = "";
    var card = document.getElementById('addb2');
    document.getElementById('addgroup2').style.display = "block";
    card.style.display= "none";
    Number(document.getElementById('c2').value = 1);
    Number(document.getElementById('qty2').innerHTML = 1);
    Number(document.getElementById('price2').innerHTML = 200);
}

function add2(){
    var x = Number(document.getElementById('c2').value);
    x = x + 1;
    Number(document.getElementById('c2').value = x);
    Number(document.getElementById('qty2').innerHTML = x);
    Number(document.getElementById('price2').innerHTML = 200*x);
}

function min2(){
    
    var x = Number(document.getElementById('c2').value);
    if(x>1){
    x = x - 1;
    Number(document.getElementById('c2').value = x);
    var q = Number(document.getElementById('qty2').innerHTML);
    Number(document.getElementById('qty2').innerHTML = q-1);
    var num = Number(document.getElementById('price2').innerHTML);
    Number(document.getElementById('price2').innerHTML = num-200);
    }else{
        document.getElementById('cart2').style.display = "none";
        document.getElementById('addb2').style.display = "block"; 
        document.getElementById('addb2').style.margin = "auto"; 
        document.getElementById('addgroup2').style.display = "none";
        Number(document.getElementById('price2').innerHTML = 0);
    }
}

// for cart 3
function addtocart3(){
    document.getElementById('cart3').style.display = "";
    var card = document.getElementById('addb3');
    document.getElementById('addgroup3').style.display = "block";
    card.style.display= "none";
    Number(document.getElementById('c3').value = 1);
    Number(document.getElementById('qty3').innerHTML = 1);
    Number(document.getElementById('price3').innerHTML = 500);
}

function add3(){
    var x = Number(document.getElementById('c3').value);
    x = x + 1;
    Number(document.getElementById('c3').value = x);
    Number(document.getElementById('qty3').innerHTML = x);
    Number(document.getElementById('price3').innerHTML = 500*x);
}

function min3(){
    
    var x = Number(document.getElementById('c3').value);
    if(x>1){
    x = x - 1;
    Number(document.getElementById('c3').value = x);
    var q = Number(document.getElementById('qty3').innerHTML);
    Number(document.getElementById('qty3').innerHTML = q-1);
    var num = Number(document.getElementById('price3').innerHTML);
    Number(document.getElementById('price3').innerHTML = num-500);
    }else{
        document.getElementById('cart3').style.display = "none";
        document.getElementById('addb3').style.display = "block"; 
        document.getElementById('addb3').style.margin = "auto"; 
        document.getElementById('addgroup3').style.display = "none";
        Number(document.getElementById('price3').innerHTML = 0);
    }
}

function total(){
    var n1 = Number(document.getElementById('price1').innerHTML);
    var n2 = Number(document.getElementById('price2').innerHTML);
    var n3 = Number(document.getElementById('price3').innerHTML);
    var total = Number(n1+n2+n3);
    document.getElementById('total').innerHTML="TOTAL: "+total;
}

function proceed(){
    var n1 = Number(document.getElementById('price1').innerHTML);
    var n2 = Number(document.getElementById('price2').innerHTML);
    var n3 = Number(document.getElementById('price3').innerHTML);
    var total = Number(n1+n2+n3);
    if(total == 0){
        Swal.fire({
            title: 'Error!',
            text: 'Empty Cart',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }else{
        Swal.fire(
            'Success!',
            'Order Successful!',
            'success'
          )
    }
}