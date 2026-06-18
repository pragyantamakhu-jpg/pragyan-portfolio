import SectionLabel from './SectionLabel'

const projects = [
  {
    num: '01',
    name: 'Smart TV E-Commerce Platform',
    bullets: [
      'Full-stack TV shopping site with React frontend and Node.js + Express backend',
      'Secure auth using JWT tokens and bcrypt password hashing',
      'REST APIs with MongoDB + Mongoose for products and user data',
      'Form handling and validation with Formik and Yup; UI via Material UI',
    ],
    tags: [
      { label: 'React', color: 'purple' },
      { label: 'Node.js', color: 'purple' },
      { label: 'Express', color: 'purple' },
      { label: 'MongoDB', color: 'purple' },
      { label: 'JWT', color: 'green' },
      { label: 'Material UI', color: 'purple' },
    ],
    link: '#',
    wip: false,
  },
  {
    num: '02',
    name: 'Task Manager App',
    bullets: [
      'React app with full CRUD — add, edit, delete, and filter tasks by status',
      'Global state via Context API; no prop-drilling',
      'React Router for navigation; Formik + Yup for form validation',
      'localStorage persistence so tasks survive page refresh',
    ],
    tags: [
      { label: 'React', color: 'purple' },
      { label: 'Context API', color: 'purple' },
      { label: 'React Router', color: 'purple' },
      { label: 'Formik', color: 'purple' },
      { label: 'Material UI', color: 'purple' },
    ],
    link: '#',
    wip: false,
  },
  {
    num: '03',
    name: 'Traffic Management System for Emergency Vehicles',
    bullets: [
      'Smart navigation system for ambulances using real traffic data',
      'Pathfinding with A* and Dijkstra\'s algorithm for optimal routing',
      'Proposed traffic signal integration for emergency vehicle prioritization',
      'Simulated multiple traffic scenarios to benchmark performance',
    ],
    tags: [
      { label: 'Python', color: 'purple' },
      { label: 'A* Algorithm', color: 'green' },
      { label: 'Dijkstra', color: 'green' },
      { label: 'Simulation', color: 'purple' },
    ],
    link: '#',
    wip: false,
  },
  {
    num: '04',
    name: 'Food Ordering Web App',
    bullets: [
      'Role-based app with separate customer and admin interfaces',
      'Global cart state via Context API + useReducer (add, remove, update, clear)',
      'Protected routes restricting access by auth and user role',
      'Admin dashboard for managing items and orders; product browsing + cart for customers',
    ],
    tags: [
      { label: 'React', color: 'purple' },
      { label: 'Context API', color: 'purple' },
      { label: 'useReducer', color: 'amber' },
      { label: 'Protected Routes', color: 'purple' },
      { label: 'Material UI', color: 'purple' },
    ],
    link: '#',
    wip: true,
  },
]

const tagClass = {
  purple: 'bg-[rgba(124,106,247,0.12)] text-accent border border-[rgba(124,106,247,0.25)]',
  green: 'bg-[rgba(62,207,178,0.1)] text-accent2 border border-[rgba(62,207,178,0.25)]',
  amber: 'bg-[rgba(250,199,117,0.1)] text-[#fac775] border border-[rgba(250,199,117,0.25)]',
}

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <SectionLabel>selected work</SectionLabel>
      <div className="flex flex-col gap-3">
        {projects.map(p => (
          <div
            key={p.num}
            className="bg-card border border-[#2a2a3a] rounded-md p-6 grid grid-cols-[1fr_auto] gap-4 items-start hover:border-accent transition-colors duration-200 group"
          >
            <div>
              <div className="text-[11px] text-accent mb-1.5">{p.num}</div>
              <div className="font-sans font-bold text-base text-[#e8e8f0] mb-2">
                {p.name}
                {p.wip && (
                  <span className="ml-2.5 text-[10px] tracking-widest uppercase px-2 py-0.5 rounded bg-[rgba(250,199,117,0.12)] text-[#fac775] border border-[rgba(250,199,117,0.3)]">
                    in progress
                  </span>
                )}
              </div>
              <ul className="space-y-1">
                {p.bullets.map((b, i) => (
                  <li key={i} className="text-xs text-muted leading-relaxed pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent2">
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.tags.map(t => (
                  <span key={t.label} className={`text-[10px] tracking-wider uppercase px-2 py-0.5 rounded ${tagClass[t.color]}`}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={p.link}
              className="text-muted group-hover:text-accent2 transition-colors duration-200 text-lg mt-1"
              aria-label={`View ${p.name}`}
            >
              ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
