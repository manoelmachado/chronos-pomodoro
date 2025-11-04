import styles from "./styles.module.css";

export function CountDown() {
  /*desestruturação do props.children do js*/
  return <div className={`${styles.container}`}>00:00</div>;
}
