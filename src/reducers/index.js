import { combineReducers } from 'redux';
import app from './appReducer';

const rootReducer = combineReducers({
  app,
});

export default rootReducer;

export const menuOpenSelector = (state) => {
  return state.app.menuOpen;
};
