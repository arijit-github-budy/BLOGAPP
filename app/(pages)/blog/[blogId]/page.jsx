import React from 'react'
import styles from './singleBlog.module.css';
import Menu from '../../../components/menu/Menu';
import Comments from '../../../components/comments/Comments';
import Image from 'next/image';

const SingleBlog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum pariatur culpa dicta facere nisi esse deserunt </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src='/p1.jpeg' alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Arijit Roy</span>
                            <span className={styles.date}>10.12.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt='' fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, at error. Obcaecati distinctio officiis ipsa beatae nisi ut dignissimos quas molestias aspernatur? Quis temporibus accusantium, mollitia voluptates ratione cumque dignissimos.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, at error. Obcaecati distinctio officiis ipsa beatae nisi ut dignissimos quas molestias aspernatur? Quis temporibus accusantium, mollitia voluptates ratione cumque dignissimos.</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SingleBlog