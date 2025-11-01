// ********** SHOP FINDER PAGE ************

let topButton = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
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
    description:
      "Famous for its authentic Filipino buko pies, freshly baked daily using traditional recipes. A must-visit for coconut dessert lovers.",
    address: "Manila S Rd, Los Baños, Laguna, Philippines",
    mapLink: "https://share.google/rCeSwrqSQqEbdDUWE",
    city: "Laguna",
    lat: 14.182005120926185,
    lng: 121.23107953577903,
  },
  {
    name: "Original Digman Halo-Halo and Home Made Siopao",
    image: "../img/shops/digman.jpg",
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
    description:
      "A Filipino restaurant in Dubai known for its hearty meals, classic home-style dishes, and warm hospitality. Perfect for cravings from back home.",
    address:
      "Trade Centre Road Spinneys Building, Ground Floor, 11B St, Near to Burjuman, Dubai, UAE",
    mapLink: "https://maps.app.goo.gl/dCyoSrP9g9PctSRT6",
    city: "Dubai",
    lat: 25.249409220993982,
    lng: 55.30065378162911,
  },
  {
    name: "Panaderia Restaurant",
    image: "../img/shops/panaderia.png",
    description:
      "A Filipino restaurant in Ras Al Khaimah offering authentic home-style dishes, freshly baked breads, and traditional Filipino flavors for a taste of home.",
    address: "QXR9+8V6 - Al Muntasir Rd - Al Nakheel - Ras Al Khaimah, UAE",
    mapLink: "https://maps.app.goo.gl/9F1AMqDKjAbMkgnZ7",
    city: "Ras al Khaimah",
    lat: 25.79095933743103,
    lng: 55.9696276105477,
  },
];

// Initialize variables
let map;
let markers = [];
let userMarker;
let userLocation = null;

// Initialize the map with University of Stirling RAK as default
window.initMap = function () {
  const location = { lat: 25.7415, lng: 55.9023 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });

  // Display all shops initially
  displayShops(shops);
};

