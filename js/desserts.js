// ********** DESSERTS PAGE ***********

// Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    ".intro, .features, .feature-card, .description, .video-section, .contact-section, .dessert-card, .filter-wrapper"
  );

  sections.forEach((section) => {
    section.classList.add("fade-in-element");
    observer.observe(section);
  });
});

// Scroll to top button
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

// The main thing
const desserts = [
  {
    name: "Halo-Halo",
    tag: "COLD",
    image: "img/desserts/halo-halo.jpg",
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
    steps: [
      "Prepare all ingredients and chill them in the refrigerator for at least 2 hours.",
      "In a tall glass, layer the sweetened beans, banana slices, nata de coco, and kaong at the bottom.",
      "Add a slice of leche flan and a spoonful of ube halaya on top of the layers.",
      "Fill the glass with finely shaved ice, packing it down gently.",
      "Pour evaporated milk generously over the shaved ice.",
      "Top with a scoop of ube ice cream and add remaining toppings.",
      "Serve immediately with a long spoon. Mix everything together before eating to enjoy all the flavors!",
    ],
  },
  {
    name: "Leche Flan",
    tag: "COLD",
    image: "img/desserts/leche-flan.jpg",
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
    steps: [
      "Make the caramel by melting 1 cup of sugar in a llanera or mold over low heat until golden brown. Swirl to coat the bottom evenly and let it cool.",
      "In a large bowl, combine 10-12 egg yolks (save the whites for other recipes).",
      "Add 1 can of condensed milk and 1 can of evaporated milk to the egg yolks.",
      "Mix gently with a whisk or fork, avoiding creating too many bubbles. Add vanilla extract and lemon zest if desired.",
      "Strain the mixture through a fine sieve to remove any lumps and ensure a smooth texture.",
      "Pour the mixture over the cooled caramel in the mold.",
      "Cover with aluminum foil and steam for 45-60 minutes, or bake in a water bath at 350°F for 50-60 minutes until set.",
      "Let it cool completely, then refrigerate for at least 4 hours or overnight. Invert onto a plate to serve.",
    ],
  },
  {
    name: "Ube Halaya",
    tag: "CHILLED",
    image: "img/desserts/ube-halaya.jpg",
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
    steps: [
      "Peel and boil the purple yam until soft, then mash thoroughly.",
      "In a pan over low heat, combine the mashed yam with butter, condensed milk, evaporated milk, and sugar.",
      "Cook while constantly stirring to prevent sticking, until mixture thickens and leaves the sides of the pan.",
      "Add vanilla extract and continue stirring until fully incorporated.",
      "Transfer to a container, smooth the surface, and let it cool to room temperature.",
      "Chill in the refrigerator before serving.",
    ],
  },
  {
    name: "Bibingka",
    tag: "HOT/WARM",
    image: "img/desserts/bibingka.jpg",
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
    steps: [
      "Preheat the oven to 375°F (190°C) and line a baking pan with greased banana leaves.",
      "In a bowl, mix rice flour, sugar, baking powder, eggs, and coconut milk until smooth.",
      "Pour the batter into the prepared pan, filling halfway.",
      "Top with slices of salted egg and cheese.",
      "Bake for 25-30 minutes until the top is lightly golden.",
      "Brush with butter and sprinkle with grated coconut before serving warm.",
    ],
  },
  {
    name: "Turon",
    tag: "HOT/WARM",
    image: "img/desserts/turon.jpg",
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
    steps: [
      "Peel 6-8 ripe saba bananas and slice them in half lengthwise.",
      "Place a banana half and a strip of jackfruit on a spring roll wrapper.",
      "Sprinkle brown sugar over the banana and jackfruit.",
      "Roll the wrapper tightly, folding in the sides. Seal the edge with water.",
      "Heat cooking oil in a deep pan over medium heat (about 350°F).",
      "Once oil is hot, roll each turon in brown sugar before frying for extra caramelization.",
      "Fry 3-4 pieces at a time until golden brown and crispy, about 3-4 minutes per side.",
      "Remove and drain on paper towels. Let cool slightly before serving. The sugar coating will harden into a delicious caramel shell!",
    ],
  },
  {
    name: "Buko Pandan",
    tag: "COLD",
    image: "img/desserts/buko-pandan.jpg",
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
    steps: [
      "Prepare pandan-flavored gulaman by dissolving agar-agar with water and sugar, then let it set and cut into cubes.",
      "In a large bowl, mix young coconut strips, nata de coco, and pandan gulaman cubes.",
      "Add condensed milk and all-purpose cream to the mixture and stir gently.",
      "Add sugar to taste and mix until fully combined.",
      "Chill in the refrigerator for at least 1-2 hours before serving.",
      "Serve cold in individual bowls or glasses.",
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

    card.addEventListener("click", () => openModal(dessert));
    grid.appendChild(card);
  });
}

function openModal(dessert) {
  const modal = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");

  const ingredientsList = dessert.ingredients
    .map((ing) => `<li>${ing}</li>`)
    .join("");

  const stepsList = dessert.steps
    .map(
      (step, index) => `<li><strong>Step ${index + 1}:</strong> ${step}</li>`
    )
    .join("");

  modalContent.innerHTML = `
                <div class="modal-header">
                    <span class="tag">${dessert.tag}</span>
                    <h2>${dessert.name}</h2>
                </div>
                <img src="${dessert.image}" alt="${dessert.name}" class="modal-image">
                <p class="modal-description">${dessert.description}</p>
                
                <div class="modal-section">
                    <h3>Origin Story</h3>
                    <p>${dessert.history}</p>
                </div>
                
                <div class="modal-section">
                    <h3>Key Ingredients</h3>
                    <ul class="modal-ingredients">
                        ${ingredientsList}
                    </ul>
                </div>

                <div class="modal-section">
                    <h3>How to Make It</h3>
                    <ol class="modal-steps">
                        ${stepsList}
                    </ol>
                </div>
            `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modalOverlay");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target.id === "modalOverlay") {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

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
      filter === "ALL" ? desserts : desserts.filter((d) => d.tag === filter);

    // Render filtered list
    renderDesserts(filtered);
  });
});

// Render all desserts initially
renderDesserts();
