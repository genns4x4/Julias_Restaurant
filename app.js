const config = {
  businessName: "Julia's Tex-Mex Restaurant",
  subtitle: "Auténtico sabor Tex-Mex para compartir en familia.",
  historia: [
    "Nuestra cocina nace de recetas familiares con raíces del norte de México y la tradición Tex-Mex del sur de Texas.",
    "Cada platillo se prepara al momento con ingredientes frescos, salsas de la casa y porciones generosas.",
    "Gracias por elegirnos para desayunos, comidas y cenas llenas de sabor."
  ],
  address: "123 Main Street",
  cityState: "Austin, TX",
  phone: "(512) 555-0199",
  hours: {
    monday: "7:00 AM - 9:00 PM",
    tuesday: "7:00 AM - 9:00 PM",
    wednesday: "7:00 AM - 9:00 PM",
    thursday: "7:00 AM - 9:00 PM",
    friday: "7:00 AM - 10:00 PM",
    saturday: "8:00 AM - 10:00 PM",
    sunday: "8:00 AM - 8:00 PM"
  },
  doordashUrl: "",
  theme: "light",
  assets: {
    logo: "assets/logo.png",
    cover: "assets/cover.jpg",
    qr: "assets/qr.png"
  }
};

const menuData = [
  {
    category: "BREAKFAST",
    subcategories: [
      {
        name: "Classic Plates",
        items: [
          { name: "Huevos Rancheros", price: 10.99, note: "Eggs over corn tortilla with ranchera sauce." },
          { name: "Migas Plate", price: 11.49, note: "Scrambled eggs, tortilla strips, pico de gallo, cheese." },
          { name: "Chorizo & Egg Plate", price: 11.99 },
          { name: "Breakfast Burrito", price: 9.99, note: "Egg, beans, potato, cheese." }
        ]
      }
    ]
  },
  {
    category: "PANCAKES & EXTRAS",
    subcategories: [
      {
        name: "",
        items: [
          { name: "Buttermilk Pancakes (3)", price: 8.49 },
          { name: "Chocolate Chip Pancakes", price: 9.49 },
          { name: "French Toast", price: 8.99 },
          { name: "Extra Bacon", price: 3.49 },
          { name: "Extra Sausage", price: 3.49 }
        ]
      }
    ]
  },
  {
    category: "APPETIZERS",
    subcategories: [
      {
        name: "To Share",
        items: [
          { name: "Queso Dip", price: 7.99 },
          { name: "Guacamole Fresco", price: 8.99 },
          { name: "Nachos Supreme", price: 11.99, note: "Beef or chicken, beans, queso, jalapeños." },
          { name: "Chicken Flautas", price: 10.49 }
        ]
      }
    ]
  },
  {
    category: "SOUPS & SALADS",
    subcategories: [
      {
        name: "",
        items: [
          { name: "Tortilla Soup Cup", price: 5.49 },
          { name: "Tortilla Soup Bowl", price: 8.49 },
          { name: "Taco Salad", price: 11.99 },
          { name: "Grilled Chicken Salad", price: 12.49 }
        ]
      }
    ]
  },
  {
    category: "BURGERS & SANDWICHES",
    subcategories: [
      {
        name: "Served with fries",
        items: [
          { name: "Tex-Mex Burger", price: 12.99, note: "Pepper jack, jalapeños, chipotle mayo." },
          { name: "Bacon Cheeseburger", price: 12.49 },
          { name: "Chicken Sandwich", price: 11.99 },
          { name: "Philly Steak Sandwich", price: 13.49 }
        ]
      }
    ]
  },
  {
    category: "SOUTH OF THE BORDER FAVORITES",
    subcategories: [
      {
        name: "",
        items: [
          { name: "Carne Guisada Plate", price: 13.99 },
          { name: "Chile Relleno Plate", price: 12.99 },
          { name: "Pollo con Mole", price: 13.49 },
          { name: "Tampiqueña", price: 16.99 }
        ]
      }
    ]
  },
  {
    category: "ENCHILADAS",
    subcategories: [
      {
        name: "Choose sauce: red, green, queso, mole",
        items: [
          { name: "Cheese Enchiladas (3)", price: 11.99 },
          { name: "Chicken Enchiladas (3)", price: 12.99 },
          { name: "Beef Enchiladas (3)", price: 12.99 },
          { name: "Enchiladas Verdes", price: 13.49 }
        ]
      }
    ]
  },
  {
    category: "TACOS, CHALUPAS & BURRITOS",
    subcategories: [
      {
        name: "",
        items: [
          { name: "Street Tacos (5)", price: 12.99 },
          { name: "Chalupa Plate (2)", price: 11.99 },
          { name: "Bean & Cheese Burrito", price: 8.99 },
          { name: "Super Burrito", price: 12.49 }
        ]
      }
    ]
  },
  {
    category: "FAJITAS, STEAKS & PARRILLADAS",
    subcategories: [
      {
        name: "",
        items: [
          { name: "Beef Fajitas", price: 17.99 },
          { name: "Chicken Fajitas", price: 15.99 },
          { name: "Mixed Fajitas", price: 18.99 },
          { name: "Parrillada for 2", price: 36.99 }
        ]
      }
    ]
  },
  {
    category: "SEAFOOD",
    subcategories: [
      {
        name: "",
        items: [
          { name: "Camarones a la Diabla", price: 16.99 },
          { name: "Grilled Fish Tacos", price: 13.99 },
          { name: "Shrimp Enchiladas", price: 15.99 },
          { name: "Seafood Cocktail", price: 14.49 }
        ]
      }
    ]
  },
  {
    category: "WINGS",
    subcategories: [
      {
        name: "",
        items: [
          { name: "6 Wings", price: 8.99 },
          { name: "10 Wings", price: 12.99 },
          { name: "20 Wings", price: 22.99 },
          { name: "Sauces", price: 0.0, note: "Buffalo, BBQ, Mango Habanero" }
        ]
      }
    ]
  },
  {
    category: "KIDS LUNCH MENU",
    subcategories: [
      {
        name: "12 and under",
        items: [
          { name: "Kids Quesadilla", price: 6.99 },
          { name: "Kids Taco Plate", price: 6.99 },
          { name: "Kids Chicken Tenders", price: 7.49 },
          { name: "Kids Cheeseburger", price: 7.99 }
        ]
      }
    ]
  },
  {
    category: "DESSERTS",
    subcategories: [
      {
        name: "",
        items: [
          { name: "Churros", price: 5.99 },
          { name: "Flan", price: 4.99 },
          { name: "Sopapillas", price: 5.49 },
          { name: "Tres Leches Cake", price: 6.49 }
        ]
      }
    ]
  },
  {
    category: "DRINKS",
    subcategories: [
      {
        name: "",
        items: [
          { name: "Coca-Cola" },
          { name: "Diet Coke" },
          { name: "Sprite" },
          { name: "Dr Pepper" },
          { name: "Lemonade" },
          { name: "Sweet Tea" },
          { name: "Unsweet Tea" },
          { name: "Coffee" }
        ]
      }
    ]
  }
];

