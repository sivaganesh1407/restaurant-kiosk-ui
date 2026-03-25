/**
 * Dummy menu data: categories and products for the kiosk grid.
 */

export const CATEGORY_IDS = {
  BURGERS: 'burgers',
  DRINKS: 'drinks',
  COMBOS: 'combos',
};

/** Category cards on the home screen; `id` is used in the URL `/menu/:category`. */
export const categories = [
  {
    id: CATEGORY_IDS.BURGERS,
    title: 'Burgers',
    description: 'Flame-grilled favorites',
    accent: 'from-amber-500 to-orange-600',
  },
  {
    id: CATEGORY_IDS.DRINKS,
    title: 'Drinks',
    description: 'Cold beverages',
    accent: 'from-sky-500 to-blue-600',
  },
  {
    id: CATEGORY_IDS.COMBOS,
    title: 'Combos',
    description: 'Meal deals',
    accent: 'from-emerald-500 to-teal-600',
  },
];

const VALID_CATEGORY_SET = new Set(categories.map((c) => c.id));

export function isValidCategory(categoryId) {
  return VALID_CATEGORY_SET.has(categoryId);
}

/** Unsplash CDN — images aligned to product type. License: https://unsplash.com/license */
function unsplash(photoId) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=800&h=560&q=80`;
}

export const menuItems = [
  {
    id: 'chicken-burger',
    name: 'Chicken Burger',
    price: 8,
    category: CATEGORY_IDS.BURGERS,
    image: unsplash('photo-1637710847214-f91d99669e18'),
  },
  {
    id: 'veg-burger',
    name: 'Veg Burger',
    price: 7,
    category: CATEGORY_IDS.BURGERS,
    image: unsplash('photo-1542554762515-82be5d8f0bfa'),
  },
  {
    id: 'coke',
    name: 'Coke',
    price: 2,
    category: CATEGORY_IDS.DRINKS,
    image: unsplash('photo-1591550936127-58ae7ea00c80'),
  },
  {
    id: 'juice',
    name: 'Juice',
    price: 3,
    category: CATEGORY_IDS.DRINKS,
    image: unsplash('photo-1600271886742-f049cd451bba'),
  },
  {
    id: 'burger-fries-combo',
    name: 'Burger + Fries',
    description: 'Classic combo meal',
    price: 10,
    category: CATEGORY_IDS.COMBOS,
    image: unsplash('photo-1561758033-d89a9ad46330'),
  },
];

export function getItemsByCategory(categoryId) {
  return menuItems.filter((item) => item.category === categoryId);
}
