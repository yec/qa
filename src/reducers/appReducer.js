const initialState = {
  menuOpen: false
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'MENU_TOGGLE':
      return { ...state, menuOpen: !state.menuOpen }
    case 'MENU_CLOSE':
      return { ...state, menuOpen: false }
    default:
      return state;
  }
}
