import App from './App';
import Navigator from './routes/draw';
import { Provider } from 'react-redux'
import LoginStore from './store/index'


export default function Main(){
    return(
        <Provider store={LoginStore}>
          <Navigator />
        </Provider>
    )
}