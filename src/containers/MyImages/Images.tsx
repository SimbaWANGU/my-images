import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'
import ImageDiv from '../../components/ImageDiv'
import { photos1, photos2, photos3, photos4, photos5 } from '../../assets/exports'

const Images = () => {
  const styles = {
    div: 'bg-weird-blue px-14 text-white h-full w-full grid gap-4 grid-cols-3 grid-rows-2',
    swiper: 'h-48 w-48',
    classes: 'h-48 w-48 object-cover rounded-xl',
    Imagediv: 'h-48 w-48 border rounded-xl'
  }
  const photosArray = [photos1, photos2, photos3, photos4, photos5]
  const delay = [3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000]

  return (
    <div className={styles.div}>
      {photosArray.map((photos) => (
      <a href='#' key={photosArray.findIndex((item) => item === photos)}>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          autoplay={{
            delay: delay[Math.floor(Math.random() * delay.length)],
          }}
          modules={[EffectCards, Autoplay]}
          className={styles.swiper}
        >
          {photos.map((pics) => (
            <SwiperSlide key={photos1.findIndex((item) => item === pics)}>
              <ImageDiv src={pics} classes={styles.classes} div={styles.Imagediv} />
            </SwiperSlide>
          ))}
        </Swiper>
      </a>
      ))}
    </div>
  )
}

export default Images