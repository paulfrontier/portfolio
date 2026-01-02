import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Portfolio Personnel',
    description: 'Ce site portfolio avec React, TypeScript et Tailwind CSS.',
    longDescription: 'Un portfolio moderne avec systeme de themes dynamiques, architecture clean et tests automatises.',
    tags: ['frontend', 'React', 'TypeScript'],
    date: '2024',
    image: '/projets/portfolio.png',
    images: ['/projets/portfolio.png'],
    github: 'https://github.com/username/portfolio',
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
  },
  {
    slug: 'mobile-app',
    title: 'App Mobile React Native',
    description: 'Application mobile cross-platform pour iOS et Android.',
    longDescription: 'Application React Native avec TypeScript, navigation, state management et integration API REST.',
    tags: ['mobile', 'React', 'TypeScript', 'frontend'],
    date: '2025',
  },
  {
    slug: 'etl-pipeline-ldap',
    title: 'ETL Pipeline LDAP/AD',
    description: 'Pipeline ETL async Rust pour synchronisation d\'annuaires LDAP et Active Directory.',
    longDescription: 'Pipeline haute performance en Rust pour l\'Université Paris-Saclay. Transforme des messages JSON (Kafka) en entités LDAP (personnes, groupes, structures, services) et Active Directory. Architecture hexagonale avec Domain-Driven Design, ~130 Value Objects validés, saga pattern pour rollback automatique sur échec partiel, graceful shutdown, traitement parallèle avec Tokio. Conforme aux standards SupAnn 2021, EduPerson et SCHAC. 584 tests unitaires et d\'intégration.',
    tags: ['backend', 'Rust', 'LDAP', 'Active Directory', 'Tokio', 'DDD', 'hexagonal', 'saga-pattern'],
    date: '2025',
    image: '/projets/etl_ldap.png',
    images: ['/projets/etl_ldap.png'],
    github: 'https://github.com/username/etl-pipeline',
  },
  {
    slug: 'autohost-wordpress',
    title: 'AutoHost - Plateforme d\'Hébergement WordPress',
    description: 'Plateforme de gestion et provisioning automatisé de sites WordPress pour environnement universitaire.',
    longDescription: 'Application Symfony 7 pour la gestion complète du cycle de vie des sites WordPress : demandes avec workflow de validation, provisioning automatisé via CapRover, backups, migrations. Architecture DDD/Hexagonale, CQRS, Event Sourcing avec pattern Saga pour les workflows distribués. Intégration CAS SSO, RBAC, tests Pest avec 128+ fichiers de tests.',
    tags: ['backend', 'Symfony', 'DDD', 'CQRS', 'PostgreSQL', 'Docker', 'architecture', 'testing'],
    date: '2024-2025',
    image: '/projets/Autohost_site.png',
    images: ['/projets/Autohost_site.png'],
    github: 'https://github.com/username/autohost-wordpress',
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
