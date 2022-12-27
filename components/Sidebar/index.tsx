import { useAuthContext } from "../../context/auth";
import { Divider } from "../Divider";
import { Header } from "../Header";
import { Icon } from "../Icon";
import styles from "./styles.module.css";

export const Sidebar = () => {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <Header
        href=""
        title="Vinícius Garcia Leão"
        subTitle="Ultimo pedido há 2 semanas"
        bgColor="var(--transparent)"
        leftSide={false}
        sidebar
      />

      <Divider mb={48} mt={48} size="60%" />

      <div className={styles.containerItems}>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <Icon name="menuFood" /> Cardápio
          </div>
          <div className={styles.listItem}>
            <Icon name="bag" /> Sacola
          </div>
          <div className={styles.listItem}>
            <Icon name="favorite" /> Favoritos
          </div>
          <div className={styles.listItem}>
            <Icon name="request" /> Meus Pedidos
          </div>
          <div className={styles.listItem}>
            <Icon name="configure" /> Configurações
          </div>
        </div>

        {true ? (
          <div className={styles.exit}>
            <Icon name="exit" /> Sair
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
