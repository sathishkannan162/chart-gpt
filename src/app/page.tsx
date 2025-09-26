import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ChartGPT · Chat with your database to create charts",
  description: "Turn your DB schema into charts and dashboards using natural language.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-950/70 border-b border-gray-200/60 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white">CG</span>
            <span>ChartGPT</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/dashboard" className="hover:text-emerald-600">Dashboard</Link>
            <Link href="/auth" className="hover:text-emerald-600">Pricing</Link>
            <Link href="/auth" className="hover:text-emerald-600">Sign in</Link>
          </nav>
          <div className="md:hidden" />
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white dark:from-emerald-950/40 dark:via-gray-950 dark:to-gray-950 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div className="max-w-3xl text-center mx-auto">
              <span className="inline-flex items-center rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:text-emerald-300 dark:ring-emerald-400/30">AI for your data</span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
                Chat with your database. Get charts in seconds.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Ask questions in natural language and transform your database schema into interactive charts and dashboards. No SQL required.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/dashboard" className="w-full sm:w-auto rounded-lg bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-700 transition-colors">
                  Start chatting
                </Link>
                <Link href="/auth" className="w-full sm:w-auto rounded-lg border border-emerald-600 px-6 py-3 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
                  Get started free
                </Link>
              </div>
            </div>
            <div className="mt-14">
              <Image src="/images/home-page/chart-hero.png" alt="AI chat generating charts from a database schema" width={1280} height={720} priority className="mx-auto rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Why ChartGPT</h2>
            <p className="mt-3 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Everything you need to go from schema to insights, conversationally.</p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                <div className="h-12 w-12 rounded-lg bg-emerald-600/10 text-2xl flex items-center justify-center">🗣️</div>
                <h3 className="mt-4 text-lg font-semibold">Natural language to SQL</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Describe what you need—“show weekly revenue by region”—and let the AI generate the query and chart.</p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                <div className="h-12 w-12 rounded-lg bg-teal-600/10 text-2xl flex items-center justify-center">📊</div>
                <h3 className="mt-4 text-lg font-semibold">Instant visualizations</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Bar, line, pie, area, and more—rendered directly from your data with sensible defaults.</p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                <div className="h-12 w-12 rounded-lg bg-emerald-600/10 text-2xl flex items-center justify-center">🔒</div>
                <h3 className="mt-4 text-lg font-semibold">Secure by design</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Your data stays in your database. ChartGPT reads schema and runs safe, read‑only queries.</p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                <div className="h-12 w-12 rounded-lg bg-teal-600/10 text-2xl flex items-center justify-center">⚡</div>
                <h3 className="mt-4 text-lg font-semibold">Works with your stack</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">PostgreSQL, MySQL and more. Connect in minutes with environment-based credentials.</p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                <div className="h-12 w-12 rounded-lg bg-emerald-600/10 text-2xl flex items-center justify-center">🧠</div>
                <h3 className="mt-4 text-lg font-semibold">Schema-aware reasoning</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Understands relationships, types, and constraints to produce accurate results.</p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                <div className="h-12 w-12 rounded-lg bg-teal-600/10 text-2xl flex items-center justify-center">🔁</div>
                <h3 className="mt-4 text-lg font-semibold">Iterate conversationally</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Refine, compare, and export charts without leaving the chat.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">How it works</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">1</div>
                <h3 className="mt-4 font-semibold">Connect your database</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Securely link PostgreSQL, MySQL, or others. We only read metadata and run read‑only queries.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">2</div>
                <h3 className="mt-4 font-semibold">Ask a question</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Use natural language to describe the insight you want.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">3</div>
                <h3 className="mt-4 font-semibold">Get charts instantly</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Receive interactive charts ready to share or embed.</p>
              </div>
            </div>
            <div className="mt-12">
              <Image src="/images/home-page/workflow.png" alt="ChartGPT workflow" width={960} height={480} className="mx-auto rounded-xl border border-gray-200 dark:border-gray-800" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to visualize your data?</h2>
            <p className="mt-4 text-emerald-100 max-w-2xl mx-auto">Turn complex schemas into actionable insights with a single prompt.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth" className="rounded-lg bg-white px-6 py-3 font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors">Start free</Link>
              <Link href="/dashboard" className="rounded-lg ring-1 ring-inset ring-white/60 px-6 py-3 text-white hover:bg-white/10 transition-colors">Open demo</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} ChartGPT. All rights reserved.</p>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Privacy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Terms</Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
