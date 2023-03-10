/* eslint-disable react-hooks/exhaustive-deps */
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Product } from "../../@types/Product";
import { Tenant } from "../../@types/Tenant";
import { User } from "../../@types/User";
import { Banner } from "../../components/banner";
import { Icon } from "../../components/Icon";
import { ProductItem } from "../../components/ProductItem";
import { SearchInput } from "../../components/SearchInput";
import { Sidebar } from "../../components/Sidebar";
import { useAppContext } from "../../context/app";
import { useAuthContext } from "../../context/auth";
import { _useApi } from "../../libs/hooks/useApi";
import styles from "../../styles/Home.module.css";

type PropsTenant = {
  tenantInfo: Tenant;
  products: Product[];
  tokenInfo: string;
  userInfo: User | null;
};

function Home({ tenantInfo, products, tokenInfo, userInfo }: PropsTenant) {
  const { tenant, sidebar, setTenant, setSidebar } = useAppContext();
  const { setToken, setUser, token, user } = useAuthContext();
  const [listProducts, setListProducts] = useState<Product[]>(products);
  const [filtredProducts, setFiltredProducts] = useState<Product[]>([]);
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    setTenant(tenantInfo);
    setToken(tokenInfo);

    if (userInfo) return setUser(userInfo);
  }, []);

  const handleSearch = (value: string) => {
    setValueSearch(value);

    let newFiltredProducts = listProducts.filter((item) =>
      item.name.includes(value.toUpperCase())
    );

    if (value == "") return setFiltredProducts([]);

    setFiltredProducts(newFiltredProducts);
  };

  return (
    tenant && (
      <div className={styles.container}>
        <Head>
          <title>Pagina Inicial</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.headerTopLeft}>
              <div className={styles.headerTitle}>Seja Bem Vindo (a) ???? </div>
              <div className={styles.headerSubTitle}>
                O que deseja para hoje?
              </div>
            </div>
            <div
              className={styles.headerTopRight}
              onClick={() => {
                setSidebar(true);
              }}
            >
              <div className={styles.menuButton}>
                <div
                  className={styles.menuButtonLine}
                  style={{
                    background: tenant?.mainColor,
                  }}
                ></div>
                <div
                  className={styles.menuButtonLine}
                  style={{
                    background: tenant?.mainColor,
                  }}
                ></div>
                <div
                  className={styles.menuButtonLine}
                  style={{
                    background: tenant?.mainColor,
                  }}
                ></div>
              </div>
            </div>
            {sidebar && <Sidebar />}
          </div>
          <div className={styles.headerBottom}>
            <SearchInput onSearch={handleSearch} />
          </div>
        </header>
        <main>
          {valueSearch == "" && (
            <>
              <Banner />
              <div className={styles.grid}>
                {listProducts.map((item, index) => (
                  <ProductItem key={index} data={item} />
                ))}
              </div>
            </>
          )}

          {valueSearch != "" && filtredProducts.length <= 0 ? (
            <>
              <div className={styles.descSearchResult}>
                Procurando por: <strong>{valueSearch}</strong>
              </div>
              <div className={styles.containerResult}>
                <Icon name="notIcons" color={tenant?.secundColor} />
                <h2>Ops! N??o h?? itens <br/> com este nome</h2>
              </div>
            </>
          ) : (
            <div className={styles.grid}>
              {filtredProducts.map((item, index) => (
                <ProductItem key={index} data={item} />
              ))}
            </div>
          )}
        </main>
      </div>
    )
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { tenant: tenantSlug } = ctx.query;
  const api = _useApi(tenantSlug as string);

  //get tenant
  const tenantInfo = await api.getTenant();

  if (!tenantInfo) {
    return { redirect: { destination: "/", permanent: false } };
  }

  //get Cookie
  // const token = ctx.req.cookies.token
  const tokenInfo = ctx.req.cookies?.token;

  const userInfo = await api.authorizeToken(tokenInfo as string);

  //get All Products
  const products = await api.getAllProducts();

  return {
    props: {
      tenantInfo,
      products,
      tokenInfo,
      userInfo,
    },
  };
};
