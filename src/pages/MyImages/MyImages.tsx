import React, { useState } from 'react'
import Images from '../../containers/MyImages/Images'
import Modal from 'react-modal'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'
import ImageDiv from '../../components/ImageDiv'
import { Images as ImagesType} from '../../interfaces/Interface'

const MyImages = () => {
  const [isImagesModalOpen, setImagesModal] = useState(false)
  const [displayPhotos, setDisplayPhotos] = useState<ImagesType>()
  const styles = {
    div: 'h-4/6',
    swiper: 'h-full w-full z-0 hover:scale-105',
    classes: 'h-full w-full object-contain',
    Imagediv: 'h-full w-full'
  }
  
  const customStyles = {
    content: {
      margin: 'auto',
      width: '80%',
      background: 'black',
      color: 'white',
      overlay: {
        zIndex: '9'
      }
    }
  }

  const handleOpenImagesModal = (e: MouseEvent, photos: ImagesType) => {
    e.preventDefault()
    setImagesModal(true)
    setDisplayPhotos(photos)
  }

  return (
    <div className={styles.div}>
      <Modal
        isOpen={isImagesModalOpen}
        onRequestClose={() => { setImagesModal(false) }}
        contentLabel="Create Reservation Modal"
        style={customStyles}
      >
        <Swiper
          effect={'flip'}
          grabCursor={true}
          autoplay={{
            delay: 3000
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className={styles.swiper}
          >
          {displayPhotos?.images.map((photo) => (
            <SwiperSlide className='z-0' key={displayPhotos.images.findIndex((item) => item === photo)}>
              <ImageDiv src={photo.url} classes={styles.classes} div={styles.Imagediv} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
      <Images handleOpenImagesModal={handleOpenImagesModal} />
    </div>
  )
}

export default MyImages