export const temaLight = {
  background: 'hsl(0, 0%, 95%)',
  text: 'hsl(200, 15%, 8%)',
  elements: 'hsl(0, 0%, 100%)',
  input: 'hsl(0, 0%, 52%)'
}

export const temaDark = {
  background: 'hsl(207, 26%, 17%)',
  text: 'hsl(0, 0%, 100%)',
  elements: 'hsl(209, 23%, 22%)'
}

export type Theme = {
  background: string
  text: string
  elements: string
  input?: string
}
