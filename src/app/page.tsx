"use client";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  MessageSquare,
  Sparkles,
  Zap,
} from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Connect Your Database",
      description:
        "Seamlessly integrate with any database schema. MySQL, PostgreSQL, MongoDB, and more.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Chat Naturally",
      description:
        "Ask questions in plain English. No SQL knowledge required. Our AI understands your intent.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Instant Visualizations",
      description:
        "Get beautiful, interactive charts in seconds. From simple bars to complex analytics.",
    },
  ];

  const benefits = [
    "No coding required",
    "Real-time data updates",
    "Secure connections",
    "Customizable charts",
    "Team collaboration",
    "Export capabilities",
  ];

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
        <div className="hidden md:flex gap-8 items-center">
          <a href="#features" className="hover:text-blue-300 transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-blue-300 transition-colors">
            Pricing
          </a>
          <a href="#docs" className="hover:text-blue-300 transition-colors">
            Docs
          </a>
          <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition-all hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm">Powered by Advanced AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
            Turn Database Queries into Beautiful Charts
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Just chat with your data. Our AI transforms your database schema
            into stunning visualizations instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all">
              Watch Demo
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Free 14-day trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative z-10 container mx-auto px-6 py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-300">
            Three simple steps to data visualization mastery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:scale-105 animate-in slide-in-from-left-4 duration-800 delay-${i * 200}`}
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Teams Choose ChartDB
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Built for modern data teams who need insights fast. Stop writing
                complex queries and start having conversations with your data.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/10">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 rounded-lg p-2">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-sm text-gray-300">
                        "Show me sales by region this quarter"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 rounded-lg p-2">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-500/30">
                      <div className="flex gap-2 mb-2">
                        <div className="h-16 w-8 bg-blue-500 rounded"></div>
                        <div className="h-20 w-8 bg-cyan-500 rounded"></div>
                        <div className="h-12 w-8 bg-blue-400 rounded"></div>
                        <div className="h-24 w-8 bg-cyan-400 rounded"></div>
                      </div>
                      <p className="text-xs text-gray-400">
                        Interactive chart generated instantly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Visualize Your Data?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using ChartDB to make data-driven
            decisions faster.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2">
            Get Started for Free
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
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
      </footer>
    </div>
  );
}
