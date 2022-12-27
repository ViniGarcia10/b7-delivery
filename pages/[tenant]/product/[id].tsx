import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "../../../@types/Product";
import { Tenant } from "../../../@types/Tenant";
import { Button } from "../../../components/Button";
import { Counter } from "../../../components/Counter";
import { Divider } from "../../../components/Divider";
import { Header } from "../../../components/Header";
import { useAppContext } from "../../../context/app";
import { _useApi } from "../../../libs/hooks/useApi";
import { useFormatter } from "../../../libs/useFormatter";
import styles from "../../../styles/Product.module.css";

type PropsTenant = {
  tenantInfo: Tenant;
  product: Product;
};

function Home({ tenantInfo, product }: PropsTenant) {
  const { tenant, setTenant } = useAppContext();
  const [quantProduct, setquantProduct] = useState(1);
  const FormatPrice = useFormatter().formatPrice;

  useEffect(() => {
    if (tenant != tenantInfo) {
      setTenant(tenantInfo);
    }
  }, [setTenant, tenant, tenantInfo]);

  const handleQtCount = (newCount: number) => {
    setquantProduct(newCount);
  };

  return (
    tenant && (
      <div className={styles.container}>
        <Head>
          <title>
            {product.name} | {tenant.name}
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.headerArea}>
          <Header
            href={`/${tenant.slug}`}
            title={"Produto"}
            bgColor={"var(--transparent)"}
            color={"var(--white-color)"}
            like={product.like}
            outline
          />
        </div>
        <div
          className={styles.headerBg}
          style={{ backgroundColor: tenant.mainColor }}
        ></div>
        <div className={styles.productImage}>
          <Image
            src={product.image}
            alt={product.name}
            priority
            width={319}
            height={282}
          />
        </div>

        <div className={styles.containerDescription}>
          <div className={styles.category}>{product.categoryName}</div>
          <div className={styles.nameProd}>{product.name}</div>
          <Divider size="61%" full start />
          <div className={styles.description}>{product.description}</div>
          <div className={styles.quantDesc}>Quantidade</div>
          <div className={styles.comboBox}>
            <Counter
              count={quantProduct}
              min={1}
              onUpdateCount={handleQtCount}
              small
            />
            <div
              className={styles.priceDisplay}
              style={{ color: tenant.mainColor }}
            >
              {FormatPrice(product.price)}
            </div>
          </div>
        </div>
        <Button label="Adicionar à sacola" onClick={() => {}} top="50px" />
      </div>
    )
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { tenant: tenantSlug, id } = await ctx.query;
  const api = _useApi(tenantSlug as string);

  const tenantInfo = await api.getTenant();

  if (!tenantInfo) {
    return { redirect: { destination: "/", permanent: false } };
  }

  const product = await api.getProduct(id as string);

  return {
    props: {
      tenantInfo,
      product,
    },
  };
};
