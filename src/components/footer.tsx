export function Footer() {
  return (
    <footer className="section pt-0">
      <div className="text-xs text-zinc-600 dark:text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>? {new Date().getFullYear()} Modern Dev Portfolio</p>
        <p className="opacity-80">Built with Next.js ? Deployed on Vercel</p>
      </div>
    </footer>
  )
}
