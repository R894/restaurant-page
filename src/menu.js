import { createSection, createTitle } from "./basePage";

export function createMenu(){
    let main = document.querySelector(".main");

    let title = createTitle('Food');
    let section = createSection('We do stuff I guess lol');
    let price = createSection('20$', true);

    main.appendChild(title);
    main.appendChild(section);
    main.appendChild(price);
}