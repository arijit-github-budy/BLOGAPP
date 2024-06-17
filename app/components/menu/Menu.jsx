import React from 'react'
import styles from './menu.module.css';
import Link from 'next/link';
import MenuPosts from '../menu_posts/MenuPosts';

const Menu = () => {
  return (
    <div className={styles.container}>
      <MenuPosts subtitle="Whats Hot" title="Most Popular" imageStatus={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h2 className={styles.title}>Categories</h2>
      <div className={styles.categoryList}>
        <Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.style}`}>
          Style
        </Link>
        <Link href='/blog?cat=fashion' className={`${styles.categoryItem} ${styles.fashion}`}>
          Fashion
        </Link>
        <Link href='/blog?cat=food' className={`${styles.categoryItem} ${styles.food}`}>
          Food
        </Link>
        <Link href='/blog?cat=travel' className={`${styles.categoryItem} ${styles.travel}`}>
          Travel
        </Link>
        <Link href='/blog?cat=culture' className={`${styles.categoryItem} ${styles.culture}`}>
          Culture
        </Link>
        <Link href='/blog?cat=coding' className={`${styles.categoryItem} ${styles.coding}`}>
          Coding
        </Link>
      </div>
      <MenuPosts subtitle="Choosen by the editor" title="Editor's Pick" imageStatus={true} />
    </div>
  )
}

export default Menu;