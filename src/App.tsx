import React, { ReactElement } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'

//* TODO
//! interaction
//! animation
//! responsive design

const queryClient = new QueryClient()

const App = (): ReactElement => {
  const styles = {
    div: 'h-screen force-overflow'
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div id='style-7' className='scrollbar'>
        <div className={styles.div}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
          <ReactQueryDevtools />
        </div>
      </div>
    </QueryClientProvider>
  )
}


export default App