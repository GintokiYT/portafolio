import { UPDATE_THEME, UPDATE_MENU } from './types';

export default (state, action) => {
  
  const { type, payload } = action;

  switch(type) {
    case UPDATE_THEME:
      if(payload === 'dark') {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
      return {
        ...state,
        theme: payload === 'dark' ? 'light' : 'dark'
      }
    case UPDATE_MENU:
      return {
        ...state,
        menu: payload === 'close' ? 'open' : 'close'
      }
  }
}