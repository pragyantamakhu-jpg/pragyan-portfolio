export default function Hero() {
  return (
    <section className="mb-16">
      <div className="inline-block text-[11px] tracking-[0.15em] uppercase text-accent2 mb-4 before:content-['>_'] before:text-accent">
        open to opportunities
      </div>
      <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight text-[#e8e8f0] mb-5">
        Hi, I'm <span className="text-accent">Pragyan</span>
        <span className="inline-block w-0.5 h-[0.9em] bg-accent align-middle ml-1 animate-[blink_1s_step-end_infinite]" />
      </h1>
      <p className="text-muted text-sm leading-loose max-w-xl mb-8">
        Frontend developer focused on{' '}
        <span className="text-accent2">React &amp; the MERN stack</span>. I build
        responsive, user-friendly web apps with clean code and intuitive interfaces.
        Currently studying Computer Science at IIMS, Bhaktapur — and shipping real
        projects along the way.
      </p>
      <div className="flex gap-4 flex-wrap">
        <a
          href="#projects"
          className="px-5 py-2.5 font-mono text-[11px] tracking-widest uppercase bg-accent text-white border border-accent rounded hover:bg-transparent hover:text-accent transition-all duration-200"
        >
          view my work
        </a>
        <a
          href="/Pragyan_Tamakhu_CV.pdf"
          download
          className="px-5 py-2.5 font-mono text-[11px] tracking-widest uppercase border border-[#2a2a3a] text-[#e8e8f0] rounded hover:border-accent2 hover:text-accent2 transition-all duration-200"
        >
          download cv
        </a>
      </div>
    </section>
  )
}
