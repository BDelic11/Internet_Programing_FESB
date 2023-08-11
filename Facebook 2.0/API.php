
<?php
require_once("php/cards.php");

// function that we call from our JS code that processes the request and calls actions that execute queries
function processRequest(){
  $action = getRequestParameter("action");

    // action that was called
    switch ($action) {
      case 'toggleCardLike':
        processToggleCardLike();
        break;
      case 'deleteCard':
        processDeleteCard();
        break;
      case 'addCard':
        processAddCard();
        break;
      case 'addComment':
        processAddComment();
        break;
      case 'toggleCardBookmark':
        processToggleCardBookmark();
        break;
      default:
        echo(json_encode(array(
          "success" => false,
          "reason" => "Unknown action: $action"
        )));
        break;
    }
}

// getRequestParameter("action") -> "deleteCard"
function getRequestParameter($key) {
   // $_REQUEST[$key] -> a map of keys and values from the request
   return isset($_REQUEST[$key]) ? $_REQUEST[$key] : "";
}

//API.php?action=toggleCardLike&id=1&liked=1
function processToggleCardLike(){
  $success = false;
  $reason = "";

  $id = getRequestParameter("id");
  $liked = getRequestParameter("liked");

  if (is_numeric($id) && is_numeric($liked)) {
    toggleCardLike($id, $liked);
    $success = true;
  } 
  else {
    $success = false;
    $reason = "Needs id:number; like:number";
  }

  echo(json_encode(array(
  "success" => $success,
  "reason" => $reason
  )));
}

function processToggleCardBookmark(){
  $success = false;
  $reason = "";

  $id = getRequestParameter("id");
  $bookmarked = getRequestParameter("bookmarked");

  if (is_numeric($id) && is_numeric($bookmarked)) {
    toggleCardBookmark($id, $bookmarked);
    $success = true;
  } 
  else {
    $success = false;
    $reason = "Needs id:number; like:number";
  }

  echo(json_encode(array(
  "success" => $success,
  "reason" => $reason
  )));
}

function processDeleteCard() {
  $success = false;
  $reason = "";

  $id = getRequestParameter('id');

  if(is_numeric($id)) {
    deleteCard($id);
    $success = true;
  }

  else {
    $success = false;
    $reason = "Needs id:number";
  }

  echo(json_encode(array(
    "success" => $success,
    "reason" => $reason
    )));
}

function processAddCard(){
  $success = false;
  $reason = "";
  $id = 0;

  $user = getRequestParameter("user");
  $imageUrl = getRequestParameter("imageUrl");
  $description = getRequestParameter("description");

  if($description != "" && $user != "" && $imageUrl != ""){
    $id = addCard($user, $imageUrl, $description);
    $success = true;
  }
  else {
    $success = false;
    $reason = "User, imageUrl and description must not be empty";
  }

  echo(json_encode(array(
    "success" => $success,
    "reason" => $reason,
    "id" => $id
    )));
}

function processAddComment(){
  $success = false;
  $reason = "";
  $id = 0;

  $user = "Bruno Delic";
  $text = getRequestParameter("text");
  $id_post = getRequestParameter("id_post");

  if($text != ""  && $id_post != ""){
    $id = addComment($user, $text, $id_post);
    $success = true;
  }
  else {
    $success = false;
    $reason = "User, text and id_post must be empty";
  }

  echo(json_encode(array(
    "success" => $success,
    "reason" => $reason,
    "id" => $id
    )));
}


processRequest();