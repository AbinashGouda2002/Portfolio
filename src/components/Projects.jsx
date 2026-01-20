export default function Projects() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        
        {/* Project 1 */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold">
            Bank Stability Analysis
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Technologies: Python, EDA, Machine Learning
          </p>

          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
            <li>
              Analyzed real-world bank financial datasets to evaluate bank
              stability and risk factors.
            </li>
            <li>
              Performed data cleaning, exploratory data analysis (EDA), and
              statistical analysis using Python libraries.
            </li>
            <li>
              Identified key financial indicators affecting bank performance
              and stability to support data-driven insights.
            </li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="bg-green-50 p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold">
            Resume ATS Tracking LLM
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Technologies: Python, LLM, Gemini API, Streamlit
          </p>

          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
            <li>
              Developed an AI-powered ATS resume tracking system using
              Large Language Models (Gemini API).
            </li>
            <li>
              Extracted and analyzed resume content from PDFs and matched
              it against job descriptions.
            </li>
            <li>
              Generated ATS scores, skill-gap analysis, and actionable
              feedback to improve resume relevance.
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}
