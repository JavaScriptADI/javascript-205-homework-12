// BUG HUNT B - this code has TWO bugs. Both are about requests, not about HTML.
//
// Symptom 1: look up product 99999. Instead of an error you get a card full of "undefined".
// Symptom 2: the "Featured picks" take about three times longer to appear than they should
//            (the page prints how many milliseconds it took - compare before/after your fix).

const BASE = 'https://dummyjson.com';
const idEl = document.getElementById('id');
const messageEl = document.getElementById('message');
const productEl = document.getElementById('product');
const featuredEl = document.getElementById('featured');
const timingEl = document.getElementById('timing');

async function lookUp(id) {
  try {
    const response = await fetch(`${BASE}/products/${id}`);
    const product = await response.json();
    messageEl.textContent = '';
    productEl.innerHTML = `
      <div class="detail">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p class="price">${product.price} $</p>
      </div>`;
  } catch (error) {
    messageEl.textContent = 'Could not load the product.';
  }
}

async function loadFeatured() {
  const started = Date.now();
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const products = [];
  for (const id of ids) {
    const response = await fetch(`${BASE}/products/${id}`);
    products.push(await response.json());
  }
  featuredEl.innerHTML = products.map(p => `<li>${p.title}</li>`).join('');
  timingEl.textContent = `Loaded in ${Date.now() - started} ms`;
}

document.getElementById('go').addEventListener('click', () => lookUp(idEl.value));
loadFeatured();
