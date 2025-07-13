// Sélectionne TOUS les éléments HTML qui ont la classe "typed"
const elements = document.querySelectorAll(".typed");



// Définit la vitesse d’écriture (50 ms entre chaque lettre)
const speed = 50;



// Pour chaque élément trouvé avec la classe "typed"
elements.forEach((el) => {

  // Récupère le texte complet à animer
  const fullText = el.textContent;
  

  // Vide le contenu de l’élément pour qu’il apparaisse lettre par lettre
  el.textContent = "";

  
  let i = 0;

  // Fonction qui écrit le texte lettre par lettre
  function type() {
    // Si on n’a pas encore écrit tout le texte...
    if (i < fullText.length) {
      // Ajoute la lettre suivante à l’élément


      el.textContent += fullText.charAt(i);
      // Passe à la lettre suivante


      i++;
      // Attend un peu avant d’écrire la prochaine lettre
      setTimeout(type, speed);
    }
  }

  // Lance la fonction d’écriture pour cet élément
  type();
});
