import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Sintaxe do código na aula: 
// É praticamente a mesma coisa, só muda a importação do StrictMode e do createRoot.

// import React from 'react' // O pacote "React" é o pacote responsável pelo cor do React. É onde tem as funcionabilidades que são compartilhadas entre todos os clients (react web, react native, react vr, etc).
// import ReactDOM from 'react-dom/client'// O pacote "ReactDOM" é a integração do react com o DOM(Document Object Model). É a representação do html através do JS. Ele é o responsável por renderizar o React no navegador.
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
