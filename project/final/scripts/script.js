const year = new Date().getFullYear();
console.log(year);

document.getElementById("currentyear").innerHTML = "&copy" + year + " &#129430 Connor Dedic, Idaho &#128050"
document.getElementById("lastmod").innerHTML = document.lastModified;

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}
