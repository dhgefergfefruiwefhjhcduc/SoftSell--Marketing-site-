"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Head from "next/head";
const faqs = [
  { q: "Is selling software licenses legal?", a: "Yes, it is legal in many regions to sell unused software licenses, as long as terms are followed." },
  { q: "How fast do I get paid?", a: "Payments are typically processed within 48 hours after license verification." },
  { q: "What types of licenses are accepted?", a: "We accept most major software licenses, including Windows, Office, and popular developer tools." },
];

const blogPosts = [
  {
    title: "How to Monetize Your Unused Software",
    summary: "Turn old software licenses into cash by understanding market trends and legal regulations.",
  },
  {
    title: "The Rise of Digital License Marketplaces",
    summary: "Explore why businesses are turning to digital license reselling platforms like SoftSell.",
  },
];
const steps = [
  { title: "Upload License", query: "https://cdn.lordicon.com/fjvfsqea.json" },
  { title: "Get Valuation", query: "https://cdn.lordicon.com/ytklkgsc.json" },
  { title: "Get Paid", query: "https://cdn.lordicon.com/bsdkzyjd.json" },
];

const features = [
  { title: "Fast Payment", query: "https://cdn.lordicon.com/warimioc.json" },
  { title: "Secure Process", query: "https://cdn.lordicon.com/sjoccsdj.json" },
  { title: "Transparent Valuation", query: "https://cdn.lordicon.com/fjvfsqea.json" },
  { title: "Trusted by Thousands", query: "https://cdn.lordicon.com/fqbvgezn.json" },
];

const testimonials = [
  {
    name: "Alice Johnson",
    role: "IT Manager",
    company: "TechNova",
    review: "SoftSell made it easy to offload unused licenses. Highly recommended!",
  },
  {
    name: "Raj Mehra",
    role: "Operations Head",
    company: "CloudMatrix",
    review: "Seamless process and fast payment. Great experience overall.",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleScroll = (a) => {
    window.scrollTo({
      top: a,
      left: 0,
      behavior: 'smooth', // or 'auto'
    })
  }
  
  
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) setDarkMode(saved === "true");
  }, []);
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);
  
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const btnMotion = { type: 'spring', stiffness: 300, damping: 20 };
  
  const lordiconPrimary = darkMode ? "#22d3ee" : "#6366f1"; // cyan-400 or indigo-600
