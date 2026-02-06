const CONFIG = {
  businessName: "Julia’s Restaurant",
  subtitle: "Family Owned • Established 1991",
  phone: "(956) 233-5653",
  address: "220 W Ocean Blvd, Los Fresnos, TX 78566",
  theme: "light",
  links: {
    doordash:
      "https://www.doordash.com/store/julia's-restaurant-los-fresnos-957078/1396781/?srsltid=AfmBOorMnND_yf2C0iToHYLKQc5TLc1MIkdjjuTAR0-ZODDiduHjOV5H",
    ubereats: "",
    facebook: "https://www.facebook.com/julias1991",
    instagram: "https://www.instagram.com/juliasrestaurant1/?hl=en"
  },
  assets: {
    logo: "assets/logo-julias.jpeg",
    pageBg: "assets/background-logo.jpeg"
  },
  story: [
    "Since 1991, Julia’s Restaurant has welcomed families and friends with warm hospitality and freshly prepared meals.",
    "We focus on homemade flavor, generous portions, and a comfortable place to enjoy breakfast, lunch, and dinner together."
  ],
  menu: [
    {
      category: "Breakfast Favorites",
      items: [
        { name: "Huevos Rancheros", price: 10.99, note: "Eggs, tortillas, ranchera sauce, and refried beans." },
        { name: "Migas Plate", price: 11.49, note: "Scrambled eggs, tortilla strips, pico de gallo, and cheese." }
      ]
    },
    {
      category: "Lunch & Dinner",
      items: [
        { name: "Chicken Fried Steak", price: 13.99, note: "Served with mashed potatoes and gravy." },
        { name: "Grilled Chicken Plate", price: 12.99, note: "Served with rice, vegetables, and house salad." }
      ]
    },
    {
      category: "Burgers & Sandwiches",
      items: [
        { name: "Classic Cheeseburger", price: 12.49, note: "Lettuce, tomato, onion, pickles, and fries." },
        { name: "Chicken Sandwich", price: 11.99, note: "Grilled chicken breast with fries." }
      ]
    }
  ]
};

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

function safeImage(imgEl) {
  imgEl.addEventListener("error", () => imgEl.classList.add("is-hidden"));
}

function renderHero() {
  const host = document.getElementById("heroRoot");
  if (!host) return;

  const wrapper = document.createElement("div");
  wrapper.className = "hero-inner";

  const logoWrap = document.createElement("div");
  logoWrap.className = "hero-logo-wrap";

  const logo = document.createElement("img");
  logo.className = "hero-logo";
  logo.src = CONFIG.assets.logo;
  logo.alt = `${CONFIG.businessName} logo`;
  safeImage(logo);

  logoWrap.appendChild(logo);

  const title = document.createElement("h1");
  title.className = "hero-title";
  title.textContent = CONFIG.businessName;

  const subtitle = document.createElement("p");
  subtitle.className = "hero-subtitle";
  subtitle.textContent = CONFIG.subtitle;

  wrapper.append(logoWrap, title, subtitle);
  host.replaceChildren(wrapper);
}

function renderStory() {
  const host = document.getElementById("storyRoot");
  if (!host) return;

  host.innerHTML = `
    <h2>Our Story</h2>
    ${CONFIG.story.map((line) => `<p>${line}</p>`).join("")}
  `;
}

function renderInfo() {
  const host = document.getElementById("infoRoot");
  if (!host) return;

  host.innerHTML = `
    <h2>Restaurant Info</h2>
    <div class="info-grid">
      <article class="info-card">
        <h3>Contact</h3>
        <p><strong>Phone:</strong> <a href="tel:+19562335653">${CONFIG.phone}</a></p>
      </article>
      <article class="info-card">
        <h3>Address</h3>
        <p>${CONFIG.address}</p>
      </article>
    </div>
  `;
}

function renderMenu() {
  const host = document.getElementById("menuRoot");
  if (!host) return;

  const menuMarkup = CONFIG.menu
    .map(
      (group) => `
      <article class="menu-category">
        <h3>${group.category}</h3>
        ${group.items
          .map(
            (item) => `
            <div class="menu-item">
              <div class="menu-row">
                <span class="item-name">${item.name}</span>
                <span class="item-price">${money.format(item.price)}</span>
              </div>
              ${item.note ? `<p class="item-note">${item.note}</p>` : ""}
            </div>
          `
          )
          .join("")}
      </article>
    `
    )
    .join("");

  host.innerHTML = `
    <h2>Menu Highlights</h2>
    ${menuMarkup}
  `;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  setTimeout(() => {
    toast.textContent = "";
  }, 2200);
}

function renderActions() {
  const host = document.getElementById("actionsRoot");
  if (!host) return;

  host.innerHTML = `
    <h2>Order & Follow</h2>
    <div class="actions-grid">
      <a class="btn btn-doordash" href="${CONFIG.links.doordash}" target="_blank" rel="noopener noreferrer">Order on DoorDash</a>
      <button class="btn btn-ubereats" id="uberBtn" type="button">Uber Eats</button>
      <a class="btn btn-facebook" href="${CONFIG.links.facebook}" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a class="btn btn-instagram" href="${CONFIG.links.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>
    </div>
    <div class="toast" id="toast" aria-live="polite"></div>
  `;

  const uberBtn = document.getElementById("uberBtn");
  uberBtn?.addEventListener("click", () => {
    if (!CONFIG.links.ubereats) {
      showToast("Uber Eats coming soon.");
      return;
    }
    window.open(CONFIG.links.ubereats, "_blank", "noopener,noreferrer");
  });
}

function renderFooter() {
  const host = document.getElementById("footerRoot");
  if (!host) return;

  host.innerHTML = `
    <p class="footer-meta">Disclaimer: Menu items and prices may change without notice.</p>
    <p class="footer-meta"><strong>Powered by Infinium</strong></p>
    <button class="btn back-top" id="backTop" type="button">Back to top</button>
  `;

  document.getElementById("backTop")?.addEventListener("click", () => {
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
  });
}

function init() {
  document.body.setAttribute("data-theme", CONFIG.theme);
  document.body.style.setProperty("--page-bg", `url("${CONFIG.assets.pageBg}")`);
  renderHero();
  renderStory();
  renderInfo();
  renderMenu();
  renderActions();
  renderFooter();
}

init();
