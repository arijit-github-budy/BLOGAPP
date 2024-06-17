import Link from 'next/link'
import React from 'react'
import styles from './menuPosts.module.css';
import Image from 'next/image';

const MenuPosts = ({subtitle, title, imageStatus}) => {
    return (
        <div>
            <h2 className={styles.subtitle}>Choosen by the editor</h2>
            <h2 className={styles.title}>Editor's Pick</h2>
            <div className={styles.items}>
                <Link href='/' className={styles.item}>
                    {imageStatus && <div className={styles.imageContainer} >
                        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
                    </div>}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.style}`}>Style</span>
                        <h3 className={styles.postTilte}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit pariatur</h3>
                        <div className={styles.details}>
                            <span className={styles.username}>Arijit Roy</span>
                            <span className={styles.date}> - 10.12.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href='/' className={styles.item}>
                    {imageStatus && <div className={styles.imageContainer}>
                        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
                    </div>}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                        <h3 className={styles.postTilte}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit pariatur</h3>
                        <div className={styles.details}>
                            <span className={styles.username}>Arijit Roy</span>
                            <span className={styles.date}> - 10.12.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href='/' className={styles.item}>
                    {imageStatus && <div className={styles.imageContainer}>
                        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
                    </div>}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>Food</span>
                        <h3 className={styles.postTilte}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit pariatur</h3>
                        <div className={styles.details}>
                            <span className={styles.username}>Arijit Roy</span>
                            <span className={styles.date}> - 10.12.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href='/' className={styles.item} style={{ borderBottom: 'none' }}>
                    {imageStatus && <div className={styles.imageContainer}>
                        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
                    </div>}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                        <h3 className={styles.postTilte}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit pariatur</h3>
                        <div className={styles.details}>
                            <span className={styles.username}>Arijit Roy</span>
                            <span className={styles.date}> - 10.12.2024</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MenuPosts