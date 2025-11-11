"use client"

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
        <div className="h-px flex-1 mx-6 bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent dark:via-zinc-700/60" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            viewport={{ once: true }}
            className="rounded-2xl glass p-5 flex flex-col gap-4"
          >
            <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-brand-500/15 via-purple-500/10 to-emerald-400/10 border border-white/10" />
            <div>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{p.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="text-xs px-2 py-1 rounded-lg bg-black/5 dark:bg-white/5">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              {p.links.map(l => (
                <a key={l.label} href={l.href} target="_blank" className="text-sm underline-offset-4 hover:underline">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
