import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Globalstyles from '../theme/globalstyles';
import { DarkTheme, LightTheme } from '../theme/theme';

import PortafolioContext from '../context/PortafolioContext';

// Components
import Navegacion from '../components/Navegacion';
import Hero from '../components/Hero';
import About from '../components/About';
import Proyectos from '../components/Proyectos';
import ToggleMenu from '../components/ToggleMenu';

const Home = () => {

  const { theme } = useContext(PortafolioContext);

  return (  
    <ThemeProvider theme={theme === 'dark'? DarkTheme : LightTheme}>
      <Globalstyles />
      {/* Encabezado */}
      <Navegacion />
      {/* Hero */}
      <section id='inicio'>
        <Hero />
      </section>
      {/* Sobre mí */}
      <section id='sobreMi'>
        <About />
      </section>
      {/* Proyectos */}
      <section id='proyectos'>
        <Proyectos />
      </section>
      {/* Contacto */}
      <section id='contacto'>
        <h2>Contacto</h2>
      </section>
      {/* Footer */}
      <footer>
        <h2>Footer</h2>
      </footer>
      {/* Toogle Theme */}
      <ToggleMenu />
    </ThemeProvider>
  );
}
 
export default Home;