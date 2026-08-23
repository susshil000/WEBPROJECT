import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Amazon Clone',
      description: 'A full-featured e-commerce platform clone with product listing, shopping cart, and checkout functionality.',
      image: '🛒',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      github: 'https://github.com/sushilrao-code',
      live: '#',
    },
    {
      title: 'Netflix Clone',
      description: 'A streaming platform clone with movie browsing, categories, and responsive design for all devices.',
      image: '🎬',
      technologies: ['React', 'CSS', 'API Integration', 'Tailwind CSS'],
      github: 'https://github.com/sushilrao-code',
      live: '#',
    },
    {
      title: 'Todo App',
      description: 'A task management application with local storage persistence, edit, delete, and filter functionalities.',
      image: '✓',
      technologies: ['React', 'Local Storage', 'CSS', 'JavaScript'],
      github: 'https://github.com/sushilrao-code',
      live: '#',
    },
    {
      title: 'Weather App',
      description: 'A weather application that fetches real-time weather data and displays forecasts with a beautiful UI.',
      image: '🌤',
      technologies: ['React', 'REST API', 'Axios', 'Tailwind CSS'],
      github: 'https://github.com/sushilrao-code',
      live: '#',
    },
    {
      title: 'Password Generator',
      description: 'A secure password generator with customizable options for length, characters, and strength indicators.',
      image: '🔐',
      technologies: ['JavaScript', 'React', 'Crypto API', 'CSS'],
      github: 'https://github.com/sushilrao-code',
      live: '#',
    },
    {
      title: 'Music Player',
      description: 'A feature-rich music player with playlist management, shuffle, repeat, and progress tracking.',
      image: '🎵',
      technologies: ['React', 'Web Audio API', 'CSS', 'JavaScript'],
      github: 'https://github.com/sushilrao-code',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-dark-900 to-blue-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="section-subtitle">My Recent Works</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-dark-900 bg-opacity-50 backdrop-blur rounded-2xl overflow-hidden border border-primary-500 border-opacity-20 hover:border-opacity-100 transition-all duration-300 h-full flex flex-col group">
                {/* Project Image/Icon */}
                <div className="bg-gradient-to-br from-primary-500 to-blue-600 h-48 flex items-center justify-center text-7xl overflow-hidden relative">
                  <div className="group-hover:scale-110 transition-transform duration-300">{project.image}</div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary-500 bg-opacity-20 text-primary-300 px-3 py-1 rounded-full text-xs font-semibold border border-primary-500 border-opacity-30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-6 border-t border-primary-500 border-opacity-20">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors ml-auto"
                    >
                      Live <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see more?</p>
          <a href="https://github.com/sushilrao-code" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
