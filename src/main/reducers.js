/**
|--------------------------------------------------
| Import modules
|--------------------------------------------------
*/
import { combineReducers } from 'redux';

/**
|--------------------------------------------------
| Import components
|--------------------------------------------------
*/
import DashboardReducer from '../dashboard/dashboardReducer';


const rootReducer = combineReducers({
  dashboard: DashboardReducer
});
export default rootReducer;