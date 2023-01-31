import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className={styles.h1}>Vite + React</h1>
    </div>
  )
}

const styles = {
  h1: 'text-3xl font-bold underline'
}

export default App
