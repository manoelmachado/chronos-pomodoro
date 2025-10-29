import './styles/theme.css'
import './styles/global.css'

import { Heading } from './components/Heading';

function App() {
  console.log("Oi!");

  return (
    <div>
      <Heading attr={123} attr2='String'>Olá, mundo! 1</Heading>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente aut
        nam eligendi, ipsam blanditiis, facilis numquam molestiae
        exercitationem, at minima delectus debitis doloremque dolorum rem
        provident fugiat earum laboriosam perferendis.
      </p>
    </div>
  );
}

export { App };
