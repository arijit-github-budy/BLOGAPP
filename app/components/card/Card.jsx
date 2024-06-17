import React from 'react'
import styles from './card.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.details}>
                    <span className={styles.date}>11.02.203</span>
                    <span className={styles.category}>Fashion</span>
                </div>
                <Link href='/'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui laborum commodi quisquam recusandae aut culpa, earum facere repellat debitis
                </Link>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel a totam facere, expedita dolores perspiciatis iure laboriosam quod numquam dolor commodi dolorem quia velit, earum minima labore beatae. Quo, totam?
                Voluptatem doloremque rerum quae sint repellat non eaque, autem rem. Sint corporis ducimus quibusdam blanditiis nihil corrupti nisi, alias molestiae soluta vitae sunt obcaecati incidunt consectetur, consequuntur quisquam id nulla.</p>
                <Link href='/' className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Card