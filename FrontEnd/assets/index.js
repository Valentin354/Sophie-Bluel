const gallery = document.querySelector(".gallery");

function creaPortfolio(data) {
  for (i = 0; i < data.length; i++) {
    //création des éléments image et assignation du contenu dynamique via l'API
    const card = document.createElement("figure");
    card.setAttribute("id", data[i].category.name);
    card.setAttribute("data-id", data[i].id);
    card.classList.add("fig");
    const image = document.createElement("img");
    image.src = data[i].imageUrl;
    const imgTitle = document.createElement("figcaption");
    imgTitle.innerHTML = data[i].title;

    //lier les contenuss aux parents
    gallery.appendChild(card);
    card.appendChild(image);
    card.appendChild(imgTitle);
  }
}

fetch("http://localhost:5678/api/works")
  .then((reponse) => reponse.json())

  .then((data) => {
    creaPortfolio(data);
  });
