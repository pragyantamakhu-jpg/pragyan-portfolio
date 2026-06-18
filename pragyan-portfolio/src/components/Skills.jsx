import SectionLabel from './SectionLabel'

const skills = [
  'React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB',
  'Python', 'HTML / CSS', 'Material UI', 'Context API',
  'React Router', 'Formik / Yup', 'Git', 'Figma', 'Postman', 'AI/ML basics',
]

export default function Skills() {
  return (
    <section id="skills" className="mb-16">
      <SectionLabel>skills</SectionLabel>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {skills.map(skill => (
          <div
            key={skill}
            className="flex items-center gap-2 bg-card border border-[#2a2a3a] rounded px-3.5 py-2.5 text-xs text-muted hover:border-accent hover:text-[#e8e8f0] transition-all duration-200 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent2 shrink-0" />
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
