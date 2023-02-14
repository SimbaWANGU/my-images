import React, { ReactElement } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import TransformOutlinedIcon from '@mui/icons-material/TransformOutlined';
import Home from '../pages/Home/Home';
import GenerateImage from '../pages/Generate/GenerateImage';
import MyImages from '../pages/MyImages/MyImages';

const Navbar = (): ReactElement => {
  const styles = {
    div: 'h-2/6',
    nav: 'flex flex-row w-full px-12 py-16 text-l text-white font-sm h-full',
    span: 'm-2 text-2xl cursor-pointer hover:scale-105 duration-500 ease-in base',
    ul: 'flex flex-row ml-auto mt-2 list-none',
    li: 'px-8 py-1 mr-3 cursor-pointer',
    button: 'px-8 py-1 hover:border-b hover:rounded duration-100 ease-in base',
    buttonactive: 'px-8 py-1 border-b duration-500 ease-in alt'
  }

  return (
    <>
    <div className={styles.div}>
      <nav className={styles.nav}>
        <span className={styles.span}>
          <NavLink to='/'>
            <TransformOutlinedIcon />
            {'  '}
            Picture Perfect
          </NavLink>
        </span>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <NavLink
              to='/generate'
              className={(({ isActive }) => (isActive ? styles.buttonactive : styles.button))}
            >
              Generate
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink
              to='/myimages'
              className={(({ isActive }) => (isActive ? styles.buttonactive : styles.button))}
            >
              My Images
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/generate' element={<GenerateImage />} />
        <Route path='/myimages' element={<MyImages />} />
      </Routes>
    </>
  )
}


export default Navbar