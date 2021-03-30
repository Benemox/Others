//Definición de una paleta de colores de coolors.co
let colorPalette = ["#ef476f","#ffd166","#06d6a0","#118ab2","#073b4c"];
//Obtenemos las colecciones que van a ser necesarias para el ejercicio
//Elementos clickables (a)
let listaElementosClickables = document.querySelectorAll("a");
//Imágenes
let listaImagenes = document.querySelectorAll("img");
//Párrafos
let listaParrafos = document.querySelectorAll("p");
//Articles y sections
let listaSectionYArticle = document.querySelectorAll("section, article");
//Variable para almacenar la imagen en curso
let imagenActual;
//Flag para determinar si el cambio de color es aleatorio
let aleatorio = false;
//Función para generar la ruta de un archivo gif sustitutivo aleatorio
function GeneraGif(){
    //Obtenemos un número aleatorio entre 1 y 6
    let numeroAleatorio = Math.floor(Math.random() * 5) + 1;
    let ruta = "./assets/magic-" + numeroAleatorio + ".gif";
    return ruta;
}//GeneraGif
//Función para desactivar el comportamiento por defecto de un evento
function DisableDefault(event){
    event.preventDefault();
}//DisableDefault
//Función para cambiar la imagen por un gif
function ChangeImage(event){
    event.target.src = GeneraGif();
}//ChangeImage
//Función para modificar el color de fondo y del texto de los párrafos
function ChangePColors(event){
    if (aleatorio)
    {
        //Generamos un número aleatorio entre el número total de colores de la paleta
        let colorAleatorio = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        //Se cambia el color del fondo por uno elegido de la paleta
        event.target.style.backgroundColor = colorAleatorio;
        //Idem para el texto
        colorAleatorio = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        event.target.style.color = colorAleatorio;
    }//if
    else
    {
        //Se cambia el color del fondo por uno elegido de la paleta
        event.target.style.backgroundColor = colorPalette[2];
        //Idem para el texto
        event.target.style.color = colorPalette[0];
    }//else
}//ChangePColors
//Función para restaurar el color de fondo y texto de los párrafos
function RestorePColors(event){
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
}//RestorePColors
//Función para cambiar el color de fondo de un section o article
function ChangeArticleSectionBkColor(event){
    event.target.style.backgroundColor = colorPalette[3];
}//ChangeArticleSectionBkColor
//Función para modificar/restaurar una imagen con una dada
function SwitchImage(event){
    let imageName = event.target.src.substring(event.target.src.length - 15, event.target.src.length);
    if (imageName === "abracadabra.gif")
    {
        //Hay que restaurar la imagen original
        event.target.src = imagenActual;
    }//if
    else
    {
        //Se obtiene la imagen en curso para poder devolverla
        imagenActual = event.target.src;
        //Se sustituye la imagen por el gif "abracadabra.gif"
        event.target.src = "./assets/abracadabra.gif";
    }//else    
}//SwitchImage
//Función para cambiar el color de fondo de los article y section
function SwitchArticleSectionBkColor(event){
    if ((event.target.style.backgroundColor == "")||(event.target.style.backgroundColor == "white"))
    {
        event.target.style.backgroundColor = colorPalette[2];
    }//if
    else
    {
        event.target.style.backgroundColor = "white";
    }//else
}//SwitchArticleSectionBkColor
//Función para aplicar una operación en los nodos de un nodeList frente a un evento dado
function ApplyOperationToNodes(list, event, operation){
    list.forEach(function(element){element.addEventListener(event, operation);});
}//ApplyOperationToNodes
//------------------------  EJECUCIÓN  ------------------------------//
//1.-
//Desactivamos el comportamiento por defecto del evento click sobre los links
ApplyOperationToNodes(listaElementosClickables, "click", DisableDefault);
//2.-
//Cambiamos la imagen por un gif aleatorio de entre los existentes al hacer click
ApplyOperationToNodes(listaImagenes, "click", ChangeImage);
//Cambiamos el color del texto y fondo del párrafo al hacer click sobre él
ApplyOperationToNodes(listaParrafos, "click", ChangePColors);
//Cambiamos el color de fondo de un article o section al hacer click sobre él
ApplyOperationToNodes(listaSectionYArticle, "click", ChangeArticleSectionBkColor);
//3.-
//Cambiamos la imagen por abracadabra al entrar en la misma
ApplyOperationToNodes(listaImagenes, "mouseenter", SwitchImage);
//Restauramos la imagen al salir de la misma
ApplyOperationToNodes(listaImagenes, "mouseleave", SwitchImage);
//Cambiamos el color del párrafo al entrar en el mismo
ApplyOperationToNodes(listaParrafos, "mouseenter", ChangePColors);
//Restauramos el color del párrafo al salir del mismo
ApplyOperationToNodes(listaParrafos, "mouseleave", RestorePColors);
//Cambiamos el color de la section/article al entrar en el mismo
ApplyOperationToNodes(listaSectionYArticle, "mouseenter", SwitchArticleSectionBkColor);
//Restauramos el color de la section/article al salir del mismo
ApplyOperationToNodes(listaSectionYArticle, "mouseleave", SwitchArticleSectionBkColor);