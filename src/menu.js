import { createSection, createTitle } from "./basePage";

export function createMenu(){
    let main = document.querySelector(".main");
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    let title = createTitle('Menu');
    main.appendChild(title);

    let items = [['Magical Margherita', '$12.99'],['Mystic Meat Lovers', '$14.99'],['Enchanted Veggie Delight', '$13.99'],
    ['Supreme Seafood Sensation', '$16.99'],['Sweet Symphony Dessert Pizza', '$9.99']];

    items.forEach(element => {
        let section = createSection(element[0]);
        let price = createSection(element[1], true);

        wrapper.appendChild(section);
        wrapper.appendChild(price);
    });  

    main.appendChild(wrapper);
}