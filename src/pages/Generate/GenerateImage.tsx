import React from 'react'
import Generate from '../../containers/Generate/Generate'

const GenerateImage = () => {
  const styles = {
    div: 'h-4/6'
  }

  return (
    <div className={styles.div}>
      <Generate />
    </div>
  )
}

export default GenerateImage