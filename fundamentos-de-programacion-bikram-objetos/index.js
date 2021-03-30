let Coche = {
    marca: "marca",
    modelo: "modelo",
    matricula: "matricula"

}
let Casa = {
    codPostal : 0000 ,
    calle : "calle",
    portal : "portal",
    piso : "piso"
}
let FullStackDeveloper = {
    lenguajes : ["js","c++","PhP"],
    proyectos : ["proyect1", "proyect2"]
    
}
let Perro = {
    nombre : "lassi",
    raza : "cobarde",
    color : "azul tomate",
    edad : 13,
    ladrar : function ladrar() {
       return console.log("guau")
    },
    popo : function popo() {
        return Math.random()*3
    }
}
let marcaPortatil = Portatil.marca;
let marcaPortatil2 = Portatil.marca;
let grupos = Concierto.grupos;
let RGB = [Led.rojo, Led.verde , Led.azul]

Portatil.modelo = "P345";
Concierto.cartelera.push("Guns N' Roses")
Concierto.fecha = new Date()

Impresora.imprimiendo = [  "archivo","copias","numPaginas"]

let Noticia = {
    titular : "titular",
    cuerpo: "cuerpo"
}

let Persona = {
    nombre : "abel",
    apellidos : "Abbasi",
    edad: 28
}

let Avion = {
    numPasajeros: 228,
    despegar : function Despegar(){
        return console.log ("despegando")
    },
    volar : function volar() {
        return console.log("llegando al destino")
    },
    aterrizar : function aterrizar() {
        return console.log ("aterrizando")
    }
}

let Paquete = {
   contenido: ["uno", "dos"]
}

let Pais = {
    numHabitantes:2, 
    continente:"atlantis", 
    gentilicio: "Sokar"
}

let codError = O_Error.codigo;

let integrantes = Grupo.integrantes

let nivelesTinta = Impresora.tinta

let pixeles = Pantalla.pixeles

let especificaciones = Movil.especificaciones

Grupo.numIntegrantes = 5

Pantalla.dimensiones = "1920x1080"

Led.encendido = true , false

Movil.temperatura = '20º'