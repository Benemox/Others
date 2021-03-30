
// const escribe = msg => {
//   const $body = document.querySelector('body')
//   const $message = document.createElement('p')
//   $message.innerHTML = msg
//   $body.appendChild($message)
// }
// /*
// let a = []
// function printString (string) {
//   z=string
//   return new Promise((z)=>{
//         setTimeout(
//             () =>{escribe(z)},Math.floor(Math.random() * 100) + 10)
//   }).then()
// }

// let z=(string) => new Promise((success)=>setTimeout(() =>{escribe(string);success()},Math.floor(Math.random() * 100) + 10))
// // z('Episodio I: la amenaza fantasma')
// // .then(()=> z('Episodio II: el ataque de los clones'))
// // .then(()=> z('Episodio II: el ataque de los clones'))
// // .then(()=> z('Episodio III: la venganza de los sith'))
// // .then(()=> z('Han Solo: una historia de Star Wars'))


// let Cronologia = ['Episodio I: la amenaza fantasma','Episodio II: el ataque de los clones','Episodio III: la venganza de los sith'];

// b = ["a", "b", "c"]

// function pintar(str) {
//     return new Promise((res) => {
//         setTimeout(() => {
//             console.log(str)
//             res();
//         }, Math.random() * 100 + 10);
//     });
// }
//  function pintar_array(arr){
//    	 arr.map(async (el) => await escribe(el) )

//     return 1;
//  }
    
                            
// pintar_array(Cronologia);


// // function printPrecuela () {
// //   printString('Episodio I: la amenaza fantasma')
// //   printString('Episodio II: el ataque de los clones')
// //   printString('Episodio III: la venganza de los sith')
// // }
// */
// function belleza(string){
//   return new Promise((success)=>setTimeout(
//     ()=>{escribe(string);
//       success();
//       console.log(string)},
//       Math.floor(Math.random() *100) +10)
//       )
// }

// // printPrecuela('Episodio I: la amenaza fantasma')
// // .then(printPrecuela('Episodio II: el ataque de los clones'))
// // .then(printPrecuela('Episodio III: la venganza de los sith'))
// const escribo = msg => {
//   const $body = document.querySelector('body')
//   const $message = document.createElement('p')
//   $message.innerHTML = msg
//   $body.appendChild($message)
// }

//  let z=(string) => new Promise((success)=>setTimeout(() =>{escribo(string);success();console.log(string)},Math.floor(Math.random() * 100) + 1))
// // z('a').then(()=> z('b')).then(()=> z('c')).then(()=> z('d')).then(()=> z('e'))
// // z('Episodio I: la amenaza fantasma')
// // .then(()=> z('Episodio II: el ataque de los clones'))
// // .then(()=> z('Episodio II: el ataque de los clones'))
// // .then(()=> z('Episodio III: la venganza de los sith'))
// // .then(()=> z('Han Solo: una historia de Star Wars'))

// async function printAll(){
//     let letras =  async function() { z('a').then(()=> z('b')).then(()=> z('c')).then(()=> z('d')).then(()=> z('e')); return 1}
//     await letras()
//     await belleza('Episodio I: la amenaza fantasma')
//     await belleza('Episodio II: el ataque de los clones')
//     await belleza('Episodio III: la venganza de los sith')
//     await belleza('Han Solo: una historia de Star Wars')
//     await belleza('Rogue One: una historia de Star Wars')
//     await belleza('Episodio IV: una nueva esperanza')
//     await belleza('Episodio V: el imperio contraataca')
//     await belleza('Episodio VI: el regreso del jedi')
// }

//  printAll()



// let Cronologia1 = ['Episodio I: la amenaza fantasma','Episodio II: el ataque de los clones','Episodio III: la venganza de los sith'];

// function pintar(str){
//   return new Promise(success, reject)
// }
// function pintar_array(arr){
//   arr.map(async (el) => await escribe(el))
// }


// function printParalelas () {
//   printString('Han Solo: una historia de Star Wars')
//   printString('Rogue One: una historia de Star Wars')
// }

// function printOriginal () {
//   printString('Episodio IV: una nueva esperanza')
//   printString('Episodio V: el imperio contraataca')
//   printString('Episodio VI: el regreso del jedi')
// }

// function printSecuelas () {
//   printString('Episodio VII: el despertar de la fuerza')
//   printString('Episodio VIII: el último jedi')
//   printString('Episodio IX: el ascenso de Skywalker')
// }

// function printAll () {
//   printPrecuela()
//   printParalelas()
//   printOriginal()
//   printSecuelas()
// }

// printAll()

// let myPromise = new promise()
//     .then()

async function a(str){
   let resultado = await fetch(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${str}`)
    .then(resp => resp.json())
    .then(result =>  result.message )
  
  return resultado;
}

let texto = document.querySelector("#Donald")
let botton = document.querySelector("#button")
let body = document.querySelector("body")

botton.addEventListener("click", async () => {
  let p = document.createElement("p")
  
  p.innerText= await a(texto.value)
  
  body.appendChild(p)
})