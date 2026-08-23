import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'sushilyadav@example.com', link: 'mailto:sushilyadav@example.com' },
    { icon: FaPhone, label: 'Phone', value: '+91 (Your Number)', link: 'tel:+91' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'India', link: '#' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-blue-900 to-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to new opportunities and interesting projects. Feel free to reach out if you'd like to
              discuss anything or just say hello!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 text-gray-300 hover:text-primary-500 transition-colors group"
                  >
                    <div className="bg-primary-500 bg-opacity-20 p-4 rounded-lg group-hover:bg-opacity-30 transition-all">
                      <IconComponent className="text-2xl text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-primary-500 border-opacity-20">
              <p className="text-gray-400 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-primary-500 bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all">
                  f
                </a>
                <a href="#" className="w-12 h-12 bg-primary-500 bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all">
                  in
                </a>
                <a href="#" className="w-12 h-12 bg-primary-500 bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all">
                  tw
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-dark-900 bg-opacity-50 backdrop-blur rounded-2xl p-8 border border-primary-500 border-opacity-20">
              {submitted && (
                <div className="mb-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg">
                  <p className="text-green-400 font-semibold">✓ Message sent successfully!</p>
                </div>
              )}

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-800 text-white px-4 py-3 rounded-lg border border-primary-500 border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-800 text-white px-4 py-3 rounded-lg border border-primary-500 border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-800 text-white px-4 py-3 rounded-lg border border-primary-500 border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all"
                  placeholder="Message subject"
                />
              </div>

              <div className="mb-8">
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-dark-800 text-white px-4 py-3 rounded-lg border border-primary-500 border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
