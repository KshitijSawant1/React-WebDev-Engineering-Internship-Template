import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white px-6 py-12 text-center">
      {/* Text + Money Bills */}
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          FinTrack
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Manage your expenses, track income, and gain control over your
          finances — all in one simple app.
        </p>

        {/* 💵 Floating Money Bills */}
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-20 h-10 bg-green-400 rounded-md border-2 border-green-600 shadow-md animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                transform: `rotate(${i % 2 === 0 ? "-" : ""}${10 * i}deg)`,
              }}
            >
              <div className="text-center text-white text-sm font-bold pt-1">
                ₹100
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/dashboard"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>

      {/* 👨‍💻 Meet the Maker Section */}
      <div className="mt-16 md:mt-20 text-center px-4 max-w-xl border-2 border-blue-300 rounded-lg shadow-sm py-6">
        <div className="flex flex-col items-center">
          {/* Name and Title */}
          <h2 className="text-xl font-bold text-blue-700">Kshitij K. Sawant</h2>
          <p className="text-sm text-gray-500 mt-1">
            Software Developer • AI & Blockchain Enthusiast
          </p>

          {/* Short Bio */}
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Passionate about creating meaningful digital products and empowering
            others through technology. FinTrack is one of my efforts to help
            people manage their money smarter.
          </p>

          {/* Social Links */}
          <div className="mt-5 flex justify-center gap-6 text-2xl text-gray-600">
            <a
              href="https://github.com/kshitijksawant"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/kshitij-sawant"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 transition"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sawantkshitij1@gmail.com"
              className="hover:text-red-600 transition"
              title="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://linktr.ee/kshitij_sawant"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition"
              title="Portfolio Website"
            >
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
