import React from 'react'
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1>
        <b>Daily Hunt</b> discovers incretiable things and creative ideas.;
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src='/p1.jpeg' alt='' fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quod vitae deserunt ea, repellat quo nam vel veniam id ut</h1>
          <p className={styles.postDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus, quo modi illo totam, mollitia quia sunt impedit unde doloribus nemo porro dolores magnam culpa, earum laborum tempore? Obcaecati, quidem!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured;