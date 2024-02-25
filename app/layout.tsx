import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader';

const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://github.com/alsheroziy'),
	title: 'Shehroz dasturlashga oid maqolalar',
	description:
		'Dasturlash haqida yangiliklar, dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
	authors: [{ name: 'Shehroz Raxmatov', url: 'https://github.com/alsheroziy' }],
	icons: { icon: '/favicon.ico' },
	keywords:
		"shehroz raxmatov, sheroz, shehroz blog, bloglar, sheroz blog, raxmatov shehroz, raxmatov sheroz, sheroz raxmatov, shehroz, shehroz dasturlash, github shehroz, portfolio, shehroz javascript, shehroz raqamli avlod, javascript, reactjs, vuejs, shehroz darslari, maqola, shehroz maqolalari, sheroz maqolalari, shehroz github, shehroz rezume, full stack, amedia shehroz, shehroz amediatv, amediatv shehroz, amediatv sheroz, amediatv dasturchisi, Amediatv IT loyihalari, umft shehroz, shehroz umft, umft sheroz, umft dasturchisi, umft dasturchisi shehroz, umft dasturchisi sheroz, shehroz umft dasturchisi, sheroz University of Management and Future Technologies, University of Management and Future Technologies shehroz, University of Management and Future Technologies sheroz, shehroz University of Management and Future Technologies, umft raxmatov, umft sheroz raxmatov, umft shehroz raxmatov, shehroz umft raxmatov, sheroz umft raxmatov, umft sheroz raxmatov, amediatv, Amediatv, alsheroziy, sheroziy, shehroziy",
	openGraph: {
		title: 'Shehroz Raxmatov',
		description:
		'Dasturlash haqida yangiliklar, dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		url: 'https://github.com/alsheroziy',
		locale: 'en_EN',
		images: 'https://avatars.githubusercontent.com/u/155871526?v=4',
		countryName: 'Uzbekistan',
		siteName: 'Shehroz',
		emails: 'raxmatshehroz@gmail.com',
	},
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
					storageKey='blog-theme'
				>
					<NextTopLoader showSpinner={false}/>
					{children}
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
