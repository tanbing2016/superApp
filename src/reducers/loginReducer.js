import { NavigationActions } from 'react-navigation';
import Immutable from 'immutable';

let initState={isLogin:false,isLogging:false,user:null,headerimg:''}
export function loginReducer(state=initState,action){
  //console.log('login reducer fsdfsdfs');
  let fromjs=Immutable.fromJS(state);
  switch(action.type){
    case 'login_success':
      fromjs=fromjs.set('isLogging',false).set('isLogin',true).set('user',{});
      return fromjs.toJS();
  }
  return state;
}