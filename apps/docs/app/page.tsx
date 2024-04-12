import { Text } from "@volatile-ds/text";
import styles from "./page.module.css";
import { ThemeWrapper } from "@volatile-ds/theme-wrapper";
import { ButtonBase } from "@volatile-ds/button";
import themes from "./themes.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeWrapper theme={themes.themeRed}>
        <Text>Red</Text>
        <ButtonBase>Meow</ButtonBase>

        <ThemeWrapper theme={themes.themeGreen}>
          <Text>Green</Text>

          <ThemeWrapper theme={themes.themeYellow}>
            <Text>Yellow</Text>
          </ThemeWrapper>
        </ThemeWrapper>
      </ThemeWrapper>
    </main>
  );
}
