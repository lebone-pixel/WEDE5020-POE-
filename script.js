// script.js

var pets = [
    { 
        name: "Luna", 
        type: "Dog", 
        age: "2 years", 
        pic: "https://picsum.photos/id/237/300/200"   // safe placeholder
    },
    { 
        name: "Whiskers", 
        type: "Cat", 
        age: "1 year", 
        pic: "https://picsum.photos/id/1015/300/200" 
    },
    { 
        name: "Max", 
        type: "Dog", 
        age: "3 years", 
        pic: "https://picsum.photos/id/669/300/200" 
    },
    { 
        name: "Bella", 
        type: "Cat", 
        age: "4 years", 
        pic: "https://picsum.photos/id/201/300/200" 
    }
];

function showPets() {
    var gallery = document.getElementById("petGallery");
    
    for(var i = 0; i < pets.length; i++) {
        var pet = pets[i];
        
        var card = document.createElement("div");
        card.className = "pet-card";
        
        card.innerHTML = 
            "<img src='" + pet.pic + "' alt='" + pet.name + "'>" +
            "<h3>" + pet.name + "</h3>" +
            "<p>" + pet.type + " - " + pet.age + "</p>" +
            "<button onclick=\"adoptAlert('" + pet.name + "')\">Adopt Me</button>";
        
        gallery.appendChild(card);
    }
}

function adoptAlert(name) {
    alert("Thank you for wanting to adopt " + name + "!\nWe will contact you soon.");
}

window.onload = showPets;
