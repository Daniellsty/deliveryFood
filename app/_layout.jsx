import StackNavigation from '../navigation/StackNavigation';
import { Provider } from 'react-redux'
import {store} from '../redux/store';
const _layout = () => {
  return (
    <Provider store={store} >
      <StackNavigation/>
    </Provider>
  )
}

export default _layout;