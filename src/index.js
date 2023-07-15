import "./style.css";
import { createHome } from "./home";
import { createAbout } from "./about";
import { createMenu } from "./menu";

function clearMain(){
    document.querySelector(".main").textContent = '';
}

let home = document.getElementById("home");
let about = document.getElementById("about");
let menu = document.getElementById("menu");

home.addEventListener("click", function(){
    clearMain();
    createHome();
});

about.addEventListener("click", function(){
    clearMain();
    createAbout();
});

menu.addEventListener("click", function(){
    clearMain();
    createMenu();
});

clearMain();
createHome();