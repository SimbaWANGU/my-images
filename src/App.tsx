import React, { ReactElement } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import GenerateImage from './pages/Generate/GenerateImage'

//* TODO
//! app navigation
//! interaction
//! animation
//! responsive design

const queryClient = new QueryClient()

const App = (): ReactElement => {
  const styles = {
    div: 'h-screen'
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.div}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  )
}


export default App