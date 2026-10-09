import { useState, type FormEvent } from 'react'
import {
  budgetOptions,
  serviceNames,
  serviceOptions,
  type BudgetOption,
  type ServiceOption,
} from '../data'

type SegmentedProps<T extends string> = {
  name: string
  options: readonly T[]
  value: T
  onChange: (value: T) => void
}

function Segmented<T extends string>({ name, options, value, onChange }: SegmentedProps<T>) {
  return (
    <div className="seg" role="radiogroup">
      {options.map((o) => (
        <label key={o} className="seg-opt">
          <input type="radio" name={name} checked={value === o} onChange={() => onChange(o)} />
          {o}
        </label>
      ))}
    </div>
  )
}

export function Contact({ showBudget = true }: { showBudget?: boolean }) {
  const [service, setService] = useState<ServiceOption>('App')
  const [budget, setBudget] = useState<BudgetOption>('Under $10k')
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: send the inquiry to a backend or form service.
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div>
        <span className="eyebrow">Contact</span>
        <h2 className="h2">Got a project? Let’s talk.</h2>
        <p className="contact-intro muted">
          Tell us what you’re building. We reply within one business day with next steps or a time to talk.
        </p>
      </div>

      <div className="card elev-md">
        {sent ? (
          <div className="sent" role="status">
            <span className="sent-mark" />
            <h3>Got it. We’re on it.</h3>
            <p className="muted">
              Your inquiry about {serviceNames[service]} is in. Expect a reply within one business day.
            </p>
            <div>
              <button type="button" className="btn btn-ghost" onClick={() => setSent(false)}>
                Send another
              </button>
            </div>
          </div>
        ) : (
          <form className="form" onSubmit={submit}>
            <div className="two">
              <div className="field">
                <label htmlFor="vm-name">Name</label>
                <input id="vm-name" name="name" className="input" required placeholder="Jane Doe" />
              </div>
              <div className="field">
                <label htmlFor="vm-email">Email</label>
                <input id="vm-email" name="email" className="input" type="email" required placeholder="jane@company.com" />
              </div>
            </div>
            <div className="field">
              <label>What do you need?</label>
              <Segmented name="vm-service" options={serviceOptions} value={service} onChange={setService} />
            </div>
            {showBudget && (
              <div className="field">
                <label>Budget</label>
                <Segmented name="vm-budget" options={budgetOptions} value={budget} onChange={setBudget} />
              </div>
            )}
            <div className="field">
              <label htmlFor="vm-msg">Project details</label>
              <textarea id="vm-msg" name="details" className="input" rows={5} placeholder="What are you building, and when do you need it?" />
            </div>
            <div className="submit-row">
              <button type="submit" className="btn btn-primary">Send inquiry</button>
              <span className="note">Reply within one business day.</span>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
