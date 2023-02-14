import React from 'react'
import type { ImageDiv as Image } from '../interfaces/Interface'

const ImageDiv: React.FC<Image> = ({ src, classes, div }) => {
  return (
    <div className={div}>
      <img className={classes} src={src} alt='Generated Image' loading='lazy' />
    </div>
  )
}

export default ImageDiv