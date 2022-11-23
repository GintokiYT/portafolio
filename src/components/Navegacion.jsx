import { useContext } from 'react';

import { ContainerHeader, ContainerNav, Title, ButtonMenu, MenuItems } from '../styles/Navegacion.elements';
import { Container } from '../styles/Components.elements';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import PortafolioContext from '../context/PortafolioContext';

const Navegacion = () => {

  const { menu, changeMenu } = useContext(PortafolioContext);

  return (  
    <ContainerHeader>
      <Container>
        <ContainerNav>
          <Title>Renato Navarro</Title>
          <ButtonMenu
            onClick={ () => changeMenu(menu) }
          >
            { menu === 'close'
              ? <AiOutlineMenu /> 
              : <AiOutlineClose />
            }
          </ButtonMenu>
          <MenuItems
            initial={{ x: '100vw' }}
            animate={{ x: menu === 'close'? '100vw' : 0 }}
            transition={{ duration: .5 }}
          >
            <li>
              <a 
                href="#inicio"
                onClick={ () => changeMenu(menu) }
              >Inicio</a>
            </li>
            <li>
              <a 
                href="#sobreMi"
                onClick={ () => changeMenu(menu) }
              >Sobre mí</a>
            </li>
            <li>
              <a 
                href="#proyectos"
                onClick={ () => changeMenu(menu) }
              >Proyectos</a>
            </li>
            <li>
              <a 
                href="#contacto"
                onClick={ () => changeMenu(menu) }
              >Contacto</a>
            </li>
          </MenuItems>
        </ContainerNav>
      </Container>
    </ContainerHeader>
  );
}
 
export default Navegacion;