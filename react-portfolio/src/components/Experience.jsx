const Experience = () => {
  const experiences = [
    {
      period: '2024 — Present',
      title: 'Senior Frontend Engineer, Accessibility',
      company: 'Klaviyo',
      description:
        'Build and maintain critical components used to construct frontend interfaces. Work closely with cross-functional teams including developers, designers, and product managers.',
      skills: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
    },
    {
      period: '2018 — 2024',
      title: 'Lead Engineer',
      company: 'Upstatement',
      description:
        'Built high-quality websites, design systems, mobile apps, and digital experiences for diverse projects including Fortune 500 companies.',
      skills: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React', 'Next.js', 'React Native'],
    },
    {
      period: '2020 — 2023',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description:
        'Developed responsive web applications and interactive user interfaces for various clients. Collaborated with designers and backend developers.',
      skills: ['React', 'Redux', 'CSS', 'REST APIs', 'Webpack'],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-blue-900 to-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="section-subtitle">My Professional Journey</p>
          <h2 className="section-title">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="animate-fade-in-up relative mb-12 pl-8 md:pl-12"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-12 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-transparent"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1.5 mt-2 border-4 border-dark-900"></div>

              {/* Experience Card */}
              <div className="bg-dark-900 bg-opacity-50 backdrop-blur rounded-2xl p-8 border border-primary-500 border-opacity-20 hover:border-opacity-100 transition-all duration-300 card-hover">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                  <div>
                    <p className="text-primary-500 font-bold text-sm mb-2">{exp.period}</p>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-gray-400 text-lg">{exp.company}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-base mb-6 leading-relaxed">{exp.description}</p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary-500 bg-opacity-20 text-primary-300 px-4 py-2 rounded-full text-sm font-semibold border border-primary-500 border-opacity-30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CV Download */}
        <div className="text-center mt-16">
          <a href="#" className="btn-primary inline-block">
            View Full Résumé
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience
