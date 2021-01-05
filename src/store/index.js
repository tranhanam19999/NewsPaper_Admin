import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
//import user from './user'
import listarticle from './listarticle'
import listuser from './listuser'
//import listcmt from './listcmt'

const reducer = combineReducers({
    //user,
    listarticle,
    listuser,
    //listcmt,
})

const store = configureStore({
    reducer,
})
export default store