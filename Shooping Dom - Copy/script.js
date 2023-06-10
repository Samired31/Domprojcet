var btn = document.getElementById("pro");
btn.onclick = function(){
    if (btn.style.color === "red"){
        btn.style.color = "black"
    } else {
        btn.style.color = "red"
    }
}
const btn1 = document.getElementById("shoes");
btn1.onclick = function(){
    if (btn1.style.color === "red"){
        btn1.style.color = "black"
    } else {
        btn1.style.color = "red"
    }
}
const btn2 = document.getElementById("watch");
btn2.onclick = function(){
    if (btn2.style.color === "red"){
        btn2.style.color = "black"
    } else {
        btn2.style.color = "red"
    }
}

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
var num = document.getElementById("Quant");
var a = num.value
minus.onclick = function () {
    if(a > 0){
        a = a - 1;
        num.value = a;
    }
    
}
plus.onclick = function () {
    a = a + 1;
    num.value = a;
}
const min = document.getElementById("min");
const plu = document.getElementById("plu");
var num1= document.getElementById("eed");
var b = num1.value
min.onclick = function () {
    if( b > 0){
        b = b - 1;
        num1.value = b;
    }
    
}
plu.onclick = function () {
    b = b + 1;
    num1.value = b;
}
const minu = document.getElementById("minu");
const plsu = document.getElementById("plsu");
var num2 = document.getElementById("Qua");
var c = num2.value
minus.onclick = function () {
    if( c > 0){
        c = c - 1;
        num2.value = c;
    }
    
}
plsu.onclick = function () {
    c = c + 1;
    num2.value = c;
}


