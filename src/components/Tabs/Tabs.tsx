import * as TabsRadix from "@radix-ui/react-tabs";
import Image from "../../assets/rectangle-471.webp";
import styles from "./Tabs.module.scss";
import Heading from "../Heading/Heading";

export const Tabs = () => (
  <TabsRadix.Root className={styles.tabs} defaultValue="tab1">
    <nav className={styles["tabs__nav"]}>
      <Heading level="h2">Lorem ipsum dolor sit amet</Heading>
      <TabsRadix.List
        className={styles["tabs__list"]}
        aria-label="Lorem ipsum dolor sit amet"
      >
        <TabsRadix.Trigger className={styles.button} value="tab1">
          Lorem ipsum
        </TabsRadix.Trigger>
        <TabsRadix.Trigger className={styles.button} value="tab2">
          Lorem ipsum
        </TabsRadix.Trigger>
        <TabsRadix.Trigger className={styles.button} value="tab3">
          Lorem ipsum
        </TabsRadix.Trigger>
      </TabsRadix.List>
    </nav>
    <TabsRadix.Content className={styles["tabs__content"]} value="tab1">
      <img
        src={Image}
        alt="A laptop turned on half open"
        width="790"
        height="411"
        className={styles.img}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet tortor
        diam habitasse tristique morbi tempus. Auctor semper diam dignissim
        turpis nisl ultricies tellus mi. Metus.
      </p>
    </TabsRadix.Content>
    <TabsRadix.Content className={styles["tabs__content"]} value="tab2">
      <img
        src={Image}
        alt="A laptop turned on half open"
        width="790"
        height="411"
        className={styles.img}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet tortor
        diam habitasse tristique morbi tempus. Auctor semper diam dignissim
        turpis nisl ultricies tellus mi. Metus.
      </p>
    </TabsRadix.Content>
    <TabsRadix.Content className={styles["tabs__content"]} value="tab3">
      <img
        src={Image}
        alt="A laptop turned on half open"
        width="790"
        height="411"
        className={styles.img}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet tortor
        diam habitasse tristique morbi tempus. Auctor semper diam dignissim
        turpis nisl ultricies tellus mi. Metus.
      </p>
    </TabsRadix.Content>
  </TabsRadix.Root>
);
