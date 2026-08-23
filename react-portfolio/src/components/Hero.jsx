import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-r from-dark-900 to-blue-900 flex items-center justify-center pt-20 md:pt-0"
    >
      <div className="container-custom py-20 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl text-white mb-4">Hi, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="text-primary-500">Sushil</span> Yadav
            </h1>
            <h3 className="text-2xl md:text-4xl text-gray-300 mb-6 font-semibold">
              Frontend Developer
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
              I build responsive and user-friendly websites using HTML, CSS, JavaScript, and React.
              Passionate about creating beautiful digital experiences and solving complex problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-8 flex-wrap">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="btn-primary cursor-pointer"
              >
                View My Work
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="btn-secondary cursor-pointer"
              >
                Contact Me
              </ScrollLink>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-2xl">
              <a
                href="https://github.com/sushilrao-code"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-500 transition-colors duration-300"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-500 transition-colors duration-300"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-500 transition-colors duration-300"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:sushilyadav@example.com"
                className="text-white hover:text-primary-500 transition-colors duration-300"
                title="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right Content - Placeholder for Image */}
          <div className="hidden md:flex justify-center animate-slide-in-right">
            <div className="w-80 h-80 bg-gradient-to-br from-primary-500 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center border-4 border-primary-500">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-white text-xl font-bold">Sushil Yadav</p>
                <p className="text-gray-200">Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
