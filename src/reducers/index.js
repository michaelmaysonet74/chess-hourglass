import { combineReducers } from 'redux';
import MatchReducer from './match-reducer';
import CustomMatchReducer from './custom-match-reducer';

export default combineReducers({
  match: MatchReducer,
  customSetup: CustomMatchReducer,
});