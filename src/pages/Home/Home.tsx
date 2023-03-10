import React, { ReactElement } from 'react'
import Landing from '../../containers/Landing/Landing'
import TryOut from '../../containers/TryItOut/TryOut'

const Home = (): ReactElement => {
  const styles = {
    div: 'h-4/6'
  }
  
  return (
    <div className={styles.div}>
      <Landing />
      <TryOut />
    </div>
  )
}


export default Home