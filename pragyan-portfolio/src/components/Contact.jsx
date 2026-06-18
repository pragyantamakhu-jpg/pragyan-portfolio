import { useState } from 'react'
import SectionLabel from './SectionLabel'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    // Wire up to EmailJS or Formspree here
    setSent(true)
  }

  const inputClass =
    'w-full bg-surface border border-[#2a2a3a] rounded px-3.5 py-2.5 font-mono text-sm text-[#e8e8f0] outline-none focus:border-accent transition-colors duration-200 placeholder-muted'

  return (
    <section id="contact" className="mb-16">
      <SectionLabel>get in touch</SectionLabel>
      <div className="bg-card border border-[#2a2a3a] rounded-md p-6 sm:p-8">
        {sent ? (
          <div className="text-accent2 text-sm py-8 text-center">
            ✓ Message sent! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] tracking-widest uppercase text-muted mb-2">
                  name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  required
                  placeholder="Jane Smith"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-widest uppercase text-muted mb-2">
                  email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handle}
                  required
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-[11px] tracking-widest uppercase text-muted mb-2">
                message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className={`${inputClass} resize-y`}
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 font-mono text-[11px] tracking-widest uppercase bg-accent text-white border border-accent rounded hover:bg-transparent hover:text-accent transition-all duration-200"
            >
              send message ↗
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
