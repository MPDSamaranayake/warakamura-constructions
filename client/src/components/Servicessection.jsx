const services = [
  {
    title: "Residential Construction",
    desc: "We build modern homes with strong materials and attractive design.",
  },
  {
    title: "Commercial Construction",
    desc: "Office buildings, shops, and business spaces with reliable quality.",
  },
  {
    title: "Renovations & Remodeling",
    desc: "Upgrade and improve existing buildings with modern finishing.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600">{service.desc}</p>
              <button className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;