import { combineReducers } from 'redux';
import recommendHisWord from './recommendHisWord';
import selectedHisWord from './selectedHisWord';

const hisWord = combineReducers({ recommendHisWord, selectedHisWord });

export default combineReducers({ hisWord });
