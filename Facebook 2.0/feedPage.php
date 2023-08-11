<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Almost Facebook</title>
    <link rel="stylesheet" href="style/feedPageStyle.css">
    <link rel="stylesheet" href="styles/font-awesome.min.css" />

    <script src="https://kit.fontawesome.com/ed45e9a285.js" crossorigin="anonymous"></script>

    <template id='card-template'>
        <article class='card' data-card-id=''>
            <i class='fa fa-times delete-button clickable-icon'></i>
            <img src='' alt='' />
            <h3><span class='card-title-label'></span> <i class='fa fa-heart-o heart-icon clickable-icon'></i></h3>
            <p></p>
            <i class='fa fa-plus add-paragraph-icon clickable-icon'></i>
        </article>
    </template>

</head>

<body>


    <nav>

        <div class="left">

            <div class="logo">
                <i class="fa-brands fa-facebook"></i>
            </div>

            <div class="search-bar">

                <input class="search_input" type="text" placeholder="Search Almost Facebook"><i
                    class="fa-solid fa-magnifying-glass"></i></input>

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
            <a href="profilePage.php">
                <img src="./images/profile_pic.jpg" alt="profile-image">
            </a>

        </div>

    </nav>

    <!---------------main--------------->

    <div class="main">


        <!---------------left--------------->

        <div class="left">
            <div class="left_choice">

                <a href="profilePage.html">
                    <div class="profile_link">

                        <img src="./images/profile_pic.jpg" alt="profile-image">
                        <p>Bruno Delic</p>
                    </div>

                </a>
            </div>
            <div class="left_choice">

                <i class="fa-solid fa-user-group"></i>
                <p>Friends</p>

            </div>

            <div class="left_choice">

                <i class="fa-solid fa-users"></i>
                <p>Groups</p>

            </div>

            <div class="left_choice">

                <i class="fa-solid fa-store"></i>
                <p>Marketplace</p>

            </div>

            <div class="left_choice">

                <i class="fa-solid fa-tv"></i>
                <p>Watch</p>

            </div>

            <div class="left_choice">

                <i class="fa-solid fa-angle-down"></i>
                <p>More</p>

            </div>

            <hr>

            <p>Shortcuts</p>


            <div class="left_choice2">

                <a href="https://apps.facebook.com/candycrush/?ref=bookmarks&fb_source=web_shortcut&count=0">

                    <img src="./images/candyCrash.png" alt="candycrush">
                    <p>Candy Crush Saga</p>
                </a>

            </div>

            <div class="left_choice2">

                <a href="https://apps.facebook.com/livepool/?ref=bookmarks&fb_source=web_shortcut&count=0">

                    <img src="./images/8ball.png" alt="8ball">
                    <p>8 Ball Pool</p>
                </a>

            </div>





        </div>



        <!---------------center--------------->

        <div class="center">


            <div id="cards-container">

                <?php
                require_once("php/cards.php");
                echo (generateCardsHtml());
                ?>


                <!---------------right-------------->




            </div>

        </div>

    </div>

        <script src="scripts/cards.js"></script>

</body>

</html>