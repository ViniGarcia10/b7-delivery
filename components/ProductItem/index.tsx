import Image from "next/image";
import Link from "next/link";
import { Product } from "../../@types/Product";
import { useAppContext } from "../../context/app";
import { useFormatter } from "../../libs/useFormatter";
import BurguerImg from "../../public/tmp/burguer-01.png";
import styles from "./styles.module.css";

type PropsItemProduct = {
  data: Product;
};

export const ProductItem = ({ data }: PropsItemProduct) => {
  const primaryColor = useAppContext().tenant?.mainColor;
  const secundaryColor = useAppContext().tenant?.secundColor;
  const slug = useAppContext().tenant?.slug;
  const Formatter = useFormatter();

  return (
    <Link
      href={`/${slug}/product/${data.id}`}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.container} key={data.id}>
        <div
          className={styles.head}
          style={{
            background: secundaryColor,
          }}
        />
        <div className={styles.description}>
          <Image
            className={styles.imgBurguer}
            src={BurguerImg}
            priority
            alt="burguer"
          />
          <h3 className={styles.type}>{data.categoryName}</h3>
          <p className={styles.name}>
            {Formatter.formatDescriptionCameOnCase(data.name)}
          </p>
          <span
            className={styles.price}
            style={{
              color: primaryColor,
            }}
          >
            {Formatter.formatPrice(data.price)}
          </span>
        </div>
      </div>
    </Link>
  );
};
