const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(element => {
element.addEventListener('click', handleThumbnailClick);
});

function handleThumbnailClick(event) {
const currentThumbnail = event.currentTarget;
selectThumbnail(currentThumbnail);

}

function selectThumbnail(currentThumbnail) {
const currentlySelectedThumbnail = document.querySelector('.thumbnail.selected');

currentlySelectedThumbnail.classList.remove('selected');
currentThumbnail.classList.add('selected');

const clickedThumbnailLargeImageUrl = currentThumbnail.getAttribute('data-large-img-url');
const sliderMainImage = document.querySelector('#slider-main-picture-container img');

sliderMainImage.setAttribute('src', clickedThumbnailLargeImageUrl);
}

const sliderLeftArrow = document.querySelector(' .slider-arrow-left');
sliderLeftArrow.addEventListener('click', handleLeftArrowClick);


function handleLeftArrowClick(event) {
const slectedThumbnailIndex = getSelectedThumbnailIndex()

if (slectedThumbnailIndex === -1)
return;


let nextThumbnailIndex = slectedThumbnailIndex - 1;

if (slectedThumbnailIndex === 0)
nextThumbnailIndex = thumbnails.length - 1;

selectThumbnail(thumbnails[nextThumbnailIndex]);
}

function getSelectedThumbnailIndex() {
const currentlySelectedThumbnail = document.querySelector('#slider .thumbnail.selected');

for (let i = 0; i < thumbnails.length; i++)
if (currentlySelectedThumbnail === thumbnails[i])
return i;
return -1;

}

const sliderRightArrow = document.querySelector(' .slider-arrow-right');
sliderRightArrow.addEventListener('click', handleRightArrowClick);


function handleRightArrowClick(event) {
const slectedthumbnailIndex = getSelectedThumbnailIndex()

if (getSelectedThumbnailIndex === -1)
return;

let nextThumbnailIndex = slectedthumbnailIndex + 1;

if (slectedthumbnailIndex === thumbnails.length - 1)
nextThumbnailIndex = 0;

selectThumbnail(thumbnails[nextThumbnailIndex]);
}

const cards = document.querySelectorAll('.card');
const cardsDeleteButton = document.querySelectorAll('.delete-button');

cardsDeleteButton.forEach(element => {
element.addEventListener('click', handleDeleteButtonClick);
});

function handleDeleteButtonClick(event){
const clickedDeleteButton = event.currentTarget;
let cardToDeleteIndex = getSelectedCardIndex(clickedDeleteButton);

cards[cardToDeleteIndex].remove();
}

function getSelectedCardIndex(clickedDeleteButton){
for (let i = 0; i < cards.length; i++){
const selectedCard = cards[i].querySelector('.delete-button');
if (clickedDeleteButton === selectedCard)
return i;
}
return -1;
}