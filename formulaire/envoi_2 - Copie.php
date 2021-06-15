<!doctype html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>Formulaire de contact</title>
</head>

<body>

        
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
        
        

</body>

</html>