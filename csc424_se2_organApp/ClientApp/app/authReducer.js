import {SET_CURRENT_USER,CLEAR_USER} from './authActions';
import { fromJS } from "immutable";

export const initialAuthState =fromJS({
    isAuthenticated: false,
    user:{} //{name,role,expiredtime, if(role=client) patientType}

  });
  
export default function(state = initialAuthState, action){
      switch(action.type){
          case SET_CURRENT_USER:{  
            let is;
              if(Object.keys(action.payload).length > 0)
                is = true;
              else
                is = false;
              let newState = {isAuthenticated:is,user:action.payload}
              return state.merge(newState);
            }
            case CLEAR_USER:{
                return state.merge(initialAuthState.toJS());
            }
          default:
              return state;
      }
  }
  