# Homework 12 — fetch, async/await and error handling

You will build a small product shop one feature at a time, and hunt two bugs in code that already exists.
All data comes from the free API **https://dummyjson.com** — no sign-up needed.

**Deadline:** before Workshop 14.

## Before you start

1. Copy the `starter/` folder (for example to `my-work/`) and work inside the copy.
2. Open `starter/index.html` in your browser (VS Code → right-click → *Open with Live Server*, or just double-click it).
3. Keep DevTools open (`F12`) — the **Console** and **Network** tabs are your best friends this week.

Exercises 1–3, 5 and 7 are *features* (you write code where you see `// TODO`).
Exercises 4 and 6 are *bug hunts* (the code is finished, but wrong — you find out why).

Do them **in order**: each feature uses the ones before it. Read the comment above each `TODO` — it is the full task description.

---

## Exercise 1 — `getJSON` helper (`starter/api.js`)

Write `getJSON(url)`: it fetches, throws an `Error` when the response is not OK (with `error.status` set), and otherwise returns the JSON.

Check your work in the terminal:

```bash
cd starter
node check_1.js
```

You want three `PASS` lines. (Needs Node 18+.)

> **Why?** `fetch` does **not** fail on a 404. If you skip `response.ok`, your code happily continues with garbage.

## Exercise 2 — Product list (`starter/app.js` → `loadProducts`)

Show the first 10 products as cards, with a "Loading..." message that **always** disappears — even when the request fails.

## Exercise 3 — Friendly errors (`friendlyMessage` + `loadProducts`)

Show a red banner with a human message for a 404, a server error, and no internet. Make sure the banner goes away again once a request works.

Test the two failures on purpose (see the comments in the file) and take **a screenshot of each banner**: `error_404.png` and `error_offline.png`.

## Exercise 4 — 🐞 Bug hunt A (`starter/bug_a/`)

Open `bug_a/index.html`, search for "phone". The page says *"Something went wrong."* — but there is **one** bug in `app.js`.

1. Find out what the *real* error is. (The `catch` block is hiding it. What can you add to see it?)
2. Fix it.
3. In `NOTES.md` write: what the real error message was, what caused it, and how you fixed it — **3 sentences max, your own words**.

## Exercise 5 — Search (`search` in `starter/app.js`)

Search while typing. Handle an empty box, zero results, errors — and make sure a slow old response can **never** overwrite a newer one. (Try typing `phone` quickly and check that the grid always matches what is in the box.)

## Exercise 6 — 🐞 Bug hunt B (`starter/bug_b/`)

Two bugs hide in `bug_b/app.js`:

- Looking up product `99999` shows a card full of `undefined`.
- The "Featured picks" load slowly.

Fix both. In `NOTES.md` add a second section: for each bug, which line was wrong and why it behaved that way. Also write the "Loaded in … ms" number **before** and **after** your fix.

## Exercise 7 — Product page (`showDetail` in `starter/app.js`)

Click a card to show its details **and** the number of categories in the shop. Load both with `Promise.all`, and make sure that if the categories request fails, the product still shows (and the other way around: no product → show an error, not an empty box).

---

## Stretch (optional, no extra marks, lots of respect)

- Add a **Retry** button to the error banner.
- Add a 10-second timeout to `getJSON` using `AbortController`.
- Disable the search box while the first products are loading.

## What to submit

`api.js`, `app.js`, `bug_a/app.js`, `bug_b/app.js`, `NOTES.md`, `error_404.png`, `error_offline.png` — see [SUBMITTING.md](./SUBMITTING.md).

## Rules

- Write the code yourself. You may ask an AI or a friend to *explain* an error message, but the lines must be yours — you will be asked to explain them in the next workshop.
- If you get stuck for more than 30 minutes, write down what you tried and bring it. A good question is worth as much as a working solution.
