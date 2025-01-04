// Function to streamline creating a new HTML element and assign its textContent, classes and ID
export function newHTML(elem, text = "", classes = "", id = null) {
    const element = document.createElement(elem);
    if (id) element.id = id;
    if (classes) element.className = classes;
    element.textContent = text;
    return element;
}

// Function to streamline creating a new IMG element and assign its src and ID
export function newImgHTML(src, classes = "", id = null) {
    const img = document.createElement("img");
    img.src = src;
    if (id) img.id = id;
    if (classes) img.className = classes;
    return img;
}
