// Div that will contain the time at navigation bar
const datefield = document.querySelector(".time-div");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

// Create button menu 
function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
}

const x = document.getElementById("burg-btn");
x.onclick = toggleMenu;

// Div that will contain the time at footer

const field = document.querySelector(".time");

field.innerHTML = `Last Modification: ${document.lastModified}`;