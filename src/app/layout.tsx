import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Outlivion VPN - Безопасный и быстрый VPN сервис',
  description: 'Защитите свою конфиденциальность в интернете с Outlivion VPN. Быстрые серверы, надежное шифрование, простая настройка.',
  keywords: ['VPN', 'Outlivion', 'privacy', 'security', 'безопасность', 'приватность'],
  authors: [{ name: 'Outlivion' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <Script 
          src="https://cdn.visitors.now/v.js" 
          data-token="8bbdc2ad-d98a-4a02-b43c-26f048fcc692"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

