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
const listeCommandes = document.querySelector('#liste-commandes');

const commandes = [];
let contenuCommandes = "";

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

    commandes.push({
        nom: nom.value,
        telephone: telephone.value,
        adresse: adresse.value,
        ville: ville.value,
        plat: plat.options[plat.selectedIndex].text,
        supplement: supplement.options[supplement.selectedIndex].text,
        prixTotal: prixTotal
    });

    console.log(commandes);

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

    contenuCommandes = "";

    for (let i = 0; i < commandes.length; i++) {
        contenuCommandes += `
            <article>
                <h4>Commande ${i + 1}</h4>
                <p>Nom : ${commandes[i].nom}</p>
                <p>Téléphone : ${commandes[i].telephone}</p>
                <p>Adresse : ${commandes[i].adresse}</p>
                <p>Ville : ${commandes[i].ville}</p>
                <p>Plat : ${commandes[i].plat}</p>
                <p>Supplément : ${commandes[i].supplement}</p>
                <p>Prix total : ${commandes[i].prixTotal} €</p>
            </article>
        `;
    }

    listeCommandes.innerHTML = `
        <h3>Historique des commandes</h3>
        ${contenuCommandes}
    `;
}

formulaire.addEventListener('submit', ajouterplat);