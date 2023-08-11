import { Inter as FontSans, Acme as FontHeading } from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})
export const fontHeading = FontHeading({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-heading',
})
