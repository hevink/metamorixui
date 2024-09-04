import { useState } from "react";
import { Menu, X } from "lucide-react";

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Works", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  return (
    <section className="bg-white text-gray-900 transition-colors duration-300 dark:bg-black  dark:text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="mr-2 size-8 rounded-full bg-orange-500"></div>
          <span className="text-xl font-bold">Meta morix</span>
        </div>
        <div className="hidden space-x-4 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                link.name === "Home"
                  ? "font-medium"
                  : "text-gray-500 dark:text-gray-400"
              }
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden rounded-full bg-orange-500 px-4 py-2 font-medium text-white md:block">
            Contact Us
          </button>
          <button onClick={toggleMobileMenu} className="md:hidden">
            <Menu className="size-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-black ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-6">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-2 size-8 rounded-full bg-orange-500"></div>
                <span className="text-xl font-bold">Outstand</span>
              </div>
              <button onClick={toggleMobileMenu}>
                <X className="size-6" />
              </button>
            </div>
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block text-lg">
                  {link.name}
                </a>
              ))}
            </nav>
            <button className="mt-8 w-full rounded-full bg-orange-500 px-4 py-2 font-medium text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16 text-center">
        <div className="mb-4 flex items-center justify-center">
          <div className="mr-2 rounded-full border border-neutral-300 bg-neutral-100 p-1.5 dark:border-neutral-700 dark:bg-neutral-900">
            <img
              src="https://svgl.app/library/google.svg"
              alt="Google logo"
              className="size-7"
            />
          </div>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="size-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-gray-500 dark:text-gray-400">
            Rated 4.8 of 5
          </span>
        </div>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Modern, Cool, and Effective
          <br />
          Template for Your Business
        </h1>
        <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
          Boost Your Brand with Our Sleek and Cutting-Edge Framer Template
        </p>
        <button className="rounded-full bg-orange-500 px-8 py-3 text-lg font-medium text-white">
          Get this Template
        </button>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Available Figma File with Editable Assets
        </p>
      </main>

      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 py-16 md:grid-cols-4">
        {[
          { number: "50+", text: "Projects completed" },
          { number: "16+", text: "Awards Received" },
          { number: "12+", text: "Years of experience" },
          { number: "20+", text: "Team members" },
        ].map((stat, index) => (
          <div
            key={index}
            className="rounded-lg border border-neutral-300 bg-black/5 px-6 py-10 text-center dark:border-neutral-700 dark:bg-white/10"
          >
            <h2 className="mb-2 text-4xl font-bold">{stat.number}</h2>
            <p className="text-gray-600 dark:text-gray-400">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
