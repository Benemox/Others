const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];




class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() {
        
       return this.civilImages[(Math.floor(Math.random() * this.civilImages.length))];
       

    }
    
    getRandomMilitary() {
        
        return this.militaryImages[(Math.floor(Math.random() * this.militaryImages.length))];
        
    }
    
    getAll() {
        
        return this.civilImages + this.militaryImages

    }
}

class Painter {
    constructor() {
        this.createGallery();
    }
    createGallery() {
        //Creará un elemento section y lo agregará al body
        this.$gallery = document.createElement("section");
        document.querySelector("body").appendChild(this.$gallery);
    }
    createImageTag(imageUrl) {
        /*
        Acepta la url de una imagen y devuelve los siguientes elementos:
            <picture>
                <img src="pepito.jpg" />
            </picture>
        */
       let picture = document.createElement("picture");
       let imagen = document.createElement("img");
       imagen.src = imageUrl;
       picture.appendChild(imagen);
       return picture;
    }
    paintSingleImage(imageUrl) {
        this.$gallery.appendChild(this.createImageTag(imageUrl));
    }
    paintMultipleImages(arrayOfImages) {
        //arrayOfImages.forEach(function(elemento){this.paintSingleImage(elemento)});
        arrayOfImages.forEach((elemento) => {this.paintSingleImage(elemento)});
        /*
        for (let cont = 0; cont < arrayOfImages.length; cont++)
        {
            this.paintSingleImage(arrayOfImages[cont]);
        }//for
        */
    }
}
const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();


let hola = new Gallery(civilAircrafts, militaryHelicopter);
console.log(hola.getRandomCivil());

