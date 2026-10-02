const BASE = 'https://dummyjson.com';

const searchEl = document.getElementById('search');
const errorEl = document.getElementById('error');
const loadingEl = document.getElementById('loading');
const productsEl = document.getElementById('products');
const detailEl = document.getElementById('detail');

// ---------- given helpers (don't change) ----------
function setLoading(isLoading) {
  loadingEl.hidden = !isLoading;
}

function showError(message) {
  errorEl.textContent = message;
  errorEl.hidden = message === '';
}

function cardHTML(product) {
  return `
    <div class="card" data-id="${product.id}">
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <span class="price">${product.price} $</span>
    </div>`;
}

// ---------- EXERCISE 2 - product list ----------
// Fetch the first 10 products:  `${BASE}/products?limit=10`  (the array is data.products)
// Put cardHTML(product) for each one into productsEl.
// While waiting, show "Loading..." (setLoading(true)).
// It must disappear when we are done - whether the request worked OR failed.
// Hint: which block always runs?
async function loadProducts() {
  // TODO
}

// ---------- EXERCISE 3 - friendly errors ----------
// Return a message a shopper would understand:
//   error.status === 404   -> "We couldn't find that."
//   error.status >= 500    -> "The shop server is having a bad day. Try again later."
//   error is a TypeError   -> "Can't reach the shop. Check your internet connection."
//   anything else          -> "Something went wrong."
// Then use it: in loadProducts, catch the error, call showError(friendlyMessage(error))
// and clear the grid. After a later request WORKS, the red banner must disappear.
// Test offline: DevTools -> Network tab -> "Offline", then reload.
// Test 404: temporarily change the URL to `${BASE}/producs?limit=10`.
function friendlyMessage(error) {
  // TODO
}

// ---------- EXERCISE 5 - search ----------
// search(query) calls `${BASE}/products/search?q=${query}`  (results are in data.products)
//   - empty query   -> go back to loadProducts()
//   - zero results  -> write  No products match "<query>"  into productsEl (this is NOT an error banner)
//   - errors        -> friendlyMessage, like exercise 3
// The tricky part: the user types fast. A slow response for "ph" can arrive AFTER the
// response for "pho" and overwrite it. Only the LATEST search may render.
// Hint: keep a counter, give every search its own number, and compare it after each await.
async function search(query) {
  // TODO
}

searchEl.addEventListener('input', () => search(searchEl.value.trim()));

// ---------- EXERCISE 7 - product page with parallel requests ----------
// Clicking a card calls showDetail(id). Load these two at the same time with Promise.all:
//     getJSON(`${BASE}/products/${id}`)
//     getJSON(`${BASE}/products/categories`)     // an array of category objects
// Make EACH request forgiving, so one failure doesn't throw away the other:
//     getJSON(...).catch(() => null)
// Then render into detailEl (give it class "detail"):
//   - product is null      -> showError(...) and stop (no half-empty box)
//   - otherwise            -> image, title, description, price
//   - categories not null  -> an extra line: "N categories in the shop" (N = categories.length)
//   - categories is null   -> skip that line, everything else still shows
// Clear the red banner (showError('')) when the product loads fine.
async function showDetail(id) {
  // TODO
}

productsEl.addEventListener('click', event => {
  const card = event.target.closest('.card');
  if (card) showDetail(card.dataset.id);
});

loadProducts();
