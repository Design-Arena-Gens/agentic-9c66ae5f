import { experience } from '@/lib/data'

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
        <div className="h-px flex-1 mx-6 bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent dark:via-zinc-700/60" />
      </div>
      <ol className="space-y-4">
        {experience.map((e) => (
          <li key={e.role} className="rounded-2xl glass p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold">{e.role} ? {e.company}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{e.period}</p>
              </div>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
              {e.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
