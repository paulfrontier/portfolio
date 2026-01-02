export interface Project {
  slug: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  image?: string
  images?: string[]
  link?: string
  github?: string
  date: string

  // Case Study (optionnel)
  subtitle?: string
  problem?: string
  solution?: string
  result?: string

  // Featured (pour Proof Pack sur Home)
  featured?: boolean
  featuredLabel?: 'Projet phare' | 'Preuve technique' | 'Preuve produit'

  // Décisions & Tradeoffs
  decisions?: Decision[]

  // Métriques
  metrics?: Metric[]
}

export interface Decision {
  choice: string
  alternative: string
  reason: string
  tradeoff?: string
}

export interface Metric {
  label: string
  before?: string
  after: string
  improvement?: string
}
