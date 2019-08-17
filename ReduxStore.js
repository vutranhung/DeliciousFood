import {createStore} from 'redux'
const rootReducer=(state,action)=>{
    switch(action.type){
         case 'token':
         return {
             ...state,
             token:action.token
         }
         default:
          return {...state}
    }
}



export default reduxStore=createStore(rootReducer,{})