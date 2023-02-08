import React, { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom';
import TransformOutlinedIcon from '@mui/icons-material/TransformOutlined';
import Home from '../pages/Home/Home';
import GenerateImage from '../pages/Generate/GenerateImage';

const Navbar = (): ReactElement => {
  const styles = {
    div: 'h-2/6',
    nav: 'flex flex-row w-full px-12 py-16 text-l text-white font-sm h-full',
    span: 'm-2 text-2xl cursor-pointer hover:scale-105 duration-500 ease-in base',
    ul: 'flex flex-row ml-auto mt-2 list-none',
    li: 'px-8 py-1 mr-3 cursor-pointer',
    button: 'px-8 py-1 hover:border-b hover:rounded duration-100 ease-in base'
  }

  return (
    <>
    <div className={styles.div}>
      <nav className={styles.nav}>
        <span className={styles.span}>
          <a href='/'>
            <TransformOutlinedIcon />
            {'  '}
            Picture Perfect
          </a>
        </span>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href='/generate' className={styles.button}>Generate</a>
          </li>
          <li className={styles.li}>
            <a className={styles.button}>My Images</a>
          </li>
          <li className={styles.li}>
            <a className={styles.button}>Sign Up</a>
          </li>
        </ul>
      </nav>
    </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/generate' element={<GenerateImage />} />
        <Route path='/myimages' element={<></>} />
      </Routes>
    </>
  )
}


export default Navbar