import styles from "./styles.module.css";
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useState, useEffect } from "react";

type AvaliableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useEffect<AvaliableThemes>("dark");

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault(); //não segue o link, não segue a ação padrão de ir para o link

    console.log("Clicado", Date.now());

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });

    //document.documentElement.setAttribute("data-theme", theme);
    //esse é um efeito colateral, o react não está monitorando isso, deveremos usar o useEffect
  }

  useEffect(() => {
    console.log("useEffect sem dependências", Date.now());
  });
  //executado toda vez que o componente renderiza na tela

  //  useEffect(() => {
  //  console.log("", Date.now());
  //}, []);

  //  useEffect(() => {
  //  console.log("", Date.now());
  //}, [theme]);
  //useEffect com array de dependências

  return (
    <nav className={`${styles.menu}`}>
      <h1>{theme}</h1>
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
