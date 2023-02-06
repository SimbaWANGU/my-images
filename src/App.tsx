import React, { ReactElement } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import Navbar from './components/Navbar'
import MyImages from './pages/MyImages/MyImages'
// import Landing from './containers/Landing/Landing'
// import GenerateImage from './pages/Generate/GenerateImage'
// import Home from './pages/Home/Home'

const queryClient = new QueryClient()

const App = (): ReactElement => {
  const styles = {
    div: 'h-screen'
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.div}>
        <Navbar />
        <MyImages />
      </div>
    </QueryClientProvider>
  )
}


export default App