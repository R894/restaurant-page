import { createSection, createTitle } from "./basePage";

export function createAbout(){
    let main = document.querySelector(".main");

    let title = createTitle('About Us');
    let section = createSection('At Pizza Haven, we have perfected the art of crafting mouthwatering pizzas that will transport you to pizza nirvana. Located in the heart of the city, our pizzeria is a haven for pizza enthusiasts seeking an unforgettable culinary experience.');
    let section2 = createSection('Step into our cozy establishment, where the tantalizing aroma of freshly baked dough and sizzling toppings fills the air. Our passionate pizzaiolos, true masters of their craft, skillfully hand-stretch each dough and lavishly layer it with the finest ingredients, ensuring every bite is a symphony of flavors.');

    main.appendChild(title);
    main.appendChild(section);
    main.appendChild(section2);
}