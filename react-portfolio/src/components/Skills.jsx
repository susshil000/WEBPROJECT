import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaVuejs } from 'react-icons/fa'

const Skills = () => {
  const skills = [
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500', level: 95 },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-400', level: 90 },
    { icon: FaJsSquare, name: 'JavaScript', color: 'text-yellow-400', level: 88 },
    { icon: FaReact, name: 'React', color: 'text-cyan-400', level: 85 },
    { icon: FaGitAlt, name: 'Git', color: 'text-red-500', level: 80 },
    { icon: FaVuejs, name: 'Tailwind CSS', color: 'text-teal-400', level: 85 },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-dark-900 to-blue-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="section-subtitle">What I Can Do</p>
          <h2 className="section-title">My Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div
                key={index}
                className="animate-fade-in-up card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-dark-900 bg-opacity-50 backdrop-blur rounded-2xl p-8 text-center border border-primary-500 border-opacity-20 hover:border-opacity-100 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <IconComponent className={`text-6xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-white font-bold text-lg mb-4">{skill.name}</h3>
                  
                  {/* Skill Level Bar */}
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-primary-400 text-sm mt-2 font-semibold">{skill.level}%</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Skills Description */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm constantly learning and expanding my skill set. Currently exploring advanced React patterns,
            state management, and modern web development practices.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
