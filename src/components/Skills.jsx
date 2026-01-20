
export default function Skills() {
  const skills = [
    "Python","SQL","EDA","Feature Engineering","Machine Learning",
    "NLP","Generative AI","Scikit-learn","TensorFlow","Power BI","AWS","Git & GitHub"
  ]
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-100 to-purple-100">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {skills.map(s => (
          <div key={s} className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
            {s}
          </div>
        ))}
      </div>
    </section>
  )
}
