import styles from "./Heading.module.css";

type HeadingProps = {
  children: React.ReactNode; /*ReactNode faz com que aceite tudo que o React considere como children*/
};

export function Heading({ children } : HeadingProps) { /*desestruturação do props.children do js*/
  return <h1 className={`${styles.heading}`}>{children}</h1>;
}
