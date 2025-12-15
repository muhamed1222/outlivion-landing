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
      <body className="antialiased">
        <Script
          src="https://cdn.visitors.now/v.js"
          data-token="37db256d-c501-4ea8-a4ca-baff6c8479ec"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  )
}

