import React from 'react'

interface Image {
  src: string
}

const ImageDiv: React.FC<Image> = ({ src }) => {
  const styles = {
    div: 'h-96 border rounded-xl',
    img: 'h-full w-full object-cover rounded-xl',
  }
  return (
    <div className={styles.div}>
      <img className={styles.img} src={src} alt='Generated Image' />
    </div>
  )
}

export default ImageDiv