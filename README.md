> 🇬🇪 [ქართული ვერსია](./README_ka.md)

# Homework 12 — fetch, async/await and error handling

Welcome to your twelfth homework! 🎉

Real apps spend half their code on things going wrong: a server that says 404, a Wi-Fi that drops, an answer that arrives late. This week you build a small **product shop** one feature at a time, and you hunt bugs in code that already exists — the way you will in a real job.

The data comes from the free API **https://dummyjson.com** (no sign-up needed).

| | |
|---|---|
| **[📝 Exercises](./EXERCISES.md)** | 7 exercises: 5 features and 2 bug hunts |
| **[📤 How to submit](./SUBMITTING.md)** | Fork, branch, Pull Request — step by step |
| **[`starter/`](./starter)** | The page you start from (you copy it; never edit it in place) |

**Deadline:** before Workshop 14.

## What you'll practise

* `fetch` and `response.ok` — a 404 is not an error until *you* turn it into one
* `async` / `await` and `try` / `catch` / `finally`
* Showing loading, empty and error states in the page
* `Promise.all`, and when to run requests in parallel
* Reading the real error message instead of guessing

## Quick start

Follow [SUBMITTING.md](./SUBMITTING.md) steps 1–4 — fork, clone your fork, branch, then:

```bash
mkdir submissions/<your-username>
cp -r starter/* submissions/<your-username>/
```

Open `submissions/<your-username>/index.html` in your browser, keep DevTools open (`F12`), and start
with Exercise 1. **Everything you write lives in that one folder**, and that folder is what you hand in.

> Check Exercise 1 any time with `cd submissions/<your-username>` and then `node check_1.js`
> (Node 18 or newer). It only ever tests the `api.js` sitting next to it.
