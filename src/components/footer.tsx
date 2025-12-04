'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#000000] border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FB7452] to-[#FB7452]/60 bg-clip-text text-transparent">
                OUTLIVION
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Безопасный и надежный VPN для защиты вашей конфиденциальности
            </p>
          </div>

          {/* Install links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Установить</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Установить Outlivion
                </Link>
              </li>
              <li>
                <Link href="#devices" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Устройства
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#why" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Об Outlivion
                </Link>
              </li>
              <li>
                <Link href="#support" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Поддержка
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Партнерам
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <Link
              href="mailto:support@outlivion.space"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              support@outlivion.space
            </Link>
            
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="https://t.me/outlivion"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} Outlivion. Все права защищены.
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Условия использования сайта
            </Link>
          </div>

          {/* Language selector */}
          <div className="flex items-center gap-2">
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              Русский
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

