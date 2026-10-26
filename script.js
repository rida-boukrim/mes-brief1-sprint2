// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.
const liste = document.getElementById("liste")
const button = document.getElementById("btn")
const lePrix = document.getElementById("prix")
const namee = document.getElementById("nom");
const suprime = document.getElementById("sup")



function afficher () {


  produits.forEach((produit) => {

      const container = document.createElement("div")
    const produite = document.createElement("li")
    produite.className = "produit";
     
  const nome = document.createElement("strong")
  nome.className = "nom-produit"
  nome = produit.nom
  const prix = document.createElement("span")
  prix.className = "prix-produit";
    prix = produit.prix

container.append(nome,prix);
produite.append(container);

liste.append(produite);


  })
button.addEventListener("click",(event) => {
    event.preventDefault();
  const name = namee.value;
  const prixe = lePrix.value;

  const nouvell = {
    nom:name,
    prix:lePrix,
  }
  produits.push(nouvell)
  afficher()


  })
  suprime.addEventListener("click", () => {
    if(confirm ("are you shur")){
      produits = produits.find(
        (item) => item.id = produit.id
      )
    }


  })




}
afficher()






  



