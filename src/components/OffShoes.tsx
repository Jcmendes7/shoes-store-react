import styles from './OffShoes.module.css'
import scarpinBranco from '../images/scarpin-branco.svg'
import { ShoesDescription } from './ShoesDescription'
const shoes = [
  {
    id: 1,
      shoeImg: scarpinBranco,
      name: "Scarpin Salto fino Básico",
      price: 145.00,
  },
  {
    id: 1,
      shoeImg: scarpinBranco,
      name: "Scarpin Salto fino Básico",
      price: 145.00,
  }
]
export function OffShoes() {
  return (
    <section className={styles.containerOff}>
      <h2>30% OFF</h2>
      <div className={styles.shoes}>
      { shoes.map(shoes => {
        return (
          <ShoesDescription 
            shoeImg={shoes.shoeImg}
            name={shoes.name}
            price={shoes.price}
          />
        )
      })}
      </div>

    </section>
  )
}