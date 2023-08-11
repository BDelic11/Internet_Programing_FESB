
<?php
require_once("DatabaseAccess.php");


function getCardsFromDb(){
    // execute query and get cards data from the Cards2 table in the database
	 return getDbAccess()->executeQuery("SELECT * FROM Cards2 ORDER BY ID DESC;");
}

function getPostCommentsFromDb($postId){
    // execute query and get cards data from the Cards2 table in the database
	 return getDbAccess()->executeQuery("SELECT * FROM Comments WHERE ID_post = $postId;");
}

// generate html code for cards using data from the database
function generateCardsHtml(){
    $html = "";

    $cards = getCardsFromDb();

    foreach($cards as $card){
        // get values of the columns in the table in order 
        $id = $card[0];
        $user = $card[1];
        $imageUrl = $card[2];
        $description = $card[3];
        $liked = $card[4];
        $comments = getPostCommentsFromDb($id);
        $likes = $card[6];
        $bookmarked = $card[7];
        $bookmarks = $card[8];
        $numberOfLikes = $likes + $liked;
        $numberOfBookmarks = $bookmarked + $bookmarks;

        $heartClass = $liked == '1' ? "fa-heart" : "fa-heart-o";
        $bookmarkedClass = $bookmarked == '1' ? "fa-bookmark" : "fa-bookmark-o";
     
        // html template filled with data
        $html .= "<div class='card' data-card-id='$id'>
        <h3>$user</h3>
        <p>$description</p>
        <img src='$imageUrl'/>
        <span class='num-likes'>$numberOfLikes</span>
        <i class='fa $heartClass heart-icon clickable-icon'></i>
        <span class='num-bookmarks'>$numberOfBookmarks</span>
        <i class='fa $bookmarkedClass bookmark-icon clickable-icon'></i>
        <i class='fa fa-plus add-paragraph-icon clickable-icon'></i>       
        <div class='comments'><p class='comments-heading'>Comments:</p>";

        foreach($comments as $comment)
        {
            $commentUser = $comment[1];
            $commentText = $comment[2];
            $html .= "<div class='comment'>
                        <div class='comment-user'>$commentUser</div>
                        <div class='comment-text'>$commentText</div>
                    </div>";
        }
        $html .= "</div></div>";
    }
    
    return $html;
}

function toggleCardLike($id, $liked){
    getDbAccess()->executeQuery("UPDATE Cards2 SET Liked='$liked' WHERE ID='$id';");
}

function toggleCardBookmark($id, $bookmarked){
    getDbAccess()->executeQuery("UPDATE Cards2 SET Bookmarked='$bookmarked' WHERE ID='$id';");
}

function deleteCard($id){
    getDbAccess()->executeQuery("DELETE FROM Cards2 WHERE ID='$id';");
}

function addCard($user, $imageUrl, $description){
    getDbAccess()->executeInsertQuery("INSERT INTO Cards2 VALUES ('0', '$user', '$imageUrl', '$description', '0' , ' ', '0', '0', '0')");
}

function addComment($user, $text, $id_post){
    getDbAccess()->executeInsertQuery("INSERT INTO Comments VALUES ('0', '$user', '$text', '$id_post')");
}