"use client"

import Link from 'next/link'
import { nav, social } from '@/lib/data'
import { ThemeToggle } from './theme-toggle'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="container container-px py-4">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <Link href="#" className="font-semibold tracking-tight">
            <span className="gradient-text">devfolio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map(item => (
              <a key={item.href} href={item.href} className="hover:text-brand-600">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {social.slice(0,3).map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                 className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
                <Icon className="w-5 h-5" />
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
      <motion.div layoutId="bar" className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent dark:via-zinc-700/60" />
    </header>
  )
}
