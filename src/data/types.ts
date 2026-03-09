export type PageId =
  | 'home'
  | 'tutorials'
  | 'distribution'
  | 'storepolicy'
  | 'troubleshooting'
  | 'terms'
  | 'privacy'
  | 'financials'

export interface SearchItem {
  title: string
  page: PageId
  tag: string
  text: string
  keywords?: string
}
