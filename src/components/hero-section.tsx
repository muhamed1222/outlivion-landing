'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'

export default function HeroSection() {
  const BOT_URL = process.env.NEXT_PUBLIC_BOT_URL || 'https://t.me/your_bot'
  const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:3000'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
      {/* Interactive Grid Pattern Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveGridPattern
          width={50}
          height={50}
          squares={[30, 20]}
          className="opacity-20"
          squaresClassName="stroke-[#FB7452]/30 fill-transparent hover:fill-[#FB7452]/40 hover:stroke-[#FB7452]/60 transition-all duration-200 cursor-crosshair"
        />
      </div>

      {/* Content - transparent for mouse events except interactive elements */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center [&>*]:pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto">
        {/* VPN Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center"
        >
            <Link
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-12 bg-white text-black hover:bg-white/90 rounded-full px-12 text-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Установить Outlivion
            </Link>
        </motion.div>
      </div>
    </section>
  )
}

