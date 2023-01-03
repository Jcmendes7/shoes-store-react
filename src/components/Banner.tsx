import banner1 from '../images/banner1.svg'
import styles from './Banner.module.css'
export function Banner() {
  return (
    <section className={styles.banner}>
      <img src={banner1} alt="banner shoes store" />
    </section>
  )
}