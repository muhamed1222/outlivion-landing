'use client'

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

interface NavItem {
  name: string
  href: string
  icon?: React.ReactNode
}

const navItems: NavItem[] = [
  { name: 'Почему Outlivion', href: '#why' },
  { name: 'Стоимость', href: '#pricing' },
  { name: 'Устройства', href: '#devices' },
  { name: 'Поддержка', href: '#support' },
  { name: 'Блог', href: '#blog' },
]

export default function FloatingNavbar() {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex max-w-[960px] w-full fixed z-[5000] top-10 inset-x-0 mx-auto px-2.5 py-2.5 rounded-full border items-center justify-between',
          'bg-black/20 backdrop-blur-2xl',
          'border-white/[0.15] shadow-[0_8px_32px_0_rgba(251,116,82,0.15)]',
          'hover:shadow-[0_8px_32px_0_rgba(251,116,82,0.25)] transition-shadow duration-300'
        )}
        style={{
          backdropFilter: 'blur(10px) saturate(100%)',
          backgroundColor: 'rgba(46, 46, 46, 0.2)',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 px-4"
        >
          <span className="text-xl font-bold bg-gradient-to-r from-[#FB7452] to-[#FB7452]/60 bg-clip-text text-transparent">
            OUTLIVION
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1 justify-center gap-6">
          {navItems.map((item, idx) => (
            <Link
              key={`link-${idx}`}
              href={item.href}
              className={cn(
                'relative group text-neutral-200 items-center flex space-x-1 hover:text-white transition-colors duration-200 text-sm'
              )}
            >
              <span className="block relative">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FB7452] to-purple-500 group-hover:w-full transition-all duration-300" />
              </span>
            </Link>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-neutral-200 hover:text-white transition-colors"
          >
            Войти
          </Link>
          <Link
            href="#install"
            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black hover:bg-white/90 transition-colors duration-200"
          >
            Установить
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2 ml-auto"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-32 inset-x-4 z-[4999] lg:hidden"
          >
            <div className="bg-black/95 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl overflow-hidden">
              <div className="flex flex-col p-6 space-y-4">
                {navItems.map((item, idx) => (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-200 hover:text-[#FB7452] transition-colors duration-200 text-base py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-neutral-200 hover:text-white transition-colors text-base py-2"
                  >
                    Войти
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-neutral-200 hover:text-white transition-colors text-base py-2"
                  >
                    Зарегистрироваться
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}

