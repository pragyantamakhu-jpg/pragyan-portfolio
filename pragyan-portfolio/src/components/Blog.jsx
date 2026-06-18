import SectionLabel from './SectionLabel'

const posts = [
  { title: 'How I manage global state in React without Redux', date: 'coming soon' },
  { title: 'Building role-based protected routes in React Router', date: 'coming soon' },
  { title: 'JWT auth with Node.js + bcrypt — a practical guide', date: 'coming soon' },
]

export default function Blog() {
  return (
    <section id="blog" className="mb-16">
      <SectionLabel>writing</SectionLabel>
      <div className="divide-y divide-[#2a2a3a]">
        {posts.map((post, i) => (
          <div
            key={i}
            className="flex justify-between items-center py-4 gap-4 cursor-pointer group"
          >
            <span className="text-sm text-[#e8e8f0] group-hover:text-accent2 transition-colors duration-200">
              {post.title}
            </span>
            <span className="text-[11px] text-muted whitespace-nowrap">{post.date}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
