# How to submit Homework 12

1. Fork the homework repository and clone your fork.
2. Create a branch named after your GitHub username:

   ```bash
   git checkout -b your-username
   ```

3. Create your folder and copy your finished work into it, keeping the same folder structure:

   ```
   submissions/your-username/
   ├── api.js
   ├── app.js
   ├── index.html
   ├── style.css
   ├── bug_a/app.js
   ├── bug_b/app.js
   ├── NOTES.md
   ├── error_404.png
   └── error_offline.png
   ```

   (Copy `bug_a/index.html`, `bug_b/index.html` and the CSS files too so the pages still open.)

4. Commit and push:

   ```bash
   git add submissions/your-username
   git commit -m "Homework 12 - your-username"
   git push -u origin your-username
   ```

5. Open a Pull Request to `main` and tick the checklist in the PR description.

Before you push, check: does `node check_1.js` print three `PASS` lines? Does the page work with the Console **empty of red errors**?
