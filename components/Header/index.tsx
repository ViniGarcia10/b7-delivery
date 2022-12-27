import Link from "next/link";
import { useState } from "react";
import { useAppContext } from "../../context/app";
import { useAuthContext } from "../../context/auth";
import { Button } from "../Button";
import { Icon } from "../Icon";
import styles from "./styles.module.css";

type PropsHeader = {
  title?: string;
  subTitle?: string;
  color?: string;
  bgColor?: string;
  outline?: boolean;
  like?: boolean;
  href: string;
  leftSide?: boolean;
  sidebar?: boolean;
};

export const Header = ({
  title,
  subTitle,
  href,
  color,
  bgColor,
  outline,
  like,
  leftSide = true,
  sidebar = false,
}: PropsHeader) => {
  const { setSidebar, tenant } = useAppContext();
  const { user } = useAuthContext();
  const [likeItem, setLikeItem] = useState(like);

  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      {leftSide && (
        <div
          className={styles.leftSide}
          style={{
            background: outline ? "rgba(0,0,0,0.1)" : "var(--transparent)",
          }}
        >
          <Link href={href}>
            <Icon name="arrow" color={color} />
          </Link>
        </div>
      )}

      <div className={styles.centerSide}>
        {!sidebar ? (
          <>
            <div className={styles.title} style={{ color: color }}>
              {title}
            </div>
            <div className={styles.subTitle}>{subTitle}</div>
          </>
        ) : (
          <Link
            href={`/${tenant?.slug}/login`}
            onClick={() => setSidebar(false)}
            style={{textDecoration: 'none'}}
          >
            <Button label="Fazer Login" onClick={() => {}} pd="20px 42px" />
          </Link>
        )}
      </div>

      <div
        className={styles.rightSide}
        style={{
          alignItems: sidebar ? "flex-start" : "center",
          justifyContent: sidebar ? "flex-start" : "",
          background: outline ? "rgba(0,0,0,0.1)" : "var(--transparent)",
        }}
      >
        {sidebar ? (
          <div onClick={() => setSidebar(false)}>
            <Icon name="close" />
          </div>
        ) : (
          <div
            onClick={() => {
              setLikeItem(!likeItem);
            }}
          >
            {!likeItem ? <Icon name="dislike" /> : <Icon name="like" />}
          </div>
        )}
      </div>
    </div>
  );
};
