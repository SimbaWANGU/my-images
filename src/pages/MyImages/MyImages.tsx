import React from 'react'
import Images from '../../containers/MyImages/Images'

const MyImages = () => {
  const styles = {
    div: 'h-4/6'
  }
  return (
    <div className={styles.div}>
      <Images />
    </div>
  )
}

export default MyImages