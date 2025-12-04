'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('RU')

  const navItems = [
    { name: 'Почему Outlivion', href: '#why' },
    { name: 'Стоимость', href: '#pricing' },
    { name: 'Устройства', href: '#devices' },
    { name: 'Поддержка', href: '#support' },
    { name: 'Блог', href: '#blog' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FB7452] to-[#FB7452]/60 bg-clip-text text-transparent">
              OUTLIVION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
            >
              Войти
            </Link>
            <Button 
              size="sm" 
              className="bg-white text-black hover:bg-white/90 rounded-full px-6"
            >
              Установить
            </Button>
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLanguage(language === 'RU' ? 'EN' : 'RU')}
                className="text-sm font-medium px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                {language}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-white/10"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link
                  href="/login"
                  className="block text-white/70 hover:text-white transition-colors duration-200"
                >
                  Войти
                </Link>
                <Link
                  href="/register"
                  className="block text-white/70 hover:text-white transition-colors duration-200"
                >
                  Зарегистрироваться
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

