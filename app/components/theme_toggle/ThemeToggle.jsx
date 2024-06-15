'use client';

import React, { useContext } from 'react';
import styles from './themeToggle.module.css'
import Image from 'next/image';
import { ThemeContext } from '../../Context/ThemeContext';

const ThemeToggle = () => {
  const {themeMode, themeToggle} = useContext(ThemeContext)
  return (
    <div className={styles.container} style={themeMode === 'dark' ? {backgroundColor: 'white'} : {backgroundColor: '#0f172a'}} onClick={() => themeToggle()}>
      <Image src='/moon.png' alt='' width={14} height={14} />
      <div 
        className={styles.ball}
        style={
          themeMode === 'dark' ? {left: '2px', background: '#0f172a'} : {right: '2px', background: 'white'}
        }
      ></div>
      <Image src='/sun.png' alt='' width={14} height={14} />
    </div>
  )
}

export default ThemeToggle