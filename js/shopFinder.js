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
    lat: 14.611814788349687,
    lng: 120.99590571250005,
  },
  {
    name: "The Original Buko Pie Bakeshop",
    image: "../img/shops/original-buko-pie.png",
    description: "Famous for its authentic Filipino buko pies, freshly baked daily using traditional recipes. A must-visit for coconut dessert lovers.",
    address: "Manila S Rd, Los Baños, Laguna, Philippines",
    mapLink: "https://share.google/rCeSwrqSQqEbdDUWE",
    city: "Laguna",
    lat: 14.182005120926185,
    lng: 121.23107953577903,
  },
  {
    name: "Original Digman Halo-Halo and Home Made Siopao",
    image: "../img/shops/",
    description:
      "This establishment has been serving its famous halo-halo since 1969, drawing patrons with its authentic flavor and traditional preparation methods.",
    address: "H.F. Rubio St, Bacoor, Cavite, Philippines",
    mapLink: "https://share.google/bNpBDxYTkSdoAF2AH",
    city: "Cavite",
    lat: 14.460663436651451,
    lng: 120.9428164001764,
  },
  {
    name: "Max's Restaurant - Karama",
    image: "../img/shops/maxs.jpg",
    description: "A Filipino restaurant in Dubai known for its hearty meals, classic home-style dishes, and warm hospitality. Perfect for cravings from back home.",
    address: "Trade Centre Road Spinneys Building, Ground Floor, 11B St, Near to Burjuman, Dubai, UAE",
    mapLink: "https://maps.app.goo.gl/dCyoSrP9g9PctSRT6",
    city: "Dubai",
    lat: 25.249409220993982, 
    lng: 55.30065378162911
  },
  {
    name: "Panaderia Restaurant",
    image: "../img/shops/panaderia.png",
    description: "A Filipino restaurant in Ras Al Khaimah offering authentic home-style dishes, freshly baked breads, and traditional Filipino flavors for a taste of home.",
    address: "QXR9+8V6 - Al Muntasir Rd - Al Nakheel - Ras Al Khaimah, UAE",
    mapLink: "https://maps.app.goo.gl/9F1AMqDKjAbMkgnZ7",
    city: "Ras al Khaimah",
    lat: 25.79095933743103, 
    lng: 55.9696276105477
  },
];

// Initialize the map, initial location is UoS RAK
let map;
let markers = [];

window.initMap = function () {
  const location = { lat: 25.7415, lng: 55.9023 }; // University of Stirling RAK
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });
};
console.log("hehehe");
document.getElementById("citySearch").addEventListener("input", (e) => {
  const city = e.target.value.toLowerCase();
  console.log(e.target.value.toLowerCase());

  // Remove previous markers
  markers.forEach((marker) => marker.setMap(null));
  markers = [];

  // Filter shops in the typed city
  const filteredShops = shops.filter((shop) =>
    shop.city.toLowerCase().includes(city)
  );
  console.log(filteredShops);

  // Update shop list
  const shopListEl = document.getElementById("shopList");
  shopListEl.innerHTML = ""; // clear previous
  filteredShops.forEach((shop) => {
    const card = document.createElement("div");
    card.className = "shop-card";
    card.innerHTML = `
                    <div class="image-container">
                        <img src="${shop.image}" alt="${shop.name}" class="shop-image">
                    </div>
                    <div class="shop-info">
                        <h3>${shop.name}</h3>
                        <p class="shop-desc">${shop.description}</p>
                        <p class="shop-address">📍${shop.address} <a href="${shop.mapLink}" target="_blank">(View on Map)</a></p>
                    </div>
    `;
    shopListEl.appendChild(card);
  });

  // Add markers to map
  filteredShops.forEach((shop) => {
    const marker = new google.maps.Marker({
      position: { lat: shop.lat, lng: shop.lng },
      map: map,
      title: shop.name,
    });
    markers.push(marker);
  });

  if (filteredShops.length > 0) {
    map.setCenter({ lat: filteredShops[0].lat, lng: filteredShops[0].lng });
    map.setZoom(16);
  }
});
