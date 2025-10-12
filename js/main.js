const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const searchContainer = document.getElementById("search-container");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  searchContainer.classList.toggle("show");
});

const desserts = [
  {
    name: "Halo-Halo",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop",
    history:
      "Halo-halo, which means 'mix-mix' in Tagalog, is the quintessential Filipino dessert that evolved from the Japanese kakigori during the pre-war period. It became a symbol of Filipino creativity and resourcefulness, combining various ingredients into one colorful masterpiece. This beloved dessert represents the diversity of Filipino culture itself.",
    ingredients: [
      "Shaved ice",
      "Sweetened beans (red beans, white beans)",
      "Sweetened banana",
      "Nata de coco",
      "Kaong (sugar palm fruit)",
      "Ube halaya (purple yam jam)",
      "Leche flan",
      "Pinipig (crispy rice)",
      "Evaporated milk",
      "Ice cream",
      "Ube or cheese ice cream on top",
    ],
  },
  {
    name: "Leche Flan",
    image:
      "https://images.unsplash.com/photo-1624353409078-cc83d6e3a6e0?w=400&h=400&fit=crop",
    history:
      "Introduced by the Spanish colonizers, leche flan is the Filipino version of crème caramel. The Filipino adaptation is richer and denser, using more egg yolks than the Spanish version. It has become a staple at celebrations and fiestas, symbolizing prosperity and festivity in Filipino culture.",
    ingredients: [
      "Egg yolks (10-12 pieces)",
      "Condensed milk",
      "Evaporated milk",
      "Granulated sugar (for caramel)",
      "Vanilla extract",
      "Lemon zest (optional)",
    ],
  },
  {
    name: "Ube Halaya",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4cbc528b?w=400&h=400&fit=crop",
    history:
      "Ube halaya, or purple yam jam, is a traditional Filipino delicacy that showcases the iconic purple yam. This labor-intensive dessert requires constant stirring for hours, making it a labor of love. Its vibrant purple color and unique flavor have made it a global sensation in recent years.",
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
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
    history:
      "Bibingka is a traditional rice cake that's especially popular during Christmas season. Originally cooked in clay pots lined with banana leaves and heated with coals from above and below, this ancient cooking method gives bibingka its distinctive flavor. It's often sold outside churches after Simbang Gabi (dawn mass).",
    ingredients: [
      "Rice flour",
      "Coconut milk",
      "Eggs",
      "Sugar",
      "Butter",
      "Salted egg",
      "Cheese",
      "Banana leaves",
      "Baking powder",
    ],
  },
  {
    name: "Turon",
    image:
      "https://images.unsplash.com/photo-1587248720327-e4f7b8b8f515?w=400&h=400&fit=crop",
    history:
      "Turon is a popular Filipino snack consisting of banana wrapped in spring roll wrapper and deep-fried to golden perfection. This street food favorite showcases Filipino ingenuity in creating delicious treats from simple, affordable ingredients. The caramelized coating makes it irresistibly crunchy.",
    ingredients: [
      "Saba bananas (plantain)",
      "Brown sugar",
      "Spring roll wrappers",
      "Jackfruit strips (optional)",
      "Cooking oil for frying",
    ],
  },
  {
    name: "Buko Pandan",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop",
    history:
      "Buko pandan is a refreshing Filipino dessert salad that combines young coconut and pandan-flavored gelatin. Its light, sweet flavor and cool temperature make it perfect for the tropical climate. The dessert's distinctive green color comes from pandan leaves, a staple in Southeast Asian cuisine.",
    ingredients: [
      "Young coconut meat (buko)",
      "Pandan-flavored gelatin",
      "Condensed milk",
      "All-purpose cream",
      "Pandan extract",
      "Sugar",
    ],
  },
  {
    name: "Sapin-Sapin",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4cbc528b?w=400&h=400&fit=crop",
    history:
      "Sapin-sapin, meaning 'layers,' is a multi-colored layered glutinous rice cake. Each layer is flavored differently, creating a beautiful and delicious work of art. This dessert is commonly served during special occasions and represents the colorful and festive nature of Filipino celebrations.",
    ingredients: [
      "Glutinous rice flour",
      "Coconut milk",
      "Sugar",
      "Ube flavoring (purple layer)",
      "Jackfruit (yellow layer)",
      "Food coloring",
      "Latik (coconut curds) topping",
    ],
  },
  {
    name: "Mais Con Yelo",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop",
    history:
      "Mais con yelo is a refreshing Filipino dessert made with sweet corn, shaved ice, milk, and sugar. This humble dessert highlights the Filipino love for sweet corn and cold treats. It's a popular merienda (snack) especially during hot summer days.",
    ingredients: [
      "Sweet corn kernels",
      "Shaved ice",
      "Evaporated milk or condensed milk",
      "Sugar",
      "Ice cream (optional)",
    ],
  },
];

let selectedIndex = -1;

function createDessertCards() {
  const list = document.getElementById("dessertsList");
  desserts.forEach((dessert, index) => {
    const card = document.createElement("div");
    card.className = "dessert-card";
    card.innerHTML = `
                    <img src="${dessert.image}" alt="${dessert.name}" class="dessert-img">
                    <div class="dessert-name">${dessert.name}</div>
                `;
    card.onclick = () => showDessertInfo(index);
    list.appendChild(card);
  });
}

function showDessertInfo(index) {
  selectedIndex = index;
  const dessert = desserts[index];
  const panel = document.getElementById("infoPanel");

  // Update active state
  document.querySelectorAll(".dessert-card").forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });

  panel.className = "info-panel";
  panel.innerHTML = `
                <div class="info-header">
                    <img src="${dessert.image}" alt="${dessert.name}">
                </div>
                <div class="info-content">
                    <h2>${dessert.name}</h2>
                    <div class="info-section">
                        <h3>History</h3>
                        <p>${dessert.history}</p>
                    </div>
                    <div class="info-section">
                        <h3>Ingredients</h3>
                        <ul>
                            ${dessert.ingredients
                              .map((ing) => `<li>${ing}</li>`)
                              .join("")}
                        </ul>
                    </div>
                </div>
            `;
}

createDessertCards();