const lordiconSecondary = darkMode ? "#0e7490" : "#a5b4fc"; // cyan-700 or indigo-200
 if (!mounted) return null;
  return (
    <>
      <motion.div
        className={`${darkMode ? 'bg-cyan-400' : 'bg-indigo-700'} fixed top-0 left-0 right-0 h-1 origin-left z-[100] rounded-full shadow-lg`}
        style={{ scaleX: scrollYProgress }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      />

      <motion.div
        className={`${darkMode ? 'bg-cyan-400' : 'bg-indigo-700'} fixed top-0 left-0 right-0 h-1 origin-left z-[100] rounded-full shadow-lg`}
        style={{ scaleX: scrollYProgress }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      />

      <main className={`transition-colors duration-700 font-sans ${darkMode ? 'dark' : ''}`}>
        <Head>
          <title>SoftSell - Sell Your Unused Software Licenses</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Sell your unused software licenses easily with SoftSell." />
        </Head>

        <div className={`min-h-screen transition-colors duration-700 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>


          <header
            className={`sticky top-0 z-50 flex justify-between items-center p-3 border-b transition duration-700
    ${darkMode
                ? 'bg-gray-800/80 border-gray-700 text-cyan-400'
                : 'bg-white/80 border-gray-200 text-indigo-700'
              }
    backdrop-blur-[5px]
  `}
          >
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="SoftSell Logo" className="h-10 w-10 rounded-full" />
              <h1 className="text-2xl font-bold">SoftSell</h1>
            </div>
            <motion.button
              onClick={() => setDarkMode(prev => !prev)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={btnMotion}
              className={`px-3 py-1 rounded ${darkMode ? 'bg-cyan-600 text-gray-900' : 'bg-indigo-600 text-white'}`}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </motion.button>
          </header>

          <AnimatePresence exitBeforeEnter>
            <motion.div key={darkMode ? 'dark' : 'light'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

              <section
                id="hero"
                className={`relative flex flex-col items-center text-center py-24 px-6 transition-colors duration-700 bg-cover bg-center ${darkMode
                  ? "bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80')]"
                  : "bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1470&q=80')]"
                  }`}
              >
                <div
                  className={`absolute inset-0 z-0 ${darkMode ? "bg-black/60" : "bg-white/60"
                    }`}
                ></div>

                <motion.h2
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl font-extrabold mb-4 z-10"
                >
                  Turn Unused Licenses Into Cash
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="max-w-xl mb-8 z-10"
                >
                  SoftSell makes it easy to sell your unused software licenses. Get a quote, get paid fast.
                </motion.p>

                <motion.button
                  onClick={() => scrollTo("how")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={btnMotion}
                  className={`px-8 py-3 rounded-lg font-semibold shadow-lg transition-colors duration-300 z-10 ${darkMode
                    ? "bg-cyan-600 opacity-[0.6] text-gray-900 hover:bg-cyan-500 hover:opacity-100"
                    : "bg-indigo-600 opacity-[0.6] text-white hover:bg-indigo-700 hover:opacity-100"
                    }`}
                >
                  How It Works
                </motion.button>
              </section>

              <section id="how" className={`py-20 px-6 transition-colors duration-700 ${darkMode ? 'bg-gray-800' : 'bg-indigo-50'}`}>
                <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-center mb-12">
                  How It Works
                </motion.h3>
                <div className="grid gap-8 md:grid-cols-3 text-center">
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.title}
                      whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 0 20px rgba(6,182,212,0.7)' : '0 0 20px rgba(99,102,241,0.7)' }}
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                      className={` cursor-pointer p-6 rounded-2xl shadow-lg transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-900'}`}
                    >
                      <lord-icon
                        src={step.query}
                        trigger="hover"
                        stroke="bold"
                        style={{ 'width': '100px', 'height': '100px' }}
                        colors={`primary:${lordiconPrimary},secondary:${lordiconSecondary}`}
                        >
                      </lord-icon>
                      <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                      <p className="text-sm">Step {i + 1}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Why Choose Us */}
              <section
                className={`py-20 px-6 transition-colors duration-700 rounded-t-xl ${darkMode ? "bg-gray-900" : "bg-indigo-100"
                  }`}
              >
                <h3
                  className={`text-3xl font-bold text-center mb-12 select-none ${darkMode ? "text-cyan-400" : "text-indigo-700"
                    }`}
                >
                  Why Choose Us
                </h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  {features.map(({ title, query }, i) => (
                    <motion.div
                      key={title}
                      whileHover={{
                        y: -5,
                        boxShadow: darkMode
                          ? "0 10px 30px rgba(6, 182, 212, 0.5)"
                          : "0 10px 30px rgba(99, 102, 241, 0.5)",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                      className={`p-6 rounded-xl shadow-xl cursor-pointer select-none transition-colors duration-300 ${darkMode ? "bg-gray-800" : "bg-white"
                        }`}
                    >
                      <lord-icon
                        src={query}
                        trigger="hover"
                        stroke="bold"
                        style={{ 'width': '100px', 'height': '100px' }}
                        colors={`primary:${lordiconPrimary},secondary:${lordiconSecondary}`}
                        >
                      </lord-icon>
                      <h4
                        className={`font-semibold text-lg mb-1 ${darkMode ? "text-cyan-300" : "text-indigo-600"
                          }`}
                      >
                        {title}
                      </h4>
                      <p className={`text-sm ${darkMode ? "text-cyan-200" : "text-gray-500"}`}>
                        We ensure a {title.toLowerCase()}.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Testimonials */}
              <section
                className={`py-20 px-6 transition-colors duration-700 ${darkMode ? "bg-gray-800" : "bg-white"
                  }`}
              >
                <h3
                  className={`text-3xl font-bold text-center mb-12 select-none ${darkMode ? "text-cyan-300" : "text-indigo-700"
                    }`}
                >
                  What Our Customers Say
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {testimonials.map(({ name, role, company, review }) => (
                    <motion.div
                      key={name}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: darkMode
                          ? "0 8px 24px rgba(6, 182, 212, 0.3)"
                          : "0 8px 24px rgba(99, 102, 241, 0.3)",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className={`p-6 flex justify-center items-center flex-col rounded-xl shadow-md transition-colors duration-300 ${darkMode ? "bg-gray-700" : "bg-indigo-50"
                        }`}
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/kdduutaw.json"
                        trigger="hover"
                        stroke="bold"
                        style={{ 'width': '100px', 'height': '100px' }}
                          colors={`primary:${lordiconPrimary},secondary:${lordiconSecondary}`}>
                      </lord-icon>
                      <p className={`mb-4 italic ${darkMode ? "text-cyan-200" : "text-gray-700"}`}>
                        "{review}"
                      </p>
                      <p className={`font-semibold ${darkMode ? "text-cyan-300" : "text-indigo-800"}`}>
                        {name}
                      </p>
                      <p className={`text-sm ${darkMode ? "text-cyan-100" : "text-gray-500"}`}>
                        {role}, {company}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>
              <section className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-indigo-50'}`}>
                <h3 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-cyan-400' : 'text-indigo-700'}`}>
                  Frequently Asked Questions
                </h3>
                <div className="max-w-4xl mx-auto space-y-6">
                  {faqs.map(({ q, a }, idx) => (
                    <motion.div
                      key={q}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className={`p-5 rounded-xl shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                    >
                      <h4 className="font-semibold text-lg mb-2">{q}</h4>
                      <p className="text-sm opacity-80">{a}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Blog Highlights */}
              <section className={`py-20 px-6 ${darkMode ? 'bg-gray-900' : 'bg-indigo-100'}`}>
                <h3 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-cyan-400' : 'text-indigo-700'}`}>
                  From Our Blog
                </h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {blogPosts.map(({ title, summary }) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                    >
                      <h4 className={`font-semibold text-xl mb-2 ${darkMode ? 'text-cyan-300' : 'text-indigo-800'}`}>{title}</h4>
                      <p className="text-sm opacity-80">{summary}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
              {/* contact */}


              <section
                id="contact"
                className={`py-20 px-6 transition-colors duration-700 ${darkMode ? "bg-gray-900" : "bg-indigo-50"}`}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`text-3xl font-bold text-center mb-12 ${darkMode ? "text-cyan-400" : "text-indigo-700"}`}
                >
                  Contact / Lead Form
                </motion.h3>
                <form
                  className={`max-w-xl mx-auto  ${darkMode ? "bg-gray-800" : "bg-indigo-100"} backdrop-blur-lg rounded-2xl shadow-2xl p-8 grid gap-6`}
                  autoComplete="off"
                  onSubmit={e => {
                    e.preventDefault();
                    const form = e.target;
                    let valid = true;
                    const fields = ["name", "email", "company", "license", "message"];
                    fields.forEach(f => {
                      if (!form[f].value.trim() || (f === "email" && !/^\S+@\S+\.\S+$/.test(form[f].value))) {
                        form[f].classList.add("border-red-400");
                        valid = false;
                      } else {
                        form[f].classList.remove("border-red-400");
                      }
                    });
                    if (valid) {
                      form.reset();
                      setShowSuccess(true);
                      setTimeout(() => setShowSuccess(false), 2500);
                    }
                  }}
                >
                  <div className="grid gap-2">
                    <label className="font-semibold" htmlFor="name">Name</label>
                    <motion.input
                      whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #6366f1" }}
                      type="text"
                      name="name"
                      id="name"
                      required
                      className={`p-3 rounded border transition-all duration-300 outline-none ${darkMode ? "bg-gray-900 border-gray-700 text-cyan-200" : "bg-white border-gray-300"}`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="font-semibold" htmlFor="email">Email</label>
                    <motion.input
                      whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #6366f1" }}
                      type="email"
                      name="email"
                      id="email"
                      required
                      className={`p-3 rounded border transition-all duration-300 outline-none ${darkMode ? "bg-gray-900 border-gray-700 text-cyan-200" : "bg-white border-gray-300"}`}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="font-semibold" htmlFor="company">Company</label>
                    <motion.input
                      whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #6366f1" }}
                      type="text"
                      name="company"
                      id="company"
                      required
                      className={`p-3 rounded border transition-all duration-300 outline-none ${darkMode ? "bg-gray-900 border-gray-700 text-cyan-200" : "bg-white border-gray-300"}`}
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="font-semibold" htmlFor="license">License Type</label>
                    <motion.select
                      whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #6366f1" }}
                      name="license"
                      id="license"
                      required
                      className={`p-3 rounded border transition-all duration-300 outline-none ${darkMode ? "bg-gray-900 border-gray-700 text-cyan-200" : "bg-white border-gray-300"}`}
                    >
                      <option value="">Select License Type</option>
                      <option value="Windows">Windows</option>
                      <option value="Adobe">Adobe</option>
                      <option value="Other">Other</option>
                    </motion.select>
                  </div>
                  <div className="grid gap-2">
                    <label className="font-semibold" htmlFor="message">Message</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #6366f1" }}
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className={`p-3 rounded border transition-all duration-300 outline-none resize-none ${darkMode ? "bg-gray-900 border-gray-700 text-cyan-200" : "bg-white border-gray-300"}`}
                      placeholder="Your message..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className={`cursor-pointer ${darkMode ? "bg-cyan-400 hover:bg-cyan-500" : "bg-indigo-700 hover:bg-indigo-800"} w-full py-3 rounded font-semibold shadow-md transition-colors duration-300  text-white `}
                  >
                    Submit
                  </motion.button>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 text-center font-semibold mt-2"
                    >
                      Thank you! Your message has been received.
                    </motion.div>
                  )}
                </form>
              </section>



              <footer className={`transition-colors duration-700 ${darkMode ? "bg-gray-900 text-cyan-200" : "bg-indigo-100 text-gray-800"}`}>
                <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

                  {/* Company Info */}
                  <div>
                    <div className="flex items-center mb-4">
                      <img src="/logo.png" alt="SoftSell Logo" className="h-10 w-10 rounded-full mr-2" />
                      <span className="text-2xl font-bold">SoftSell</span>
                    </div>
                    <p className="text-sm leading-relaxed">
                      SoftSell helps businesses convert unused software licenses into cash through a secure, transparent, and fast process.
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="cursor-pointer" onClick={() => handleScroll(0)}>Home</li>
                      <li className="cursor-pointer" onClick={() => handleScroll(352.8)} >How It Works</li>
                      <li className="cursor-pointer" onClick={() => handleScroll(1186.4)}>What our customer says?</li>
                      <li className="cursor-pointer" onClick={() => handleScroll(1759.2)}>FAQs</li>
                      <li className="cursor-pointer" onClick={() => handleScroll(2272)}>Blog</li>
                      <li className="cursor-pointer" onClick={() => handleScroll(2772)}>Contact</li>
                    </ul>
                  </div>

                  {/* Contact */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                    <ul className="text-sm space-y-2">
                      <li>Email: <a href="mailto:support@softsell.com" className="hover:underline">support@softsell.com</a></li>
                      <li>Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></li>
                      <li>Address: 123 Tech Street, San Francisco, CA</li>
                    </ul>
                  </div>

                  {/* Newsletter */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Subscribe</h4>
                    <p className="text-sm mb-3">Get updates and license selling tips.</p>
                    <form className="flex flex-col space-y-2">
                      <input type="email" placeholder="Your email" className="px-3 py-2 rounded border outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 dark:bg-gray-800 dark:border-gray-600" />
                      <button type="submit" className={`py-2 rounded font-semibold transition-colors duration-300 ${darkMode ? "bg-cyan-600 hover:bg-cyan-500 text-gray-900" : "bg-indigo-600 hover:bg-indigo-700 text-white"}`}>
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className={` flex gap-3 justify-center items-center text-sm text-center py-4 border-t ${darkMode ? "border-gray-700" : "border-indigo-300"}`}>
                  <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
                  <div className=" flex justify-center space-x-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                  </div>
                </div>
              </footer>

            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
