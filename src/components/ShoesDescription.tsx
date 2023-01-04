import shoeImgShoeWhite from "../images/scarpin-branco.svg";
import styles from "./ShoesDescription.module.css";
interface ShoesProps {
  shoeImg:string;
  name: string;
  price: Number;
}
export function ShoesDescription(props: ShoesProps) {
  console.log(props.name)
  return (
    <div>
      <div className={styles.shoeBox}>
        <img src={shoeImgShoeWhite} alt="" />
        <div className={styles.shoeDescription}>
          <p>SCARPIN SALTO FINO BÁSICO</p>
          <span>R$ 140.00</span>
        </div>
      </div>
    </div>
  );
}
