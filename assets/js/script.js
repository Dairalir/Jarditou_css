var valid = document.getElementById("envoi"); // bouton envoi

var nom = document.getElementById("nom"); // id du nom
var missNom = document.getElementById("missNom");
var textValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
var prenom = document.getElementById("prenom");
var missPrenom =document.getElementById("missPrenom");

var masculin = document.getElementById("masculin");
var feminin = document.getElementById("feminin");
var missSex = document.getElementById("missSex");

var date = document.getElementById("date");
var missDate = document.getElementById("missDate");

var nbValid = /^[0-9]*$/;
var cp = document.getElementById("codepostal");
var missCp = document.getElementById("missCp");

var emailValid = /^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;
var email = document.getElementById("email");
var missEmail = document.getElementById("missEmail");

var question = document.getElementById("question");
var missQuestion = document.getElementById("missQuestion");

valid.addEventListener("click", control); // évenement de type clic et la fonction control

function control(e) 
{ 
    if (nom.validity.valueMissing)
    {
        e.preventDefault();
        missNom.textContent = "Champ vide";
        missNom.style.color = "red";
    }else if (textValid.test(nom.value) == false)
    {
        e.preventDefault();
        missNom.textContent = 'Format incorrect';
        missNom.style.color = 'orange';
    }

    if (prenom.validity.valueMissing)
    {
        e.preventDefault();
        missPrenom.textContent = "Champ vide";
        missPrenom.style.color = "red";
    }else if (textValid.test(prenom.value) == false)
    {
        e.preventDefault();
        missPrenom.textContent = 'Format incorrect';
        missPrenom.style.color = 'orange';
    }

    if (masculin.validity.valueMissing || feminin.validity.valueMissing)
    {
        e.preventDefault();
        missSex.textContent = "Selectionner un choix";
        missSex.style.color = "red";
    }

    if (date.validity.valueMissing)
    {
        e.preventDefault();
        missDate.textContent = "Champ vide";
        missDate.style.color = "red";
    }

    if (cp.validity.valueMissing)
    {
        e.preventDefault();
        missCp.textContent = "Champ vide";
        missCp.style.color = "red";
    }else if (nbValid.test(cp.value) == false)
    {
        e.preventDefault();
        missCp.textContent = 'Format incorrect';
        missCp.style.color = 'orange';
    }

    if (email.validity.valueMissing)
    {
        e.preventDefault();
        missEmail.textContent = "Champ vide";
        missEmail.style.color = "red";
    }else if (emailValid.test(email.value) == false)
    {
        e.preventDefault();
        missEmail.textContent = 'Format incorrect';
        missEmail.style.color = 'orange';
    }

    if (question.validity.valueMissing)
    {
        e.preventDefault();
        missQuestion.textContent = "Champ vide";
        missQuestion.style.color = "red";
    }else if (textValid.test(question.value) == false)
    {
        e.preventDefault();
        missQuestion.textContent = 'Format incorrect';
        missQuestion.style.color = 'orange';
    }
}