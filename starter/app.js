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
//
// You need a screenshot of two of these. Break the page ON PURPOSE to get them:
//   error_404.png      temporarily change the URL in loadProducts to a typo:
//                      `${BASE}/producs?limit=10`   (missing t)  -> 404
//   error_offline.png  temporarily change BASE at the top of this file to:
//                      'https://dummyjson.invalid'  -> the name does not exist, so fetch
//                      never reaches a server and throws a TypeError - exactly what a
//                      dead Wi-Fi gives you.
// Put both back afterwards!
//
// (DevTools -> Network -> "Offline" also works, but only if you do NOT reload: tick it
//  AFTER the page has loaded, then trigger a new request. If you reload while offline,
//  Chrome blocks the page itself and you get Chrome's error page instead of yours.)
function friendlyMessage(error) {
  // TODO
}

// ---------- EXERCISE 5 - search ----------
// search(query) calls `${BASE}/products/search?q=${encodeURIComponent(query)}`
//   (results are in data.products. encodeURIComponent keeps a query with a space,
//    & or # from quietly searching for the wrong thing.)
//   - empty query   -> go back to loadProducts()
//   - zero results  -> show  No products match "<query>"  in productsEl.
//                      Use textContent for this one, NOT innerHTML: it is text the user
//                      typed, and innerHTML would run it as HTML.
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
//   - product is null      -> showError("We couldn't load that product.") and stop
//                             (no half-empty box)
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
