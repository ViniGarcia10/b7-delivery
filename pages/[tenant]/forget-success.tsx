import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Tenant } from "../../@types/Tenant";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { useAppContext } from "../../context/app";
import { _useApi } from "../../libs/hooks/useApi";
import styles from "../../styles/ForgetSuccess.module.css";

type PropsTenant = {
  tenantInfo: Tenant;
};

function ForgetSuccess({ tenantInfo }: PropsTenant) {
  const { tenant, setTenant } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (tenant != tenantInfo) {
      setTenant(tenantInfo);
    }
  }, [setTenant, tenant, tenantInfo]);

  return (
    tenant && (
      <div className={styles.container}>
        <Head>
          <title>Esqueci a senha | {tenant?.slug} </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header href={`/${tenant?.slug}/login`} />

        <div className={styles.title}>
          <svg
            width="100"
            height="83"
            viewBox="0 0 100 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M99.9167 77.8651C99.9084 79.0579 99.4312 80.1995 98.5882 81.0433C97.7452 81.8871 96.6041 82.3655 95.4113 82.375H13.5887C12.3934 82.3738 11.2474 81.8981 10.4026 81.0525C9.55786 80.2068 9.08333 79.0604 9.08333 77.8651V73.2917H90.8333V20.1542L54.5 52.8542L9.08333 11.9792V5.16667C9.08333 3.96214 9.56183 2.80695 10.4136 1.95522C11.2653 1.1035 12.4205 0.625 13.625 0.625H95.375C96.5795 0.625 97.7347 1.1035 98.5865 1.95522C99.4382 2.80695 99.9167 3.96214 99.9167 5.16667V77.8651ZM20.1378 9.70833L54.5 40.6371L88.8623 9.70833H20.1378ZM0 55.125H36.3333V64.2083H0V55.125ZM0 32.4167H22.7083V41.5H0V32.4167Z"
              fill={tenant.mainColor}
            />
          </svg>
        </div>

        <div className={styles.title2}>Esqueceu sua senha?</div>

        <div className={styles.subTitleContainer}>
          <p className={styles.subTitle}>
            Enviamos as instruções para
            <br /> recuperação de senha para o seu
            <br /> e-mail.
          </p>
        </div>

        <Button
          label="Login"
          onClick={() => {
            router.push(`/${tenant.slug}/login`);
          }}
        />
      </div>
    )
  );
}

export default ForgetSuccess;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { tenant: tenantSlug } = ctx.query;
  const api = _useApi(tenantSlug as string);

  const tenantInfo = await api.getTenant();

  if (!tenantInfo) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return {
    props: {
      tenantInfo,
    },
  };
};
