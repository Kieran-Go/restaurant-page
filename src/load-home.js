import restaurantJpeg from "./images/restaurant.jpeg";
import * as util from "./utility.js";

export default function loadHome(){
    // Init the content container
    const content = document.getElementById("content");

    // Reset content innerHTML
    content.innerHTML = "";

    // Set content bg color
    content.style.backgroundColor = "rgb(54, 66, 122)";

    // Create header
    const headerText = "Welcome to Harvest Table";
    content.appendChild(util.newHTML("h1", headerText, "span-columns"));

    // Create image
    const imageDiv = util.newHTML("div", "", "img-container");
    imageDiv.appendChild(util.newImgHTML(restaurantJpeg));
    content.appendChild(imageDiv);

    // Create text content
    const mainTextDiv = util.newHTML("div", "", "p-container");
    for(let i = 0; i <2; i++){
        mainTextDiv.appendChild(util.newHTML("p",
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus eros aliquet 
        convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet 
        hendrerit purus, vel feugiat orci vehicula et. Praesent malesuada et odio eu vestibulum.`));
    }
    content.appendChild(mainTextDiv);

    // Create bottom text content
    const bottomTextDiv = util.newHTML("div", "", "p-container span-columns");
    bottomTextDiv.appendChild(util.newHTML("p", 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus eros aliquet 
        convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet 
        hendrerit purus, vel feugiat orci vehicula et. Praesent malesuada et odio eu vestibulum.`
    ));
    content.appendChild(bottomTextDiv);

    // Create the timing content
    const timingDiv = util.newHTML("div", "", "timing-container span-columns");

    const timeLinesLeft = util.newHTML("div", "", "p-lines");
    for(let i = 0; i < 3; i++){
        timeLinesLeft.appendChild(util.newHTML("p", "_____________________________"));
    }
    timingDiv.appendChild(timeLinesLeft);

    const timeText = util.newHTML("div", "", "p-lines");
    timeText.appendChild(util.newHTML("p", "Mon - Thu: 9am to 9pm"));
    timeText.appendChild(util.newHTML("p", "Friday: 9am to 12pm"));
    timeText.appendChild(util.newHTML("p", "Sat & Sun : 12pm to 12pm"));
    timingDiv.appendChild(timeText);

    const timeLinesRight = util.newHTML("div", "", "p-lines");
    for(let i = 0; i < 3; i++){
        timeLinesRight.appendChild(util.newHTML("p", "_____________________________"));
    }
    timingDiv.appendChild(timeLinesRight);

    content.appendChild(timingDiv);
}