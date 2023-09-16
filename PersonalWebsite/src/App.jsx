import { useState } from 'react'
import Landing from './pages/Landing'
import Header from './components/Header'

function App() {

  return (
    <body className="bg-primary w-full">
      <div className="max-w-[1920px] mx-auto">
        <Header />
        <main>
          <Landing />
        </main>
      </div>
    </body>
  )
}

export default App
