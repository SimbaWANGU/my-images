import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'
import ImageDiv from '../../components/ImageDiv'
import { ImagesProps } from '../../interfaces/Interface'
import { useStore } from '../../zustand/Store'

const Images: React.FC<ImagesProps> = ({ handleOpenImagesModal }) => {
  const [Images] = useStore((state) => [state.Images])
  const styles = {
    div: 'bg-weird-blue px-14 text-white h-full w-full grid gap-4 grid-cols-3 grid-rows-2',
    swiper: 'h-48 w-48 z-0 hover:scale-110 active:scale-90 duration-300 ease-in',
    classes: 'h-48 w-48 object-cover rounded-xl',
    Imagediv: 'h-48 w-48 border rounded-xl'
  }
  const delay = [3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000]

  return (
    <div className={styles.div}>
      {Images.map((photos) => (
      <a 
        href='#'
        onClick={(e) => handleOpenImagesModal(e, photos)}
        key={Images.findIndex((item) => item === photos)}
      >
        <Swiper
          effect={'cards'}
          grabCursor={true}
          autoplay={{
            delay: delay[Math.floor(Math.random() * delay.length)],
          }}
          modules={[EffectCards, Autoplay]}
          className={styles.swiper}
        >
          {photos.images.map((pics) => (
            <SwiperSlide className='z-0' key={photos.images.findIndex((item) => item === pics)}>
              <ImageDiv src={pics.url} classes={styles.classes} div={styles.Imagediv} />
            </SwiperSlide>
          ))}
        </Swiper>
      </a>
      ))}
    </div>
  )
}

export default Images