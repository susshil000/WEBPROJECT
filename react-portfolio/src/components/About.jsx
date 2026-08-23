const About = () => {
  const aboutInfo = [
    { label: '👨 Name', value: 'Sushil Yadav' },
    { label: '✉ Email', value: 'sushilyadav@example.com' },
    { label: '📍 Location', value: 'India' },
    { label: '✒ Availability', value: 'Available for work' },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-blue-900 to-dark-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-subtitle">Get to Know Me</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate frontend developer who loves building clean, responsive, and
              interactive websites. With expertise in HTML, CSS, JavaScript, and React, I enjoy
              turning ideas into real-world projects.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My journey in web development has been filled with continuous learning and
              innovation. I'm dedicated to creating user-centric digital experiences that
              combine beautiful design with robust functionality.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* About Details */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-dark-900 bg-opacity-50 backdrop-blur rounded-2xl p-8 border border-primary-500 border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-8">Quick Facts</h3>
              <div className="space-y-6">
                {aboutInfo.map((info, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="text-primary-500 font-semibold text-lg">{info.label}</span>
                    <span className="text-gray-300 text-right max-w-xs">{info.value}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary w-full mt-8">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
