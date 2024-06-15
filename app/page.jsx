import styles from './homepage.module.css';
import Featured from './components/featured/Featured';
import CategoryList from './components/category_list/CategoryList';
import CardList from './components/card_list/CardList';
import Menu from './components/menu/Menu';

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}