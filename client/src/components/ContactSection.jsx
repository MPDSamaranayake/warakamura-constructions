import { motion } from "framer-motion";

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-gray-600">
            Tell us about your project and we will contact you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full border p-3 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg h-32"
          ></textarea>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;