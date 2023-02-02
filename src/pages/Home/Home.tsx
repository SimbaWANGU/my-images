import React, { ReactElement } from 'react'
import Landing from '../../containers/Landing/Landing'

const Home = (): ReactElement => {
  const styles = {
    div: 'h-4/6'
  }
  
  return (
    <div className={styles.div}>
      <Landing />
    </div>
  )
}


export default Home