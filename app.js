// Scopes in javaScript:
// 1 Global Scope
// 2 Script Scope
// 3 Block Scope
// 4 Local Scope Function Scope
var a=100;
console.log(a); //100
let b=200;
const c=300;
console.log(b); //200

{   var a=100;
    console.log(a);
    let b=20
    const c=300;
    console.log(b);
    var a=100;
    console.log(c);
    var a=100;
    

}
console.log(a)
console.log(b)
console.log(c)

function demo(){
    console.log(a)
     let  b=30
    console.log(a) 
    console.log(b) 
    
}
demo()