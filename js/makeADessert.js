// Adjust navbar height to maximize space
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".logo img");

  if (window.location.pathname.includes("makeADessert.html")) {
    navbar.classList.add("small");
    logo.classList.add("small");
  } else {
    navbar.classList.remove("small");
    logo.classList.remove("small");
  }
});

// Back to Top Button
function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Show/hide button based on scroll position (Mobile only)
window.addEventListener("scroll", () => {
  const topBtn = document.getElementById("topBtn");
  
  if (topBtn && window.innerWidth <= 768) {
    if (window.pageYOffset > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }
});

// Hide button on desktop
window.addEventListener("resize", () => {
  const topBtn = document.getElementById("topBtn");
  
  if (topBtn && window.innerWidth > 768) {
    topBtn.style.display = "none";
  }
});

// Add event listener to dessert item (buttons)
document.querySelectorAll(".dessert-item").forEach((item) => {
  const button = item.querySelector(".dessert-btn");
  const dessertName = button.textContent
    .toLowerCase()
    .trim()
    .replace(/ /g, "-");

  item.addEventListener("click", function () {
    selectDessert(dessertName);
  });
});

// Add event listener for menu button
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", function () {
  backToMenu();
});

// Set up data structures for desserts
const desserts = {
  "halo-halo": {
    name: "Halo-Halo",
    ingredients: [
      "Sweetened Beans",
      "Nata de Coco",
      "Sago (Tapioca Pearls)",
      "Macapuno Strips",
      "Jackfruit Strips",
      "Jellies",
      "Banana Slices",
      "Shaved Ice",
      "Evaporated & Condensed Milk",
      "Ube Ice Cream",
      "Leche Flan",
    ],
    images: [
      "../img/mad/halo-halo/1.png",
      "../img/mad/halo-halo/2.png",
      "../img/mad/halo-halo/3.png",
      "../img/mad/halo-halo/4.png",
      "../img/mad/halo-halo/5.png",
      "../img/mad/halo-halo/6.png",
      "../img/mad/halo-halo/7.png",
      "../img/mad/halo-halo/8.png",
      "../img/mad/halo-halo/9.png",
      "../img/mad/halo-halo/10.png",
      "../img/mad/halo-halo/11.png",
      "../img/mad/halo-halo/12.png",
    ],
    steps: [
      { ingredient: "Sweetened Beans", instruction: "Add sweetened beans" },
      { ingredient: "Nata de Coco", instruction: "Add nata de coco" },
      {
        ingredient: "Sago (Tapioca Pearls)",
        instruction: "Add sago (tapioca pearls)",
      },
      { ingredient: "Macapuno Strips", instruction: "Add macapuno strips" },
      {
        ingredient: "Langka Strips (Jackfruit)",
        instruction: "Add jackfruit strips",
      },
      { ingredient: "Gulaman (Jelly)", instruction: "Add gulaman cubes" },
      { ingredient: "Sweet Banana", instruction: "Add sliced sweet banana" },
      { ingredient: "Shaved Ice", instruction: "Fill with crushed ice" },
      {
        ingredient: "Evaporated & Condensed Milk",
        instruction: "Pour evaporated and condensed milk",
      },
      { ingredient: "Ube Ice Cream", instruction: "Top with ube ice cream" },
      { ingredient: "Leche Flan", instruction: "Top with leche flan" },
    ],
    ingredientImages: [
      "../img/mad/halo-halo/ingredients/beans.png",
      "../img/mad/halo-halo/ingredients/nata.png",
      "../img/mad/halo-halo/ingredients/sago.png",
      "../img/mad/halo-halo/ingredients/macapuno.png",
      "../img/mad/halo-halo/ingredients/langka.png",
      "../img/mad/halo-halo/ingredients/gulaman.png",
      "../img/mad/halo-halo/ingredients/banana.png",
      "../img/mad/halo-halo/ingredients/ice.png",
      "../img/mad/halo-halo/ingredients/milk.png",
      "../img/mad/halo-halo/ingredients/ube.png",
      "../img/mad/halo-halo/ingredients/flan.png",
    ],
  },
};

// DESSERT BUILDING

// State management
let currentDessert = null;
let currentStep = 0;

