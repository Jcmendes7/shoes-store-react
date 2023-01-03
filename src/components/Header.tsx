import logoShoesStore from '../assets/shoes-logo.svg'
import styles from './Header.module.css'
export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logoShoesStore} alt="logo shoes store" />
      </div>
      <nav>
        <ul className={styles.navLink}>
          <li><a href="#">TODOS OS PRODUTOS</a></li>
          <li><a href="#">COLEÇÕES</a></li>
          <li><a href="#">OUTLET</a></li>
        </ul>
      </nav>
    </header>
  )
}