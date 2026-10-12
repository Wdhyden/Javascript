console.log("Adam t'es vraiment beau");

const formulaire = document.querySelector('#formulaire');
const nom = document.querySelector('#nom');
const telephone = document.querySelector('#telephone');
const adresse = document.querySelector('#Adresse');
const ville = document.querySelector('#ville');
const plat = document.querySelector('#plat');
const supplement = document.querySelector('#supplement');

const commande = document.querySelector('#commande');
const prix = document.querySelector('#prix');
const tempsLivraison = document.querySelector('#temps-livraison');
const heureLivraison = document.querySelector('#heure-livraison');

function ajouterplat(event) {

    event.preventDefault();

    const prixPlat = Number(plat.value);
    const prixSupplement = Number(supplement.value);

    let livraison = 5;

    if (ville.value === 'paris') {
        livraison = 10;
    } else if (ville.value === 'lyon') {
        livraison = 15;
    } else if (ville.value === 'marseille') {
        livraison = 20;
    }

    if (prixPlat + prixSupplement > 20) {
        livraison = livraison - 5;
    }

    const prixTotal = prixPlat + prixSupplement + livraison;

    commande.textContent = `
Nom : ${nom.value}
Téléphone : ${telephone.value}
Adresse : ${adresse.value}
Ville : ${ville.options[ville.selectedIndex].text}
Plat : ${plat.options[plat.selectedIndex].text}
Supplément : ${supplement.options[supplement.selectedIndex].text}
Livraison : ${livraison} €
`;

    prix.textContent = `Prix total : ${prixTotal} €`;
    tempsLivraison.textContent = "";
    heureLivraison.textContent = "";
}

formulaire.addEventListener('submit', ajouterplat);