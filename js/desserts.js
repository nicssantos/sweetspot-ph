// ********** DESSERTS PAGE ************
let topButton = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const desserts = [
  {
    name: "Halo-Halo",
    tag: "COLD",
    image: "../img/desserts/halo-halo.jpg",
    description:
      "A vibrant symphony of textures and flavors, this shaved ice masterpiece defines Filipino dessert culture.",
    history:
      "Evolved from Japanese kakigori during the pre-war era, Filipinos transformed it by incorporating local ingredients, creating a uniquely multicultural dessert that represents the archipelago's diverse influences.",
    ingredients: [
      "Shaved ice",
      "Sweetened beans (red beans, kidney beans)",
      "Sweet plantains (saba)",
      "Nata de coco & kaong",
      "Leche flan & ube halaya",
      "Evaporated milk",
      "Ube ice cream",
    ],
  },
  {
    name: "Leche Flan",
    tag: "COLD",
    image: "../img/desserts/leche-flan.jpg",
    description:
      "Ultra-rich custard with caramelized sugar, this dessert is the crown jewel of Filipino celebrations.",
    history:
      "Introduced during Spanish colonization, the Filipino version evolved to become notably richer and denser, using more egg yolks than its European counterpart, making it exceptionally decadent.",
    ingredients: [
      "Egg yolks (10-12 pieces)",
      "Condensed milk",
      "Evaporated milk",
      "White sugar for caramel",
      "Vanilla extract",
      "Lemon zest (optional)",
    ],
  },
  {
    name: "Ube Halaya",
    tag: "CHILLED",
    image: "../img/desserts/ube-halaya.jpg",
    description:
      "Vibrant purple yam jam with a sweet, earthy flavor that has captivated the world.",
    history:
      "Made from native purple yam, this labor-intensive dessert requires hours of constant stirring. Its preparation has been passed down through generations, making it a special treat for important occasions.",
    ingredients: [
      "Purple yam (ube)",
      "Condensed milk",
      "Evaporated milk",
      "Butter",
      "Sugar",
      "Vanilla extract",
    ],
  },
  {
    name: "Bibingka",
    tag: "HOT/WARM",
    image: "../img/desserts/bibingka.jpg",
    description:
      "Traditional rice cake cooked in clay pots, embodying the warmth of Filipino Christmas traditions.",
    history:
      "Dating back to pre-colonial times as offerings to deities, bibingka became intertwined with Christmas traditions during Spanish colonization. Today, it's sold outside churches during Simbang Gabi dawn masses.",
    ingredients: [
      "Rice flour",
      "Coconut milk",
      "Eggs & sugar",
      "Baking powder",
      "Butter",
      "Salted egg slices",
      "Cheese",
      "Banana leaves",
      "Grated coconut",
    ],
  },
  {
    name: "Turon",
    tag: "HOT/WARM",
    image: "../img/desserts/turon.jpg",
    description:
      "Crispy caramelized banana spring rolls that perfectly balance sweetness and crunch.",
    history:
      "Believed to have originated from Chinese spring rolls, Filipinos adapted the concept using local ingredients. It became a beloved street food, showcasing Filipino ingenuity in creating affordable yet delicious snacks.",
    ingredients: [
      "Saba bananas (plantains)",
      "Jackfruit strips",
      "Spring roll wrappers",
      "Brown sugar",
      "Cooking oil",
    ],
  },
  {
    name: "Buko Pandan",
    tag: "COLD",
    image: "../img/desserts/buko-pandan.jpg",
    description:
      "Tropical dessert salad combining young coconut and fragrant pandan in a creamy base.",
    history:
      "Emerging from the Visayas region in the late 20th century, this dessert gained nationwide popularity. It showcases Filipino creativity with tropical ingredients and the archipelago's abundant coconut resources.",
    ingredients: [
      "Young coconut strips (buko)",
      "Pandan-flavored gulaman",
      "Condensed milk",
      "All-purpose cream",
      "Pandan leaves",
      "Sugar",
      "Nata de coco (optional)",
    ],
  },
];

function renderDesserts(list = desserts) {
  const grid = document.getElementById("dessertsGrid");
  grid.innerHTML = ""; // Clear previous cards

  list.forEach((dessert) => {
    const card = document.createElement("div");
    card.className = "dessert-card";

    const ingredientsList = dessert.ingredients
      .map((ing) => `<li>${ing}</li>`)
      .join("");

    card.innerHTML = `
      <div class="image-container">
        <img src="${dessert.image}" alt="${dessert.name}" class="dessert-image">
        <div class="image-overlay"></div>
      </div>
      <div class="dessert-content">
        <span class="tag">${dessert.tag}</span>
        <h3>${dessert.name}</h3>
        <p>${dessert.description}</p>
        
        <div class="section">
          <h4>Origin Story</h4>
          <p>${dessert.history}</p>
        </div>
        
        <div class="section">
          <h4>Key Ingredients</h4>
          <ul class="ingredients-list">
            ${ingredientsList}
          </ul>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Render all desserts initially
renderDesserts();

// Filter buttons
const buttons = document.querySelectorAll(".filters button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Toggle active state
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    // Filter based on tag
    const filtered =
      filter === "ALL"
        ? desserts
        : desserts.filter((d) => d.tag === filter);

    // Render filtered list
    renderDesserts(filtered);
  });
});
