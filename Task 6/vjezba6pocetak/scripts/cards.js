let heartIcons = document.querySelectorAll(".heart-icon");

for(let i = 0; i < heartIcons.length; i++) {
let heartIcon = heartIcons[i];
heartIcon.addEventListener("click", handleHeartClick);
}

function handleHeartClick(e){
let clickedHeart = e.currentTarget;

if(clickedHeart.classList.contains("fa-heart-o")){
clickedHeart.classList.remove("fa-heart-o");
clickedHeart.classList.add("fa-heart");
}
else {
clickedHeart.classList.remove("fa-heart");
clickedHeart.classList.add("fa-heart-o");
}
}


let addParagraphIcons = document.querySelectorAll(".add-paragraph-icon");

for(let i = 0; i < addParagraphIcons.length; i++) {
let addParagraphIcon = addParagraphIcons[i];
addParagraphIcon.addEventListener("click", handleAddParagraphClick);
}

function handleAddParagraphClick(e){
let clickedParagraph = e.currentTarget;

let inputedValue = prompt("Upit", "opcionalna predefinirana vrijednost");

if(inputedValue != false) {
    let newParagraphElement = document.createElement("p");
    newParagraphElement.innerText = inputedValue;
    
    clickedParagraph.parentElement.appendChild(newParagraphElement);
}
}


let deleteButtons = document.querySelectorAll(".delete-button");

for(let i = 0; i < deleteButtons.length; i++) {
let deleteButton = deleteButtons[i];
deleteButton.addEventListener("click", handleDeleteButtonClick);
}

function handleDeleteButtonClick(e){
let clickedDeleteButton = e.currentTarget;

let clickedCard = clickedDeleteButton.parentElement;
let clickedCardTitle = clickedCard.querySelector('h3').innerText;

let userChoice = confirm("Zelite li obrisati: " + clickedCardTitle);

if(userChoice != false) {
    clickedCard.remove();
}


}