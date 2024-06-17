import React from 'react'
import styles from './comments.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Comments = () => {
    let status = 'authorized'
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Comments
            </h1>
            {
                status == 'authorized' ?
                    (
                        <div className={styles.write}>
                            <textarea placeholder='Write a comment...' className={styles.commentField} />
                            <button className={styles.button}>Comment</button>
                        </div>
                    ) :
                    (
                        <Link href='/login'>Login to write a comment</Link>
                    )
            }
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src='/p1.jpeg' alt='' width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Arijit Roy</span>
                            <span className={styles.date}>12.10.2024</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quam ratione animi laborum illo culpa reprehenderit suscipit sint inventore non a iste at. Itaque, nulla cumque! Nulla obcaecati illo quisquam?
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src='/p1.jpeg' alt='' width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Arijit Roy</span>
                            <span className={styles.date}>12.10.2024</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quam ratione animi laborum illo culpa reprehenderit suscipit sint inventore non a iste at. Itaque, nulla cumque! Nulla obcaecati illo quisquam?
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src='/p1.jpeg' alt='' width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Arijit Roy</span>
                            <span className={styles.date}>12.10.2024</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quam ratione animi laborum illo culpa reprehenderit suscipit sint inventore non a iste at. Itaque, nulla cumque! Nulla obcaecati illo quisquam?
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src='/p1.jpeg' alt='' width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Arijit Roy</span>
                            <span className={styles.date}>12.10.2024</span>
                        </div>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quam ratione animi laborum illo culpa reprehenderit suscipit sint inventore non a iste at. Itaque, nulla cumque! Nulla obcaecati illo quisquam?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comments