import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import ImageDiv from './ImageDiv'
import { GridDivInterface } from '../interfaces/Interface'

const GridDiv:React.FC<GridDivInterface> = ({ className, photos, classes, div }) => {
  const delay = [3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000]

  return (
    <div
      className={className}
    >
      <Swiper
        autoplay={{
          delay: delay[Math.floor(Math.random() * delay.length)]
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {photos.map((photo) => (
          <SwiperSlide key={(photos.findIndex((item) => item === photo))}>
            <ImageDiv src={photo} classes={classes} div={div} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default GridDiv