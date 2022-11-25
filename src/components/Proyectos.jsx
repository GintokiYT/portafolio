import { Container } from '../styles/Components.elements';
import { ContainerProyectos, Titulo, Proyecto, Contenido } from '../styles/Proyectos.elements';

import { FaChrome, FaGithub } from 'react-icons/fa';

const Proyectos = () => {
  return (  
    <Container>
      <ContainerProyectos>
        <Titulo>Proyectos</Titulo>
        <Proyecto>
          <Contenido>
            <img src="./assets/proyectos/rickandmorty.png" alt="Rick and Morty Proyecto" />
          </Contenido>
          <div className="enlaces">
            <a href="https://enchanting-hotteok-96c5bc.netlify.app" rel='noopener' target='__blank'>
              <FaChrome />
            </a>
            <a href="https://github.com/GintokiYT/rickandmorty" rel='noopener' target='__blank'>
              <FaGithub />
            </a>
          </div>
        </Proyecto>
        <Proyecto>
          <Contenido>
            <img src="./assets/proyectos/declarate.png" alt="Declarate proyecto" />
          </Contenido>
          <div className="enlaces">
            <a href="https://renavcompany.netlify.app" rel='noopener' target='__blank'>
              <FaChrome />
            </a>
            <a href="https://github.com/GintokiYT/Declarate" rel='noopener' target='__blank'>
              <FaGithub />
            </a>
          </div>
        </Proyecto>
        <Proyecto>
          <Contenido>
            <img src="./assets/proyectos/bebidas.png" alt="Bebidas proyecto" />
          </Contenido>
          <div className="enlaces">
            <a href="https://bebidas-react-ren.netlify.app" rel='noopener' target='__blank'>
              <FaChrome />
            </a>
            <a href="https://github.com/GintokiYT/bebidas-react" rel='noopener' target='__blank'>
              <FaGithub />
            </a>
          </div>
        </Proyecto>
        <Proyecto>
          <Contenido>
            <img src="./assets/proyectos/cotizar.png" alt="Cotizador Cripto proyecto" />
          </Contenido>
          <div className="enlaces">
            <a href="https://cotizar-criptomonedas-ren.netlify.app" rel='noopener' target='__blank'>
              <FaChrome />
            </a>
            <a href="https://github.com/GintokiYT/Cotizador-Cripto-API" rel='noopener' target='__blank'>
              <FaGithub />
            </a>
          </div>
        </Proyecto>
        <Proyecto>
          <Contenido>
            <img src="./assets/proyectos/pixabay.png" alt="Pixabay Proyecto" />
          </Contenido>
          <div className="enlaces">
            <a href="https://pixabay-api-ren.netlify.app" rel='noopener' target='__blank'>
              <FaChrome />
            </a>
            <a href="https://github.com/GintokiYT/pixabay-api" rel='noopener' target='__blank'>
              <FaGithub />
            </a>
          </div>
        </Proyecto>
        <Proyecto>
          <Contenido>
            <img src="./assets/proyectos/bootstrap1.png" alt="Bootstrap Proyecto" />
          </Contenido>
          <div className="enlaces">
            <a href="https://agencia-digital-react.netlify.app" rel='noopener' target='__blank'>
              <FaChrome />
            </a>
            <a href="https://github.com/GintokiYT/agencia-digital-react" rel='noopener' target='__blank'>
              <FaGithub />
            </a>
          </div>
        </Proyecto>
      </ContainerProyectos>
    </Container>
  );
}
 
export default Proyectos;