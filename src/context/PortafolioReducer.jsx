import { UPDATE_THEME, UPDATE_MENU } from './types';

export default (state, action) => {
  const { payload, type } = action;

  switch(type) {
    case UPDATE_THEME:
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark'
      }
    case UPDATE_MENU:
      return {
        ...state,
        menu: state.menu === 'close'? 'open' : 'close'
      }
  }
}