# 🕵️ Detektivka

Tajemná detektivní hra plná záhad a dobrodružství. Webová aplikace vytvořená jako školní projekt.

## 📋 O projektu

Detektivka je interaktivní webová aplikace, která nabízí uživatelům napínavé detektivní dobrodružství. Projekt kombinuje moderní webové technologie s retro pixel-art designem.

## 🚀 Technologie

- **React** - JavaScript knihovna pro tvorbu uživatelského rozhraní
- **Vite** - Rychlý build tool a development server
- **Tailwind CSS** - Utility-first CSS framework pro stylování
- **React Router** - Navigace mezi stránkami
- **Pixelify Sans** - Pixel font pro retro vzhled

## 📁 Struktura projektu

```
DetektivkaWeb/
├── public/              # Statické soubory (obrázky, logo)
├── src/
│   ├── Components/      # React komponenty
│   │   ├── Navbar.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Intro.jsx
│   │   ├── Mission.jsx
│   │   ├── Explore.jsx
│   │   ├── Footer.jsx
│   │   └── PixelatedBoxes.jsx
│   ├── pages/          # Stránky aplikace
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   ├── Vyvoj.jsx
│   │   ├── ONas.jsx
│   │   └── Github.jsx
│   ├── App.jsx         # Hlavní komponenta s routingem
│   ├── main.jsx        # Vstupní bod aplikace
│   └── index.css       # Globální styly
├── index.html
├── package.json
└── README.md
```

## 🎨 Funkce

- ✅ Responzivní design (mobile, tablet, desktop)
- ✅ Burger menu pro mobilní zařízení
- ✅ Plynulé scroll animace
- ✅ Parallax efekty
- ✅ Pixel-art design s retro estetikou
- ✅ Vícejazyčná podpora (česky)
- ✅ Routing mezi stránkami
- ✅ SEO optimalizace

## 🛠️ Instalace a spuštění

### Prerekvizity

- Node.js (verze 16 nebo vyšší)
- npm nebo yarn

### Instalace

```bash
# Klonování repozitáře
git clone https://github.com/FilipElznic/DetektivkaWeb.git

# Přechod do složky projektu
cd DetektivkaWeb

# Instalace závislostí
npm install
```

### Spuštění vývojového serveru

```bash
npm run dev
```

Aplikace bude dostupná na `http://localhost:5173`

### Build pro produkci

```bash
npm run build
```

Build soubory budou ve složce `dist/`

### Preview produkčního buildu

```bash
npm run preview
```

## 📱 Stránky

- **Domů** (`/`) - Hlavní landing page s úvodem do hry
- **Blog** (`/blog`) - Aktuality a novinky o projektu
- **Vývoj hry** (`/vyvoj`) - Informace o vývoji
- **O nás** (`/onas`) - Představení týmu
- **GitHub** (`/github`) - Odkaz na repozitář

## 🎯 Komponenty

### Navbar

- Responzivní navigační lišta
- Burger menu pro mobilní zařízení
- Aktivní navigace pomocí React Router

### LandingPage

- Hero sekce s animacemi
- Parallax scroll efekt
- Plynulé fade-in animace

### PixelatedBoxes

- Pixel-art rámečky
- Responzivní grid layout
- Vlastní dekorace v pixel stylu

### Footer

- Navigační odkazy
- Právní informace
- Logo a kontakty

## 🎨 Styling

Projekt používá Tailwind CSS s vlastními animacemi a pixel-art designem. Všechny komponenty jsou plně responzivní s breakpointy:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📦 Deployment

Projekt je optimalizovaný pro deployment na Vercel:

1. Push kódu na GitHub
2. Připojení repozitáře k Vercel
3. Automatický deployment při každém push

## 👥 Tým

Projekt vytvořili studenti SPSUL:

- Design by Filip Elznic

## 📄 Licence

Tento projekt je vytvořen jako školní projekt. © 2025 SPSUL všechna práva vyhrazena.

## 🤝 Přispívání

Projekt je v současné době uzavřený jako školní práce.

## 📞 Kontakt

Pro více informací o projektu navštivte naši webovou stránku nebo kontaktujte tým.

---

**Poznámka**: Repozitář je v současné době soukromý.
