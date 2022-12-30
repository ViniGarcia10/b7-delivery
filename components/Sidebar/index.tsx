import Link from "next/link";
import { useAppContext } from "../../context/app";
import { useAuthContext } from "../../context/auth";
import { Divider } from "../Divider";
import { Header } from "../Header";
import { Icon } from "../Icon";
import styles from "./styles.module.css";

export const Sidebar = () => {
  const { user, setToken } = useAuthContext();
  const { tenant, setSidebar } = useAppContext();

  const handleLogout = () => {
    setToken('');
    setSidebar(false);
  };

  return (
    <div className={styles.container}>
      <Header
        href=""
        title={user?.user}
        subTitle="Ultimo pedido há 2 semanas"
        bgColor="var(--transparent)"
        leftSide={false}
        sidebar
      />

      <Divider mb={48} mt={48} size="60%" />

      <div className={styles.containerItems}>
        <div className={styles.list}>
          <Link href={`/${tenant?.slug}/menu`}>
            <div className={styles.listItem}>
              <Icon name="menuFood" /> Cardápio
            </div>
          </Link>
          <Link href={`/${tenant?.slug}/cart`}>
            <div className={styles.listItem}>
              <Icon name="bag" /> Sacola
            </div>
          </Link>
          <Link href={`/${tenant?.slug}/favorite`}>
            <div className={styles.listItem}>
              <Icon name="favorite" /> Favoritos
            </div>
          </Link>
          <Link href={`/${tenant?.slug}/requests`}>
            <div className={styles.listItem}>
              <Icon name="request" /> Meus Pedidos
            </div>
          </Link>
          <Link href={`/${tenant?.slug}/configure`}>
            <div className={styles.listItem}>
              <Icon name="configure" /> Configurações
            </div>
          </Link>
        </div>

        {!!user ? (
          <div className={styles.exit} onClick={handleLogout}>
            <Icon name="exit" /> Sair
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
