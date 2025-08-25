import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// Example JSX element
const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = 'chai aur react'

// Using React.createElement (requires React import)
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit google ',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  reactElement
)
