'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Apple, Smartphone } from 'lucide-react'

export default function CTASection() {
  const BOT_URL = process.env.NEXT_PUBLIC_BOT_URL || 'https://t.me/your_bot'

  return (
    <section className="py-24 bg-[#000000] relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ищешь надежный VPN<br />
            для стабильного соединения?
          </h2>
          
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-6 text-lg font-semibold mb-12 hover:scale-105 transition-transform duration-300"
          >
            <Link href={BOT_URL} target="_blank" rel="noopener noreferrer">
              Установить Outlivion
            </Link>
          </Button>

          {/* Platform icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 flex-wrap"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <Apple className="w-6 h-6" />
              <span>iOS</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Smartphone className="w-6 h-6" />
              <span>Android</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
              </svg>
              <span>Windows</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>macOS</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

