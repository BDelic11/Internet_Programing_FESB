/* Get all elements with class heart-icon */
const heartIcons = document.querySelectorAll('.card .heart-icon');
for (let i = 0; i < heartIcons.length; i++) {
	const heartIcon = heartIcons[i];
	// add an event listener to each heart icon and define what happens on a click event
	heartIcon.addEventListener('click', handleHeartIconClick);
}

async function handleHeartIconClick(e) {
	// add and remove fa-heart and fa-heart-o classes depending on which one is currently present
	const heartIcon = e.currentTarget; // clicked heart icon

	const card = heartIcon.closest('.card');
	const cardId = card.getAttribute('data-card-id');
	const numOfLikes = parseInt(card.querySelector('.num-likes').innerText);
	const isCurrentlyLiked = heartIcon.classList.contains('fa-heart');
	
	try {
		const serverResponse = await fetch(
			`API.php?action=toggleCardLike&id=${cardId}&liked=${isCurrentlyLiked ? 0 : 1}`
		);
		const responseData = await serverResponse.json();

		if (!responseData.success) {
			throw new Error(`Error liking card: ${responseData.reason}`);
		}

		if (!isCurrentlyLiked) {
			// if heart is 'empty'
			heartIcon.classList.remove('fa-heart-o');
			heartIcon.classList.add('fa-heart');
			card.querySelector('.num-likes').innerText = numOfLikes+1;
		} else {
			heartIcon.classList.remove('fa-heart');
			heartIcon.classList.add('fa-heart-o');
			card.querySelector('.num-likes').innerText = numOfLikes-1;
		}
	} catch (error) {
		throw new Error(error.message || error);
	}
}

const bookmarkIcons = document.querySelectorAll('.card .bookmark-icon');
for (let i = 0; i < bookmarkIcons.length; i++) {
	const bookmarkIcon = bookmarkIcons[i];
	// add an event listener to each heart icon and define what happens on a click event
	bookmarkIcon.addEventListener('click', handleBookmarkIconClick);
}

async function handleBookmarkIconClick(e) {
	const bookmarkIcon = e.currentTarget;

	const card = bookmarkIcon.closest('.card');
	const cardId = card.getAttribute('data-card-id');
	const numOfBookmarks = parseInt(card.querySelector('.num-bookmarks').innerText);
	const isCurrentlyBookmarked = bookmarkIcon.classList.contains('fa-bookmark');
	
	try {
		const serverResponse = await fetch(
			`API.php?action=toggleCardBookmark&id=${cardId}&bookmarked=${isCurrentlyBookmarked ? 0 : 1}`
		);
		const responseData = await serverResponse.json();

		if (!responseData.success) {
			throw new Error(`Error bookmarking card: ${responseData.reason}`);
		}

		if (!isCurrentlyBookmarked) {
			// if heart is 'empty'
			bookmarkIcon.classList.remove('fa-bookmark-o');
			bookmarkIcon.classList.add('fa-bookmark');
			card.querySelector('.num-bookmarks').innerText = numOfBookmarks+1;
		} else {
			bookmarkIcon.classList.remove('fa-bookmark');
			bookmarkIcon.classList.add('fa-bookmark-o');
			card.querySelector('.num-bookmarks').innerText = numOfBookmarks-1;
		}
	} catch (error) {
		throw new Error(error.message || error);
	}
}

/* Add a paragraph to a card */
const addParagraphIcons = document.querySelectorAll('.card .add-paragraph-icon');
for (let i = 0; i < addParagraphIcons.length; i++) {
	const addParagraphIcon = addParagraphIcons[i];
	addParagraphIcon.addEventListener('click', handleAddParagraphClick);
}

async function handleAddParagraphClick(e) {
	const addParagraphIcon = e.currentTarget;
	const text = prompt('Upisi tekst novog komentara:');
	const id_post = parseInt(addParagraphIcon.parentElement.getAttribute("data-card-id"));

	if (text) {
		const newComment = document.createElement('div');
		newComment.innerHTML = `<div class='comment'>
		<div class='comment-user'>Bruno Delic</div>
		<div class='comment-text'>${text}</div>
	</div>`;

		const card = addParagraphIcon.parentElement.querySelector('.comments');
		card.appendChild(newComment);
	}

	try {
		const serverResponse = await fetch(`API.php?action=addComment&text=${text}&id_post=${id_post}`);

		const responseData = await serverResponse.json();

		if(!responseData.success) {
			throw new Error(`Error while adding card ${responseData.reason}`);
		}
	}

	catch (error) {
		throw new Error(error.message || error);
	}
}


/* Dynamically create cards */
const addCardButton = document.querySelector('#post_button');

// Arrow function, runs when user clicks on addCardButton
addCardButton.addEventListener('click', async(e) => {
	const user = "Bruno Delic";

	const imageUrl = prompt('Unesi url slike', 'images/pic4.jpg');
	if (!imageUrl) {
		return;
	}

	const description = prompt('Unesi opis', 'opis');
	if (!description) {
		return;
	}

	try {
		const serverResponse = await fetch(`API.php?action=addCard&user=${user}&imageUrl=${imageUrl}&description=${description}`);

		const responseData = await serverResponse.json();

		if(!responseData.success) {
			throw new Error(`Error while adding card ${responseData.reason}`);
		}
	}

	catch (error) {
		throw new Error(error.message || error);
	}


});


/* Implement clicking and filling stars */
const starElements = document.querySelectorAll('.card .star-icon');

for (let i = 0; i < starElements.length; i++) {
	const starElement = starElements[i];
	starElement.addEventListener('click', handleStarClick);
}

function handleStarClick(e) {
	const star = e.currentTarget;
	const starContainer = star.parentElement;
	const starSiblings = starContainer.children;

	let clickedStarPassed = false;
	for (let i = 0; i < starSiblings.length; i++) {
		const currentStar = starSiblings[i];

		if (!clickedStarPassed) {
			currentStar.classList.remove('fa-star-o');
			currentStar.classList.add('fa-star');
		} else {
			currentStar.classList.remove('fa-star');
			currentStar.classList.add('fa-star-o');
		}

		if (currentStar == star) {
			clickedStarPassed = true;
		}
	}
}

