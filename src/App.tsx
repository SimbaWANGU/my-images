import React, { ReactElement } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'

const App = (): ReactElement => {
  return (
    <div className={styles.div}>
      <Navbar />
      <Home />
    </div>
  )
}

const styles = {
  div: 'h-screen'
}

export default App