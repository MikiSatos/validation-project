# Validation Project

**Validation Project** — aplikacja w **Node.js + Express**, która udostępnia API do zarządzania produktami (tworzenie, pobieranie, aktualizacja, usuwanie) z walidacją danych przez **Joi**, oraz frontend, gdzie można dodawać produkty przez formularz i od razu widzieć je w liście.

---

## 📋 Wymagania

- Node.js (wersja ≥ 14)
- NPM / Yarn  
- Uruchomienie lokalne lub hosting (np. Render)

---

## ⚙️ Funkcjonalność

- **CRUD API**:
  - `GET /api/products` — pobranie wszystkich produktów  
  - `POST /api/products` — dodanie nowego produktu  
  - `PUT /api/products/:id` — aktualizacja produktu  
  - `DELETE /api/products/:id` — usunięcie produktu  
- **Walidacja danych wejściowych** za pomocą Joi:
  - `name` — obowiązkowe pole tekstowe  
  - `price` — obowiązkowe pole liczbowo  
  - `category` — obowiązkowa kategoria (Electronics, Books, Clothing, Sports)  
  - `brand` — obowiązkowe pole tekstowe  
  - `inStock` — obowiązkowe pole logiczne (true/false)  
  - `description` — opcjonalne  
- **Formularz na froncie**:
  - Użytkownik może dodać produkt  
  - Po wysłaniu produkt pojawia się w liście  
- **Platforma deploy**: Render

---

## 🗂 Struktura projektu

📦 project-root
├── public
│ ├── index.html
│ └── app.js
├── src
│ ├── app.js
│ ├── server.js
│ ├── controllers
│ │ └── productsController.js
│ ├── routes
│ │ └── products.js
│ ├── middleware
│ │ ├── validate.js
│ │ └── errorHandler.js
│ └── validators
│ └── productSchema.js
└── package.json

## 🚀 Instalacja i uruchomienie lokalnie

1. Sklonuj repozytorium:  
   ```bash
   git clone https://github.com/MikiSatos/validation-project.git
   cd validation-project
☁️ Deploy na Render

Projekt działa online pod adresem:
https://validation-project-uqvl.onrender.com/

API dostępne pod:
https://validation-project-uqvl.onrender.com/api/products

🖼 Przykładowe screenshoty

Formularz dodawania produktu:


Lista produktów po dodaniu:


⚠️ Dodaj swoje screenshoty do folderu screenshots i nazwij je form.png oraz list.png lub zmień ścieżki w README.

🧪 Testowanie API

GET /api/products — pobiera listę produktów

POST /api/products — dodaje produkt

PUT /api/products/:id — aktualizuje produkt

DELETE /api/products/:id — usuwa produkt