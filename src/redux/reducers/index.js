import { combineReducers } from 'redux'
import Authentication from './authentication'
import {DatabaseManage} from './dbreducer'
import{AddSchoolEventsManage} from './eventreducer'
const RootReducer= combineReducers({
    Authentication,
    DatabaseManage,
    AddSchoolEventsManage,
})

export default RootReducer;