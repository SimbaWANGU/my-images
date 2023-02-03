import React, { ReactElement } from 'react'
import Navbar from './components/Navbar'
import GenerateImage from './pages/Generate/GenerateImage'

const App = (): ReactElement => {
  const styles = {
    div: 'h-screen'
  }

  return (
    <div className={styles.div}>
      <Navbar />
      <GenerateImage />
    </div>
  )
}


export default App