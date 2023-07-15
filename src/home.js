import { createSection, createTitle } from './basePage.js';


export function createHome(){
    let main = document.querySelector(".main");

    let title = createTitle('Pizza Haven');
    let section = createSection('Best Pizza in Legeor');
    let section2 = createSection('Made with passion since 200 BC');
    let section3 = createSection('Order online or visit us!');

    main.appendChild(title);
    main.appendChild(section);
    main.appendChild(section2);
    main.appendChild(section3);
}

