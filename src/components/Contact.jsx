
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-primary mb-6">Contact</h2>
      <p className="text-gray-700 mb-6">
        📧 abinashgouda7924@gmail.com <br/>
        📞 +91 8260816109
      </p>
      <div className="flex justify-center gap-8 text-3xl">
        <a href="https://github.com/AbinashGouda2002" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/abinash8260/" target="_blank" rel="noreferrer"
           className="text-blue-600">
          <FaLinkedin />
        </a>
      </div>
      <p className="text-sm text-gray-500 mt-6">
        © 2026 Abinash Gouda
      </p>
    </section>
  )
}
