> 🇬🇧 [English version](./SUBMITTING.md) · [← მიმოხილვაზე დაბრუნება](./README_ka.md) · [📝 დავალებები](./EXERCISES_ka.md)

# როგორ ჩავაბაროთ საშინაო დავალება 12

> ყველგან, სადაც `<your-username>`-ს ხედავთ, ჩასვით **თქვენი GitHub-ის მომხმარებლის სახელი** (კუთხოვანი ფრჩხილების გარეშე). მაგალითად, თუ თქვენი მომხმარებელია `nino-b`, თქვენი ბრენჩიც და ფოლდერიც `nino-b` ჰქვია.

---

## 1. გააკეთეთ ამ რეპოზიტორიის fork

გახსენით https://github.com/JavaScriptADI/javascript-205-homework-12 ბრაუზერში.

დააწკაპუნეთ **Fork** ღილაკს ზედა მარჯვენა კუთხეში, დატოვეთ ნაგულისხმევი პარამეტრები და დააწკაპუნეთ **Create fork**. GitHub შექმნის თქვენს ასლს მისამართზე `https://github.com/<your-username>/javascript-205-homework-12`.

თქვენს fork-ში push შეგიძლიათ. ორიგინალ რეპოზიტორიაში — ვერა; სწორედ ამისთვისაა Pull Request.

## 2. გააკეთეთ თქვენი fork-ის clone

**თქვენი fork-ის** გვერდზე დააწკაპუნეთ მწვანე **Code** ღილაკს, დააკოპირეთ URL და გაუშვით:

```bash
git clone https://github.com/<your-username>/javascript-205-homework-12.git
cd javascript-205-homework-12
```

> დარწმუნდით, რომ URL შეიცავს **თქვენს** მომხმარებლის სახელს და არა `JavaScriptADI`-ს. თუ შემთხვევით ორიგინალი რეპოზიტორია დააკლონეთ, წაშალეთ ფოლდერი და თავიდან დააკლონეთ თქვენი fork-იდან.

## 3. შექმენით ბრენჩი თქვენი GitHub-ის მომხმარებლის სახელით

```bash
git checkout -b <your-username>
```

## 4. შექმენით თქვენი ფოლდერი და დააკოპირეთ მასში starter

```bash
mkdir submissions/<your-username>
cp -r starter/* submissions/<your-username>/
```

> Windows-ზე გაუშვით **Git Bash**-ში (ტერმინალი, რომელიც git-თან ერთად დააინსტალირეთ), და არა PowerShell-ში. PowerShell-ში მეორე ხაზი ასეთია: `Copy-Item -Recurse starter/* submissions/<your-username>/`.

**ეს ფოლდერი ახლა თქვენი სამუშაო ადგილია.** ყველა დავალება აქ შეასრულეთ. `starter/`-ს თვითონ არასდროს შეცვლით — ის უცვლელი უნდა დარჩეს, რომ შედარება შეძლოთ.

ახლა გადადით [დავალებებზე](./EXERCISES_ka.md). დასრულების შემდეგ თქვენი ფოლდერი ასე გამოიყურება:

```text
submissions/<your-username>/
├── index.html
├── style.css
├── api.js              ← დავალება 1
├── app.js              ← დავალებები 2, 3, 5, 7
├── check_1.js
├── NOTES.md            ← დავალებები 4 და 6
├── error_404.png       ← დავალება 3
├── error_offline.png   ← დავალება 3
├── bug_a/
│   ├── index.html
│   ├── style.css
│   └── app.js          ← დავალება 4
└── bug_b/
    ├── index.html
    ├── style.css
    └── app.js          ← დავალება 6
```

## 5. გააკეთეთ commit და push

```bash
git add submissions/<your-username>
git commit -m "Homework 12 - <your-username>"
git push -u origin <your-username>
```

## 6. გახსენით Pull Request

გადადით თქვენს fork-ზე GitHub-ზე და დააწკაპუნეთ **Compare & pull request**.

შექმნამდე შეამოწმეთ გვერდის თავზე მოცემული ჩამოსაშლელი სიები:

| | |
|---|---|
| **base repository** | `JavaScriptADI/javascript-205-homework-12` |
| **base** | `main` |
| **head repository** | `<your-username>/javascript-205-homework-12` |
| **compare** | `<your-username>` |

თუ base repository-ში *თქვენი* მომხმარებლის სახელი წერია, შეცვალეთ — თორემ Pull Request თქვენსავე fork-ში წავა და მე ვერასდროს ვნახავ.

**სათაური:** `Homework 12 - <your-username>`

შემდეგ შეავსეთ აღწერა: მონიშნეთ ჩეკლისტის ყველა პუნქტი, რომელიც მართალია, და დააწკაპუნეთ **Create pull request**.

---

## push-მდე შეამოწმეთ

- `node check_1.js` ბეჭდავს სამ `PASS` ხაზს, გაშვებული `submissions/<your-username>/`-ის შიგნიდან
- გვერდი მუშაობს და Console-ში **წითელი შეცდომები არ არის**
- `NOTES.md`-ში ორივე განყოფილება შევსებულია
- ორივე სკრინშოტი ადგილზეა
- თქვენი ფოლდერის გარეთ არცერთი ფაილი არ შეგიცვლიათ — `git status` სხვა არაფერს უნდა აჩვენებდეს
