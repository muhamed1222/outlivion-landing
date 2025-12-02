import type { Metadata } from 'next'
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
        {children}
      </body>
    </html>
  )
}

