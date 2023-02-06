import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ImageDiv from '../../components/ImageDiv'

const Generate = () => {
  const src= 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
  const styles = {
    div: 'bg-weird-blue px-14 text-white flex flex-row h-full w-full',
    formDiv: 'flex-size-1',
    form: 'glass flex flex-col',
    h3: 'text-center p-5 text-3xl font-semibold base',
    input: 'p-2 m-auto my-5 rounded w-8/12 text-sm text-center bg-transparent border-b outline-none focus:outline-white focus:border-none placeholder:italic alt',
    inputSubmit: 'p-2 mx-auto my-5 rounded w-5/12 bg-violet-500 hover:bg-violet-600 duration-200 ease-in',
    result: 'flex-size-2',
    swiper: 'w-96',
    download: 'relative -top-8 -right-44 hover:scale-150 duration-1000 ease-in',
    classes: 'h-full w-full object-cover rounded-xl',
    Imagediv: 'h-96 border rounded-xl',
  }

  return (
    <div className={styles.div}>
      <div className={styles.formDiv}>
        <form className={styles.form}>
          <h3 className={styles.h3}>Image Generation Prompt</h3>
          <input
            className={styles.input}
            type='text'
            placeholder='Type your prompt here...'
            maxLength={30}
            required
          />
          <input
            className={styles.input}
            type='number'
            placeholder='Number of images...'
            required
            max={10}
          />
          <input 
            className={styles.inputSubmit}
            type='submit'
            value='Generate'
          />
        </form>
      </div>
      <div className={styles.result}>
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
            <FileDownloadIcon className={styles.download} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
            <FileDownloadIcon className={styles.download} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
            <FileDownloadIcon className={styles.download} />
          </SwiperSlide>
          <SwiperSlide>
            <ImageDiv src={src} classes={styles.classes} div={styles.Imagediv} />
            <FileDownloadIcon className={styles.download} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Generate