import { useEffect, useState } from "react";
import { useAppContext } from "../../context/app";
import { useFormatter } from "../../libs/useFormatter";
import styles from "./styles.module.css";

type PropsCounter = {
  small?: boolean;
  onUpdateCount: (newCounter: number) => void;
  max?: number;
  min: number;
  count: number;
};

export const Counter = ({
  min,
  max,
  count,
  onUpdateCount,
  small,
}: PropsCounter) => {
  const { tenant, setTenant } = useAppContext();
  const [canRemove, setCanRemove] = useState(false);
  const [canAdd, setCanAdd] = useState(false);
  const formatter = useFormatter();

  useEffect(() => {
    setCanRemove(!min || (min && count > min) ? true : false);
    setCanAdd(!max || (max && count < max) ? true : false);
  }, [count, max, min]);

  const handleRemove = () => {
    if (canRemove) onUpdateCount(count - 1);
  };

  const handleAdd = () => {
    if (canAdd) onUpdateCount(count + 1);
  };

  return (
    <div className={styles.comboBoxOptions}>
      <div
        className={styles.btnMinus}
        style={{
          width: small ? "42px" : "",
          height: small ? "42px" : "",
          background: !canRemove ? "#f2f4f5" : tenant?.mainColor,
          color: !canRemove ? "" : "var(--white-color)",
        }}
        onClick={handleRemove}
      >
        -
      </div>
      <div
        className={styles.displayBtn}
        style={{
          color: tenant?.mainColor,
          width: small ? "42px" : "",
          height: small ? "42px" : "",
          fontSize: small ? "16px" : "18px",
        }}
      >
        {formatter.formatQuantity(count, 2)}
      </div>
      <div
        className={styles.btnPlus}
        style={{
          width: small ? "42px" : "",
          height: small ? "42px" : "",
          background: !canAdd ? "#f2f4f5" : tenant?.mainColor,
          color: !canAdd ? "" : "var(--white-color)",
        }}
        onClick={handleAdd}
      >
        +
      </div>
    </div>
  );
};
