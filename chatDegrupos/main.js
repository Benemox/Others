let totalMessages = 0

function init(){
   let firebaseConfig = {
    apiKey: "AIzaSyAGUXmcgZ87JmDTKG58BkXTUXGZLXTJYtQ",
    authDomain: "abelabbasi-proyectos.firebaseapp.com",
    databaseURL: "https://abelabbasi-proyectos.firebaseio.com",
    projectId: "abelabbasi-proyectos",
    storageBucket: "abelabbasi-proyectos.appspot.com",
    messagingSenderId: "552775868823",
    appId: "1:552775868823:web:4c0872c001649999d124d2",
    measurementId: "G-4V2H31PCG0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}
init()
function getMessages(){
  database = firebase.database()
  messagesRef = database.ref(`mensages/`)
  .on('value',snapshot =>{
    let data = snapshot.val();
    console.log(Object.values(data).length);

        Object.values(data).reverse().filter((objeto, pos) => pos < 10).reverse().map(objeto => {
          escribir(objeto.text)
        })
      
  })
  console.log(messagesRef)

}

function escribir(texto){
  let p =document.createElement("p")
  p.innerText = texto
  document.getElementById("messagesBox").appendChild(p)
}

function newMessage(textoImput){
  let today = new Date()
  let messagesRef = firebase.database().ref("mensages/")
  
  messagesRef.push({
    text : textoImput,
    date : today
  })
  
}
document
  .getElementById("sendBtn")
  .addEventListener("click", () => {
    newMessage(document.getElementById("messageInput").value)
  });
getMessages()