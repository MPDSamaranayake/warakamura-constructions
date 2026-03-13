function Hero() {
  return (
    <section
      id="home"
      className="bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center min-h-screen flex items-center"
    >
      <div className="bg-black/60 w-full min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Building the Future <br />
            with Quality and Trust
          </h2>

          <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200">
            We build residential, commercial, and renovation projects with
            strong quality, modern design, and reliable service.
          </p>

          <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Explore Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;