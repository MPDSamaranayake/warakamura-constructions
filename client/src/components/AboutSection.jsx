function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
          <p className="mt-6 text-gray-600 leading-7">
            Warakamura Constructions is dedicated to building high-quality
            homes, commercial buildings, and renovation projects. We focus on
            trust, durability, modern design, and client satisfaction.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-yellow-500">10+</h3>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-yellow-500">100+</h3>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-yellow-500">Certified</h3>
              <p className="text-sm text-gray-600">Professionals</p>
            </div>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
          alt="Modern house"
          className="rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}

export default AboutSection;