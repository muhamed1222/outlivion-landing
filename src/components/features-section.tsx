'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Lock } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Защита данных',
    description: 'Outlivion использует современные методы шифрования для защиты и конфиденциальности ваших данных, не продавая их, в отличие от других интернет-провайдеров.',
  },
  {
    icon: Zap,
    title: 'Мгновенное подключение',
    description: 'Наш VPN подключается за считанные секунды, обеспечивая вам быстрый и надежный доступ к интернету.',
  },
  {
    icon: Lock,
    title: 'Стабильное соединение',
    description: 'Собственная технология Outlivion помогает поддерживать безопасное и стабильное соединение во всех странах.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[#000000]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="bg-[#0D0D0D] rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FB7452] to-[#FB7452]/60 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

