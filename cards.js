async function logJSONData() {
  const response = await fetch("http://demo4110544.mockable.io/");
  const jsonData = await response.json();
  const result = JSON.stringify(jsonData);
  const productContainer =  document.getElementById("products");

  console.log(result);

  jsonData.forEach((elem) => {
    const card = document.createElement("div");
    card.classList.add("cardsito");


    const nameElement = document.createElement("h2");
    nameElement.innerText = elem.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = elem.description;
    
    const collectionElement = document.createElement("p");
    collectionElement.innerText = elem.collection;
    
    const categoryElement = document.createElement("p");
    categoryElement.innerText = elem.category;
     
    const colorElement = document.createElement("p");
    colorElement.innerText = elem.color;


    const priceElement = document.createElement("p");
    priceElement.innerText = `Price: ${elem.price}`;
    priceElement.classList.add("priceCard")

    const imageElement = document.createElement("img");
    imageElement.src = elem.url;
    imageElement.classList.add("imageCard")

    
    card.appendChild(nameElement);
    card.appendChild(descriptionElement);
    card.appendChild(collectionElement);
    card.appendChild(colorElement);
    card.appendChild(categoryElement);
    card.appendChild(priceElement);
    card.appendChild(imageElement);

   productContainer.appendChild(card);
  });
}

logJSONData();
