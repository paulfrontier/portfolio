import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Portfolio Personnel',
    description: 'Ce site portfolio avec React, TypeScript et Tailwind CSS.',
    longDescription: 'Un portfolio moderne avec système de thèmes dynamiques (4 couleurs + mode holo), architecture clean, composants réutilisables et déploiement Netlify.',
    tags: ['frontend', 'React', 'TypeScript', 'Tailwind', 'Vite'],
    date: '2024',
    image: '/projets/portfolio.png',
    images: ['/projets/portfolio.png'],
    github: 'https://github.com/username/portfolio',

    // Case Study
    featured: true,
    featuredLabel: 'Preuve technique',
    subtitle: '5 thèmes, 1 codebase',
    problem: 'Les portfolios classiques sont statiques et génériques. Difficile de montrer sa capacité à coder proprement et à gérer la complexité.',
    solution: 'Portfolio React/TypeScript avec système de thèmes dynamiques (CSS variables), mode holographique original, composants réutilisables, architecture clean.',
    result: 'Site performant, 5 thèmes interchangeables, code maintenable, déployé sur Netlify.',
    metrics: [
      { label: 'Thèmes', after: '5', improvement: '4 couleurs + holo' },
      { label: 'Build', after: '< 10s', improvement: 'Vite + React' },
      { label: 'Lighthouse', after: '95+', improvement: 'Performance' },
    ],
    decisions: [
      {
        choice: 'CSS Variables',
        alternative: 'Tailwind config multiple',
        reason: 'Changement de thème en runtime sans rebuild, un seul fichier CSS.',
        tradeoff: 'Moins de contrôle Tailwind, mais flexibilité runtime.',
      },
      {
        choice: 'Vite',
        alternative: 'Create React App',
        reason: 'Build ultra-rapide, HMR instantané, configuration simple.',
        tradeoff: 'Écosystème plus jeune, mais gains en DX.',
      },
    ],
  },
  {
    slug: 'annuaire-universitaire',
    title: 'Annuaire Universitaire - Gestion des comptes & services',
    description: 'Application de gestion d\'annuaire et de cycle de vie des comptes (comptes, services, délégations) pour un contexte universitaire.',
    longDescription: 'Application web pour administrer les comptes et leurs services : authentification SSO CAS (phpCAS / Apereo CAS) côté application, et sécurisation des API via OpenID Connect + JWT. Backend PHP avec PostgreSQL (repositories) et modèle de droits via une entité Delegation (RBAC/ABAC orienté délégation) pour piloter les autorisations sur comptes/fonctions/objets métiers. Intégrations annuaire (LDAP via adaptateurs), APIs REST pour gérer des paramètres de services (ex. identifiant d\'impression) et la messagerie (alias + redirections). Frontend React (migration depuis PHP/Twig) avec pages de gestion (chargement initial, actions CRUD via API). Modules techniques isolés pour la téléphonie Cisco (CUCM / SOAP) et bus d\'événements.',
    tags: ['backend', 'PHP', 'React', 'PostgreSQL', 'LDAP', 'SSO', 'RBAC', 'API REST'],
    date: '2024',
    image: '/projets/Annuaire.png',
    images: ['/projets/Annuaire.png'],
    github: 'https://github.com/username/annuaire-universitaire',

    // Case Study
    featured: true,
    featuredLabel: 'Preuve produit',
    subtitle: 'Gestion centralisée de 150k comptes',
    problem: 'La gestion des comptes universitaires était éclatée entre plusieurs outils. Pas de vision unifiée, délégations manuelles, et risques de sécurité sur les accès.',
    solution: 'Application PHP/React unifiée avec SSO CAS, OIDC/JWT pour les APIs, modèle de délégation RBAC/ABAC, intégration LDAP, et modules métiers isolés (messagerie, téléphonie).',
    result: 'Gestion centralisée de 150k comptes, délégations auditables, APIs sécurisées, migration frontend React réussie.',
    metrics: [
      { label: 'Comptes gérés', after: '150k', improvement: 'Centralisé' },
      { label: 'Intégrations', after: '5+', improvement: 'LDAP, SSO, Mail, Tel, Events' },
      { label: 'Sécurité', before: 'Manuelle', after: 'RBAC/ABAC', improvement: 'Auditable' },
    ],
    decisions: [
      {
        choice: 'Delegation (RBAC/ABAC)',
        alternative: 'Rôles simples',
        reason: 'Permet de déléguer des droits précis sur des comptes/services spécifiques, pas juste des rôles globaux.',
        tradeoff: 'Plus complexe à implémenter, mais flexibilité maximale.',
      },
      {
        choice: 'Migration React progressive',
        alternative: 'Réécriture totale',
        reason: 'Garder l\'app fonctionnelle pendant la migration, pages par pages depuis Twig vers React.',
        tradeoff: 'Cohabitation temporaire de deux stacks, mais pas de big bang risqué.',
      },
    ],
  },
  {
    slug: 'rsst',
    title: 'RSST - Registre Santé & Sécurité au Travail',
    description: 'Application Symfony de gestion du RSST : saisie, suivi et traitement des signalements santé/sécurité.',
    longDescription: 'Application web Symfony (PHP) destinée à centraliser le Registre Santé & Sécurité au Travail (RSST) dans un contexte universitaire. Les agents peuvent déposer des signalements via des formulaires structurés (catégories, localisation, description, pièces jointes), suivis ensuite par un workflow de traitement (qualification, affectation, commentaires/échanges, actions correctives, clôture) avec historisation des changements et traçabilité. L\'authentification est intégrée au SI (SSO selon l\'environnement) et les accès sont gérés par rôles (déclarant, référent prévention, encadrement, administration) afin de cloisonner la visibilité et les actions possibles. Stack technique : Symfony, MySQL pour la persistance, rendu serveur Twig, et JavaScript pour les interactions.',
    tags: ['backend', 'Symfony', 'MySQL', 'Twig', 'SSO', 'workflow'],
    date: '2024',
    image: '/projets/RSST.png',
    images: ['/projets/RSST.png'],

    // Case Study
    featured: true,
    featuredLabel: 'Preuve produit',
    subtitle: 'Traçabilité 100% des signalements',
    problem: 'Les signalements santé/sécurité sur papier se perdaient régulièrement. Pas de suivi, pas de traçabilité, délais de traitement inconnus.',
    solution: 'Application Symfony avec workflow complet (qualification → affectation → traitement → clôture), historisation de chaque changement, gestion des rôles pour cloisonner les accès.',
    result: '100% des signalements tracés, délai de traitement visible et divisé par 2.',
    metrics: [
      { label: 'Traçabilité', before: '~30%', after: '100%', improvement: '+70%' },
      { label: 'Délai traitement', before: '2 semaines', after: '1 semaine', improvement: '-50%' },
    ],
    decisions: [
      {
        choice: 'Workflow Symfony',
        alternative: 'State machine custom',
        reason: 'Le composant Workflow de Symfony offre des transitions déclaratives, des guards, et une visualisation native du graphe.',
        tradeoff: 'Couplage au framework, mais gain en maintenabilité.',
      },
    ],
  },
  {
    slug: 'mobile-app',
    title: 'App Mobile React Native',
    description: 'Application mobile cross-platform pour iOS et Android.',
    longDescription: 'Application React Native avec TypeScript, navigation, state management et intégration API REST. Architecture modulaire avec hooks personnalisés, gestion d\'état via Context/Zustand, et tests automatisés.',
    tags: ['mobile', 'React Native', 'TypeScript', 'iOS', 'Android'],
    date: '2025',

    // Case Study
    featured: true,
    featuredLabel: 'Preuve technique',
    subtitle: 'Offline-first, 2 plateformes',
    problem: 'Développer une app native pour iOS ET Android demande deux équipes, deux codebases, et double la maintenance. En plus, les utilisateurs ont besoin d\'accéder aux données sans connexion.',
    solution: 'React Native avec TypeScript pour un code unique, architecture offline-first avec cache local et synchronisation, navigation fluide, intégration API REST.',
    result: 'Une seule codebase pour iOS et Android, mode hors-ligne fonctionnel, temps de développement divisé par 2.',
    metrics: [
      { label: 'Plateformes', after: '2', improvement: 'iOS + Android' },
      { label: 'Mode offline', after: 'Oui', improvement: 'Cache + sync' },
      { label: 'Codebase', after: '1', improvement: 'Partagée à 95%' },
    ],
    decisions: [
      {
        choice: 'React Native',
        alternative: 'Flutter / Natif',
        reason: 'Réutilisation des compétences React/TypeScript, large écosystème, performances proches du natif.',
        tradeoff: 'Quelques limitations natives, mais gains en productivité.',
      },
      {
        choice: 'Offline-first',
        alternative: 'Online-only',
        reason: 'Utilisateurs sur le terrain sans connexion stable, cache local avec synchronisation différée.',
        tradeoff: 'Gestion des conflits plus complexe, mais UX fluide.',
      },
    ],
  },
  {
    slug: 'etl-pipeline-ldap',
    title: 'ETL Pipeline LDAP/AD',
    description: 'Pipeline ETL async Rust pour synchronisation d\'annuaires LDAP et Active Directory.',
    longDescription: 'Pipeline haute performance en Rust pour l\'Université Paris-Saclay. Consomme des messages JSON via bus de données (Kafka) et écrit dans LDAP (personnes, groupes, structures, services) et Active Directory. Architecture hexagonale avec Domain-Driven Design, ~130 Value Objects validés, saga pattern pour rollback automatique sur échec partiel, graceful shutdown, traitement parallèle avec Tokio. Conforme aux standards SupAnn 2021, EduPerson et SCHAC.',
    tags: ['backend', 'Rust', 'LDAP', 'Active Directory', 'Kafka', 'Tokio', 'DDD', 'hexagonal'],
    date: '2025',
    image: '/projets/etl_ldap.png',
    images: ['/projets/etl_ldap.png'],
    github: 'https://github.com/username/etl-pipeline',

    // Case Study
    featured: true,
    featuredLabel: 'Preuve technique',
    subtitle: 'Écriture LDAP x4 plus rapide',
    problem: 'La synchronisation des annuaires LDAP/AD était lente (écritures séquentielles) et fragile (erreurs silencieuses, pas de rollback, données incohérentes).',
    solution: 'Pipeline ETL async en Rust avec Tokio pour le traitement parallèle, bus de données Kafka pour la résilience et le découplage, saga pattern pour rollback automatique sur échec.',
    result: 'Temps d\'écriture LDAP divisé par 4+, protection via bus de données, 0 perte de données, rollback automatique.',
    metrics: [
      { label: 'Vitesse écriture', before: 'x1', after: 'x4+', improvement: 'Async Rust/Tokio' },
      { label: 'Résilience', after: 'Bus Kafka', improvement: 'Découplage + retry' },
      { label: 'Perte données', before: 'Fréquente', after: '0', improvement: 'Saga pattern' },
    ],
    decisions: [
      {
        choice: 'Rust + Tokio',
        alternative: 'Python / Go',
        reason: 'Performance critique pour les écritures parallèles, typage fort pour la fiabilité, async natif sans overhead.',
        tradeoff: 'Courbe d\'apprentissage plus raide, mais gains en performance x4+.',
      },
      {
        choice: 'Bus de données (Kafka)',
        alternative: 'Appels directs',
        reason: 'Découplage producteur/consommateur, retry automatique, résilience aux pannes, traçabilité des messages.',
        tradeoff: 'Infra supplémentaire, mais protection et scalabilité.',
      },
      {
        choice: 'Saga pattern',
        alternative: 'Two-Phase Commit (2PC)',
        reason: 'Rollback automatique sur échec partiel sans bloquer les ressources.',
        tradeoff: 'Complexité de la compensation, mais cohérence garantie.',
      },
    ],
  },
  {
    slug: 'autohost',
    title: 'AutoHost - Plateforme d\'Hébergement Web',
    description: 'Plateforme de gestion et provisioning automatisé de sites web (WordPress, PHP, static) pour environnement universitaire.',
    longDescription: 'Application Symfony 7 pour la gestion complète du cycle de vie des sites web : demandes avec workflow de validation, provisioning automatisé via CapRover/Docker, backups, migrations. Supporte WordPress, PHP, sites statiques. Tous les sites sont containerisés (Docker) pour la sécurité et l\'isolation. Architecture DDD/Hexagonale, CQRS, Event Sourcing avec pattern Saga pour les workflows distribués. Service gratuit pour les laboratoires et services universitaires. Intégration CAS SSO, RBAC, tests Pest avec 128+ fichiers de tests.',
    tags: ['backend', 'Symfony', 'DDD', 'CQRS', 'PostgreSQL', 'Docker', 'CapRover', 'architecture', 'testing'],
    date: '2024-2025',
    image: '/projets/Autohost_site.png',
    images: ['/projets/Autohost_site.png'],
    github: 'https://github.com/username/autohost',

    // Case Study
    featured: true,
    featuredLabel: 'Projet phare',
    subtitle: 'De 2h à 5min par site',
    problem: 'Créer un site web pour un labo ou service universitaire prenait ~2h de configuration manuelle, avec risques d\'erreurs, pas de standardisation, et des problèmes de sécurité/isolation.',
    solution: 'Plateforme Symfony 7 avec DDD/CQRS, provisioning Docker automatisé via CapRover, workflow de validation, backups et migrations. Chaque site isolé dans son container pour la sécurité.',
    result: 'Provisioning automatique en 5 min, hébergement gratuit pour les labos, 128+ fichiers de tests, sécurité renforcée via containerisation.',
    metrics: [
      { label: 'Temps setup', before: '~2h', after: '5 min', improvement: '-96%' },
      { label: 'Tests', after: '128+ fichiers', improvement: 'Couverture solide' },
      { label: 'Isolation', before: 'Serveur partagé', after: 'Container dédié', improvement: 'Sécurité++' },
    ],
    decisions: [
      {
        choice: 'CQRS',
        alternative: 'CRUD classique',
        reason: 'Séparation lecture/écriture pour gérer la complexité des workflows de demande et provisioning.',
        tradeoff: 'Plus de boilerplate initial, mais évolutivité et testabilité accrues.',
      },
      {
        choice: 'Docker/CapRover',
        alternative: 'Kubernetes',
        reason: 'Simplicité de déploiement, isolation des sites via containers, API Docker native, pas de surcharge K8s.',
        tradeoff: 'Moins de features que K8s, mais suffisant et plus maintenable pour l\'équipe.',
      },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return Array.from(tags).sort()
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