const state = {
  logoAvailable: false,
  qrAvailable: false,
  coverUrl: null
};

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

function tryLoadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function resolveAssets() {
  state.logoAvailable = Boolean(await tryLoadImage(config.assets.logo));
  state.qrAvailable = Boolean(await tryLoadImage(config.assets.qr));

  const jpgCover = await tryLoadImage(config.assets.cover);
  if (jpgCover) {
    state.coverUrl = jpgCover;
    return;
  }

  const pngCover = await tryLoadImage("assets/cover.png");
  state.coverUrl = pngCover || null;
}

function setTheme() {
  document.body.setAttribute("data-theme", config.theme || "light");
}

function renderHero() {
  const host = document.getElementById("hero-content");
  if (!host) return;

  if (state.coverUrl) {
    const header = document.getElementById("top");
    header.style.backgroundImage = `linear-gradient(120deg, rgba(21, 15, 13, 0.8), rgba(69, 33, 22, 0.55)), url('${state.coverUrl}')`;
  }

  host.innerHTML = `
    <div class="hero-inner">
      ${state.logoAvailable ? `<img class="hero-logo" src="${config.assets.logo}" alt="${config.businessName} logo">` : ""}
      <h1 class="hero-title">${config.businessName}</h1>
      <p class="hero-subtitle">${config.subtitle}</p>
    </div>
  `;
}

function renderHistoria() {
  const host = document.getElementById("historia-content");
  if (!host) return;

  const paragraphs = config.historia.map((text) => `<p>${text}</p>`).join("");
  host.innerHTML = `
    <h2 id="historia-title">NUESTRA HISTORIA</h2>
    ${paragraphs}
  `;
}

