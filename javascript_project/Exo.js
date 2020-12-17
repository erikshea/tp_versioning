age();

//Modification test2 master
function age() {
    var age = prompt("Quel est ton âge?");
    let message = "Tu fais partie des ";
    if(age<6){
        message = "pas de catégorie";
    }else if (age <= 7) {
        message += "poussins";
    } else if (age <= 9) {
        message += "Pupille";
    } else if (age <= 11) {
        message += "Minimes";
    } else if (age <= 17) {
        message += "cadets";
    } else if (age <= 17) {
        message = "Tu fais partie des cadets";
    } else{
        message = "Je ne comprends pas, dis moi quel est ton age?";
    }
    alert(message);
}