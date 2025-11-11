export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="rounded-3xl glass p-6 md:p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Let?s build something remarkable</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-3">I?m open to collaborations, consulting, and interesting opportunities.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2">Email me</a>
          <a href="#projects" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 glass">Browse work</a>
        </div>
      </div>
    </section>
  )
}
