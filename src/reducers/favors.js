import * as types from 'types'
import { fromJS, setIn } from 'immutable'
import initialState from './initialState'

export default function(state = initialState, action) {
    switch(action.type) {
        case types.GET_FAVORS.SUCCESS:
            let result = state
            const { favors } = action.payload
            result = result.setIn(['listOfFavors'], fromJS(favors))
            return result
        default:
            return state    
    }
}