// Initialize the game
function selectDessert(dessertName) {
  const selectionPage = document.querySelector(".selection-page");
  const buildingPage = document.querySelector(".building-page");

  // Hide selection page and show building page
  selectionPage.style.display = "none";
  buildingPage.style.display = "block";

  currentDessert = desserts[dessertName];
  currentStep = 0;

  displayPanelOne();
  displayPanelTwo();
}

javascript// ===== PANEL ONE =====
function displayPanelOne() {
  const panelOne = document.querySelector(".panel-one");
  panelOne.innerHTML = "";

  // Title
  const titleEl = document.createElement("h2");
  titleEl.textContent = `Building: ${currentDessert.name}`;
  titleEl.classList.add("building-title");
  panelOne.appendChild(titleEl);

  // Cup Image (drop zone)
  const imageEl = document.createElement("img");
  imageEl.src = currentDessert.images[currentStep];
  imageEl.alt = `${currentDessert.name} - Step ${currentStep + 1}`;
  imageEl.classList.add("building-image");
  imageEl.id = "dessert-cup";
  panelOne.appendChild(imageEl);

  // Make the cup a drop zone
  setupDropZone(imageEl);

  // Step instruction
  const stepEl = document.createElement("p");
  stepEl.classList.add("step-instruction");
  stepEl.id = "current-step";

  if (currentStep < currentDessert.steps.length) {
    stepEl.textContent = `Step ${currentStep + 1}: ${
      currentDessert.steps[currentStep].instruction
    }`;
  } else {
    stepEl.textContent = "Dessert Complete!";
  }
  panelOne.appendChild(stepEl);

  // Information section - Dynamic text based on device
  const infoEl = document.createElement("p");
  infoEl.classList.add("info-text");
  
  const isMobile = 'ontouchstart' in window;
  if (isMobile) {
    infoEl.textContent = "Tap ingredients in order to build your dessert!";
  } else {
    infoEl.textContent = "Drag and drop ingredients to the cup above until it is filled!";
  }
  
  panelOne.appendChild(infoEl);
}

// Update only the dynamic parts of Panel One
function updatePanelOne() {
  // Update image
  const imageEl = document.getElementById("dessert-cup");
  imageEl.src = currentDessert.images[currentStep];
  imageEl.alt = `${currentDessert.name} - Step ${currentStep + 1}`;

  // Update step instruction
  const stepEl = document.getElementById("current-step");
  if (currentStep < currentDessert.steps.length) {
    stepEl.textContent = `Step ${currentStep + 1}: ${
      currentDessert.steps[currentStep].instruction
    }`;
  } else {
    stepEl.textContent = "🎉 Dessert Complete!";
    stepEl.classList.add("complete");
    document.querySelector(".info-text").style.display = "none";
  }
}

// ===== PANEL TWO =====
function displayPanelTwo() {
  const panelTwo = document.querySelector(".panel-two");
  panelTwo.innerHTML = "";

  // Title
  const titleEl = document.createElement("h3");
  titleEl.textContent = "Ingredients";
  titleEl.classList.add("ingredients-title");
  panelTwo.appendChild(titleEl);

  // Ingredients grid
  const ingredientsGrid = document.createElement("div");
  ingredientsGrid.classList.add("ingredients-grid");

  currentDessert.steps.forEach((step, index) => {
    const ingredientItem = document.createElement("div");
    ingredientItem.classList.add("ingredient-item");
    ingredientItem.setAttribute("data-ingredient-index", index);
    ingredientItem.draggable = true;

    // Ingredient image
    const imgEl = document.createElement("img");
    imgEl.src = currentDessert.ingredientImages[index];
    imgEl.alt = step.ingredient;
    imgEl.classList.add("ingredient-image");
    ingredientItem.appendChild(imgEl);

    // Ingredient name
    const nameEl = document.createElement("p");
    nameEl.textContent = step.ingredient;
    nameEl.classList.add("ingredient-name");
    ingredientItem.appendChild(nameEl);

    // Setup drag functionality
    setupDraggableIngredient(ingredientItem, step.ingredient, index);

    ingredientsGrid.appendChild(ingredientItem);
  });

  panelTwo.appendChild(ingredientsGrid);
}

