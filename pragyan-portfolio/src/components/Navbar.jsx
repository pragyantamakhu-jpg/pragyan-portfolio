export default function Navbar() {
  const links = ['about', 'projects', 'skills', 'blog', 'contact']
  return (
    <nav className="flex justify-between items-center pb-8 border-b border-[#2a2a3a] mb-12 flex-wrap gap-4">
      <div className="font-sans font-extrabold text-lg text-[#e8e8f0]">
        pragyan<span className="text-accent">.</span>dev
      </div>
      <div className="flex gap-5 flex-wrap">
        {links.map(l => (
          <a
            key={l}
            href={`#${l}`}
            className="text-muted text-[11px] tracking-widest uppercase hover:text-accent transition-colors duration-200 no-underline"
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  )
}
