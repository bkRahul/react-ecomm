import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducer'
import rootSaga from './root-saga'

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null || compose

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

process.env.NODE_ENV === 'development' && middlewares.push(logger)

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares)),
)

//add individual saga
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
