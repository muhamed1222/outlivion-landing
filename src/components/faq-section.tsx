'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Законно ли использование VPN?',
    answer: 'Да, использование VPN законно в большинстве стран мира. VPN — это инструмент для защиты вашей конфиденциальности и безопасности в интернете. Однако важно использовать VPN в соответствии с законами вашей страны и не нарушать правила использования онлайн-сервисов.',
  },
  {
    question: 'Как работает Outlivion?',
    answer: 'Outlivion обеспечивает скрытие вашего IP адреса и направляет интернет-трафик через безопасный VPN туннель с помощью собственной технологии шифрования, гарантируя безопасность и конфиденциальность, а также сохраняет невероятную скорость вашей работы в Интернете. Более того, мы соблюдаем политику отсутствия журналов, что обеспечивает безопасность ваших данных и исключает возможность доступа со стороны 3 лиц.',
  },
  {
    question: 'Есть ли бесплатный тариф?',
    answer: 'У нас есть возможность бесплатного пробного периода, который дает полный доступ ко всем нашим премиум-функциям. Вы можете самостоятельно оценить наш сервис и решить, соответствует ли он вашим потребностям.',
  },
  {
    question: 'Как начать использовать Outlivion?',
    answer: 'Выберите подходящую Вам платформу iOS или Android и установите Outlivion через Telegram бот или веб-портал. Подключайтесь к любой стране всего одним кликом или доверьте это нашему алгоритму, который подберет оптимальный вариант автоматически.',
  },
  {
    question: 'Есть ли ограничения на количество трафика при использовании Outlivion?',
    answer: 'Нет, Outlivion не ограничивает количество трафика. Вы можете использовать неограниченное количество данных для безопасного и анонимного серфинга в интернете.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-[#000000]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Популярные вопросы
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FB7452] to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden bg-[#0D0D0D] backdrop-blur-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#FB7452] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

