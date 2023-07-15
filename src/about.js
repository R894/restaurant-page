import { createSection, createTitle } from "./basePage";

export function createAbout(){
    let main = document.querySelector(".main");

    let title = createTitle('About Us');
    let section = createSection('We do stuff I guess lol');

    main.appendChild(title);
    main.appendChild(section);
}