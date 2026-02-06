# TimeTravel Agency - Webapp Interactive

Webapp moderne et interactive pour une agence de voyage temporel fictive, créée avec IA générative dans le cadre d'un projet pédagogique M1/M2 Digital & IA.

## 🎯 Mission

Développer une landing page immersive qui met en scène **TimeTravel Agency** et ses **3 destinations temporelles exclusives** avec des fonctionnalités alimentées par l'intelligence artificielle.

## ✨ Features Implémentées

### 🏠 Page d'Accueil
- **Hero Section** avec animation fade-in progressive
- Présentation de l'agence avec design premium
- CTA vers les destinations

### 🌍 Galerie des Destinations
Trois époques exclusives avec cards interactives :

- **Paris 1889** - Belle Époque (5 000 €)
  - Inauguration de la Tour Eiffel
  - Exposition Universelle
  
- **Crétacé Supérieur** - -65M Années (8 500 €)
  - Observation des derniers dinosaures
  - Nature préhistorique préservée
  
- **Florence 1504** - Renaissance (6 200 €)
  - Création du David de Michel-Ange
  - Ateliers de Léonard de Vinci

Chaque destination inclut :
- Visuels immersifs (en cours d'intégration)
- Informations détaillées
- Prix et badges distinctifs
- Animation hover avec effet scale
- Bouton de réservation interactif

### 🤖 Agent Conversationnel
- **Chatbot IA** intégré en bas à droite
- Interface de chat élégante avec thème cohérent
- Personnalité : Assistant virtuel "Chronos" expert en voyages temporels
- Conseils personnalisés sur les destinations
- FAQ automatisée (en cours d'intégration API)

### 📱 Navigation Responsive
- Navbar fixe avec backdrop blur
- Menu mobile adaptatif
- Design mobile-first

## 🛠️ Stack Technique

### Core
- **Framework** : Next.js 16.1.6 (App Router)
- **Runtime** : React 19
- **Language** : TypeScript 5.7.3
- **Package Manager** : pnpm 10.18.2

### Styling
- **CSS Framework** : Tailwind CSS 3.4.19
- **Components** : shadcn/ui (56 composants)
- **Icons** : Lucide React
- **Animations** : Tailwind Animate + custom CSS animations

### UI Components Library
- Radix UI primitives pour l'accessibilité
- Components : Dialog, Dropdown, Navigation Menu, Toast, etc.
- Thèmes : Support dark/light mode avec `next-themes`

## 🤖 IA & Outils Utilisés

### Génération de Code
- **Plateforme** : Développement manuel avec Next.js
- **IA Assistant** : Google Gemini (Antigravity)

### Assets (à intégrer)
- Images générées avec IA (projet TimeTravel précédent)
- Visuels pour les 3 destinations temporelles

### Chatbot (à intégrer)
- API IA recommandée : Mistral AI / Groq / OpenRouter
- Modèle suggéré : Mistral Small (gratuit)

## 📦 Installation & Lancement

### Prérequis
- Node.js 18+ 
- pnpm (ou npm/yarn)

### Installation

```bash
# Cloner le repository
git clone https://github.com/ianadou/TimeTravelAgency.git
cd TimeTravelAgency

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

Le site sera accessible sur **http://localhost:3000**

### Build Production

```bash
# Créer le build optimisé
pnpm build

# Lancer en production
pnpm start
```

## 🚀 Déploiement

### Vercel (Recommandé)
Déploiement instantané en 1 clic :

1. Connecter le repository GitHub à Vercel
2. Configuration automatique détectée
3. Déploiement automatique à chaque push

### Autres Plateformes
- **Netlify** : Drag & drop ou Git integration
- **GitHub Pages** : Pour sites statiques
- **Railway** / **Render** : Support backend si nécessaire

## 📁 Structure du Projet

```
time-travel-agency-landing-page/
├── app/
│   ├── globals.css         # Styles globaux
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Page d'accueil
├── components/
│   ├── ui/                 # Composants shadcn/ui (56 composants)
│   ├── chatbot.tsx         # Widget chatbot
│   ├── destinations.tsx    # Galerie destinations
│   ├── hero.tsx            # Section hero
│   ├── navbar.tsx          # Navigation
│   └── footer.tsx          # Pied de page
├── public/
│   └── images/             # Assets et images (à ajouter)
├── lib/
│   └── utils.ts            # Utilitaires
└── styles/
    └── globals.css         # Styles additionnels
```

## 🎨 Design & UX

### Principes
- **Mobile-First** : Responsive sur tous les écrans
- **Animations** : Transitions fluides et micro-interactions
- **Accessibilité** : Composants Radix UI accessibles
- **Performance** : Next.js optimisé avec Turbopack

### Thème
- Support dark/light mode
- Palette cohérente avec accents primaires
- Typographie : Police serif pour les titres
- Glassmorphism sur la navbar

## 🔮 Roadmap

### En cours
- [ ] Intégration des images de destinations
- [ ] Page About (présentation agence)
- [ ] Page Experience (détails voyage)
- [ ] Pages détails par destination

### À venir
- [ ] API IA pour le chatbot (Mistral/Groq)
- [ ] Formulaire de réservation
- [ ] Animations avancées (Framer Motion)
- [ ] Quiz personnalisé pour recommandations
- [ ] Système de recommandation IA

## 📄 Licence

Projet pédagogique - M1/M2 Digital & IA  
Code source disponible sous licence MIT

## 👥 Crédits

- **Développement** : Projet étudiant TimeTravel Agency
- **Framework** : Next.js par Vercel
- **UI Components** : shadcn/ui
- **IA Assistant** : Google Gemini (Antigravity)
- **Repository** : [github.com/ianadou/TimeTravelAgency](https://github.com/ianadou/TimeTravelAgency)

---

**🕰️ Voyagez dans le temps avec élégance.**
