'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Engineering Lead',
    company: 'Stripe',
    companyLogo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=40&fit=crop&q=80',
    quote: 'TaskFlow transformed how our engineering team ships features. We cut our sprint planning time by 60% and finally have visibility into blockers before they become problems.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'VP of Operations',
    company: 'Notion',
    companyLogo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=120&h=40&fit=crop&q=80',
    quote: 'We evaluated 12 project management tools. TaskFlow was the only one that actually understood how modern teams work. The automation features alone save us 20+ hours weekly.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Emily Watson',
    role: 'Product Director',
    company: 'Linear',
    companyLogo: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=120&h=40&fit=crop&q=80',
    quote: 'The clarity TaskFlow brings to cross-functional projects is unmatched. Our team alignment improved dramatically, and we launched our last three products ahead of schedule.',
    avatar: 'https://i.pravatar.cc/150?img=44',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-violet-600 font-semibold text-sm uppercase tracking-wider mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">Trusted by Industry Leaders</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">See why thousands of high-performing teams choose TaskFlow to streamline their workflow and ship faster.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Company Logo */}
              <div className="mb-6 h-8 flex items-center">
                <span className="text-slate-400 font-semibold text-sm uppercase tracking-wider">{testimonial.company}</span>
              </div>

              {/* Quote */}
              <div className="flex-1 mb-8">
                <svg className="w-8 h-8 text-violet-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-600 text-lg leading-relaxed">{testimonial.quote}</p>
              </div>

              {/* Person Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-violet-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center gap-1 text-emerald-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}