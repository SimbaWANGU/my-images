import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'
import ImageDiv from '../../components/ImageDiv'

const Images = () => {
  const src= 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
  const styles = {
    div: 'bg-weird-blue px-14 text-white h-full w-full grid gap-4 grid-cols-3 grid-rows-2',
    swiper: 'h-48 w-48',
    classes: 'h-48 w-48 object-cover rounded-xl',
    Imagediv: 'h-48 border rounded-xl'
  }
  return (
    <div className={styles.div}>
      <div>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true
          }}
          modules={[EffectCards, Autoplay]}
          className={styles.swiper}
        >
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes}  div={styles.Imagediv}/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true
          }}
          modules={[EffectCards, Autoplay]}
          className={styles.swiper}
        >
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes}  div={styles.Imagediv}/>
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes}  div={styles.Imagediv}/>
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes}  div={styles.Imagediv}/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
      <Swiper
          effect={'cards'}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true
          }}
          modules={[EffectCards, Autoplay]}
          className={styles.swiper}
        >
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes}  div={styles.Imagediv}/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
      <Swiper
          effect={'cards'}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true
          }}
          modules={[EffectCards, Autoplay]}
          className={styles.swiper}
        >
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes}  div={styles.Imagediv}/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
      <Swiper
          effect={'cards'}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true
          }}
          modules={[EffectCards, Autoplay]}
          className={styles.swiper}
        >
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes}  div={styles.Imagediv}/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
      <Swiper
          effect={'cards'}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true
          }}
          modules={[EffectCards, Autoplay]}
          className={styles.swiper}
        >
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes}  div={styles.Imagediv}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Images