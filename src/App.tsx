import React, { ReactElement } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'

const App = (): ReactElement => {
  const styles = {
    div: 'h-screen'
  }

  return (
    <div className={styles.div}>
      <Navbar />
      <Home />
    </div>
  )
}


export default App