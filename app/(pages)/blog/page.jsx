import React from 'react'
import styles from './blog.module.css';
import CardList from '../../components/card_list/CardList';
import Menu from '../../components/menu/Menu';

const BlogPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Styles</h1>
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage