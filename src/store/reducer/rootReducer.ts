import { combineReducers } from 'redux'
import reducerFilter from './reducerFilter';
import reducerTicket from './reducerTickets';

export default combineReducers({
    reducerFilter, reducerTicket
})
