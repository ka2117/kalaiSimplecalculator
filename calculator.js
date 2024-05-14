
function calculate(){
var num1 = parseFloat(document.getElementById('num1').value)
// console.log(num1)
var oper = document.getElementById('operator')
// console.log(oper)
var selectedoper = oper.options[oper.selectedIndex].value
// console.log(selectedoper)
var num2 = parseFloat(document.getElementById('num2').value)
var result;
function add(num1,num2){
    return num1+num2
}
function sub(num1,num2){
    return num1-num2
}
function multiply(num1,num2){
    return num1*num2
}
function divide(num1,num2){
    if(num2 !==0){
        return num1/num2
    }
    else{
        return "error"
    }
}
switch(selectedoper){
    case "+":
        result = add(num1,num2)
        break
    case "-":
        result = sub(num1,num2)    
        break
    case "*":
        result = multiply(num1,num2)
        break
    case "/":
        result = divide(num1,num2)
        break
    default:
        result = "invalid operator"            
}
alert("result" + result)
document.getElementById("res").innerHTML = "Result is " + result
}
