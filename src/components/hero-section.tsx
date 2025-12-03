'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShimmeringText } from '@/components/ui/shimmering-text'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const BOT_URL = process.env.NEXT_PUBLIC_BOT_URL || 'https://t.me/your_bot'
  const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:3000'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background glow effect */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-[#FB7452] rounded-full filter blur-[128px] opacity-20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <ShimmeringText className="text-6xl md:text-8xl font-bold mb-4">
            OUTLIVION
          </ShimmeringText>
          <div className="flex items-center justify-center gap-2 text-[#FB7452]/60">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#FB7452]/60" />
            <span className="text-sm tracking-[0.3em] uppercase">VPN</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#FB7452]/60" />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-white/90"
        >
          Безопасность нового поколения
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Защитите свою конфиденциальность с помощью передовых технологий шифрования.
          Быстро. Надежно. Анонимно.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="bg-[#FB7452] hover:bg-[#FB7452]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FB7452]/50">
            <Link
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Открыть в Telegram
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="border-[#FB7452]/50 hover:bg-[#FB7452]/10 hover:border-[#FB7452]">
            <Link href={PORTAL_URL}>
              Веб-портал
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

