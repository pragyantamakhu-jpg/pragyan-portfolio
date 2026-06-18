export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-accent mb-6">
      {children}
      <span className="flex-1 h-px bg-[#2a2a3a]" />
    </div>
  )
}
