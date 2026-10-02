> 🇬🇧 [English version](./SUBMITTING.md)

# როგორ ჩავაბაროთ საშინაო დავალება 12

1. გააკეთეთ საშინაო დავალების რეპოზიტორიის fork და თქვენი fork-ის clone.
2. შექმენით ბრენჩი თქვენი GitHub-ის მომხმარებლის სახელით:

   ```bash
   git checkout -b your-username
   ```

3. შექმენით თქვენი ფოლდერი და დააკოპირეთ მასში დასრულებული სამუშაო, იგივე სტრუქტურით:

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

   (დააკოპირეთ ასევე `bug_a/index.html`, `bug_b/index.html` და CSS ფაილები, რომ გვერდები გაიხსნას.)

4. გააკეთეთ commit და push:

   ```bash
   git add submissions/your-username
   git commit -m "Homework 12 - your-username"
   git push -u origin your-username
   ```

5. გახსენით Pull Request `main`-ზე და მონიშნეთ ჩეკლისტი PR-ის აღწერაში.

push-მდე შეამოწმეთ: `node check_1.js` ბეჭდავს სამ `PASS` ხაზს? გვერდი მუშაობს და Console-ში **წითელი შეცდომები არ არის**?
