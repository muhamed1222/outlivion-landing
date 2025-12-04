'use client'

import { motion } from 'framer-motion'
import { MapPin, Globe2, Smartphone, Shield } from 'lucide-react'
import { NumberTicker } from '@/components/ui/number-ticker'

const stats = [
  {
    icon: MapPin,
    number: '50+',
    label: 'местоположений',
  },
  {
    icon: Globe2,
    number: '40',
    label: 'стран по всему миру',
  },
  {
    icon: Smartphone,
    number: '∞',
    label: 'Неограниченное количество устройств',
  },
]

export default function LocationsSection() {
  return (
    <section className="py-24 bg-[#000000] relative overflow-hidden">
      {/* Background world map effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkI3NDUyIiBzdHJva2Utd2lkdGg9IjEiPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iMyIvPjxjaXJjbGUgY3g9IjQwMCIgY3k9IjIwMCIgcj0iMyIvPjxjaXJjbGUgY3g9IjYwMCIgY3k9IjE4MCIgcj0iMyIvPjxjaXJjbGUgY3g9IjgwMCIgY3k9IjI1MCIgcj0iMyIvPjwvZz48L3N2Zz4=')] bg-center bg-no-repeat bg-contain" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Множество локаций
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Мы предлагаем большой выбор местоположений, чтобы защитить ваш реальный IP адрес
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-6xl mx-auto auto-rows-[minmax(200px,auto)]">
          {/* Card 1: 50+ локаций - занимает 2 колонки */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#0D0D0D] rounded-2xl p-5 flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#FB7452]/20 to-purple-500/20 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-[#FB7452]" />
            </div>
            <div className="text-6xl font-bold mb-3 flex items-center justify-center gap-1">
              <NumberTicker value={50} className="text-white" />
              <span className="text-white">+</span>
            </div>
            <p className="text-gray-400">местоположений</p>
          </motion.div>

          {/* Card 2: 40 стран - занимает 2 колонки */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#0D0D0D] rounded-2xl p-5 flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#FB7452]/20 to-purple-500/20 flex items-center justify-center">
              <Globe2 className="w-8 h-8 text-[#FB7452]" />
            </div>
            <div className="text-6xl font-bold mb-3">
              <NumberTicker value={40} className="text-white" />
            </div>
            <p className="text-gray-400">стран по всему миру</p>
          </motion.div>

          {/* Card 3: Неограниченные устройства - занимает 4 колонки (полная ширина) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-[#0D0D0D] rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FB7452]/20 to-purple-500/20 flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-[#FB7452]" />
              </div>
              <div className="text-left">
                <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-[#FB7452] to-purple-500 bg-clip-text text-transparent">
                  ∞
                </div>
                <p className="text-gray-400">Неограниченное количество устройств</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Подключайте любое количество устройств одновременно без ограничений
            </p>
          </motion.div>

          {/* Card 4: Гарантия возврата - занимает 4 колонки */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-[#0D0D0D] rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FB7452]/20 to-purple-500/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#FB7452]" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-white mb-2">
                  30 дней
                </div>
                <p className="text-gray-400">Гарантия возврата денег</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Вы можете связаться с нами в течение 30 дней с момента приобретения подписки
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

