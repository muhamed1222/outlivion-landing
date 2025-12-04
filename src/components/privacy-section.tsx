'use client'

import { motion } from 'framer-motion'
import { Eye, Globe, History, Wifi, Clock } from 'lucide-react'

const privacyItems = [
  { icon: Eye, label: 'IP адрес' },
  { icon: Globe, label: 'Посещенные сайты' },
  { icon: History, label: 'История браузера' },
  { icon: Wifi, label: 'Полоса частот' },
  { icon: Clock, label: 'Продолжительность сессии' },
]

export default function PrivacySection() {
  return (
    <section className="py-24 bg-[#000000] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FB7452]/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Полностью анонимный
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Наша цель — обеспечить приватность каждого пользователя. 
            Мы сделаем все возможное, чтобы защитить вас от нежелательного отслеживания.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Информация о вас остается конфиденциальной
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {privacyItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-4">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#FB7452]/20 rounded-full blur-xl group-hover:bg-[#FB7452]/30 transition-all duration-300" />
                  
                  {/* Icon container */}
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center group-hover:border-[#FB7452]/50 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-[#FB7452]" />
                  </div>
                  
                  {/* Strike through line */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-0.5 bg-red-500 rotate-45" />
                </div>
                
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

