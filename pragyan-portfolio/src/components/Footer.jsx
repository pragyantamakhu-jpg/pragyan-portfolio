export default function Footer() {
  return (
    <footer className="pt-8 border-t border-[#2a2a3a] flex justify-between items-center flex-wrap gap-4">
      <span className="text-[11px] text-muted">
        © 2026 · Pragyan Tamakhu · Bhaktapur, Nepal
      </span>
      <div className="flex gap-5">
        <a
          href="mailto:pragyantamakhu@gmail.com"
          className="text-[11px] tracking-widest uppercase text-muted hover:text-accent2 transition-colors duration-200 no-underline"
        >
          email
        </a>
        <a
          href="https://github.com/pragyantamakhu-jpg"
          target="_blank"
          rel="noreferrer"
          className="text-[11px] tracking-widest uppercase text-muted hover:text-accent2 transition-colors duration-200 no-underline"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/pragyantamakhu/"
          target="_blank"
          rel="noreferrer"
          className="text-[11px] tracking-widest uppercase text-muted hover:text-accent2 transition-colors duration-200 no-underline"
        >
          linkedin
        </a>
      </div>
    </footer>
  );
}
