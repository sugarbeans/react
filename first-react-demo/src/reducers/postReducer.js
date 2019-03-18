//reducer的作用: 返回新的状态
import {FETCH_POSTS} from '../actions/types'
const initialState = {
  items: []
}
export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS: 
     return { ...state,
     items: action.payload
    }
    default: 
    return state;
  }
}