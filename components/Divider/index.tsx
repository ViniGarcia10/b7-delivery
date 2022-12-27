import React from "react";
import { useAppContext } from "../../context/app";
import styles from "./styles.module.css";

type PropsDivider = {
  props?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  size?: string;
  full?: boolean;
  start?: boolean;
  mt?: number;
  mb?: number;
};

export const Divider = ({ props, size, full, start, mt, mb }: PropsDivider) => {
  const { tenant } = useAppContext();

  return (
    <div
      className={styles.container}
      {...props}
      style={{
        width: full ? "100%" : "",
        justifyContent: start ? "flex-start" : "",
        marginTop: mt,
        marginBottom: mb,
      }}
    >
      <div
        className={styles.subDivider}
        style={{ background: tenant?.mainColor, width: size }}
      />
    </div>
  );
};
