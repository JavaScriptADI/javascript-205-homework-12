> 🇬🇪 [ქართული ვერსია](./EXERCISES_ka.md) · [← Back to the overview](./README.md) · [📤 How to submit](./SUBMITTING.md)

# Homework 12 — fetch, async/await and error handling

You will build a small product shop one feature at a time, and hunt two bugs in code that already exists.
All data comes from the free API **https://dummyjson.com** — no sign-up needed.

**Deadline:** before Workshop 14.

## Before you start

Do **steps 1–4 of [SUBMITTING.md](./SUBMITTING.md) first.** They fork the repository, make your branch,
and copy `starter/` into `submissions/<your-username>/`.

Everything below happens inside `submissions/<your-username>/`. That one folder is where you write your
code, where you run the checker, and what you hand in — there is no second copy to keep in sync.

Then:

1. Open `index.html` in your browser (VS Code → right-click → *Open with Live Server*, or just double-click it).
2. Keep DevTools open (`F12`) — the **Console** and **Network** tabs are your best friends this week.

Exercises 1–3, 5 and 7 are *features* (you write code where you see `// TODO`).
Exercises 4 and 6 are *bug hunts* (the code is finished, but wrong — you find out why).

Do them **in order**: each feature uses the ones before it. Read the comment above each `TODO` — it is the full task description.

---

## Exercise 1 — `getJSON` helper (`api.js`)

Write `getJSON(url)`: it fetches, throws an `Error` when the response is not OK (with `error.status` set), and otherwise returns the JSON.

Check your work in the terminal, **from inside your own folder**:

```bash
cd submissions/<your-username>
node check_1.js
```

**Expected:** three `PASS` lines. (Needs Node 18+.) If you see `FAIL`, read which one — it names what is missing.

> If you get `Cannot find module`, you are in the wrong folder. `check_1.js` only tests the `api.js` sitting next to it.

> **Why?** `fetch` does **not** fail on a 404. If you skip `response.ok`, your code happily continues with garbage.

## Exercise 2 — Product list (`app.js` → `loadProducts`)

Show the first 10 products as cards, with a "Loading..." message that **always** disappears — even when the request fails.

**Expected:** exactly **10** cards. The first is **Essence Mascara Lash Princess — 9.99 $**. "Loading..." is visible while it loads and gone afterwards. Nothing red in the Console.

## Exercise 3 — Friendly errors (`friendlyMessage` + `loadProducts`)

Show a red banner with a human message for a 404, a server error, and no internet. Make sure the banner goes away again once a request works.

Break the page on purpose to get the two required screenshots — the comment in `app.js` gives you both recipes.

**Expected:** with the typo URL the banner reads `We couldn't find that.` (screenshot it as `error_404.png`); with `BASE` pointing at `https://dummyjson.invalid` it reads `Can't reach the shop. Check your internet connection.` (screenshot it as `error_offline.png`). Put both back, reload, and the banner is gone.

## Exercise 4 — 🐞 Bug hunt A (`bug_a/`)

Open `bug_a/index.html`, search for "phone". The page says *"Something went wrong."* — but there is **one** bug in `bug_a/app.js`.

1. Find out what the *real* error is. (The `catch` block is hiding it. What can you add to see it?)
2. Fix it.
3. Fill in the **Bug hunt A** section of `NOTES.md` (it is already in your folder) — **3 sentences max, your own words**.

**Expected:** searching `phone` lists **23** products, and the message line is empty.

## Exercise 5 — Search (`search` in `app.js`)

Search while typing. Handle an empty box, zero results, errors — and make sure a slow old response can **never** overwrite a newer one.

**Expected:** `phone` shows 23 cards, `mascara` shows 1, `zzzzqq` shows the line `No products match "zzzzqq"` (and **no** red banner). Emptying the box brings back the original 10.

<details>
<summary>How to actually see the stale-response bug (click me)</summary>

On a fast connection the responses come back in order, so the bug almost never shows up by itself.
Force it: paste these two lines as the **first lines inside `getJSON`** in `api.js`, and take them out
when you are done.

```js
// temporary: pretend the search for "ph" is on a very slow connection
if (url.endsWith('q=ph')) await new Promise(resolve => setTimeout(resolve, 3000));
```

(It just makes that one request take 3 extra seconds. You do not need to understand that line yet.)

Now type `ph`, then immediately finish typing `phone`. **Without** the counter, `phone` shows its 23
results and then 3 seconds later they are replaced by the 30 results for `ph` — the grid ends up
showing the wrong thing. **With** the counter, the late `ph` answer is thrown away and the grid keeps
the 23 `phone` results.
</details>

## Exercise 6 — 🐞 Bug hunt B (`bug_b/`)

Two bugs hide in `bug_b/app.js`:

- Looking up product `99999` shows a card full of `undefined`.
- The "Featured picks" load slowly.

Fix both, then fill in the **Bug hunt B** section of `NOTES.md`, including the before/after milliseconds.

**Expected:** product `99999` shows `Could not load the product.` and no card; product `1` still shows Essence Mascara Lash Princess. The featured list still shows the same 10 titles, but several times faster.

## Exercise 7 — Product page (`showDetail` in `app.js`)

Click a card to show its details **and** the number of categories in the shop. Load both with `Promise.all`, and make sure that if the categories request fails, the product still shows (and the other way around: no product → show an error, not an empty box).

**Expected:** clicking the first card shows Essence Mascara Lash Princess, its description, `9.99 $` and the line `24 categories in the shop`. Break just the categories URL and the product still appears, without that line.

---

## `NOTES.md`

`NOTES.md` is already in your folder with the headings prepared. Exercise 4 fills the first section,
Exercise 6 the second. It is graded — do not delete the headings.

## Stretch (optional, no extra marks, lots of respect)

- Add a **Retry** button to the error banner.
- Add a 10-second timeout to `getJSON` using `AbortController`.
- Disable the search box while the first products are loading.

## What to submit

Everything in `submissions/<your-username>/` — the files you copied from `starter/`, plus `NOTES.md` and your two screenshots. [submissions/README.md](./submissions/README.md) shows the exact tree, and [SUBMITTING.md](./SUBMITTING.md) has the steps.

## Rules

- Plain JavaScript only: no libraries, no frameworks, no `class`.
- `async`/`await`, not `.then()` chains — the one exception is the `.catch(() => null)` in Exercise 7.
- Don't change the ids in `index.html` (`#search`, `#error`, `#loading`, `#products`, `#detail`) or the given helpers `setLoading`, `showError`, `cardHTML`. Your code and my review both depend on them.
- Write the code yourself. You may ask an AI or a friend to *explain* an error message, but the lines must be yours — you will be asked to explain them in the next workshop.
- If you get stuck for more than 30 minutes, write down what you tried and bring it. A good question is worth as much as a working solution.
