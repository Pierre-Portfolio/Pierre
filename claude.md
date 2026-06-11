# Claude.md — Pierre Portfolio

## Projet

**Portfolio interactif** de Pierre Petillion : Consultant Logiciel & Data Engineer

Présente le parcours, compétences et projets dans les domaines de la data science, développement web et logiciel.

## Stack Technique

- **Frontend :** HTML5, CSS3, JavaScript Vanilla
- **Animations :** Canvas API (étoiles), SVG animé (orbites)
- **Analytics :** Google Analytics GA4
- **Assets :** Images (projets, carrousel, header), CV PDF

## Architecture

```
Pierre/
├── index.html                    # Structure, styles (inline) et logique (canvas, carrousel, animations)
├── assets/
│   ├── js/projects.js            # Données des projets (seul JS externe chargé)
│   ├── images/
│   │   ├── carrousel/            # Images profil
│   │   ├── categories/           # Visuels des catégories de projets
│   │   ├── projets/              # Miniatures projets (fallback local)
│   │   └── github/               # Assets README
│   └── CV-Pierre-Petillion.pdf   # CV (lié via href, jamais en base64)
├── .gitignore
└── README.md
```

## Contenu

**Carrousel (slides) :**
- Slide 0 : Profil (avatar, poste, CV, LinkedIn)
- Slide 1 : Compétences générales (Data Science, Développement, Conseil)
- Slide 2 : Soft skills
- Slide 3 : Formations (ESILV 2020-2023)
- Autres : Expérience, Projets, Parcours...

**Langues :** Support bilingue FR/EN (attributs `data-fr` et `data-en`)

## Directives de Travail

### Code
- **Pas de frameworks :** Vanilla JS uniquement
- **Responsif :** Mobile-first si modification UI
- **Performance :** Optimiser animations canvas/SVG
- **Accessibilité :** Tester traduction FR/EN

### Maintenance
- Tenir le README à jour pour toute modification majeure
- Garder structure modulaire dans les scripts inline d'`index.html` et `projects.js`
- Tester carrousel et animations avant commit
- Vérifier GA4 et liens externes (CV, LinkedIn)
- vérifier que l'adresse mail dans l'onglet contact ne soit pas bloqué par cloudfare et est bien écrit en blanc
- Vérifier que le bouton qui permet d'aller à droite sur le carrousel ne bug pas

## Notes

- Fichier index.html (~84KB, styles et JS inline) → utiliser Grep pour rechercher
- Logo/emoji dans les skills bien structuré en grille
- Animations étoiles et orbites critiques pour l'UX
