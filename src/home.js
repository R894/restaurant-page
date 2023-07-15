import { createSection, createTitle } from './basePage.js';


export function createHome(){
    let main = document.querySelector(".main");

    let title = createTitle('Waow');
    let section = createSection('Gween', true);

    main.appendChild(title);
    main.appendChild(section);
}

