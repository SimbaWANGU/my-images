import React from 'react'

interface Image {
  src: string
  classes: string
  div: string
}

const ImageDiv: React.FC<Image> = ({ src, classes, div }) => {
  return (
    <div className={div}>
      <img className={classes} src={src} alt='Generated Image' />
    </div>
  )
}

export default ImageDiv