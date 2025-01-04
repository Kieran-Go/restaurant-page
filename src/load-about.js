import * as util from "./utility.js";

export default function loadAbout(){
    // Init the content container
    const content = document.getElementById("content");

    // Reset content innerHTML
    content.innerHTML = "";

    // Set content bg color
    content.style.backgroundColor = "rgb(0, 0, 0, 0.75)";

    // Create header
    const headerText = "Contact";
    content.appendChild(util.newHTML("h1", headerText, "span-columns"));

    // Create the contact info container
    const contactInfo = util.newHTML("div", "", "contact-info");

    // Create the first contact info
    const contactDiv1 = util.newHTML("div", "", "contact-div");
    contactDiv1.appendChild(util.newHTML("p", "Address: ", "contact-label"));
    contactDiv1.appendChild(util.newHTML("p", "House no1, Lane no 2, Street 5, Township, Country, 234567", "contact-content"));
    contactInfo.appendChild(contactDiv1);
    // Create the second contact info
    const contactDiv2 = util.newHTML("div", "", "contact-div");
    contactDiv2.appendChild(util.newHTML("p", "Email: ", "contact-label"));
    contactDiv2.appendChild(util.newHTML("p", "123RealMail@not-fake.com", "contact-content"));
    contactInfo.appendChild(contactDiv2);
    // Create the third contact info
    const contactDiv3 = util.newHTML("div", "", "contact-div");
    contactDiv3.appendChild(util.newHTML("p", "Tel: ", "contact-label"));
    contactDiv3.appendChild(util.newHTML("p", "456-789-123", "contact-content"));
    contactInfo.appendChild(contactDiv3);

    content.appendChild(contactInfo);    
}