import React, { useState } from 'react'
import Header from './components/Header'

import './App.css'
import backgroundImage from './assets/background.jpg'

function App() {
  const [projects, setProjects] = useState([
    'Desenvolvimento do Pagode',
    'Mouse Assassino',
  ])

  function handleAddProject() {
    setProjects([...projects, `Novo Cachumba ${Date.now()}`])
  }

  return (
    <>
      <Header title="HomePage" />

      <img width={300} src={backgroundImage} />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  )
}

export default App