// Display shops on map and in list
function displayShops(shopsToDisplay) {
  // Clear existing markers
  markers.forEach((marker) => marker.setMap(null));
  markers = [];

  // Clear and update shop list
  const shopListEl = document.getElementById("shopList");
  shopListEl.innerHTML = "";

  shopsToDisplay.forEach((shop, index) => {
    // Create marker
    const marker = new google.maps.Marker({
      position: { lat: shop.lat, lng: shop.lng },
      map: map,
      title: shop.name,
      animation: google.maps.Animation.DROP,
    });

    // Info window for marker
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="font-family: 'Montserrat', sans-serif;">
          <h3 style="margin: 0 0 8px 0; color: #275780;">${shop.name}</h3>
          <p style="margin: 0 0 4px 0;">${shop.description}</p>
          ${
            shop.distance
              ? `<p style="color: #ffb749; font-weight: 600; margin: 4px 0;">📍 ${shop.distance.toFixed(
                  1
                )} km away</p>`
              : ""
          }
          <a href="${
            shop.mapLink
          }" target="_blank" style="color: #4a9fd8;">View on Google Maps</a>
        </div>
      `,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    markers.push(marker);

    // Create shop card
    const card = document.createElement("div");
    card.className = "shop-card";
    card.innerHTML = `
      <div class="image-container">
        <img src="${shop.image}" alt="${
      shop.name
    }" class="shop-image" onerror="this.src='../img/shops/placeholder.jpg'">
      </div>
      <div class="shop-info">
        <h3>${shop.name}</h3>
        <p class="shop-desc">${shop.description}</p>
        <p class="shop-address">${shop.address}</p>
        ${
          shop.distance
            ? `<p class="shop-distance">🚗 ${shop.distance.toFixed(
                1
              )} km away</p>`
            : ""
        }
        <a href="${
          shop.mapLink
        }" target="_blank" class="map-link">View on Map →</a>
      </div>
    `;

    // Click card to center map on shop
    card.addEventListener("click", () => {
      map.setCenter({ lat: shop.lat, lng: shop.lng });
      map.setZoom(16);
      infoWindow.open(map, marker);
      if (document.documentElement.clientWidth >= 1024) {
        window.scrollTo({
          top: 280,
          behavior: "smooth",
        });
      }
    });

    shopListEl.appendChild(card);
  });

  // Center map on first shop if available
  if (shopsToDisplay.length > 0) {
    const bounds = new google.maps.LatLngBounds();
    shopsToDisplay.forEach((shop) => {
      bounds.extend({ lat: shop.lat, lng: shop.lng });
    });
    if (userMarker) {
      bounds.extend(userMarker.getPosition());
    }
    map.fitBounds(bounds);
  }
}

// City search functionality
document.getElementById("citySearch").addEventListener("input", (e) => {
  const city = e.target.value.toLowerCase().trim();

  if (city === "") {
    // Show all shops if search is empty and no user location
    // Show only closest 3 if user location is active
    if (userLocation) {
      const shopsWithDistance = calculateDistances(shops, userLocation);
      const closestShops = shopsWithDistance.slice(0, 3);
      displayShops(closestShops);
    } else {
      displayShops(shops);
    }
    return;
  }

  // Filter shops by city
  const filteredShops = shops.filter((shop) =>
    shop.city.toLowerCase().includes(city)
  );

  // Apply distance calculation and limit to top 3 if user location is available
  if (userLocation) {
    const shopsWithDistance = calculateDistances(filteredShops, userLocation);
    const closestShops = shopsWithDistance.slice(0, 3);
    displayShops(closestShops);
  } else {
    displayShops(filteredShops);
  }
});

function getUserLocation() {
  const locationBtn = document.getElementById("location-btn");
  const locationStatus = document.getElementById("location-status");

  if (!navigator.geolocation) {
    showStatus("Geolocation is not supported by your browser", "error");
    return;
  }

  locationBtn.disabled = true;
  locationBtn.style.display = "none";
  showStatus("Getting your location...", "loading");

  navigator.geolocation.getCurrentPosition(
    // Success
    (position) => {
      userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      // Remove old user marker if exists
      if (userMarker) {
        userMarker.setMap(null);
      }

      // Add user location marker
      userMarker = new google.maps.Marker({
        position: userLocation,
        map: map,
        title: "Your Location",
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#4a9fd8",
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 3,
        },
      });

      // Add info window to user marker
      const userInfoWindow = new google.maps.InfoWindow({
        content:
          '<div style="font-family: Montserrat;"><strong>📍 You are here</strong></div>',
      });

      userMarker.addListener("click", () => {
        userInfoWindow.open(map, userMarker);
      });

      // Calculate distances and update display
      const shopsWithDistance = calculateDistances(shops, userLocation);
      const closestShops = shopsWithDistance.slice(0, 3);
      displayShops(closestShops);

      // Center map
      map.setCenter(userLocation);
      map.setZoom(13);

      // Update button
      locationBtn.disabled = false;
      showStatus("Location found! Showing nearest shops", "success");

      setTimeout(() => {
        if (locationStatus) {
          locationStatus.style.display = "none";
        }
      }, 3000);
    },
    // Error
    (error) => {
      locationBtn.disabled = false;
      locationBtn.innerHTML = "📍 Use Your Location";

      let errorMessage = "Unable to get your location";

      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage =
            "Location permission denied. Please enable location access in your browser settings.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = "Location information unavailable.";
          break;
        case error.TIMEOUT:
          errorMessage = "Location request timed out. Please try again.";
          break;
      }

      showStatus(errorMessage, "error");
    },
    // Options
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    }
  );
}

// Calculate distances from user to all shops
function calculateDistances(shops, userLoc) {
  return shops
    .map((shop) => {
      const distance = getDistanceFromLatLon(
        userLoc.lat,
        userLoc.lng,
        shop.lat,
        shop.lng
      );
      return { ...shop, distance };
    })
    .sort((a, b) => a.distance - b.distance);
}

// Haversine formula to calculate distance between two coordinates
function getDistanceFromLatLon(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in kilometers
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// Show status message
function showStatus(message, type) {
  const statusEl = document.getElementById("location-status");
  if (!statusEl) return;

  statusEl.textContent = message;
  statusEl.className = `location-status ${type}`;
  statusEl.style.display = "block";
}

// Initialize location button when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const locationBtn = document.getElementById("location-btn");
  if (locationBtn) {
    locationBtn.addEventListener("click", getUserLocation);
  }
});


// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.wrapper h5, .search-bar, #location-btn, .shop-card, #map');
  
  sections.forEach(section => {
    section.classList.add('fade-in-element');
    observer.observe(section);
  });
});

const shopListObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === 1 && node.classList.contains('shop-card')) {
        node.classList.add('fade-in-element');
        observer.observe(node);
      }
    });
  });
});

// Start observing the shop list for new cards
const shopList = document.getElementById('shopList');
if (shopList) {
  shopListObserver.observe(shopList, { childList: true });
}