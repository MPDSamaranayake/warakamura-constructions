import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center min-h-screen flex items-center"
    >
      <div className="bg-black/60 w-full min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Building the Future <br />
            with Quality and Trust
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200"
          >
            We build residential, commercial, and renovation projects with
            strong quality, modern design, and reliable service.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Explore Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Hero;