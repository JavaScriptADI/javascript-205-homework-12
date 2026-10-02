// BUG HUNT A - this code has ONE bug. Don't rewrite it, find it.
// The page always says "Something went wrong." and never shows a product.

const qEl = document.getElementById('q');
const messageEl = document.getElementById('message');
const resultsEl = document.getElementById('results');

async function searchProducts(query) {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = response.json();
    resultsEl.innerHTML = data.products
      .map(product => `<li>${product.title} - ${product.price} $</li>`)
      .join('');
    messageEl.textContent = '';
  } catch (error) {
    messageEl.textContent = 'Something went wrong.';
  }
}

document.getElementById('go').addEventListener('click', () => {
  searchProducts(qEl.value.trim());
});
