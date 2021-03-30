let arrayVacio = []
let  arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrayNumerosPares = [0, 2, 4, 6, 8]
let arrayBidimensional  = [[0, 1, 2] , ["a", "b", "c"]]


function suma(a,b){ return a + b}

// function potenciacion (a,b){
//     let pots = 0
//     for (let i = 0; i < b; i++) {
//         pots*=a   
//     }
//     return pots
// }
// potenciacion(2,2)
function potenciacion (a,b){ return a**b}

let palabras = "esta pato es un pato"
function separarPalabras(a) {
        separador = " ";
        let cadena = a.split(separador);
        return cadena
     }

function repetirString (a,b){
    let result="";
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result
}
function esPrimo (a){
    let primo = true
    for (let i= 2;i<=a;i++){
     if((a % i ===0 ) ){
        primo = false
     }
    }
     return primo
 }






 function esPrimo(num) {for (i = 2; i  < num; i++)if (num % i === 0) return false; return true;}
 esPrimo(1603)
















 function ordenarArray(a){
        let contbucle = 0
        let cont = 0
        let value1 =  0
        do {
            while(contbucle<a.length){
                if (a[contbucle]>a[contbucle+1]) {
                    value1 = a[contbucle+1]; 
                    a[contbucle+1]= a[contbucle]
                    a[contbucle]= value1
                }
                contbucle++
            }
            cont++
            console.log++
        } while(cont)
            
        
        return a
        }
  
   
    
function ordenarArray(a){
    let contbucle = 0
        let cont = 0
        let value1 =  0
    for (let i = 0; i<a.length; i++) {
        value1 = a[i+1]; 
            a[i+1]= a[i]
            a[i]= value1
        i++
    return a   
}
ordenarArray([128,322,5,3])

































 function obtenerPares(a){
    let cadena = []
        for (let i= 0;i<a.length;i++) {
            if(a[i] % 2 === 0 ){
                cadena.push(a[i]);
            }
        }
     return cadena
 }
obtenerPares(array)
let arrays= [242, 167, 218, 245, 209, 221, 237, 168, 222]

function pintarArray(array){

    let result= "["
    for(let i=0;i<array.length;i++){
        result+= array[i];
        if(i != (array.length - 1)){
            result+=", ";
        }
    }
    return result+="]"
}
pintarArray(arrays)


//13.- Crea la función 'arrayMapi' que acepte como argumento un array y una función y retorne un array en el que se haya aplicado la función a cada elemento del primer array
function arrayMapi(array,func){
    let b = array
    for (let i = 0; i <=0; i++) {
        b[i]=func(b[i])
        console.log(b[i])
    }
    return b
}
let array= [242, 167, 218, 242, 242, 242]
function prueba(e){
    return e+1
}
 arrayMapi(array,prueba)
// let miau= [242, 167, 218, 242, 242, 242]
//  function eliminarDuplicados(array){
//      let array2= array 
//      for(let i=0;i<array2.length;i++){
//          for(let x=0;x<array2.length;i++){
//              if(array2[i]==array2[x]){
//                 //tengo que eliminar el elemento x del array
               
//                             array2.splice(i)
//              }
//          }
//      }  
//      return array2
//  }

//  eliminarDuplicados(miau)
function eliminarDuplicados (numerosArray){
    let unique= [];
    numerosArray.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element)
        }
    });
    return unique;
 };

//let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

// let holaMundo = ["Hola", "Mundo"];

//let loGuardoTodo = ["hola", 'que', 23, 42.33, 'tal'] ;

// let arrayDeArrays =  [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']] ;


let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9] ;
//16
let holaMundo= ["Hola", "Mundo"];
//17
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
//18
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

function multiplicacion (a,b ){
    return a*b
}
function division (a,b ){
    return a/b
};

function esPar (a){
    let primo = false
     if((a % 2 === 0) ){
        primo = true
     }
    
     return primo
 };
let arrayFunciones = [ 
//suma,resta, multiplicacion
function suma( num1, num2) {
    return num1 + num2
},
function resta(a,b) {
    return num1 - num2
},
function multiplicacion(a,b) {
    return num1 * num2
}
];
console.log(arrayFunciones[0](4, 5))

//23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
function ordenarArray2(a){

let contbucle = 0
let cont = 0
let value1 =  0
do {
    while(contbucle<a.length){
        if (a[contbucle]<a[contbucle+1]) {
            value1 = a[contbucle]; 
            a[contbucle]= a[contbucle + 1]
            a[contbucle+1]= value1
        }
        contbucle++
    }
    cont++
} while (cont == a.length);
return a
}
ordenarArray2([3,5,1])
//24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares.

function obtenerImpares (a){
    let b = []
    for(i=0; i<a.length; i++){
        if( a[i] % 2 != 0){
         b.push(a[i]);
         console.log(b)
        }
    }
    return b
}
obtenerImpares([3,2,1,7])
//25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

function sumarArray(array){
    let b = 0
    for (let i = 0; i < array.length; i++) {
        b += array[i];   
    }
    return b
}
sumarArray([3,2,1,7])
//26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
function multiplicarArray(a){
    let b = 1
    for (let i = 0; i < a.length; i++) {
        b *= a[i];   
    }
    return b
}
multiplicarArray([2,2])
