import { classNames } from "../../utils/classNames";
import styles from "./Heading.module.scss";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: "h1" | "h2" | "h3" | "h4" | "h5";
}

const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const Heading = level;

  return (
    <Heading className={classNames(styles[level], className!)}>
      {children}
    </Heading>
  );
};

export default Heading;
