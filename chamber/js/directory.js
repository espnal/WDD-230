// import * as js from "./js.js";
// js.toggleMenu()
// js.toggleMinBanner()
// js.datebox()
// const mainDiv = document.querySelector(".directory");
// const secondDiv = document.querySelector(".directory-list");
const grid = document.getElementById("grid");
const list = document.querySelector("#list");

function toggleClassone() {
    const class_name = document.getElementById("directory-list").classList.toggle("directory")
    return class_name
}
grid.onclick = toggleClassone;




function displayCards(cards, x) {
    // Create elements to add to the document
    let card_section = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let img = document.createElement('img');
    let newDiv = document.createElement('div');
    newDiv.className = "logo-company"

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${ cards.name }`
    p.innerHTML = `<strong>Address: </strong> ${cards.address}`
    p2.innerHTML = `<strong>Phone number: </strong> ${cards.phone_number}`


    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    img.setAttribute('src', cards.image);
    img.setAttribute('alt', cards.name);
    img.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    newDiv.appendChild(img)
    card_section.appendChild(newDiv);
    card_section.appendChild(h2);
    card_section.appendChild(p)
    card_section.appendChild(p2)


    // Add/append the existing HTML div with the cards class with the section(card)
    class_name.appendChild(card_section);
}

function displayList(cards) {
    // Create elements to add to the document
    let card_section = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${ cards.name }`
    p.innerHTML = `<strong>Address: </strong> ${cards.address}`
    p2.innerHTML = `<strong>Phone number: </strong> ${cards.phone_number}`

    // Add/append the section(card) with the h2 element
    card_section.appendChild(h2);
    card_section.appendChild(p)
    card_section.appendChild(p2)


    // Add/append the existing HTML div with the cards class with the section(card)
    secondDiv.appendChild(card_section);
}
const url = "data/data.json";

fetch(url)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.table(jsonObject);
        const cards = jsonObject["companies"];
        cards.forEach(displayCards);

    })