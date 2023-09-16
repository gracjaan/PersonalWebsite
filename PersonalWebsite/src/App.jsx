import { useState } from 'react'
import Landing from './pages/Landing'
import Header from './components/Header'
import Introduction from './pages/Introduction'
import Projects from './pages/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <div className="bg-primary w-full">
      <div className="max-w-[1920px] mx-auto">
        <Header />
        <main>
          <Landing />
          <Introduction />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
