import { skills } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
        <div className="h-px flex-1 mx-6 bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent dark:via-zinc-700/60" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map(s => (
          <div key={s} className="rounded-xl glass px-3 py-2 text-sm text-center">{s}</div>
        ))}
      </div>
    </section>
  )
}
