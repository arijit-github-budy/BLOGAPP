import React from 'react'
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
          <Image
            className={styles.image}
            src='/style.png'
            alt='style'
            width={50}
            height={50}
          />
          Style
        </Link>
        <Link href='/blog?cat=fashion' className={`${styles.category} ${styles.fashion}`}>
          <Image
            className={styles.image}
            src='/fashion.png'
            alt='fashion'
            width={50}
            height={50}
          />
          Fashion
        </Link>
        <Link href='/blog?cat=food' className={`${styles.category} ${styles.food}`}>
          <Image
            className={styles.image}
            src='/food.png'
            alt='food'
            width={50}
            height={50}
          />
          Food
        </Link>
        <Link href='/blog?cat=travel' className={`${styles.category} ${styles.travel}`}>
          <Image
            className={styles.image}
            src='/travel.png'
            alt='travel'
            width={50}
            height={50}
          />
          Travel
        </Link>
        <Link href='/blog?cat=culture' className={`${styles.category} ${styles.culture}`}>
          <Image
            className={styles.image}
            src='/culture.png'
            alt='culture'
            width={50}
            height={50}
          />
          Culture
        </Link>
        <Link href='/blog?cat=coding' className={`${styles.category} ${styles.coding}`}>
          <Image
            className={styles.image}
            src='/coding.png'
            alt='coding'
            width={50}
            height={50}
          />
          Coding
        </Link>
      </div>
    </div>
  )
}

export default CategoryList;