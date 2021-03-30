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
    
        this.createGallery()
        


    }

    createGallery() {
       let seccion =  document.createElement("section");
       let body = document.getElementById("cuerpo");
       body.appendChild(seccion);
       seccion.setAttribute()


        
    }

    createImageTag(imageUrl) {
        
    }

    paintSingleImage(imageUrl) {
      let img = document.createElement("img");
      img.src = imageUrl
        
    }
    paintMultipleImages(arrayOfImages) {
        
        
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();


let hola = new Gallery(civilAircrafts, militaryHelicopter);
console.log(hola.getRandomCivil());

