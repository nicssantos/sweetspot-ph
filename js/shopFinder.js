// ********** SHOP FINDER PAGE ************ 25.741508539275348, 55.902379445922165

// Shops data
const shops = [
  {
    name: "Nanay Nidas Homemade Leche Flan",
    image: "../img/shops/nanay-nidas.jpg",
    description:
      "A hidden gem offering exceptional quality desserts at very reasonable prices.",
    address:
      "826 Vicente Cruz St, Sampaloc, Manila, 1008 Metro Manila, Philippines",
    mapLink: "https://maps.app.goo.gl/rKLUNvPTUG3UeTBj7",
    city: "Manila",
    lat: 14.6112,
    lng: 120.9959,
  },
  {
    name: "Bebang Halo Halo",
    image: "../img/shops/bebang.png",
    description:
      "A Filipino dessert chain known for its creamy Halo-Halo, made by freezing and shaving milk instead of ice.",
    address: "Has multiple stores in Metro Manila, Philippines",
    mapLink: "",
  },
  {
    name: "Lola Nena's",
    image: "../img/shops/",
    description:
      "A Filipino-inspired bakery and cafe that brings the warmth and comfort of homemade goodness to its customers",
    address: "Has multiple stores across the Philippines",
    mapLink: "",
  },
  {
    name: "The Original Buko Pie Bakeshop",
    image: "../img/shops/",
    description: "",
    address: "Manila S Rd, Los Baños, Laguna, Philippines",
    mapLink: "https://share.google/rCeSwrqSQqEbdDUWE",
  },
  {
    name: "Original Digman Halo-Halo and Home Made Siopao",
    image: "../img/shops/",
    description:
      "This establishment has been serving its famous halo-halo since 1969, drawing patrons with its authentic flavor and traditional preparation methods.",
    address: "H.F. Rubio St, Bacoor, Cavite, Philippines",
    mapLink: "https://share.google/bNpBDxYTkSdoAF2AH",
  },
  {
    name: "",
    image: "../img/shops/",
    description: "",
    address: "",
    mapLink: "",
  },
];

// Initialize the map, initial location is UoS RAK
let map;
let markers = [];

window.initMap = function () {
  const location = { lat: 25.7415, lng: 55.9023 }; // University of Stirling RAK
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
};

document.getElementById("citySearch").addEventListener("input", (e) => {
  const city = e.target.value.toLowerCase();
  console.log(city);

  // Remove previous markers
  markers.forEach(marker => marker.setMap(null));
  markers = [];

  // Filter shops in the typed city
  const filteredShops = shops.filter(shop =>
    shop.city.toLowerCase().includes(city)
  );

  // Update shop list
  const shopListEl = document.getElementById("shopList");
  shopListEl.innerHTML = ""; // clear previous
  filteredShops.forEach(shop => {
    const div = document.createElement("div");
    div.textContent = shop.name;
    shopListEl.appendChild(div);
  });

  // Add markers to map
  filteredShops.forEach(shop => {
    const marker = new google.maps.Marker({
      position: { lat: shop.lat, lng: shop.lng },
      map: map,
      title: shop.name,
    });
    markers.push(marker);
  });

  if (filteredShops.length > 0) {
    map.setCenter({ lat: filteredShops[0].lat, lng: filteredShops[0].lng });
    map.setZoom(12);
  }
});

