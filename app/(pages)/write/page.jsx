import React from 'react';
import styles from './write.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Write a Post</div>
        <div className={styles.form}>
          <select className={styles.select}>
            <option value=''>--Choose Category--</option>
            <option value="style">style</option>
            <option value="fashion">fashion</option>
            <option value="food">food</option>
            <option value="culture">culture</option>
            <option value="travel">travel</option>
            <option value="coding">coding</option>
          </select>
          <input className={styles.title_input} type='text' placeholder='Title' />
          <textarea className={styles.details_input} type='text' rows='20' cols='30' placeholder='Details' />
        </div>
        <div className={styles.upload}>
          <input
            type="file"
            id="image"
            // onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
          />
          <button className={styles.upload_button}>
            <label htmlFor="image" style={{ cursor: 'pointer' }}>
              {/* <Image src="/image.png" alt="" width={16} height={16} /> */}
              Upload
            </label>
          </button>
        </div>
        <div>
          <button type='button' className={styles.button}>Publish</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage