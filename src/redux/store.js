import { configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { fetchUsers } from './features/employees.thunk.feature';

const store = configureStore({
    reducer: rootReducer,
});
store.dispatch( fetchUsers() );

export default store;