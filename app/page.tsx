export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6 bg-white">
        <div className="flex items-center space-x-3">
          <img
            src="/logo-stm.png"
            alt="Smarter Than Mum logo"
            className="h-12 w-auto"
          />
          <span className="text-xl font-semibold tracking-tight">
            Smarter Than Mum
          </span>
        </div>
        <nav className="space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-gray-900">Home</a>
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Programs</a>
          <a href="#" className="hover:text-gray-900">Parents</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
          <button className="ml-6 rounded-full bg-[#4A7BA7] px-5 py-2.5 text-white">
            Login
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-10 py-24 items-center">
        <div>
          <h1 className="text-5xl font-semibold leading-tight">
            Nurturing confident learners for a global future
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Smarter Than Mum provides structured programs in writing, oral
            communication, and mathematics — empowering children to think,
            express, and grow with confidence.
          </p>
          <div className="mt-10 space-x-4">
            <button className="rounded-full bg-[#4A7BA7] px-8 py-3.5 text-white text-lg">
              Learn More
            </button>
            <button className="rounded-full border border-gray-300 px-8 py-3.5 text-lg">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-80 w-80 rounded-full bg-[#F3F7FB] flex items-center justify-center">
            <span className="text-gray-400">Hero image</span>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-[#F7FAFC] px-10 py-20">
        <h2 className="text-3xl font-semibold text-center">Our Programs</h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="rounded-3xl bg-white p-8 shadow-sm text-center">
            <h3 className="text-xl font-semibold">Writing</h3>
            <p className="mt-4 text-gray-600">
              Develop structure, clarity, and expressive writing skills.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm text-center">
            <h3 className="text-xl font-semibold">Oral Communication</h3>
            <p className="mt-4 text-gray-600">
              Build confidence in speaking, reasoning, and presentation.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm text-center">
            <h3 className="text-xl font-semibold">Mathematics</h3>
            <p className="mt-4 text-gray-600">
              Strengthen problem-solving and mathematical thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Smarter Than Mum. All rights reserved.
      </footer>
    </div>
  );
}