import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//Reducer

import {cartReudcer} from './reducers/cartReducers'
import {getProductDetail,prodcutReducer} from './reducers/productReducers'

const reducer = combineReducers({
    cart:cartReudcer,
    products:prodcutReducer,
    product:getProductDetail
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store