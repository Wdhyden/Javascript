console.log("Adam t'es vraiment beau");
// champs formulaire
const formulaire = document.querySelector('#formulaire');
const nom = document.querySelector('#nom');
const telephone = document.querySelector('#telephone');
const adresse = document.querySelector('#Adresse');
const ville = document.querySelector('#ville');
const plat = document.querySelector('#plat');
const supplement = document.querySelector('#supplement');
const commander = document.querySelector('#commander');
const commande = document.querySelector('#commande');

// récapitulatif de la commande
console.log(plat.value);
console.log(supplement.value);

// fonction ajouter plat
function ajouterplat(event) {
event.preventDefault();
const prixPlat = Number(plat.value);
const prixSupplement = Number(supplement.value);
const livraison = 5;
const prixTotal = prixPlat + prixSupplement + livraison;
const tempsLivraison = document.querySelector('#temps-livraison');
const heureLivraison = document.querySelector('#heure-livraison');
commande.textContent = `
Nom : ${nom.value}

Téléphone : ${telephone.value}

Adresse : ${adresse.value}

Ville : ${ville.options[ville.selectedIndex].text}

Plat : ${plat.options[plat.selectedIndex].text}

Supplément : ${supplement.options[supplement.selectedIndex].text}

Prix total : ${prixTotal} €
`;
}

formulaire.addEventListener('submit', ajouterplat);
console.log(ajouterplat);
