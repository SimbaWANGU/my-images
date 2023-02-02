import React, { ReactElement } from 'react'

const Landing = (): ReactElement => {
  return (
    <div className={styles.div}>
      <div className={styles.div2}>
        <h1 className={styles.h1}>Explore</h1>
        <h3 className={styles.h3}>Picture Perfect</h3>
        <p className={styles.p}>Ever needed a quick image but could not find the one you're looking for? Well, Picture Perfect is for you. Just type in the image description and wait as we whip up something for you. Mould the perfect image according to your desire.</p>
        <div className={styles.div4}>
          <button className={styles.button1}>Try it Out</button>
          <button className={styles.button2}>Create Account</button>
        </div>
      </div>
      <div className={styles.div3}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 288 288">
          <linearGradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
            <stop offset="0%" stop-color="rgb(95,54,152)" stop-opacity="1" />
            <stop offset="100%" stop-color="rgb(247,109,138)" stop-opacity="1" />
          </linearGradient>
          <path fill="url(#PSgrad_0)">
              <animate  repeatCount="indefinite" attributeName="d" dur="10s" values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z	"/>
          </path>
        </svg>
      </div>
    </div>
  )
}

const styles = {
  div: 'bg-weird-blue px-14 text-white flex flex-row h-full w-full',
  div2: 'flex flex-col w-3/6',
  div3: 'flex flex-col w-3/6',
  h1: 'text-7xl font-semibold leading-normal alt',
  h3: 'text-3xl font-extrabold base mb-7',
  p: ' text-sm font-thin leading-7 alt mt-2 mb-7',
  div4: 'flex flex-row base',
  button1: 'py-2 px-14 border rounded-full mr-2 hover:bg-white hover:text-black hover:scale-105 duration-500 ease-in',
  button2: 'py-2 px-10 border rounded-full hover:bg-white hover:text-black hover:scale-105 duration-500 ease-in',
}

export default Landing