// ===== DRAG AND DROP FUNCTIONALITY =====
function setupDraggableIngredient(element, ingredient, index) {
  const isMobile = "ontouchstart" in window;

  if (isMobile) {
    // Mobile: Tap to add ingredient
    element.style.cursor = "pointer";
    element.draggable = false;

    element.addEventListener("click", (e) => {
      e.preventDefault();
      // Add visual feedback
      element.classList.add("tapped");
      setTimeout(() => element.classList.remove("tapped"), 300);

      handleIngredientDrop(index, ingredient);
    });
  } else {
    // Desktop: Drag and drop
    element.draggable = true;

    element.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("ingredient-index", index);
      e.dataTransfer.setData("ingredient-name", ingredient);
      element.classList.add("dragging");
    });

    element.addEventListener("dragend", (e) => {
      element.classList.remove("dragging");
    });
  }
}

function setupDropZone(dropElement) {
  const isMobile = "ontouchstart" in window;

  if (!isMobile) {
    // Desktop only: Drop zone events
    dropElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropElement.classList.add("drag-over");
    });

    dropElement.addEventListener("dragleave", (e) => {
      dropElement.classList.remove("drag-over");
    });

    dropElement.addEventListener("drop", (e) => {
      e.preventDefault();
      dropElement.classList.remove("drag-over");

      const ingredientIndex = parseInt(
        e.dataTransfer.getData("ingredient-index")
      );
      const ingredientName = e.dataTransfer.getData("ingredient-name");

      handleIngredientDrop(ingredientIndex, ingredientName);
    });
  }
  // Mobile doesn't need drop zone events - ingredients are tapped directly
}

// Handle what happens when ingredient is dropped
function handleIngredientDrop(ingredientIndex, ingredientName) {
  // Check if it's the correct ingredient for current step
  if (ingredientIndex === currentStep) {
    // Correct ingredient! Move to next step
    markIngredientAsUsed(ingredientIndex);
    currentStep++;

    if (currentStep < currentDessert.images.length) {
      updatePanelOne();
    } else {
      // Dessert complete!
      showCompletionMessage();
    }
  } else {
    // Wrong ingredient - show error
    showErrorMessage("Follow the steps in order!");
  }
}

// Mark ingredient as used
function markIngredientAsUsed(index) {
  const ingredient = document.querySelector(
    `[data-ingredient-index="${index}"]`
  );
  if (ingredient) {
    ingredient.classList.add("used");
    ingredient.draggable = false;
  }
}

// Show completion message
function showCompletionMessage() {
  updatePanelOne();

  const infoEl = document.querySelector(".info-text");
  infoEl.textContent = "🎉 Great job! Your dessert is ready to enjoy!";
  infoEl.classList.add("success");
}

/// Show error message
function showErrorMessage(msg) {
  const infoEl = document.querySelector(".info-text");
  const isMobile = 'ontouchstart' in window;
  const originalText = isMobile 
    ? "Tap ingredients in order to build your dessert!"
    : "Drag and drop ingredients to the cup above until it is filled!";

  infoEl.textContent = `❌ ${msg}`;
  infoEl.classList.add("error");

  setTimeout(() => {
    infoEl.textContent = originalText;
    infoEl.classList.remove("error");
  }, 2000);
}

// Initialize event listeners for dessert selection
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dessert-item").forEach((item) => {
    const button = item.querySelector(".dessert-btn");
    const dessertName = button.textContent
      .toLowerCase()
      .trim()
      .replace(/ /g, "-");

    item.addEventListener("click", function () {
      selectDessert(dessertName);
    });

    item.style.cursor = "pointer";
  });
});

// Back to menu
function backToMenu() {
  const selectionPage = document.querySelector(".selection-page");
  const buildingPage = document.querySelector(".building-page");

  // Reset state
  currentDessert = null;
  currentStep = 0;

  // Hide building page and show selection page
  buildingPage.style.display = "none";
  selectionPage.style.display = "block";

  // Clear panels
  const panelOne = document.querySelector(".panel-one");
  const panelTwo = document.querySelector(".panel-two");

  if (panelOne) panelOne.innerHTML = "";
  if (panelTwo) panelTwo.innerHTML = "";
}
