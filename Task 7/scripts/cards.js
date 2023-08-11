/*Zadatak 1: Toggle srce on/off */
//a) Dohvati sve srca u karticama
let heartIcons = document.querySelectorAll(".card .heart-icon");
for(let i = 0; i < heartIcons.length; i++){
    let heartIcon = heartIcons[i];
    //b) Za svako srce registiraj funkciju koja će se pokrenuti na klik
    heartIcon.addEventListener("click", handleHeartIconClick);
}

function handleHeartIconClick(e){
    //c) Promini klase fa-heart fa-heart-o za efekt punog/praznog srca
    let heartIcon = e.currentTarget; //Srce na koje smo sad klikli
    if(heartIcon.classList.contains("fa-heart-o")){ //"prazno" srce
        heartIcon.classList.remove("fa-heart-o");
        heartIcon.classList.add("fa-heart");
    }
    else {
        heartIcon.classList.remove("fa-heart");
        heartIcon.classList.add("fa-heart-o");
    }
}

/*2. zadatak: Dodavanje paragrafa kad se klikne na + */
let addParagraphIcons = document.querySelectorAll(".card .add-paragraph-icon");
for(let i = 0; i < addParagraphIcons.length; i++){
    let addParagraphIcon = addParagraphIcons[i];
    addParagraphIcon.addEventListener("click", handleAddParagraphClick);
}

function handleAddParagraphClick(e){
    let addParagraphIcon = e.currentTarget;
    let text = prompt("Unesi tekst novog paragrafa");

    if(text){
        let newParagraph = document.createElement("p");
        newParagraph.textContent = text;

        let card = addParagraphIcon.parentElement;
        card.appendChild(newParagraph);
    }
}

/*3. zadatak: Brisanje */
let deleteCardIcons = document.querySelectorAll(".card .delete-button");
for(let i = 0; i < deleteCardIcons.length; i++){
    let deleteCardIcon = deleteCardIcons[i];
    deleteCardIcon.addEventListener("click", handleDeleteCardClick);
}

function handleDeleteCardClick(e){
    let deleteCardIcon = e.currentTarget;
    let card = deleteCardIcon.parentElement;
    let cardTitle = card.querySelector("h3");

    if(confirm("Izbrisati karticu: " + cardTitle.textContent + "?")){
        card.remove();
    }
}

/*DODAVANJE KARTICE*/

let addCardButton = document.getElementById("add-card-button");
addCardButton.addEventListener('click', handleAddCardClick);

function handleAddCardClick(e){
    let title = prompt("Unesi naslov:");
 
    let imgUrl = prompt("Unesi put do slike:");

    let description = prompt("Unesi opis:");

    let newCard = `
          <i class="fa fa-times delete-button clickable-icon"></i>
          <img src="${imgUrl}" alt="${title}"/>
          <h3><span class="card-title-label">${title}</span> <i class="fa fa-heart-o heart-icon clickable-icon"></i></h3>
          <p>
          ${description}
          </p>
          <i class="fa fa-plus add-paragraph-icon clickable-icon"></i>
          <div class="card-star-container">
              <i class="star-icon fa fa-star-o" aria-hidden="true"></i>
              <i class="star-icon fa fa-star-o" aria-hidden="true"></i>
              <i class="star-icon fa fa-star-o" aria-hidden="true"></i>
              <i class="star-icon fa fa-star-o" aria-hidden="true"></i>
              <i class="star-icon fa fa-star-o" aria-hidden="true"></i>
          </div>`;

    let cardsContainer = document.getElementById("cards-container");

    let newCardElement = document.createElement("article");
    newCardElement.className = "card";
    newCardElement.innerHTML = newCard;

    cardsContainer.appendChild(newCardElement);


    let cardHeartIcon = newCardElement.querySelector(".card .heart-icon");
    let cardAddParagraphIconn = newCardElement.querySelector(".card .add-paragraph-icon");
    let cardDeleteCardIcon = newCardElement.querySelector(".card .delete-button");
    let cardAllStarIcons = newCardElement.querySelectorAll(".star-icon");

    cardHeartIcon.addEventListener("click", handleHeartIconClick);
    cardAddParagraphIconn.addEventListener("click", handleAddParagraphClick);
    cardDeleteCardIcon.addEventListener("click", handleDeleteCardClick);

    cardAllStarIcons.forEach(element => {
        element.addEventListener("click", handleStarIcon);
    });
}

let searchBoxElement = document.getElementById("search-box");
searchBoxElement.addEventListener("keyup", handleSearchBox);

function handleSearchBox(e){
    let searchBoxValue = e.target.value;

    let cards = document.querySelectorAll(".card");

    if(searchBoxValue === ''){
        cards.forEach(element => {
            if(heartIcon.classList.contains("hidden"))
                element.classList.remove("hidden");
        });

        return;
    }

    cards.forEach(element => {
        if(element.textContent.indexOf(searchBoxValue) == -1)
            if(!element.classList.contains("hidden"))
                element.classList.add("hidden");
        
        if(element.textContent.indexOf(searchBoxValue) >= 0)
            if(element.classList.contains("hidden"))
                element.classList.remove("hidden");
    });
}

let allStarIcons = document.querySelectorAll(".star-icon");

allStarIcons.forEach(element => {
    element.addEventListener("click", handleStarIcon);
});

function handleStarIcon(e){
    let starIcon = e.currentTarget;
    let starIconContainer = starIcon.parentElement;
    let flag = false;

    let cardStarIcons = starIconContainer.querySelectorAll(".star-icon");

    for (let index = 0; index < cardStarIcons.length; index++) {
        let element = cardStarIcons[index];

        if(element === starIcon){
            flag = true;
            element.classList.remove("fa-star-o");
            element.classList.add("fa-star");
        }

        if(flag && element !== starIcon){
            element.classList.remove("fa-star");
            element.classList.add("fa-star-o");
        } else{
            element.classList.remove("fa-star-o");
            element.classList.add("fa-star");
        }
        
    }

}
