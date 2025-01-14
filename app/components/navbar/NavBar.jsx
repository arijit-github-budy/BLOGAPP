import React from 'react'
import styles from './navbar.module.css';
import Link from 'next/link';
import ThemeToggle from '../theme_toggle/ThemeToggle';
import AuthLink from '../auth_links/AuthLink';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src='/facebook.png' alt='facebook' width={24} height={24}/>
        <Image src='/instagram.png' alt='facebook' width={24} height={24}/>
        <Image src='/youtube.png' alt='facebook' width={24} height={24}/>
        <Image src='/tiktok.png' alt='facebook' width={24} height={24}/>
      </div>
      <div className={styles.logo}>DailyHunt</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href='/' >Homepage</Link>
        <Link className={styles.link} href='/' >Contact</Link>
        <Link className={styles.link} href='/' >About</Link>
        <AuthLink />
      </div>
    </div>
  )
}

export default NavBar;