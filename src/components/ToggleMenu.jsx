import { useContext } from 'react';

import { ContainerToggle, ContenedorButton, ButtonToggle } from '../styles/ToggleMenu.elements';

import PortafolioContext from '../context/PortafolioContext';

const ToggleMenu = () => {

  const { changeTheme, theme } = useContext(PortafolioContext);

  return (  
    <ContainerToggle
      onClick={ () => changeTheme() }
    >
      <img src="./assets/images/moon.webp" alt="moon" />
      <img src="./assets/images/sun.webp" alt="sun" />
      <ContenedorButton
        initial={{
          y: theme === 'dark'? '5px' : '30px'
        }}
        animate={{
          y: theme === 'dark'? '5px' : '30px'
        }}
        transition={{
          duration: .5
        }}
      >
        <ButtonToggle />
      </ContenedorButton>
    </ContainerToggle>
  );
}
 
export default ToggleMenu;