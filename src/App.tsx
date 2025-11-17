import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";
import { useState } from "react";

export function App() {
  //sempre que usar useState, não usaremos atribuição diretamente (tipo const numero = 1)
  //const [numero, setNumero] = useState(0)
  //lazy initialization, podemos utilizar uma função para inicializar
  //o valor para fazer calculos mais pesados, mas ela fará somente esse calculo uma única vez
  const [numero, setNumero] = useState(() => {
    return 0;
  });

  function handleClick() {
    //quando dependemos do valor anterior, podemos usar a função (prevState) =>
    //ela armazena o estado do valor anterior
    //ao fazer isso, o react executará imediatamente todas as vezes que ela for chamada
    setNumero((prevState) => prevState + 1);
  }

  return (
    <>
      <Heading>Numero: {numero}</Heading>
      <button onClick={handleClick}>Aumenta número</button>

      <Container>
        <Logo></Logo>
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              id="meuInput"
              type="text"
              labelText={numero.toString()}
              placeholder="Digite algo"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
