import React, { ReactElement } from 'react'
import Landing from '../../containers/Landing/Landing'

const Home = (): ReactElement => {
  return (
    <div className={styles.div}>
      <Landing />
    </div>
  )
}

const styles = {
  div: 'h-4/6'
}

export default Home