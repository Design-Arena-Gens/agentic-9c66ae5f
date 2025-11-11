"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="section pt-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs rounded-full px-3 py-1 glass mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-500" />
            Available for select projects
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Crafting delightful <span className="gradient-text">full?stack</span> experiences
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-prose">
            I build performant, accessible, and resilient products with modern tooling and pragmatic engineering.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2">
              View projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 glass">
              Get in touch
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[320px] md:h-[420px] rounded-3xl glass overflow-hidden"
        >
          <div className="absolute inset-0 bg-noise" />
          <div className="absolute inset-0 grid grid-cols-3 gap-3 p-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-brand-500/10 via-transparent to-purple-500/10 border border-white/10" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
