import styles from "./Main.module.scss";

interface MainProps {
  children: string | JSX.Element;
}

export const Main = ({ children }: MainProps) => {
  return <main className={styles.main}>{children}</main>;
};
