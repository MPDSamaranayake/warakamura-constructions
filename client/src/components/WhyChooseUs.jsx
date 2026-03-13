import { motion } from "framer-motion";

const reasons = [
  "Quality Craftsmanship",
  "Reliable Service",
  "Timely Completion",
  "Affordable Pricing",
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Why Choose Us?</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-2xl"
            >
              <p className="text-lg font-semibold text-yellow-400">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;