"use client";
import { ArrowLeft, BarChart3, CheckCircle2, Sparkles } from "lucide-react";

interface ComingSoonProps {
  pageTitle: string;
  description: string;
  backToHome?: boolean;
  footerLinks?: boolean;
}

export default function ComingSoon({ 
  pageTitle, 
  description, 
  backToHome = true,
  footerLinks = true 
}: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
            <BarChart3 className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold">ChartDB</span>
        </div>
        {backToHome && (
          <a
            href="/"
            className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </a>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-8 border border-white/20 mx-auto">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm">Coming Soon</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
            {pageTitle}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center gap-2"
            >
              Explore Homepage
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </a>
            <button className="bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all">
              Stay Updated (Coming Soon)
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">In Development</h3>
              <p className="text-gray-400 text-sm">
                We're working hard to bring this feature to life.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <Sparkles className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Stay Tuned</h3>
              <p className="text-gray-400 text-sm">
                Follow our updates for the latest news.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
              <p className="text-gray-400 text-sm">
                This page will be available very soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {footerLinks && (
        <footer className="relative z-10 container mx-auto px-6 py-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">ChartDB</span>
            </div>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            © 2025 ChartDB. All rights reserved. This page is under development.
          </p>
        </footer>
      )}
    </div>
  );
}