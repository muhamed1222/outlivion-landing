'use client'

import { motion } from 'framer-motion'
import { Gauge, PlayCircle, Infinity } from 'lucide-react'
import { NumberTicker } from '@/components/ui/number-ticker'
import { NeonGradientCard } from '@/components/ui/neon-gradient-card'

const speedFeatures = [
  {
    icon: Gauge,
    title: 'Высокая скорость',
    description: 'До 10 Гбит/с',
  },
  {
    icon: PlayCircle,
    title: 'Отсутствие буферизации',
    description: 'Стриминг без задержек',
  },
  {
    icon: Infinity,
    title: 'Неограниченная пропускная способность',
    description: 'Без лимитов трафика',
  },
]

export default function SpeedSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#000000]">

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Супер-быстрый
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FB7452] to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {speedFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="relative h-full">
                {/* Card content */}
                <div className="relative bg-[#0D0D0D] rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#FB7452]/20 to-purple-500/20 flex items-center justify-center">
                    <feature.icon className="w-10 h-10 text-[#FB7452]" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  {index === 0 ? (
                    <p className="text-gray-400 flex items-center justify-center gap-2">
                      До <NumberTicker value={10} className="text-[#FB7452] text-2xl font-bold" /> Гбит/с
                    </p>
                  ) : (
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

