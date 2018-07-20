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
import TabReducer from '../common/tab/tabReducer';


const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer
});
export default rootReducer;