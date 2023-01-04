import styles from './FindYourStyle.module.css'
import styleBlackBoot from '../images/style-black-boot.svg'
import styleWhiteBoot from '../images/style-white-boot.svg'
export function FindYourStyle() {
  return (
    <section className={styles.styleContainer}>
      <h1>Find Your Style</h1>
      <div className={styles.styleImages}>
        <div className={styles.imgBlackBoot}>
          <img  src={styleBlackBoot} alt="imagem de uma mulher com botas pretas" />
        </div>
        <div className={styles.imgWhiteBoot}>
          <img  src={styleWhiteBoot} alt="imagem de uma mulher com botas brancas" />
        </div>
      </div>
    </section>
  )
}