let c;
let e;
let w;
document.getElementById("but").onclick = function(){
e=document.getElementById("a").value;
w=document.getElementById("b").value;
c=Number(e)+Number(w);
document.getElementById("output").innerHTML=c;
}