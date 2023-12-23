import styles from "./VisuallyHidden.module.scss";

interface VisuallyHiddenProps {
  children: string;
}

export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return <span className={styles["visually-hidden"]}>{children}</span>;
};
