> 🇬🇪 [ქართული ვერსია](./SUBMITTING_ka.md) · [← Back to the overview](./README.md) · [📝 Exercises](./EXERCISES.md)

# How to submit Homework 12

> Everywhere you see `<your-username>`, replace it with **your GitHub username** (without the angle
> brackets). For example, if your username is `nino-b`, your branch and your folder are both called `nino-b`.

---

## 1. Fork this repository

Open https://github.com/JavaScriptADI/javascript-205-homework-12 in your browser.

Click the **Fork** button in the top-right corner, keep the default settings and click **Create fork**.
GitHub creates your own copy at `https://github.com/<your-username>/javascript-205-homework-12`.

You can push to your fork. You cannot push to the original repository — that is what the Pull Request is for.

## 2. Clone YOUR fork

On the page of **your fork**, click the green **Code** button, copy the URL and run:

```bash
git clone https://github.com/<your-username>/javascript-205-homework-12.git
cd javascript-205-homework-12
```

> Make sure the URL contains **your** username, not `JavaScriptADI`. If you cloned the original
> repository by accident, delete the folder and clone again from your fork.

## 3. Create a branch named after your GitHub username

```bash
git checkout -b <your-username>
```

## 4. Create your folder and copy the starter into it

```bash
mkdir submissions/<your-username>
cp -r starter/* submissions/<your-username>/
```

> On Windows, run these in **Git Bash** (the terminal you installed with git), not in PowerShell.
> In PowerShell the second line is `Copy-Item -Recurse starter/* submissions/<your-username>/`.

**This folder is now your workspace.** Do every exercise here. Never edit `starter/` itself — it has to
stay as it is so you can compare against it.

Now go and do the [exercises](./EXERCISES.md). When you are finished, your folder looks like this:

```text
submissions/<your-username>/
├── index.html
├── style.css
├── api.js              ← exercise 1
├── app.js              ← exercises 2, 3, 5, 7
├── check_1.js
├── NOTES.md            ← exercises 4 and 6
├── error_404.png       ← exercise 3
├── error_offline.png   ← exercise 3
├── bug_a/
│   ├── index.html
│   ├── style.css
│   └── app.js          ← exercise 4
└── bug_b/
    ├── index.html
    ├── style.css
    └── app.js          ← exercise 6
```

## 5. Commit and push

```bash
git add submissions/<your-username>
git commit -m "Homework 12 - <your-username>"
git push -u origin <your-username>
```

## 6. Open a Pull Request

Go to your fork on GitHub and click **Compare & pull request**.

Check the dropdowns at the top of the page before you create it:

| | |
|---|---|
| **base repository** | `JavaScriptADI/javascript-205-homework-12` |
| **base** | `main` |
| **head repository** | `<your-username>/javascript-205-homework-12` |
| **compare** | `<your-username>` |

If the base repository says *your* username, change it — otherwise the Pull Request goes to your own
fork and I never see it.

**Title:** `Homework 12 - <your-username>`

Then fill in the description: tick every box in the checklist that is true, and click
**Create pull request**.

---

## Before you push, check

- `node check_1.js` prints three `PASS` lines, run from inside `submissions/<your-username>/`
- The page works and the Console has **no red errors**
- `NOTES.md` has both sections filled in
- Both screenshots are there
- You did not change any file outside your own folder — `git status` should show nothing else
