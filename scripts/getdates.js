const date = new Date().getFullYear();
console.log(date);

document.getElementById("currentyear").innerHTML = "&copy" + date + " Connor Dedic, Idaho"
document.getElementById("lastmod").innerHTML = document.lastModified;
