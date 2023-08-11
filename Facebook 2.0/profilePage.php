
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style/profilePageStyle.css">
    <link rel="stylesheet" href="styles/font-awesome.min.css"/>

    <script src="https://kit.fontawesome.com/ed45e9a285.js" crossorigin="anonymous"></script>

</head>
<body>
    
    <nav>

        <div class="left">
            
            <div class="logo">
                <i class="fa-brands fa-facebook"></i>
            </div>

    <div class="search-bar">

        <input class="search_input" type="text" placeholder="Search Almost Facebook"><i class="fa-solid fa-magnifying-glass"></i></input>
        
    </div>
    
</div>

<div class="center">

    <a href="feedPage.php"><i class="fa-solid fa-house"></i></a>
    <a href=""><i class="fa-solid fa-tv"></i></a>
    <a href=""><i class="fa-solid fa-store"></i></a>
    <a href="profilePage.php"><i class="fa-solid fa-user"></i></a>
    
</div>

<div class="right">

        <i class="fa-solid fa-plus"></i>
        <i class="fa-brands fa-facebook-messenger"></i>
        <i class="fa-solid fa-bell"></i>
        <a href="profilePage.html">
            <img src="./images/profile_pic.jpg" alt="profile-image">
        </a>

    </div>

</nav>


<!---------------main--------------->

<div class="main">

    <div class="profile-top">

        <div class="background">

            <img class="background_image" src="./images/profile_background.jpg" alt="profile_background">
        </div>
            <div class="profile-pic">

            <img src="./images/profile_pic.jpg" alt="profile-image">
             <div class="ime-pratitelji">
                <h2>Bruno Delic</h2>
                <p>486 friends</p>
            </div>

        </div>
        

    </div>

    <div class="profile-feed">

        <input id="post_button" value="New Post" type="button">
  
        <div class="cards-container">

            <article class="card">
                
             <h3>Bruno Delic </h3>
            <p>
                Cetina izvire na nadmorskoj visini od 385 m u sjeverozapadnim obroncima Dinare
                blizu sela Cetina, 7 km sjeverno od Vrlike, a po kojem je rijeka i dobila ime.
                Izvor Cetine je jezero duboko preko stotinu metara.
            </p>
            <img src="images/profile_background.jpg" alt="cetina"/>
            <i class="fa fa-heart-o heart-icon clickable-icon"></i>
            <i class="fa fa-plus add-paragraph-icon clickable-icon"></i>
           
        </article>
    
    </div>

    </div>

    <!---------------profile posts--------------->

    
</div>


<script src="scripts/cards.js"></script>

</body>
</html>