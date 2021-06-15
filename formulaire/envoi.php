<!doctype html>
<html lang="fr">

<head>
       <meta charset="UTF-8">
       <title>ENVOI FORMULAIRE DE CONTACT</title>
        <script src="js/jquery.js"></script>
        <!-- <script src="js/formulaire.js"></script> -->
       <link rel="stylesheet" href="css/stylecontact.css">
       <link rel="stylesheet" href="css/profil.css">
        <link rel="shortcut icon" type="image/png" href="img/favicon.png"/>
       <script>
        $("document").ready(function(){  /** Quand le document est prêt mettre en marche la fonction, $("SELECTEUR").QUESTQUONFAIT(fonction){})**/ 

        $('.bouton_show_hide').click(function () {
        $(".slide_dessus").toggle("'slide', {direction:'right'}, 2000");
        });
        
       </script>
       <style> </style>
</head> 


<body>
     <div id="droite" >
        <div class="fond_droite">
        
        <?php 

    $link = new PDO('mysql:host=sqletud.u-pem.fr; dbname=hbakhii_db', 'hbakhii', '3k8oyhyejZ', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

    if(isset($_GET["email"])){
        if(isset($_GET["message"])){
        $sql = "INSERT INTO CV(nom, prenom, email, message) VALUES (:nom, :prenom, :email, :message)";

        $req = $link -> prepare($sql);

        $req -> execute(array(":nom"=> $_GET["nom"],":prenom"=> $_GET["prenom"],":email"=> $_GET["email"], ":message"=> $_GET["message"]));

        $req = null;

        echo "<h1>Merci pour votre message !</h1>";
        }else{
         echo("<p>Merci de remplir le message</p>");
        }
    }else{
        echo("<p>Merci d'indiquer votre adresse mail</p>");
    };
?>
    <a href="index.php">Retour à l'accueil</a>

        </div>
    </div>
        
                
                <div id="gauche">
        <div class="fond_gauche"></div>
        <div class="slide_dessus">
            
            <img class="img_quote" src="img/quote.png" alt="">
            
            <img class="img_fond_key" src="img/fond_key.PNG" alt="">
            
        </div>

        <div class="slide_dessous">
            
            <div id="menu_block" >
                <h1>SOMMAIRE</h1>
                <a href="menu.html" class="menu_block">ME CONCERNANT</a>
                <a href="" class="menu_block">FORMATION</a>
                <a href="menucompetence.html" class="menu_block">COMPÉTENCES</a>
                <a href="" class="menu_block">EXPÉRIENCE</a>
                <a href="" class="menu_block">CENTRES D'INTÉRÊT</a>
                <a href="" class="menu_block">PORTFOLIO</a>
                <p class="menu_block here">ME CONTACTER</p>
            </div>
        </div>

        <div class="bouton">
        <!-- <a href="#" class="bouton_show_hide">Show/hide</a> -->
            <div class="profile">
                <div class="photo"><img src="img/profile.png"/>
                </div>
                <div class="content">
                    <div class="text">
                    <h3>Hajar Bakhii</h3>
                    <h5>Etudiante en MMI</h6>
                </div>
                <a href="#" class="bouton_show_hide"><div class="btn"><span></span></div></a>
                </div>
            </div> 
        </div>
        
        </div>
</body>

</html>