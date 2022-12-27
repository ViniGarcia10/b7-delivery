import { useAppContext } from "../../context/app";
import styles from "./styles.module.css";

type PropsField = {
  onClick: (e: any) => void;
  label: string;
  outline?: boolean;
  top?: string;
  bottom?: string;
  pd?:string;
};

export const Button = ({
  onClick,
  label,
  outline,
  top,
  bottom,
  pd
}: PropsField) => {
  const { tenant } = useAppContext();

  return (
    <div
      onClick={onClick}
      className={styles.container}
      style={{
        border: `1px solid ${tenant?.mainColor}`,
        background: outline ? "var(--transparent)" : tenant?.mainColor,
        marginTop: top,
        marginBottom: bottom,
        padding: pd,
      }}
    >
      <p
        className={styles.label}
        style={{ color: outline ? tenant?.mainColor : "var(--white-color)" }}
      >
        {label}
      </p>
    </div>
  );
};
