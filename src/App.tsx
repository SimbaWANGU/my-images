import React, { ReactElement } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import GenerateImage from './pages/Generate/GenerateImage'

const queryClient = new QueryClient()

const App = (): ReactElement => {
  const styles = {
    div: 'h-screen'
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.div}>
        <Navbar />
        <GenerateImage />
      </div>
    </QueryClientProvider>
  )
}


export default App