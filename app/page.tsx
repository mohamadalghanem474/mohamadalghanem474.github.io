'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Brush } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md border-b border-gray-700">
        <h1 className="text-2xl font-bold text-red-400">Alghanem Solution</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#services" className="hover:text-red-300">Services</a>
          <a href="#about" className="hover:text-red-300">About</a>
          <a href="#contact" className="hover:text-red-300">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 py-24">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building Future Software Today
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mb-6 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We build high-quality, scalable, and beautiful digital products that help businesses grow and thrive.
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-medium transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 bg-gray-800">
        <motion.h3
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h3>
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              icon: <Code className="w-12 h-12 mb-4 text-red-400" />,
              title: 'Web Development',
              desc: 'Modern websites, admin panels, e-commerce, APIs, dashboards, and custom CMS.'
            },
            {
              icon: <Smartphone className="w-12 h-12 mb-4 text-red-400" />,
              title: 'Mobile Apps',
              desc: 'Cross-platform apps using Flutter or React Native with native performance.'
            },
            {
              icon: <Brush className="w-12 h-12 mb-4 text-red-400" />,
              title: 'UI/UX Design',
              desc: 'Clean, user-friendly designs that focus on accessibility and user engagement.'
            }
          ].map((s, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-center hover:shadow-lg transition"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {s.icon}
              <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
              <p className="text-sm text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Who We Are</h3>
          <p className="text-lg text-gray-300">
            Alghanem Solution is a team of developers, designers, and thinkers.
            We&apos;re passionate about solving problems through technology.
            Whether you’re a startup or an enterprise, we deliver value fast and continuously.
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-red-600 text-white px-6 py-20 text-center"
      >
        <motion.h3
          className="text-3xl font-bold mb-4"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s Build Together
        </motion.h3>
        <p className="mb-6 text-lg text-white/90">
          Contact us today and bring your ideas to life.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <motion.a
            href="mailto:alghanem4it@gmail.com"
            className="bg-white text-red-600 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
          >
            alghanem4it@gmail.com
          </motion.a>

          <motion.a
            href="https://wa.me/96171793188"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium transition"
            whileHover={{ scale: 1.05 }}
          >
            WhatsApp: +961 71 793 188
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-gray-900 border-t border-gray-700">
        © {new Date().getFullYear()} Alghanem Solution. All rights reserved.
      </footer>
    </div>
  )
}
