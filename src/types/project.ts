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
}
