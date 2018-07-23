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
import BillingCycleReducer from '../billingCycle/billingCycleReducer';


const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer
});
export default rootReducer;