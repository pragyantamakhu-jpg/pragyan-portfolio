import SectionLabel from './SectionLabel'

export default function About() {
  return (
    <section id="about" className="mb-16">
      <SectionLabel>about me</SectionLabel>
      <div className="bg-card border border-[#2a2a3a] rounded-md p-8 mb-4">
        <p className="text-muted text-sm leading-loose mb-4">
          I'm{' '}
          <span className="text-accent2">Pragyan Tamakhu</span>, a Computer Science
          student at{' '}
          <span className="text-accent2">IIMS, Bhaktapur</span> (2023–2026), focused
          on frontend development with React and the MERN stack. I enjoy building
          interfaces that are both functional and visually clean.
        </p>
        <p className="text-muted text-sm leading-loose mb-4">
          I've shipped projects ranging from full-stack e-commerce platforms to
          algorithmic traffic systems. I've also completed a{' '}
          <span className="text-accent2">70-hour MERN Stack training</span> at
          Broadway Infosys and bring teamwork experience from volunteer work
          coordinating scout activities.
        </p>
        <p className="text-muted text-sm leading-loose">
          Based in <span className="text-accent2">Bhaktapur, Nepal</span> — open to
          internships, freelance work, or junior frontend roles. Feel free to reach
          out!
        </p>
      </div>

      {/* Certification */}
      <div className="flex items-center gap-4 bg-card border border-[#2a2a3a] rounded-md px-5 py-4">
        <span className="text-2xl text-accent2 shrink-0">🏅</span>
        <div>
          <div className="text-sm text-[#e8e8f0]">
            MERN Stack Development Training — 70 Hours
          </div>
          <div className="text-xs text-muted mt-0.5">
            Broadway Infosys / IIMS College · 17 February 2025
          </div>
        </div>
      </div>
    </section>
  )
}
