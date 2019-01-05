var firstNum;
var SecondNum;
var single_val;

function getfirst(){
    return document.getElementById("firstNum").value;
}

function getSecond(){
    return document.getElementById("SecondNum").value;
}

function getval(){
    return document.getElementById("val").value;
}

function getval2(){
    return document.getElementById("val2").value;
}




    //Using Anonymous Paramerterized Function 
    var ad = function(x,y){return parseInt(x) + parseInt(y);}

function add(){
    firstNum = getfirst();
    SecondNum = getSecond();

    var res = ad(firstNum,SecondNum);
   
    document.getElementById("result").innerHTML = "Answer is : "+res;
    document.getElementById("error").innerHTML = "Add function Is perform Sucessfully";
}

    //Using Function Constructor
var su = new Function("x","y","return x*y");
function mul(){
    firstNum = getfirst();
    SecondNum = getSecond();

    var res = su(firstNum,SecondNum);
    document.getElementById("result").innerHTML = "Answer is : "+res;
    document.getElementById("error").innerHTML = "Multiply function Is perform Sucessfully";

}

    //Using Lambda Function
function sub(){    
    firstNum = getfirst();
    SecondNum = getSecond();
    var x = parseInt(firstNum); 
    var y = parseInt(SecondNum);

var res  = (x,y) => x-y;   
document.getElementById("result").innerHTML = "Answer is : "+res(x,y);
document.getElementById("error").innerHTML = "Subtraction function Is perform Sucessfully";

}

var d = function(x,y){return parseInt(x) / parseInt(y);}

function div(){
    firstNum = getfirst();
    SecondNum = getSecond();
    var x = parseInt(firstNum); 
    var y = parseInt(SecondNum);

    var res = d(firstNum,SecondNum);
   
    document.getElementById("result").innerHTML = "Answer is : "+res;
    document.getElementById("error").innerHTML = "Divide function Is perform Sucessfully";
}


function sqr(){
    single_val = getval();
    var x = parseInt(single_val);

     x = x*x;
     document.getElementById("result").innerHTML = "Answer is : "+x;
     document.getElementById("error").innerHTML = "Square function Is perform Sucessfully";
}


function cube(){
    single_val = getval();
    var x = parseInt(single_val);

     x = x*x*x;
     document.getElementById("result").innerHTML = "Answer is : "+x;
     document.getElementById("error").innerHTML = "Cube function Is perform Sucessfully";
}


function fac() {
    single_val = getval();
    var n = parseInt(single_val);
    var res = factorial(n);

    document.getElementById("result").innerHTML = "Answer is : "+res;
    document.getElementById("error").innerHTML = "Factorial function Is perform Sucessfully";
  }


var i =1;

function factorial (n){    
    var fac = 0;
    fac = parseInt(n);
    for (i; i < n; i++) {
      fac = fac * (n-i);
    }
    return fac
  }
  