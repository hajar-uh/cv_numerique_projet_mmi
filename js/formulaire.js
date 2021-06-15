$(document).ready(function () {

//-------------------------------------------------------//
//                      Question 1                       // Une partie de la réponse se situe dans le HTML (balises script)
//-------------------------------------------------------//


$(document).ready(function(){
    console.log("Le code Javascript est en cours de chargement !");     // J'affiche ce message dans la console.

// //-------------------------------------------------------//
// //                      Question 2                       //
// //-------------------------------------------------------//


$("#email").css({"background-color":"red"});      // Ajouter au style de la balise avec l'id email : "background-color : red" SOIT mettre le fond en rouge.

// //-------------------------------------------------------//
// //                      Question 3                       //
// //-------------------------------------------------------//


$("#prenom").css({"background-color":"red"});   // Ajouter au style de la balise avec l'id prenom : "background-color : red" SOIT mettre le fond en rouge.

// //-------------------------------------------------------//
// //                  Question 4, 5 et 6                   //
// //-------------------------------------------------------//


$("#prenom, #email, #nom, #precisions").on("keyup",function(){             // Quand la touche du clavier est remontée (après avoir tapé dans la balise avec l'id prenom OU l'id email), alors:

var champ = $(this).val();                          // Je déclare la variable champ en lui donnant la valeur de l'élément cliqué (balise avec l'id prenom ou l'id email dans notre cas)

if(champ.length == 0){                              // Si la longueur de la variable champ est égale à 0, alors:
$(this).css({"background-color":"#1A6D64"}); // Ajouter au style de l'élément cliqué : "background-color : lightcoral" SOIT mettre le fond en rouge clair.
}else{                                              // Sinon
 $(this).css({"background-color":"#1A6D64"}); // Ajouter au style de l'élément cliqué : "background-color : lightgreen" SOIT mettre le fond en vert clair.
}
});                                                      // Fin du $("#prenom, #email").on("keyup",function(){

// //-------------------------------------------------------//
// //                      Question 7                       //
// //-------------------------------------------------------//


$("#nom").on("keyup", function(){                    // Quand la touche du clavier est remontée (après avoir tapé dans la balise avec l'id nom), alors:
console.log($("#nom").val())});                        // J'affiche dans la console la valeur de la balise avec l'id nom

// //-------------------------------------------------------//
// //                      Question 8                       //
// //-------------------------------------------------------//


var nom = $("#nom").val().toUpperCase();         // Je déclare la variable nom avec la valeur de la balise avec l'id nom mise en majuscule (grace à l'option .toUpperCase())
$(this).val(nom);                                // on met la valeur de la variable nom dans l'element selectionné (la balise avec l'id nom dans notre cas)

    });                                                  // fin du $("#nom").on("keyup", function(){


// //-------------------------------------------------------//
// //                      Question 12                      //
// //-------------------------------------------------------//


//     $("#envoi").on("click", function(e) {                // Quand on clique sur une balise avec l'id envoi, alors: 
//         e.preventDefault();                              // Alors on empêche la pache de se remetre par Default (aka de se recharger)

// //-------------------------------------------------------//
// //                      Question 13                      // Nb: il n'est pas précisé dans la consigne comment renvoyé le message, voici donc 2 options.
// //-------------------------------------------------------//


//         var precisions = $("#precisions").val();                                                                         // Je déclare la variable precisions en lui donnant la valeur de la balise avec l'id precisions
//         if(precisions.length < 10){                                                                                      // Si la longueur de la variable precisions est inférieur à 10, alors: 
//             alert("Vous pourriez préciser de quelles informations vous avez besoin en plus de 10 caractères ?");         // J'envoie un message d'alerte avec ce message sur l'écran de l'utilisateur
//             console.log("Vous pourriez préciser de quelles informations vous avez besoin en plus de 10 caractères ?");   // J'affiche ce message dans la console.

// //-------------------------------------------------------//
// //                      Question 14                      // Nb: il n'est pas précisé dans la consigne comment renvoyé le message, voici donc 2 options.
// //-------------------------------------------------------//


//         }else{                                                                                                                      // Sinon, 
//             alert("Bon, en fait on ne sait pas encore faire du PHP donc votre message ne sera jamais envoyé, désolé !");            // J'envoie un message d'alerte avec ce message sur l'écran de l'utilisateur
//             console.log("Bon, en fait on ne sait pas encore faire du PHP donc votre message ne sera jamais envoyé, désolé !");      // J'affiche ce message dans la console.
//         }                                                                                                                           // Fin Sinon

//     });                                                                                                                             // Fin du $("#envoi").on("click", function(e) {

// //-------------------------------------------------------//
// //                      Question 15                      //
// //-------------------------------------------------------//


//     $("#hasard").on("click", function(){                                            // Si on clique sur un élément avec l'id hasard, alors :
//         var aleatoire = Math.floor(Math.random()*30)+2;                             // on définit la variable "aleatoire" par un nombre aléatoire allant de 1 à 30 (30 et 1 inclus). Pour cela on fait:
//                                                                                     // Math.random nous donne un chiffre à virgule aléatoire compris entre 0 et 1, nous le multiplions ensuite par 30 (soit le 
//                                                                                     // nombre total d'options comprises dans le html sans compter "Non précisé") puis on lui ajoute 2 pour commencer au deuxième 
//                                                                                     // enfant (le premier étant "Non précisé"). On prend ensuite la valeur absolue du résultat trouvé précédement à l'aide de Math.floor

//         $("#departement").val($("select option:nth-child("+aleatoire+")").val());   // Dans les éléments du HTML comprenant l'id departement, changer la valeur par la valeur du [nombre compris dans la 
//                                                                                     // variable [aléatoire]ème enfant "option" des balises "select". Exemple, si la variable aléatoire contient 5 la valeur de l'option 
//                                                                                     // sera donc: Belfort-Montbéliard

//                                                                                     // ----------------------------------------------
//                                                                                     //             Plus d'explications :
//                                                                                     // ----------------------------------------------

//                                                                                     // ("select option:nth-child("+aleatoire+")").val()

//                                                                                     // Cet élément nous permet de récupérer la valeur du "aleatoire"ième enfant de select avec une balise option. aleatoire etant une 
//                                                                                     // variable, si elle vaut 5, on récupère la variable du 5ième enfant de select avec la balise option. 


//                                                                                     // Ensuite, on l'insère:       $("#departement").val(       ICI      );
                                                                                    
//                                                                                     // Afin de changer la valeur de toute les balises contenant l'id "departement" par la valeur trouvée ci-dessus.

//                                                                                     // ----------------------------------------------
//     })                                                                              // Fin du $("#hasard").on("click", function(){

// //-------------------------------------------------------//
// //                      Question 16                      //
// //-------------------------------------------------------//


//     function melangeTableau (tableau){                          // Création de la fonction melangeTableau qui prend en entrée la variable tableau

//         var alea, cache;                                        // Je déclare la variable alea et la variable cache

//         for(var i = 0; i < tableau.length; i++){                // Je définis i à 0 et tant que i est inférieur à la taille du tableau, je passe dans la boucle et j'ajoute 1 à i
//             alea = Math.floor(Math.random()*tableau.length);    // Je place un chiffre aléatoire entre 0 et la longueur du tableau dans la variable alea
//             cache = tableau[i];                                 // Je récupère la case i du tableau dans la variable cache
//             tableau[i] = tableau[alea];                         // Je met la valeur de la case alea (qui est un nombre aléatoire entre 0 et la longueur du tableau) dans la case i du tableau
//             tableau[alea] = cache;                              // Je met la valeur de la variable cache dans la case alea du tableau (qui est la même case que la ligne juste au dessus)
//         }
//         return tableau;                                         // Je renvoie la valeur du tableau
//     }                                                           // Fin de la fonction

// //-------------------------------------------------------//






});

