function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#home" className="flex items-center shrink-0">
          <img
            src="/warakamura-logo-light.svg"
            alt="Warakamura Constructions"
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>

        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
          Get a Quote
        </button>
      </div>
    </header>
  );
}

export default Navbar;