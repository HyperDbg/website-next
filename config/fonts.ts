import { Inter as FontSans, Rubik as FontHeading } from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontHeading = FontHeading({
  weight: ['500'],
  subsets: ['latin'],
  variable: '--font-heading',
})
