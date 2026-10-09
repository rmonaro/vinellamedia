import { useState } from 'react'

export function Nav() {
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <nav className="nav site-nav gutter">
      <a className="nav-brand" href="#" aria-label="Vinella Media home">
        {logoFailed ? (
          <span className="wordmark">Vinella Media</span>
        ) : (
          <img className="logo" src="/VM_Logo_white.png" alt="Vinella Media" onError={() => setLogoFailed(true)} />
        )}
      </a>
      <a className="navlink" href="#services">Services</a>
      <a className="navlink" href="#contact">Contact</a>
      <a className="btn btn-primary" href="#contact">Book a call</a>
    </nav>
  )
}
