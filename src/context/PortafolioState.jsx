import { useReducer } from 'react';

import PortafolioReducer from './PortafolioReducer';
import PortafolioContext from './PortafolioContext';

const PortafolioState = (props) => {

  const themaStorage = localStorage.getItem('theme');

  const initialState = {
    theme: themaStorage || 'dark',
    menu: 'close'
  }

  const [ state, dispatch ] = useReducer(PortafolioReducer, initialState);

  const changeTheme = theme => {
    dispatch({
      type: 'UPDATE_THEME',
      payload: theme
    })
  }

  const changeMenu = menu => {
    dispatch({
      type: 'UPDATE_MENU',
      payload: menu
    })
  }

  return (  
    <PortafolioContext.Provider 
      value={{
        theme: state.theme,
        menu: state.menu,
        changeTheme,
        changeMenu
      }}
    >
      {props.children}
    </PortafolioContext.Provider>
  );
}
 
export default PortafolioState;