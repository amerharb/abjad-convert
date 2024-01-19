import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Abjad web',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
		<body className={inter.className}>
		{children}
		<Analytics/>
		</body>
		</html>
	)
}
