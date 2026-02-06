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
  specials: {
    note: "Monday through Friday from 11am–2pm",
    lunch: [
      {
        day: "Monday",
        items: [
          { name: "Calabaza con Pollo", price: 9.0 },
          { name: "Carne Guisada Plate", price: 10.0 },
          { name: "Meat Loaf", price: 10.0 }
        ]
      },
      {
        day: "Tuesday",
        items: [
          { name: "Chicken Enmoladas", price: 10.0 },
          { name: "Ranchero Steak Plate", price: 10.0 },
          { name: "Chicken Fried Steak", price: 11.0 }
        ]
      },
      {
        day: "Wednesday",
        items: [
          { name: "Fideo con Pollo", price: 9.0 },
          { name: "Chicken Entomatadas", price: 10.0 },
          { name: "Hamburger Steak", price: 10.0 }
        ]
      },
      {
        day: "Thursday",
        items: [
          { name: "Chicken or Beef Taco Plate", price: 9.0 },
          { name: "Pollo en Mole", price: 9.0 },
          { name: "Chicken Fried Chicken", price: 11.0 }
        ]
      },
      {
        day: "Friday",
        items: [
          { name: "Chicken Fajita Monterrey", price: 11.0 },
          { name: "Fried Fish & Shrimp Platter", price: 13.0 },
          { name: "Camarones Rancheros", price: 13.0 }
        ]
      }
    ],
    nightNote: "Wednesday, Thursday & Friday Night Specials (4pm–8pm)",
    night: [
      {
        day: "Wednesday",
        items: [{ name: "Burger & Wing Combos", price: 16.0, note: "Additional toppings are extra" }]
      },
      {
        day: "Thursday",
        items: [{ name: "Steak Night (8oz Ribeye Steak)", price: 13.0, note: "Choice of 2 sides" }]
      },
      {
        day: "Friday",
        items: [{ name: "Grilled Salmon & Shrimp", price: 16.0, note: "Choice of 2 sides" }]
      }
    ]
  },
  categoryNav: [
    "Breakfast",
    "Appetizers",
    "Soups & Salads",
    "Burgers & Sandwiches",
    "Traditional American Platters",
    "South of the Border Favorites",
    "Enchiladas",
    "Tacos, Chalupas & Burritos",
    "Southern Mexican Dishes",
    "Fajitas & Quesadillas & Nachos",
    "Steaks",
    "Botanas & Parrilladas",
    "Seafood",
    "Wings",
    "Kids Lunch Menu",
    "Desserts",
    "Drinks"
  ],
  menu: [
    {
      name: "Breakfast",
      note: "Served daily from 6:00 AM to 11:30 AM",
      sections: [
        {
          name: "Breakfast Platters",
          items: [
            { name: "Southern Special", price: 7.0 },
            { name: "Southernmost Special", price: 9.0 },
            { name: "Julia’s Deluxe Special", price: 11.0 }
          ]
        },
        {
          name: "Carne & Egg Breakfast",
          items: [
            { name: "Choice of Chorizo, Bacon or Ham & Egg Platters", price: 8.0 },
            { name: "Machacado & Eggs", price: 9.0 },
            { name: "Barbacoa Plate", price: 10.0 },
            { name: "Barbacoa & Egg Platter", price: 12.0 }
          ]
        },
        {
          name: "South of the Border Favorites",
          items: [
            { name: "Huevos a la Mexicana", price: 9.0, note: "A la Mexicana add $1.00" },
            { name: "Huevos Rancheros", price: 10.0 },
            { name: "Migas con Huevos", price: 8.0, note: "A la Mexicana $9.00" },
            { name: "Nopales & Egg", price: 9.0, note: "When available" },
            { name: "Chilaquiles & Egg", price: 10.0, note: "No egg $9.00 • Add Chicken $12.00" },
            { name: "Chorizo con Migas", price: 10.0, note: "A la Mexicana $10.00" }
          ]
        },
        {
          name: "Barbacoa & Menudo",
          items: [
            {
              name: "New Barbacoa & Menudo Platter (3 corn tortilla barbacoa tacos + large menudo)",
              price: 14.0
            }
          ]
        },
        {
          name: "Pork & Beef",
          items: [
            { name: "Pork Chop & Eggs Platter (1)", price: 12.0 },
            { name: "Pork Chop & Eggs Platter (2)", price: 16.0 },
            { name: "Sirloin Steak & Eggs", price: 15.0 },
            { name: "Fajita & Eggs", price: 13.0 }
          ]
        },
        {
          name: "Omelets (Three Egg Omelets)",
          items: [
            { name: "Bacon, Ham, or Sausage Omelet", price: 10.0 },
            { name: "Triple Meat Omelet", price: 11.0 },
            { name: "Veggie Omelet", price: 10.0 },
            { name: "Western Omelet", price: 10.0 },
            { name: "South Mexican Omelet", price: 11.0 },
            { name: "Spanish Omelet", price: 10.0 }
          ]
        },
        {
          name: "Pancakes",
          items: [
            { name: "Mini Bites (6)", price: 4.0 },
            { name: "1 Pancake", price: 2.5 },
            { name: "2 Pancakes", price: 4.5 },
            { name: "3 Pancakes", price: 6.0 },
            { name: "Pancake & Egg Platter", price: 10.0 },
            { name: "Deuces Wild Pancake Platter", price: 12.0 },
            { name: "Julia’s Supreme", price: 13.0 }
          ]
        },
        {
          name: "Breakfast Sides",
          items: [
            { name: "(2) French Toast & (2) Bacon", price: 6.0 },
            { name: "(3) French Toast & (3) Bacon", price: 8.0 },
            { name: "Biscuits & Gravy (half)", price: 5.0 },
            { name: "Biscuits & Gravy (full)", price: 8.0 },
            { name: "Oatmeal & Toast", price: 5.0 }
          ]
        },
        {
          name: "Kids Breakfast (Drink not included)",
          items: [
            { name: "French Toast & Egg", price: 5.0 },
            { name: "Egg & Hashbrown", price: 5.0 },
            { name: "Pancake & Egg", price: 5.0 }
          ]
        },
        {
          name: "Julia-Made Taquitos",
          note:
            "Create your own • 2 items for $5.00 • Add any additional item for $0.50 • Add a la Mexicana for $0.50¢",
          items: [
            {
              name: "2 items (Egg / Bacon / Sausage / Ham / Chorizo / Potato / Beans / Cheese)",
              price: 5.0
            },
            { name: "Taco Special (choice of meat, potatoes & cheese)", price: 6.0 },
            {
              name: "Carne Guisada, Barbacoa, Machacado or Fajita & Egg",
              price: 8.0,
              note: "A la Mexicana add $1.00"
            },
            { name: "(3) Barbacoa Taquitos", price: 7.5 }
          ]
        },
        {
          name: "Breakfast À La Carte",
          items: [
            { name: "(2) Bacon", price: 2.5 },
            { name: "(2) Sausage", price: 3.0 },
            { name: "Hashbrowns", price: 2.5 },
            { name: "Beans", price: 2.5 },
            { name: "Biscuit", price: 1.5 },
            { name: "Grilled Biscuit", price: 2.0 },
            { name: "Flour Tortilla", price: 1.5 },
            { name: "(1) Egg", price: 1.5 },
            { name: "(2) Eggs", price: 3.0 }
          ]
        }
      ]
    },
    {
      name: "Appetizers",
      sections: [
        {
          name: "Appetizers",
          items: [
            { name: "Chips & Salsa", price: 2.5 },
            { name: "Large French Fries", price: 4.0 },
            { name: "Onion Rings", price: 6.0 },
            { name: "Chili or Bacon & Cheese Fries", price: 6.0 },
            { name: "Bowl of Chili", price: 7.0, note: "w/ pinto beans, cheese & chopped onions" },
            { name: "Chile con Queso", price: 8.0 },
            { name: "Avocado Dip & Chips", price: 8.0, note: "A la Mexicana $9.00" },
            {
              name: "Queso Flameado w/ Chorizo",
              price: 9.0,
              note: "Served w/ corn tortillas • A la Mexicana $10.00"
            },
            {
              name: "Queso Flameado w/ Beef Fajitas",
              price: 10.0,
              note: "Served w/ corn tortillas • A la Mexicana $11.00"
            },
            { name: "Cheese Nachos", price: 8.0 },
            { name: "Bean & Cheese Nachos", price: 9.0 },
            { name: "Nachos Compuestos (Chicken or Beef)", price: 12.0 }
          ]
        }
      ]
    },
    {
      name: "Soups & Salads",
      sections: [
        {
          name: "Soups & Salads",
          items: [
            { name: "Garden Salad", price: 4.0 },
            { name: "Chef’s (Ham) Salad", price: 10.0 },
            { name: "Grilled Chicken Salad", price: 11.0 },
            { name: "Shrimp Salad", price: 12.0 },
            { name: "Grilled Beef or Chicken Fajita Salad", price: 12.0 },
            { name: "Beef or Chicken Caldo or Menudo", price: 11.0, note: "8oz Cup $2.50" }
          ]
        }
      ]
    },
    {
      name: "Burgers & Sandwiches",
      sections: [
        {
          name: "South Texas Sandwiches",
          note: "All sandwiches served w/ fries. Substitute onion rings $2.",
          items: [
            { name: "Grilled Cheese", price: 7.5 },
            { name: "Grilled Ham & Cheese", price: 9.0 },
            { name: "BLT", price: 10.0 },
            { name: "Patty Melt on Wheat", price: 11.0 },
            { name: "BBQ Sandwich or Open Face", price: 11.0 }
          ]
        },
        {
          name: "Julia’s Juicy Burgers",
          note: "Served w/ fries (or substitute onion rings $2). Extra patty $4.",
          items: [
            { name: "Hamburger", price: 10.0 },
            { name: "Cheeseburger", price: 11.0 },
            { name: "BBQ Bacon Burger", price: 12.0 },
            { name: "Chili Cheese Burger", price: 12.0 },
            { name: "Swiss Mushroom Burger", price: 12.0 },
            { name: "Southern Mexican Burger", price: 12.0 },
            { name: "South of the Border Burger", price: 14.0 }
          ]
        },
        {
          name: "Chicken Burgers",
          note: "Served w/ fries & veggies on the side. Add mushrooms for $2.",
          items: [
            { name: "Chicken Monterey Burger", price: 12.0 },
            { name: "Grilled or Fried Buffalo Chicken Burger", price: 12.0 }
          ]
        },
        {
          name: "Chicken Strips",
          items: [{ name: "Chicken Strips (6 pc)", price: 10.0 }]
        }
      ]
    },
    {
      name: "Traditional American Platters",
      sections: [
        {
          name: "Traditional American Platters",
          note:
            "Served w/ choice of corn, green beans, or broccoli & buttered Texas toast. Choice of mashed potatoes, fries, or loaded baked potato ($1.50 extra).",
          items: [
            { name: "BBQ Brisket or Roast Beef Platter", price: 11.0 },
            { name: "Grilled Chicken Platter", price: 11.0 },
            { name: "Country Fried Steak or Chicken Fried Chicken", price: 12.0 },
            { name: "Hamburger Steak", price: 11.0 },
            { name: "Grilled or Fried Porkchop Platter (1 piece)", price: 11.0 },
            { name: "Grilled or Fried Porkchop Platter (2 piece)", price: 15.0 }
          ]
        }
      ]
    },
    {
      name: "South of the Border Favorites",
      sections: [
        {
          name: "South of the Border Favorites",
          note: "Entrees served w/ rice, beans & add avocado $2.50 extra.",
          items: [
            { name: "Cheese Mexican Platter", price: 11.0 },
            { name: "Beef or Chicken Mexican Platter", price: 12.0 },
            {
              name: "Fajita Enchilada Platter",
              price: 15.0,
              note: "3 enchiladas, sautéed fajitas, avocado & choice of tortilla"
            },
            {
              name: "Tampiqueña Platter",
              price: 15.0,
              note: "1 enchilada, 1 taco, 1 chalupa, avocado & choice of tortilla"
            },
            {
              name: "Fajita Supreme Platter",
              price: 15.0,
              note: "Fajitas, 2 chicken suizas, 2 flautas + sides"
            },
            {
              name: "Carne Guisada Supreme Platter",
              price: 15.0,
              note: "Rice, beans, carne guisada, 2 enchiladas, 2 beef tacos + tortilla"
            }
          ]
        }
      ]
    },
    {
      name: "Enchiladas",
      sections: [
        {
          name: "Enchiladas",
          note: "(3) enchiladas served with rice & beans. Topped w/ onions $0.50",
          items: [
            { name: "Beef / Chicken / Chili Cheese", price: 11.0 },
            { name: "Deluxe", price: 12.0 },
            { name: "Enmoladas / Entomatadas / Suizas", price: 11.0, note: "Sour cream & guacamole" },
            { name: "Shrimp Suizas", price: 12.0, note: "A la carte $9.00" }
          ]
        }
      ]
    },
    {
      name: "Tacos, Chalupas & Burritos",
      sections: [
        {
          name: "American Tacos & Chalupas",
          note:
            "These entrees: (3) tacos and (2) chalupas topped w/ lettuce, tomato & mixed cheese and served w/ rice & beans.",
          items: [
            { name: "Bean & Cheese Chalupas (2 plate)", price: 9.0, note: "A la carte (3) $7.50" },
            { name: "Beef or Chicken Chalupas (2 plate)", price: 10.0, note: "A la carte (3) $8.50" },
            { name: "Beef or Chicken Tacos (3 plate)", price: 10.0, note: "A la carte (3) $7.50" },
            { name: "Chicken Flauta (3) Plate", price: 10.0, note: "A la carte (4 w/ all toppings) $10" }
          ]
        },
        {
          name: "Burritos on Flour Tortillas",
          note: "Topped w/ chili meat & served w/ rice, beans, and avocado or sour cream $2.",
          items: [
            { name: "Cheese, Beef, or Chicken", price: 12.0 },
            { name: "Carne Guisada, Ranchero Steak, Beef, or Chicken Fajita", price: 14.0 }
          ]
        },
        {
          name: "Flour Tortillas Tacos",
          note: "Choices: Beef or Chicken Fajita, Carne Guisada, Picadillo, or Ranchero Steak",
          items: [
            { name: "Plain Beef or Chicken", price: 8.0 },
            { name: "Beef or Chicken Taco Salad (Crispy Shell)", price: 10.0, note: "Add beef or chicken fajita $2" }
          ]
        }
      ]
    },
    {
      name: "Southern Mexican Dishes",
      sections: [
        {
          name: "Southern Mexican Dishes",
          note: "Served with charro beans, rice & choice of flour or corn tortilla.",
          items: [
            { name: "Pollo en Mole Plate", price: 10.0, note: "Served with mashed beans & rice only" },
            { name: "Carne Guisada Plate", price: 11.0 },
            { name: "Ranchero Steak Plate", price: 11.0 },
            {
              name: "Chile Relleno Plate",
              price: 12.0,
              note: "Stuffed w/ ground beef, topped w/ white cheese and salsa"
            }
          ]
        },
        {
          name: "Tacos & Chalupas a la Mexicana",
          note:
            "Plate entrees served w/ rice & charro beans. Chalupas topped w/ melted monterrey cheese. Tacos include avocado, queso fresco, grilled onions, cilantro.",
          items: [
            { name: "Beef or Chicken Fajita (3) Taquitos Platters", price: 12.0, note: "A la carte $9.00" },
            { name: "(2) Chalupas Beef or Chicken Fajita Platter", price: 12.0, note: "A la carte (3 chalupas) $9.00" }
          ]
        }
      ]
    },
    {
      name: "Fajitas, Quesadillas & Nachos",
      sections: [
        {
          name: "Southern Tex Chicken & Beef Fajitas",
          note:
            "Fajitas are thinly cut, sautéed w/ onion & bell pepper and served w/ rice & charro beans. Monterey/ranchera/surf & turf topped w/ sliced avocado. Add guacamole $2.",
          items: [
            { name: "Grilled Chicken Monterey", price: 12.0, note: "Add mushrooms $2" },
            { name: "Chicken or Beef Fajitas", price: 14.0 },
            { name: "Chicken or Beef Fajita Monterey", price: 16.0 },
            { name: "Chicken or Beef Fajita Ranchera", price: 16.0 },
            { name: "Fajita Surf & Turf", price: 16.0 }
          ]
        },
        {
          name: "Quesadillas & Nachos",
          items: [
            { name: "Chicken or Beef Fajita Quesadilla", price: 13.0 },
            { name: "Choice of Fajita South Texas Combo", price: 16.0, note: "Nachos, quesadillas & flautas" },
            { name: "1/2 Fajita Nachos", price: 12.0 },
            { name: "Full Order Fajita Nachos", price: 16.0 },
            { name: "1/2 Fajita Nachos Supreme", price: 14.0 },
            { name: "Full Order Fajita Nachos Supreme", price: 18.0 },
            { name: "1/2 Shrimp Nachos", price: 14.0 },
            { name: "Full Order Shrimp Nachos", price: 18.0 }
          ]
        }
      ]
    },
    {
      name: "Steaks",
      sections: [
        {
          name: "South of the Border Steaks",
          note:
            "Steaks served w/ choice of fries or mashed potatoes, vegetable of the day, house salad and buttered Texas toast. Add fully loaded baked potato $1.50. Add grilled shrimp for $5.",
          items: [
            { name: "Angus Beef Sirloin Steak 10oz", price: 16.0 },
            { name: "Angus Beef Rib Eye Steak 10oz", price: 18.0 }
          ]
        }
      ]
    },
    {
      name: "Botanas & Parrilladas",
      sections: [
        {
          name: "Botanas & Parrilladas",
          note: "Choice of beef, chicken, or mixed.",
          items: [
            { name: "Fajita Botana (1)", price: 12.0 },
            { name: "Fajita Botana (2)", price: 26.0 },
            { name: "Fajita Botana (3)", price: 52.0 },
            { name: "Fajita Botana (4)", price: 66.0 },
            { name: "Parrilladas (2)", price: 26.0 },
            { name: "Parrilladas (4)", price: 52.0 },
            { name: "Parrilladas (6)", price: 66.0 }
          ]
        }
      ]
    },
    {
      name: "Seafood",
      sections: [
        {
          name: "Fajita & Seafood Botana Platters",
          items: [
            { name: "For 4 people", price: 56.0 },
            { name: "For 6 people", price: 78.0 }
          ]
        },
        {
          name: "On the Sea Side",
          note:
            "All platters served w/ choice of 2 sides (mashed potatoes, fries, rice, salad, or Texas toast). Add a loaded baked potato for $1.50.",
          items: [
            { name: "Fried Fish or Tilapia", price: 12.0 },
            { name: "Gulf Shrimp Platter", price: 14.0 },
            { name: "Fish & Shrimp Combo", price: 16.0 },
            { name: "Fried Fish or Shrimp on a Bun", price: 12.0 },
            { name: "Shrimp Cocktail (SM)", price: 10.0 },
            { name: "Shrimp Cocktail (LG)", price: 12.0 },
            { name: "Caldo de Mariscos Bowl", price: 12.0 },
            { name: "Grilled Tilapia or Salmon", price: 13.0, note: "Add Grilled Shrimp $4" },
            { name: "Grilled Fish or Shrimp Tacos", price: 13.0 },
            { name: "Camarones Rancheros", price: 15.0 },
            { name: "Nopales & Camarones Rancheros", price: 14.0, note: "When available" },
            { name: "Rodeo Platter", price: 18.0 }
          ]
        }
      ]
    },
    {
      name: "Wings",
      sections: [
        {
          name: "Buffalo Wings",
          note: "Flavors: Mild / Original Hot / Lemon Pepper / BBQ / Garlic Parmesan",
          items: [
            { name: "6 Wings & Fries", price: 12.0 },
            { name: "12 Wings & Fries", price: 18.0 },
            { name: "18 Wings & Fries", price: 26.0 }
          ]
        }
      ]
    },
    {
      name: "Kids Lunch Menu",
      note: "Drink not included",
      sections: [
        {
          name: "Kids Lunch Menu",
          items: [
            { name: "Beef Taco Plate w/ Rice & Beans", price: 5.0 },
            { name: "Enchilada Plate w/ Rice & Beans", price: 5.0 },
            { name: "Grilled Cheese Sandwich w/ Fries", price: 5.0 },
            { name: "Chicken Strips (3 pc) w/ Fries", price: 6.0 },
            { name: "Hamburger w/ Fries", price: 6.0 },
            { name: "Cheeseburger w/ Fries", price: 7.0 },
            { name: "Carne Guisada w/ Rice & Beans", price: 7.0 }
          ]
        }
      ]
    },
    {
      name: "Desserts",
      sections: [
        {
          name: "Desserts",
          items: [
            { name: "A Slice of Pie", price: 4.0, note: "Pecan, Apple, Cherry" },
            { name: "Try A La Mode", price: 7.5, note: "Your choice of ice cream" }
          ]
        }
      ]
    },
    {
      name: "Drinks",
      sections: [
        {
          name: "Drinks",
          items: [
            { name: "Decaf or Regular Coffee" },
            { name: "Hot Tea or Chocolate" },
            { name: "2% Milk or Chocolate Milk" },
            { name: "Iced Tea, Sweet Tea, Raspberry Tea, Lemonade" },
            { name: "Coke, Diet Coke, Sprite, Dr. Pepper" },
            {
              name: "Can Drinks (Coke, Diet Coke, Sprite, Dr Pepper, Pepsi, Diet Pepsi, Sunkist, Root Beer, Big Red)"
            },
            { name: "Cokas Mexicanas" },
            { name: "Mineral Water" },
            { name: "Bottled Water" },
            { name: "Bottled Orange Fanta 1/2 litro" },
            { name: "Mexican Coca Bottled 1/2 litro" }
          ]
        }
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
  const phoneDial = (CONFIG.phone || "").replace(/\D/g, "");

  const wrapper = document.createElement("div");
  wrapper.className = "hero-inner";

  const heroTop = document.createElement("div");
  heroTop.className = "hero-top";

  const heroBrand = document.createElement("div");
  heroBrand.className = "hero-brand";

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

  const callBtn = document.createElement("a");
  callBtn.className = "call-btn";
  callBtn.href = `tel:${phoneDial}`;
  callBtn.textContent = "Call To Place Order";
  callBtn.setAttribute("aria-label", `Call ${CONFIG.businessName} at ${CONFIG.phone} to place an order`);

  const pill = document.createElement("span");
  pill.className = "hero-pill";
  pill.textContent = "Since 1991";

  const chips = document.createElement("div");
  chips.className = "hero-chips";
  chips.innerHTML = `
    <span class="chip"><a href="tel:${phoneDial}">📞 ${CONFIG.phone}</a></span>
    <span class="chip">📍 ${CONFIG.address}</span>
    <span class="chip">🕒 ${CONFIG.specials.note}</span>
  `;

  heroBrand.append(logoWrap, pill, title, subtitle);
  heroTop.append(heroBrand, callBtn);

  wrapper.append(heroTop, chips);
  host.replaceChildren(wrapper);
}

function renderStory() {
  const host = document.getElementById("storyRoot");
  if (!host) return;

  host.innerHTML = `
    <h2 class="section-title">Our Story</h2>
    ${CONFIG.story.map((line) => `<p>${line}</p>`).join("")}
  `;
}

function renderInfo() {
  const host = document.getElementById("infoRoot");
  if (!host) return;
  const phoneDial = (CONFIG.phone || "").replace(/\D/g, "");

  host.innerHTML = `
    <h2 class="section-title">Restaurant Info</h2>
    <div class="info-grid">
      <article class="info-card">
        <h3>Contact</h3>
        <p><strong>Phone:</strong> <a href="tel:${phoneDial}">${CONFIG.phone}</a></p>
      </article>
      <article class="info-card">
        <h3>Address</h3>
        <p>${CONFIG.address}</p>
      </article>
    </div>
  `;
}

function formatPrice(price) {
  return typeof price === "number" ? money.format(price) : "";
}

function renderItem(item) {
  const formattedPrice = formatPrice(item.price);
  return `
    <div class="menu-item">
      <div class="menu-row">
        <span class="item-name">${item.name}</span>
        ${formattedPrice ? `<span class="item-price">${formattedPrice}</span>` : ""}
      </div>
      ${item.note ? `<p class="item-note">${item.note}</p>` : ""}
    </div>
  `;
}

function renderSpecials() {
  const lunchMarkup = CONFIG.specials.lunch
    .map(
      (dayBlock) => `
        <article class="menu-category">
          <h4>${dayBlock.day}</h4>
          ${dayBlock.items.map(renderItem).join("")}
        </article>
      `
    )
    .join("");

  const nightMarkup = CONFIG.specials.night
    .map(
      (dayBlock) => `
        <article class="menu-category">
          <h4>${dayBlock.day}</h4>
          ${dayBlock.items.map(renderItem).join("")}
        </article>
      `
    )
    .join("");

  return `
    <section class="menu-specials">
      <h3>Specials</h3>
      <p class="item-note">${CONFIG.specials.note}</p>
      ${lunchMarkup}
      <p class="item-note">${CONFIG.specials.nightNote}</p>
      ${nightMarkup}
    </section>
  `;
}

function toCategorySlug(label) {
  return label
    .toLowerCase()
    .replaceAll("'", "")
    .replaceAll("&", "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function setActiveCategoryButton(targetId) {
  const buttons = document.querySelectorAll(".cat-btn[data-target-id]");
  buttons.forEach((button) => {
    const isActive = button.dataset.targetId === targetId;
    button.classList.toggle("is-active", isActive);
  });
}

function setupCategoryTracking() {
  const sections = Array.from(document.querySelectorAll(".menu-category[data-category-id]"));
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) {
        setActiveCategoryButton(visible.target.id);
      }
    },
    { threshold: [0.25, 0.5, 0.75], rootMargin: "-15% 0px -60% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

function renderCategoryNav(menuByName) {
  const buttonMarkup = CONFIG.categoryNav
    .map((categoryName) => {
      const targetId = `cat-${toCategorySlug(categoryName)}`;
      const exists = menuByName.has(categoryName);
      return `<button class="cat-btn" type="button" data-target-id="${targetId}" ${
        exists ? "" : 'aria-disabled="true" disabled'
      }>${categoryName}</button>`;
    })
    .join("");

  return `
    <div class="category-nav" aria-label="Menu categories">
      <div class="category-buttons">${buttonMarkup}</div>
    </div>
  `;
}

function renderMenu() {
  const host = document.getElementById("menuRoot");
  if (!host) return;

  const menuByName = new Set(CONFIG.menu.map((category) => category.name));

  const menuMarkup = CONFIG.menu
    .map(
      (category) => `
      <article class="menu-category category-card" id="cat-${toCategorySlug(
        category.name
      )}" data-category-id="${category.name}">
        <h3>${category.name}</h3>
        ${category.note ? `<p class="item-note">${category.note}</p>` : ""}
        ${category.sections
          .map(
            (section) => `
            <section class="menu-section">
              <h4>${section.name}</h4>
              ${section.note ? `<p class="item-note">${section.note}</p>` : ""}
              ${section.items.map(renderItem).join("")}
            </section>
          `
          )
          .join("")}
      </article>
    `
    )
    .join("");

  host.innerHTML = `
    <h2 class="section-title">Menu</h2>
    ${renderCategoryNav(menuByName)}
    ${renderSpecials()}
    ${menuMarkup}
  `;

  host.querySelectorAll(".cat-btn[data-target-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.targetId;
      const targetEl = targetId ? document.getElementById(targetId) : null;
      if (!targetEl) return;
      setActiveCategoryButton(targetId);
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const firstAvailable = CONFIG.categoryNav.find((name) => menuByName.has(name));
  if (firstAvailable) {
    setActiveCategoryButton(`cat-${toCategorySlug(firstAvailable)}`);
  }

  setupCategoryTracking();
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
    <h2 class="section-title">Order & Follow</h2>
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
