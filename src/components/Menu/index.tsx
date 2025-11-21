import styles from "./styles.module.css";
import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import { useState, useEffect } from "react";

type AvaliableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvaliableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault(); //não segue o link, não segue a ação padrão de ir para o link

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });

    //document.documentElement.setAttribute("data-theme", theme);
    //esse é um efeito colateral, o react não está monitorando isso, deveremos usar o useEffect
  }

  //useEffect(() => {
  //  console.log("useEffect sem dependências", Date.now());});
  //executado toda vez que o componente renderiza na tela

  //useEffect(() => {
  //  console.log("useEffect com array deps (dependencias) vazio", Date.now());
  //}, []);
  //executa apenas quando o react monta o componente na tela pela primeira vez

  useEffect(() => {
    console.log("theme mudou", theme, Date.now());
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    //função de cleanup para limpar o componente
    //return () => {
    //  console.log("Componente atualizado!");
    //};
  }, [theme]);
  //useEffect com array de dependências só vai executar a função quando o valor da dependência mudar

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
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
