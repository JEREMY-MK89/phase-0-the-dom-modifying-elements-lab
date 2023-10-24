/// const element = document.createElement("div");

function myFunction() {
    const mainElement = document.getElementById('main');
    element.remove();
};

// Create a "li" element:
const newHeader = document.createElement('h1');

// Create  the  id to the H1 element
newHeader.id = "victory";

//insert text to the elementh1
newHeader.textContent = 'YOUR-NAME is the champion';

//we append the newly formed h1 element(as variable newHeader) to the Dom

document.body.appendChild(newHeader);