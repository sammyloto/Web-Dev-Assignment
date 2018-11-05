

function calcFunction(calculation){
    var input1 = parseFloat(document.getElementById('value1').value);
    var input2 = parseFloat(document.getElementById('value2').value);
    var Ans, sign, s = document.getElementById('answer');
    var operation = document.getElementById('operation');
    if (calculation=="add"){
        Ans= input1+input2;// les instead of var is es6
        sign="+"
    }
    else if(calculation=="minus"){
        Ans= input1-input2;
        sign="-"
    }
    else if(calculation=="prod"){
        Ans= input1*input2;
        sign="*"
    }
    else if(calculation=="divide"){
        Ans= input1/input2;
        sign="/"
    }
    s.innerHTML = Ans;   
    operation.innerHTML = sign; 
}//end of func
