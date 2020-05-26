
import RootReducer from '../reducers/index'
import { createStore, applyMiddleware,compose } from 'redux'
import thunkMiddleware from 'redux-thunk';

const LoginStore=createStore(RootReducer, applyMiddleware(thunkMiddleware) )
 

  LoginStore.subscribe(()=>{
    console.log(LoginStore.getState());
   })


export default LoginStore
