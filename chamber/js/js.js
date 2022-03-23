// Div that will contain the time at navigation bar
function datebox() {
    const datefield = document.querySelector(".time-div");

    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now
    );
    return datefield.innerHTML = `<em>${fulldate}</em>`;
}
datebox();
// --------------------------------------------
// Create button menu 
function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
}

const x = document.getElementById("burg-btn");
x.onclick = toggleMenu;

// Div that will contain the time at footer

const field = document.querySelector(".time");

field.innerHTML = `Last Modification: ${document.lastModified}`;


const named = document.getElementById("min-banner");

function toggleMinBanner() {
    named.classList.toggle("show-banner");
}
// --------------------------------------------

const date = new Date();
const todaysdate = date.getDay();
if (todaysdate == 1 || todaysdate == 2) {
    toggleMinBanner();
    let div = document.querySelector(".show-banner");
    div.innerHTML = `<p id="text">🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</p>
    <button id="btn-p">Join</button>`;
} else {
    named.remove();
}
// --------------------------------------------
const paf6 = document.querySelector("#paf6");
const paf7 = document.querySelector("#paf7");
const paf8 = document.querySelector("#paf8");

function createElementOne(company) {
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");
    const p = document.createElement("p");
    const hr = document.createElement("hr");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    h2.textContent = company.name
    ul.innerHTML = `<li><img src ="${company.icon}" style="width:90px"></li>`
    p.textContent = company.frase
    p2.textContent = company.email
    p3.textContent = company.phoneNumber
    hr.style.margin = " 0.3em";
    paf6.appendChild(h2)
    paf6.appendChild(ul)
    paf6.appendChild(p)
    paf6.appendChild(hr)
    paf6.appendChild(p2)
    paf6.appendChild(p3)
}

function createElementTwo(company) {
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");
    const p = document.createElement("p");
    const hr = document.createElement("hr");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    h2.textContent = company.name
    ul.innerHTML = `<li><img src ="${company.icon}" style="width:90px"></li>`
    p.textContent = company.frase
    p2.textContent = company.email
    p3.textContent = company.phoneNumber
    hr.style.margin = " 0.3em";
    paf7.appendChild(h2)
    paf7.appendChild(ul)
    paf7.appendChild(p)
    paf7.appendChild(hr)
    paf7.appendChild(p2)
    paf7.appendChild(p3)
}

function createElementThree(company) {
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");
    const p = document.createElement("p");
    const hr = document.createElement("hr");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    h2.textContent = company.name
    ul.innerHTML = `<li><img src ="${company.icon}" style="width:90px"></li>`
    p.textContent = company.frase
    p2.textContent = company.email
    p3.textContent = company.phoneNumber
    hr.style.margin = " 0.3em";
    paf8.appendChild(h2)
    paf8.appendChild(ul)
    paf8.appendChild(p)
    paf8.appendChild(hr)
    paf8.appendChild(p2)
    paf8.appendChild(p3)
}

const jsonUrl = "data/homejson.json"

fetch(jsonUrl)
    .then((response) => response.json())
    .then((jsObject_) => {
        const companies = jsObject_["companies"].at(0);
        const companiesT = jsObject_["companies"].at(1);
        const companiesTh = jsObject_["companies"].at(2);
        console.log(companies)
        createElementOne(companies);
        createElementTwo(companiesT)
        createElementThree(companiesTh)
    })