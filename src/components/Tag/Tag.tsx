import styles from "./Tag.module.scss";

interface TagProps {
  children: string;
  to: string;
}

export const Tag = ({ children, to }: TagProps) => {
  return (
    <a href={to} className={styles.tag}>
      {children}
    </a>
  );
};
