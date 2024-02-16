import { Text } from "@volatile-ds/text";
import styles from "./page.module.css";
import { ThemeWrapper } from "@volatile-ds/theme-wrapper";

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeWrapper theme={{ textBodyColor: "#FF0000" }}>
        <Text>Red</Text>
      </ThemeWrapper>

      <ThemeWrapper theme={{ textBodyColor: "#00FF00" }}>
        <Text>Green</Text>

        <ThemeWrapper theme={{ textBodyColor: "#FFFF00" }}>
          <Text>Yellow</Text>
        </ThemeWrapper>
      </ThemeWrapper>
    </main>
  );
}
