import * as util from "./utility.js";
import Food from './classes/food.js';

export default function loadMenu(){
    // Init the content container
    const content = document.getElementById("content");

    // Reset content innerHTML
    content.innerHTML = "";

    // Set content colors
    content.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    content.style.color = "black";

    // Create the menu array
    const menu = [
        new Food("Item 1", "$10", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
        new Food("Item 2", "$15", "Praesent commodo cursus magna, vel scelerisque nisl consectetur."),
        new Food("Item 3", "$20", "Curabitur blandit tempus porttitor. Integer posuere erat."),
        new Food("Item 4", "$12", "Aenean lacinia bibendum nulla sed consectetur."),
        new Food("Item 5", "$8", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."),
        new Food("Item 6", "$18", "Donec sed odio dui. Nulla vitae elit libero, a pharetra augue."),
        new Food("Item 7", "$25", "Etiam porta sem malesuada magna mollis euismod."),
        new Food("Item 8", "$30", "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis."),
        new Food("Item 9", "$22", "Vestibulum id ligula porta felis euismod semper."),
        new Food("Item 10", "$14", "Nulla vitae elit libero, a pharetra augue."),
        new Food("Item 11", "$11", "Morbi leo risus, porta ac consectetur ac, vestibulum at eros."),
        new Food("Item 12", "$9", "Maecenas sed diam eget risus varius blandit sit amet non magna.")
    ];

    const menuContainerDiv = util.newHTML("div", "", "menu-container");
    for(let i = 0; i < menu.length; i++){
        const food = menu[i];
        const menuItemDiv = util.newHTML("div", "", "menu-item");

        menuItemDiv.appendChild(util.newHTML("p", `${food.name}`, "item-head"));
        menuItemDiv.appendChild(util.newHTML("p", `${food.price}`, "item-price"));
        menuItemDiv.appendChild(util.newHTML("p", `${food.description}`));

        menuContainerDiv.appendChild(menuItemDiv);
    }
    content.appendChild(menuContainerDiv);
}