function renderDatos() {
  const host = document.getElementById("datos-content");
  if (!host) return;

  const dayLabels = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday"
  };

  const hoursMarkup = Object.entries(config.hours)
    .map(([day, value]) => `<li><span>${dayLabels[day] || day}</span><span>${value}</span></li>`)
    .join("");

  host.innerHTML = `
    <h2 id="datos-title">DATOS GENERALES</h2>
    <div class="datos-grid">
      <article class="data-card">
        <h3>Ubicación</h3>
        <p>${config.address}<br>${config.cityState}</p>
        <p><strong>Tel:</strong> <a href="tel:${config.phone.replace(/[^\d+]/g, "")}">${config.phone}</a></p>
      </article>
      <article class="data-card">
        <h3>Horario</h3>
        <ul class="hours-list">${hoursMarkup}</ul>
      </article>
    </div>
  `;
}

function renderMenu() {
  const host = document.getElementById("menu-content");
  if (!host) return;

  const categoriesMarkup = menuData
    .map((block) => {
      const isDrinks = block.category === "DRINKS";

      const subMarkup = block.subcategories
        .map((sub) => {
          if (isDrinks) {
            const drinkItems = sub.items.map((item) => `<li>${item.name}</li>`).join("");
            return `
              <div class="subcategory">
                ${sub.name ? `<h4>${sub.name}</h4>` : ""}
                <ul class="drink-list">${drinkItems}</ul>
              </div>
            `;
          }

          const itemMarkup = sub.items
            .map((item) => {
              const showPrice = typeof item.price === "number";
              return `
                <div class="menu-item">
                  <div class="menu-row">
                    <span class="item-name">${item.name}</span>
                    ${showPrice ? `<span class="item-price">${money.format(item.price)}</span>` : ""}
                  </div>
                  ${item.note ? `<p class="item-note">${item.note}</p>` : ""}
                </div>
              `;
            })
            .join("");

          return `
            <div class="subcategory">
              ${sub.name ? `<h4>${sub.name}</h4>` : ""}
              ${itemMarkup}
            </div>
          `;
        })
        .join("");

      return `
        <article class="category">
          <h3>${block.category}</h3>
          ${subMarkup}
        </article>
      `;
    })
    .join("");

  host.innerHTML = `
    <h2 id="menu-title">MENU</h2>
    ${categoriesMarkup}
  `;
}

function showInlineMessage(text) {
  const holder = document.getElementById("door-msg");
  if (!holder) return;
  holder.textContent = text;
  setTimeout(() => {
    holder.textContent = "";
  }, 2200);
}

function renderAcciones() {
  const host = document.getElementById("acciones-content");
  if (!host) return;

  host.innerHTML = `
    <h2 id="acciones-title">ACCIONES</h2>
    <div class="actions-wrap">
      <p>Ordena en línea y disfruta nuestros platillos Tex-Mex en casa.</p>
      <button id="doordash-btn" class="btn-primary btn-doordash" type="button" aria-label="Ordenar por DoorDash">Order on DoorDash</button>
      <div id="door-msg" class="inline-message" aria-live="polite"></div>
      ${state.qrAvailable ? `<img class="qr-image" src="${config.assets.qr}" alt="Código QR para menú">` : ""}
    </div>
  `;

  const ddBtn = document.getElementById("doordash-btn");
  ddBtn.addEventListener("click", () => {
    if (!config.doordashUrl) {
      showInlineMessage("DoorDash ordering coming soon");
      return;
    }
    window.open(config.doordashUrl, "_blank", "noopener,noreferrer");
  });
}

function renderFooter() {
  const host = document.getElementById("footer-content");
  if (!host) return;

  host.innerHTML = `
    <p>Precios sujetos a cambio. Imágenes solo ilustrativas.</p>
    <p><strong>POWERED BY INFINIUM</strong></p>
    <button class="btn-primary back-top" id="back-top" type="button">Volver arriba</button>
  `;

  document.getElementById("back-top").addEventListener("click", () => {
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  });
}

async function init() {
  setTheme();
  await resolveAssets();
  renderHero();
  renderHistoria();
  renderDatos();
  renderMenu();
  renderAcciones();
  renderFooter();
}

init();
