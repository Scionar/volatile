import { Text } from "@volatile-ds/text";
import styles from "./page.module.css";
import { ThemeWrapper } from "@volatile-ds/theme-wrapper";
import { ButtonBase } from "@volatile-ds/button";
import themes from "./themes.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        className={styles.table}
        style={{
          gap: "100px",
        }}
      >
        <div className={styles.row}>
          <h1>CSS variable theme</h1>
        </div>
        <div className={styles.row}>
          <h2>Buttons</h2>
          <div className={styles.columnVertical}>
            <ButtonBase>Default theme</ButtonBase>
            <ButtonBase disabled>Default theme</ButtonBase>
          </div>
          <ThemeWrapper
            className={styles.columnVertical}
            theme={themes.themeDark}
          >
            <ButtonBase>Dark theme</ButtonBase>
            <ButtonBase disabled>Dark theme</ButtonBase>
          </ThemeWrapper>
        </div>
        <div className={styles.row}>
          <h2>Texts</h2>
          <div className={styles.column}>
            <ThemeWrapper theme={themes.themeRed}>
              <Text>Red</Text>

              <ThemeWrapper theme={themes.themeGreen}>
                <Text>Green</Text>

                <ThemeWrapper theme={themes.themeYellow}>
                  <Text>Yellow</Text>
                </ThemeWrapper>
              </ThemeWrapper>
            </ThemeWrapper>
          </div>
        </div>
      </div>
    </main>
  );
}
