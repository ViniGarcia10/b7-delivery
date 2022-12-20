import Image from "next/image";
import Link from "next/link";
import { Product } from "../../@types/Product";
import BurguerImg from "../../public/tmp/burguer-01.png";
import styles from "./styles.module.css";

type PropsItemProduct = {
  data: Product;
  primaryColor: string;
  secundaryColor: string;
};

export const ProductItem = ({
  data,
  primaryColor,
  secundaryColor,
}: PropsItemProduct) => {
  return (
    <Link
      href={`/B7burguer/product/${data.id}`}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.container} key={data.id}>
        <div
          className={styles.head}
          style={{
            background: secundaryColor || "var(--secundary-color-default)",
          }}
        />
        <div className={styles.description}>
          <Image className={styles.imgBurguer} src={BurguerImg} alt="burguer" />
          <h3 className={styles.type}>{data.categoryName}</h3>
          <p className={styles.name}>{data.name}</p>
          <span
            className={styles.price}
            style={{
              color: primaryColor || "var(--primary-color-default)",
            }}
          >
            {data.price}
          </span>
        </div>
      </div>
    </Link>
  );
};
