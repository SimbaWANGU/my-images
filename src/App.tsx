import React, { ReactElement } from 'react'
import Navbar from './components/Navbar'
import Landing from './containers/Landing/Landing'
import GenerateImage from './pages/Generate/GenerateImage'
import Home from './pages/Home/Home'

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