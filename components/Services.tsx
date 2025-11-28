'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, BarChart3, Workflow } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Execute tasks in milliseconds with our optimized workflow engine',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption keeps your data safe and compliant',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track team performance with live dashboards and insights',
  },
  {
    icon: Workflow,
    title: 'Smart Automation',
    description: 'AI-powered workflows that adapt to how your team works',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900">
            Built for Modern Teams
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            Everything you need to manage projects, track progress, and ship faster than ever before.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-violet-50 flex items-center justify-center mb-4 group-hover:bg-violet-100 transition-all duration-300 group-hover:scale-110">
                <service.icon className="w-10 h-10 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
