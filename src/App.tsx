import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main className="gutter">
        <Hero />
        <div className="fade-rule" />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
