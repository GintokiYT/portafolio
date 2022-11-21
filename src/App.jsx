import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Globalstyles from './theme/globalstyles';
import { DarkTheme, LightTheme } from './theme/theme';

// Components 
import Navegacion from './components/Navegacion';

const App = () => {

  const themaActual = localStorage.getItem('theme') || 'dark';

  const [ theme, setTheme ] = useState(themaActual);

  const changeTheme = () => {
    if(theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }

  return (  
    <ThemeProvider theme={theme === 'dark'? DarkTheme : LightTheme}>
      <Globalstyles />
      <Navegacion />
      {/* <img 
        src="./assets/images/menu.webp" 
        alt="" 
        style={{
          filter: 'brightness(0)'
        }}
      /> */}
    </ThemeProvider>
  );
}
 
export default App;