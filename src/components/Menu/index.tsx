import styles from "./styles.module.css";
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useState } from "react";

type AvaliableThemes = 'dark' | 'light'

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>('dark')

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //não segue o link, não segue a ação padrão de ir para o link
  }
  
  return (
    <nav className={`${styles.menu}`}>
      <a className={styles.menuLink} href="#" aria-label="Home" title="Home">
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Histórico"
        title="Histórico"
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Alterar Tema"
        title="Alterar Tema"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
