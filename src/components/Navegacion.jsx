import { useContext, useState } from 'react';

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
            onClick={ () => changeMenu() }
          >
            { menu === 'close'
              ? <AiOutlineMenu /> 
              : <AiOutlineClose />
            }
          </ButtonMenu>
          <MenuItems
            initial={{
              x: '100vw'
            }}
            animate={{
              x: menu === 'close'? '100vw' : 0
            }}
            transition={{
              duration: 1
            }}
          >
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Sobre mí</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </MenuItems>
        </ContainerNav>
      </Container>
    </ContainerHeader>
  );
}
 
export default Navegacion;