/**
|--------------------------------------------------
| Import modules
|--------------------------------------------------
*/
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

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
  billingCycle: BillingCycleReducer,
  form: formReducer
});
export default rootReducer;