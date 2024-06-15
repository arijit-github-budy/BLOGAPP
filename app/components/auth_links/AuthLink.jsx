'use client'
import React, {useState} from 'react';
import styles from './authLink.module.css';
import Link from 'next/link';

const AuthLink = () => {
  const [open, setOpen] = useState(false);
  let status = "authorized"
  return (
    <>
      {
        status === 'authorized' ?
          (
            <>
              <Link className={styles.link} href='/write'>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          ) :
          (
            <Link className={styles.link} href='/login' >Login</Link>
          )
      }
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {
        open &&
        (
          <div className={styles.responsiveMenu}>
            <Link href='/' >Homepage</Link>
            <Link href='/' >Contact</Link>
            <Link href='/' >About</Link>
            {
              status === 'authorized' ?
                (
                  <>
                    <Link href='/write'>Write</Link>
                    <span className={styles.link}>Logout</span>
                  </>
                ) :
                (
                  <Link href='/login' >Login</Link>
                )
            }
          </div>
        )
      }
    </>
  )
}

export default AuthLink