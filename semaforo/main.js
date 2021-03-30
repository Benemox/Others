let rojo = document.getElementById("red");
console.log(rojo)
let green = document.getElementById("green");
console.log(green)
let yellow = document.getElementById("yellow");
console.log(yellow)
let btn = document.getElementById("btn1");
console.log(btn)

let color ={
    R1 : 1,
     G2 : 0,
    Y3 : 0
}

function changelight(){

    
   
    if(color.R1===1){
        color.Y3 = 1
        color.R1 = 0
        color.G2 = 0
        yellow.className="yellow1"
        green.className="init1"
        red.className="init1"
    }else if (color.Y3===1) {
        color.Y3 = 0
        color.R1 = 0
        color.G2 = 1
        yellow.className="init1"
        green.className="green1"
        red.className="init1"
        
    } else if(color.G2===1) {
        color.Y3 = 0
        color.R1 = 1
        color.G2 = 0
        yellow.className="init1"
        green.className="init1"
        red.className="red1"
    }
}
btn.addEventListener("click", changelight );

console.log('b' + 'a' + + 'a').toLowerCase();